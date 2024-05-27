"use client";
import Table from "@/app/_components/table";
import opportunityList from "@/app/assets/opportunity/opportunity-list.json";
import { OpportunityListEntity } from "@/app/types/opportunity-types";
import { opportunityColumns } from "@/app/assets/opportunity/opportunity";

export default function Opportunities() {
  return (
    <>
      <h1>opportunities</h1>
      <Table<OpportunityListEntity>
        rows={opportunityList}
        columns={opportunityColumns}
      />
    </>
  );
}
