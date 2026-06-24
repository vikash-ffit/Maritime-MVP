"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import WorkRestStats from "./WorkRestStats";
import WorkRestCard from "./WorkRestCard";
import { WorkRestRecord } from "../../../types/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Dynamically generate the 12 months for the current year
const currentYear = new Date().getFullYear();
const MONTHS = Array.from({ length: 12 }, (_, i) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date(currentYear, i, 1));
});

// Automatically get the current month to use as the default selected state
const CURRENT_MONTH = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
}).format(new Date());

const MOCK_RECORDS: WorkRestRecord[] = [
  {
    id: "wr_1",
    memberId: "1",
    firstName: "Rajveer",
    lastName: "Singh",
    rank: "3rd Officer",
    code: "CRW-32",
    vessel: "Black Pearl",
    days: 30,
    workHours: 57.5,
    violations: 2,
    signedOn: "05 Jun 2026",
  },
];

export default function WorkRestTab() {
  // Uses the current real-world month automatically
  const [selectedMonth, setSelectedMonth] = useState(CURRENT_MONTH);

  // Dynamically calculate stats based on current records
  const totalSheets = MOCK_RECORDS.length;
  const totalWorkHours = MOCK_RECORDS.reduce(
    (acc, curr) => acc + curr.workHours,
    0,
  );
  const totalViolations = MOCK_RECORDS.reduce(
    (acc, curr) => acc + curr.violations,
    0,
  );

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 max-w-5xl mx-auto w-full pt-4">
      {/* Header & Controls Card */}
      <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Crew Work Rest Hours
        </h2>
        <p className="text-sm text-slate-500 mt-1 font-medium mb-6">
          Review work-rest records submitted by crew assigned to Black Pearl.
        </p>

        {/* Upgraded Dynamic Select Component */}
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[240px] h-11 text-slate-700 dark:text-slate-200 font-semibold border-slate-200">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-blue-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Month:
              </span>
              <SelectValue />
            </div>
          </SelectTrigger>
          <SelectContent className="py-3">
            {MONTHS.map((month) => (
              <SelectItem key={month} value={month} className="px-4 py-1.5">
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Summary Stats Grid */}
      <WorkRestStats
        sheets={totalSheets}
        workHours={totalWorkHours}
        violations={totalViolations}
      />

      {/* Records List Container */}
      <div className="flex flex-col gap-4">
        {MOCK_RECORDS.map((record) => (
          <WorkRestCard key={record.id} record={record} />
        ))}

        {/* Empty State Fallback */}
        {MOCK_RECORDS.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
            <p className="text-slate-500 font-medium">
              No work/rest records submitted for {selectedMonth}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
