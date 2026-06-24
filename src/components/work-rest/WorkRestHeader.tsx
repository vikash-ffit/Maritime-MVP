import { User, Calendar, Ship, FileCheck2, AlertTriangle } from "lucide-react";

export default function WorkRestHeader({ member }: { member: any }) {
  return (
    <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-6">
      {/* Left Column: Title, Subtitle, and New Legend */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <FileCheck2 className="w-6 h-6 text-blue-600" />
          Work Rest Hour Record
        </h1>
        <p className="text-sm font-medium text-slate-500 mt-1">
          June 2026 • Drag across cells to fill or clear work time quickly.
        </p>

        {/* 🚀 NEW: Color Legend */}
        <div className="flex flex-wrap items-center gap-5 mt-5 pt-5 border-t border-slate-100 dark:border-slate-800/50">
          {/* Work Legend */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-orange-500 shadow-inner flex items-center justify-center text-[10px] font-extrabold text-white">
              W
            </div>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Work
            </span>
          </div>

          {/* Rest Legend */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"></div>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Rest
            </span>
          </div>

          {/* Violation Legend */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 border border-red-200 dark:border-red-900 flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              Violation
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Employee Info */}
      <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 text-sm md:items-start pt-2">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Employee
          </p>
          <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <User className="w-4 h-4 text-blue-500" /> {member.firstName}{" "}
            {member.lastName}
          </p>
          <p className="text-xs text-slate-500 font-medium">
            {member.rank} • {member.code}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Signed On
          </p>
          <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-indigo-500" /> {member.joinDate}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Vessel
          </p>
          <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Ship className="w-4 h-4 text-emerald-500" /> {member.vessel}
          </p>
        </div>
      </div>
    </div>
  );
}
