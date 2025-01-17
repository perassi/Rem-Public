"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsTrigger } from "@/components/common/Tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { CheckHeart, User03 } from "@untitled-ui/icons-react";
import ColumnEditMenu from "../../../components/data-table/ColumnEditMenu";
import {
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import DataTable from "@/components/data-table/DataTable";
import getColumns from "@/app/manage/commission/get-columns";
import FilterMenu from "@/components/data-table/FilterMenu";
import { CommissionDatum } from "@/types";
import downloadExcel from "@/utils/exelDownloadReports";

const formatDateToMMDDYY = (date: Date): string => {
  const month = date.getMonth() + 1; // Месяцы начинаются с 0
  const day = date.getDate();
  const year = date.getFullYear() % 100; // Берем последние 2 цифры года
  console.log(`${day}/${month}/${year}`);
  return `${day}/${month}/${year}`;
};

const filterDataByDateRange = (
  data: CommissionDatum[],
  startDate: Date,
  endDate: Date
) => {
  const formattedStartDate = formatDateToMMDDYY(startDate);
  const formattedEndDate = formatDateToMMDDYY(endDate);

  const res = data.filter((item) => {
    if (!item["Disenrollment Date"]) return false;

    return (
      item["Disenrollment Date"] >= formattedStartDate &&
      item["Disenrollment Date"] <= formattedEndDate
    );
  });

  return res;
};

const CommissionPage = () => {
  const [currentTab, setCurrentTab] = useState("members");
  const [data, setData] = useState<CommissionDatum[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedCarriers, setSelectedCarriers] = useState<string[]>([]);
  const [dataFromCsv, setDataFromCsv] = useState<CommissionDatum[]>(data);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [carrierFiltredData, setCarrierFiltredData] = useState<
    CommissionDatum[]
  >([]);
  const [visibleColumnIds, setVisibleColumns] = useState<Set<string>>();

  useEffect(() => {
    const fetchData = async () => {
      // TODO this is using a stubbed out endpoint that return sample data.
      const response = await fetch("/api/commission");
      const json = await response.json();

      setDataFromCsv(json);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCarriers.length) {
      const res = dataFromCsv.filter((item) =>
        selectedCarriers.includes(item.CARRIER)
      );
      setCarrierFiltredData(res);
    } else {
      setCarrierFiltredData(dataFromCsv);
    }
  }, [selectedCarriers, dataFromCsv]);

  useEffect(() => {
    if (startDate && endDate && carrierFiltredData) {
      const res = filterDataByDateRange(carrierFiltredData, startDate, endDate);
      setData(res);
    } else {
      setData(carrierFiltredData);
    }
  }, [carrierFiltredData, startDate, endDate]);

  const uniqueCarriers = Array.from(
    new Set(dataFromCsv.map((item) => item.CARRIER).filter(Boolean))
  );
  const columns = getColumns(currentTab);

  const table = useReactTable<CommissionDatum>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const handleColumnVisibilityChange = (columns: Set<string>) => {
    setVisibleColumns(columns);
  };

  useEffect(() => {
    console.log("[visibleColumnIdssasdasdasdasd]", visibleColumnIds);
  }, [visibleColumnIds]);

  return (
    <div className='flex h-screen w-full flex-col overflow-y-auto ml-64'>
      <div className='px-8 py-6 font-header text-3xl text-evergreen-800'>
        Commission
      </div>
      <div className='h-full py-4'>
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className='pl-8 pr-2.5'>
          <TabsList className='w-full flex items-center justify-between'>
            <div className='flex'>
              <TabsTrigger
                value='members'
                className='flex gap-1.5 items-center'>
                <User03 />
                Members
              </TabsTrigger>
              <TabsTrigger
                value='enrollments'
                className='flex gap-1.5 items-center'>
                <CheckHeart />
                Enrollments
              </TabsTrigger>
              <TabsTrigger
                value='commissions'
                className='flex gap-1.5 items-center'>
                <CheckHeart />
                Commissions
              </TabsTrigger>
            </div>
            <div className='flex gap-x-1'>
              <ColumnEditMenu
                key={currentTab}
                onColumnVisibilityChange={handleColumnVisibilityChange}
                table={table}
              />
              <FilterMenu
                selectedCarriers={selectedCarriers}
                setSelectedCarriers={setSelectedCarriers}
                carriers={uniqueCarriers}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
              />
              <button
                className='flex items-center justify-center w-9 h-9 bg-white rounded-[8px] shadow-md '
                onClick={() => downloadExcel(data, visibleColumnIds)}>
                <svg
                  width='21'
                  height='21'
                  viewBox='0 0 21 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.9569 13.3311V14.5311C19.9569 16.2112 19.9569 17.0513 19.6299 17.693C19.3423 18.2575 18.8834 18.7165 18.3189 19.0041C17.6771 19.3311 16.8371 19.3311 15.1569 19.3311H6.75691C5.07675 19.3311 4.23667 19.3311 3.59494 19.0041C3.03045 18.7165 2.57151 18.2575 2.28389 17.693C1.95691 17.0513 1.95691 16.2112 1.95691 14.5311V13.3311M15.9569 8.33105L10.9569 13.3311M10.9569 13.3311L5.95691 8.33105M10.9569 13.3311V1.33105'
                    stroke='#172A25'
                    stroke-width='2'
                  />
                </svg>
              </button>
            </div>
          </TabsList>
        </Tabs>
        <DataTable table={table} />
      </div>
    </div>
  );
};

export default CommissionPage;
