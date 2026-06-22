"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CrewPoolStats from "./CrewPoolStats";
import CrewPoolFilters from "./CrewPoolFilters";
import CrewCard from "./CrewCard";
import { Button } from "../ui/button";
import { CrewStatus } from "../../../types/types";
import { MOCK_CREW } from "@/app/constants/constants";


export default function CrewPoolTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<CrewStatus | "ALL">("ALL");

  // Filter logic runs automatically when search or filter pills change
  const filteredCrew = useMemo(() => {
    return MOCK_CREW.filter((member) => {
      const matchesSearch =
        `${member.firstName} ${member.lastName} ${member.rank} ${member.code} ${member.vessel}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesFilter =
        activeFilter === "ALL" || member.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  // Derived stats
  const totalCrew = MOCK_CREW.length;
  const onboardCount = MOCK_CREW.filter((c) => c.status === "ONBOARD").length;
  const availableCount = MOCK_CREW.filter(
    (c) => c.status === "AVAILABLE",
  ).length;

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      {/* Top Controller Card */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-4">
          <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
            Fleet Roster
          </h2>
          <p className="text-sm text-muted-foreground">
            Search the active fleet roster, review availability, and manage crew
            profiles.
          </p>
        </CardHeader>
        <CardContent>
          <CrewPoolStats
            total={totalCrew}
            onboard={onboardCount}
            available={availableCount}
          />
        </CardContent>
      </Card>

      <CrewPoolFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        resultCount={filteredCrew.length}
      />

      {/* Roster List */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCrew.length > 0 ? (
          filteredCrew.map((member) => (
            <CrewCard key={member.id} member={member} />
          ))
        ) : (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-muted-foreground font-medium">
              No crew members found matching your criteria.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("ALL");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
