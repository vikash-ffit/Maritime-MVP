import Link from "next/link";
import { Ship, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PoolCrewMember } from "../../../types/types";
import { STAT_COLORS } from "@/app/constants/constants";

export default function CrewCard({ member }: { member: PoolCrewMember }) {
  const initials = `${member.firstName[0]}${member.lastName[0]}`;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ONBOARD":
        return STAT_COLORS.ONBOARD;
      case "ASSIGNED":
        return STAT_COLORS.ASSIGNED;
      case "AVAILABLE":
        return STAT_COLORS.AVAILABLE;
      default:
        return STAT_COLORS.COMPLETED;
    }
  };

  return (
    <Link
      href={`/dashboard/${member.id}`}
      className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
    >
      <div className="shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all group rounded-xl bg-white dark:bg-slate-950">
        <div className="p-5 flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-100 dark:border-blue-800">
                {initials}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {member.firstName} {member.lastName}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                  {member.rank} · {member.code}
                </p>
                <p className="text-xs text-slate-400 font-semibold tracking-wider mt-1 uppercase">
                  CREW
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <Badge
                variant="outline"
                className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${getStatusBadge(member.status)}`}
              >
                {member.status}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                // Prevent the button click from bubbling up if you eventually add secondary actions here
                tabIndex={-1}
                className="h-8 w-8 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
              >
                <ArrowRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Bottom Row: Details */}
          <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Ship className="w-4 h-4 text-blue-400" />
              <span className="font-medium truncate">
                {member.vessel || "Unassigned"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span className="font-medium truncate">
                {member.nationality || "Nationality not set"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
