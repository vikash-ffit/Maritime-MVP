import Link from "next/link";
import {
  Ship,
  Clock,
  AlertCircle,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WorkRestRecord } from "../../../types/types";

export default function WorkRestCard({ record }: { record: WorkRestRecord }) {
  return (
    <Card className="shadow-sm border-slate-200 dark:border-slate-800 hover:shadow-md transition-all">
      <CardContent className="p-5 sm:p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {record.firstName} {record.lastName}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
              {record.rank} - {record.code}
            </p>
          </div>

          {/* 🚀 FIX: Converted to a Link using asChild so it routes to the new page */}
          <Button
            variant="outline"
            className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold h-9"
          >
            <Link href={`/dashboard/${record.memberId}/work-rest`} className="flex items-center">
              View Sheet <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* 4-Column Data Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 mb-5">
          <div className="flex items-start gap-3">
            <CalendarDays className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                Days
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                {record.days} DAYS
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Ship className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                Vessel
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                {record.vessel}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                Work Hours
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-slate-200">
                {record.workHours} hrs
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AlertCircle
              className={`w-4 h-4 mt-0.5 ${record.violations > 0 ? "text-red-500" : "text-emerald-500"}`}
            />
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                Violations
              </p>
              <p
                className={`text-sm font-bold ${record.violations > 0 ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}
              >
                {record.violations} day(s)
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs font-semibold text-slate-500 flex items-center gap-2">
          <span className="uppercase tracking-wider">Signed on:</span>
          <span className="text-slate-700 dark:text-slate-300">
            {record.signedOn}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
