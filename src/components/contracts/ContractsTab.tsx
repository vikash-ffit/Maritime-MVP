"use client";

import { useState, useMemo } from "react";
import ContractStats from "./ContractStats";
import ContractFilters from "./ContractFilters";
import ContractCard from "./ContractCard";
import { PoolCrewMember } from "../../../types/types";

const MOCK_CONTRACTS: PoolCrewMember[] = [
  {
    id: "1",
    firstName: "Utkarsh",
    lastName: "Jha",
    rank: "Chief Officer",
    nationality: "Indian",
    status: "COMPLETED",
    vessel: "Black Pearl",
    joinDate: "25 Jun 2026",
    contractType: "Chief Officer · 6 mo",
    shoreOn: "12 Feb 2026",
    shipOn: "26 Dec 2026",
    shipOff: "28 May 2027",
    shoreOff: "17 Jun 2027",
  },
  {
    id: "2",
    firstName: "Raman",
    lastName: "Yadav",
    rank: "Chief Officer",
    nationality: "Indian",
    status: "ONBOARD",
    vessel: "Black Pearl",
    joinDate: "30 Jun 2026",
    contractType: "Chief Officer · 6 mo",
    shoreOn: "25 Jun 2026",
    shipOn: "27 Jun 2026",
    remarks: "Testing user",
  },
  {
    id: "3",
    firstName: "Rajveer",
    lastName: "Singh",
    rank: "3rd Officer",
    status: "ONBOARD",
    vessel: "Black Pearl",
    joinDate: "16 Jun 2026",
    contractType: "3rd Officer · 6 mo",
    shoreOn: "03 Jun 2026",
    shipOn: "05 Jun 2026",
    remarks: "Testing user",
    nationality: null,
  },
];

export default function ContractsTab() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContracts = useMemo(() => {
    return MOCK_CONTRACTS.filter((member) => {
      const searchString =
        `${member.firstName} ${member.lastName} ${member.rank} ${member.vessel} ${member.status} ${member.nationality || ""}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
  }, [searchTerm]);

  const pendingCount = MOCK_CONTRACTS.filter(
    (c) => c.status === "PENDING",
  ).length;
  const onboardCount = MOCK_CONTRACTS.filter(
    (c) => c.status === "ONBOARD",
  ).length;
  const completedCount = MOCK_CONTRACTS.filter(
    (c) => c.status === "COMPLETED",
  ).length;

  return (
    <div className="w-full flex flex-col gap-6 animate-in fade-in duration-300 pt-4">
      {/* Header Area */}
      <div className="mb-2">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Black Pearl Contracts
        </h2>
        <p className="text-sm text-slate-500 mt-1 font-medium">
          Review and process only the contracts assigned to your vessel.
        </p>
      </div>

      <ContractStats
        pending={pendingCount}
        onboard={onboardCount}
        completed={completedCount}
      />

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-6 shadow-sm">
        <ContractFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          resultCount={filteredContracts.length}
        />

        <div className="flex flex-col gap-4">
          {filteredContracts.map((member) => (
            <ContractCard key={member.id} member={member} />
          ))}
          {filteredContracts.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No contracts match your search query.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
