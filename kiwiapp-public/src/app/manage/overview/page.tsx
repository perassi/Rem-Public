"use client";
import { useEffect, useState } from "react";

import {
  OverviewCard,
  ChartCard,
  DoughnutChart,
  BarChart,
  SelectedBar,
} from "@/components/overview";
import FilterMenu from "@/components/data-table/FilterMenu";
import { groupBy } from "lodash";
import { CommissionData } from "@/pages/api/commission/types";
import {
  getNewEnrollmentsByAgency,
  getNewEnrollmentsByCarrier,
} from "@/utils/overviewUtils";

export default function OverviewPage() {
  const [data, setData] = useState<{ [key: string]: CommissionData }>(null);

  useEffect(() => {
    const fetchData = async () => {
      // TODO this is using a stubbed out endpoint that return sample data.
      const response = await fetch("/api/commission/sample-data");
      const json = await response.json();
      const newData: { [key: string]: CommissionData } = groupBy(
        json,
        "CARRIER",
      );
      setData(newData);
    };

    fetchData().then();
  }, []);

  return (
    <div className="flex h-full w-full flex-col ml-64">
      <div className="flex flex-wrap gap-2 justify-between items-center px-8 py-6 border-b border-b-black/5">
        <h1 className="font-header text-3xl text-evergreen-800">Overview</h1>
        <div className="flex flex-wrap items-center gap-6">
          <SelectedBar name="Carriers" value="6 selected" />
          <SelectedBar name="Date Range" value="Oct 2024 — Dec 2024" />
          <FilterMenu />
        </div>
      </div>
      <div className="h-full px-8 py-6">
        <div className="flex flex-wrap gap-4">
          <OverviewCard title="Total Agent" value="635" />
          <OverviewCard title="All Members" value="26.1K" />
          <OverviewCard title="Commissions YTD" value="$9,226,210" />
          <OverviewCard title="Chargeback YTD" value="-$768,558" />
        </div>
        <div className="flex flex-wrap gap-y-10 gap-x-4 mt-10">
          <ChartCard title="New Enrollments by Carrier">
            {data && <DoughnutChart data={getNewEnrollmentsByCarrier(data)} />}
          </ChartCard>
          <ChartCard title="New Enrollments by Agency">
            {data && <BarChart data={getNewEnrollmentsByAgency(data)} />}
          </ChartCard>
          <ChartCard title="Commissions by Carrier">
            {data && <DoughnutChart data={getNewEnrollmentsByCarrier(data)} />}
          </ChartCard>
          <ChartCard title="Commissions by Agency">
            {data && <BarChart data={getNewEnrollmentsByAgency(data)} />}
          </ChartCard>
        </div>
      </div>
    </div>
  );
}
