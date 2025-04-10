import { ChartAreaInteractive } from "@repo/ui/components/chart-area-interactive";
import { DataTable } from "@repo/ui/components/data-table";
import { SectionCards } from "@repo/ui/components/section-card";
import { SiteHeader } from "@repo/ui/components/site-header";

import data from "#data/data.json";

export default function Home() {
  return (
    <>
      <SiteHeader title="Dashboard" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
