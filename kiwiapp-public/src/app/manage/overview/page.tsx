"use client";

import { OverviewCard } from "@/components/overview/OverviewCard";
import { DoughnutCard } from "@/components/overview/DoughnutCard";
import { SelectedBar } from "@/components/overview/SelectedBar";
import FilterMenu from "@/components/data-table/FilterMenu";
import { BarCard } from "@/components/overview/BarCard";

export default function OverviewPage() {
  return (
    <div className="flex h-full w-full flex-col">
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
          <DoughnutCard title="New Enrollments by Carrier" data="635" />
          <BarCard title="New Enrollments by Agency" data="635" />
          <DoughnutCard title="Commissions by Carrier" data="635" />
          <BarCard title="Commissions by Agency" data="635" />
        </div>
      </div>
    </div>
  );
}
