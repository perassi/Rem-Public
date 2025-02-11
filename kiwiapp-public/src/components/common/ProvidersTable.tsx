"use client";
import { memo, useCallback, useState } from "react";
import {
  ColumnDef,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import Button from "@/components/common/Button";
import { DEFAULT_PROVIDERS_DATA } from "@/constants/providers.constants";
import type { Providers } from "@/types/providers-data.types";

const ProvidersTable = () => {
  const [data, setData] = useState(DEFAULT_PROVIDERS_DATA);

  const handleDelete = useCallback(
    (index: number) => () => {
      setData((prev) => prev.filter((_, i) => i !== index));
    },
    []
  );

  const columns: ColumnDef<Providers>[] = [
    {
      accessorKey: "name",
      header: () => "Name",
      cell: ({ getValue }) => (
        <span className="text-left">{getValue<string>()}</span>
      ),
    },
    {
      accessorKey: "address",
      header: () => "Practice Address",
      cell: ({ getValue }) => (
        <span className="text-center">{getValue<string>()}</span>
      ),
    },
    {
      id: "actions",
      header: () => "",
      cell: ({ row }) => (
        <Button
          className="w-10 min-w-10 h-10 p-0 rounded-full text-white bg-red-500 hover:bg-red-700"
          onClick={handleDelete(row.index)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <path
                  d="M16.1032 7.89062C16.1032 7.89062 15.6507 13.5031 15.3882 15.8673C15.2632 16.9965 14.5657 17.6581 13.4232 17.679C11.249 17.7181 9.07234 17.7206 6.89901 17.6748C5.79984 17.6523 5.11401 16.9823 4.99151 15.8731C4.72734 13.4881 4.27734 7.89062 4.27734 7.89062"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.2567 5.19987H3.125"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5335 5.19998C13.8793 5.19998 13.316 4.73748 13.1877 4.09665L12.9852 3.08331C12.8602 2.61581 12.4368 2.29248 11.9543 2.29248H8.42682C7.94432 2.29248 7.52099 2.61581 7.39599 3.08331L7.19349 4.09665C7.06516 4.73748 6.50182 5.19998 5.84766 5.19998"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="grid grid-cols-[1.2fr_2.5fr_40px] xl:grid-cols-3 md:gap-40"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div
                    className={`text-left text-sm md:text-xl font-semibold font-sans`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b h-15 mt-5 grid grid-cols-[1.2fr_2.5fr_40px] xl:grid-cols-3 md:gap-40 md:mt-4"
            >
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={`text-sm flex md:block md:text-xl pb-5 md:pb-0 items-center ${
                    index === 2 ? "flex md:flex justify-end" : "text-left"
                  } font-medium font-sans
                `}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(ProvidersTable);
