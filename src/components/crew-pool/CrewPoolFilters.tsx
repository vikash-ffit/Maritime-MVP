// app/crew/components/crew-pool/CrewPoolFilters.tsx
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CrewStatus } from "../../../types/types";

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  activeFilter: CrewStatus | "ALL";
  setActiveFilter: (val: CrewStatus | "ALL") => void;
  resultCount: number;
}

export default function CrewPoolFilters({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  resultCount,
}: FilterProps) {
  const filters: { label: string; value: CrewStatus | "ALL" }[] = [
    { label: "ALL", value: "ALL" },
    { label: "ONBOARD", value: "ONBOARD" },
    { label: "AVAILABLE", value: "AVAILABLE" },
    { label: "ASSIGNED", value: "ASSIGNED" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
      {/* Search Bar */}
      <div className="w-full max-w-lg relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, rank, code, vessel, or user level..."
          className="pl-10 h-12 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Pills */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 h-9 text-xs font-semibold tracking-wide transition-all ${
                activeFilter === filter.value
                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200 border-transparent shadow-none"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground ml-auto font-medium">
          {resultCount} result{resultCount !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
