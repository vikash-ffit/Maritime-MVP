import { AlertTriangle } from "lucide-react";
import { DailyWorkRest } from "../../../../../types/types";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface RowProps {
  day: DailyWorkRest;
  sevenDayRestTotal: number;
  onBlockToggle: (
    dayIndex: number,
    blockIndex: number,
    forceValue?: boolean,
  ) => void;
  dayIndex: number;
  isDragging: boolean;
  dragMode: boolean | null;
}

export default function WorkRestRow({
  day,
  sevenDayRestTotal,
  onBlockToggle,
  dayIndex,
  isDragging,
  dragMode,
}: RowProps) {
  // ILO/MLC Rule Calculations
  const workHours = day.blocks.filter((b) => b).length * 0.5;
  const restHours = 24 - workHours;

  const isWorkViolation = workHours > 14;
  const isRestViolation = restHours < 10;
  const is7DayViolation = sevenDayRestTotal < 77;

  const hasViolation = isWorkViolation || isRestViolation || is7DayViolation;

  return (
    <div
      className={`flex items-center min-w-max border-b border-slate-100 dark:border-slate-800/50 transition-colors group ${
        hasViolation
          ? "bg-red-50/50 dark:bg-red-950/20 hover:bg-red-50 dark:hover:bg-red-950/40"
          : "hover:bg-slate-50 dark:hover:bg-slate-900/20"
      }`}
    >
      {/* Sticky Date Column */}
      <div
        className={`sticky left-0 p-3 w-32 flex-shrink-0 flex items-center justify-between border-r border-slate-200 dark:border-slate-800 z-10 transition-colors ${
          hasViolation
            ? "bg-red-50 dark:bg-slate-900"
            : "bg-white dark:bg-slate-950 group-hover:bg-slate-50 dark:group-hover:bg-slate-900/80"
        }`}
      >
        <div className="flex flex-col justify-center">
          <span
            className={`text-xs font-bold ${hasViolation ? "text-red-700 dark:text-red-400" : "text-slate-900 dark:text-white"}`}
          >
            {day.dayNumber}
          </span>
          <span className="text-[10px] font-semibold text-slate-500">
            {day.date}
          </span>
        </div>
        {hasViolation && <AlertTriangle className="w-4 h-4 text-red-500" />}
      </div>

      {/* 48 Circular Blocks */}
      <div className="flex gap-1 p-3 items-center">
        {day.blocks.map((isWork, blockIndex) => (
          <div
            key={blockIndex}
            className={`w-5 h-5 rounded-full cursor-pointer transition-colors border select-none touch-none flex items-center justify-center text-[10px] font-extrabold ${
              isWork
                ? "bg-orange-500 border-orange-600 shadow-inner text-white"
                : "bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-200 text-transparent"
            }`}
            onPointerDown={(e) => {
              e.currentTarget.releasePointerCapture(e.pointerId);
              onBlockToggle(dayIndex, blockIndex);
            }}
            onPointerEnter={() => {
              if (isDragging && dragMode !== null) {
                onBlockToggle(dayIndex, blockIndex, dragMode);
              }
            }}
          >
            {isWork ? "W" : ""}
          </div>
        ))}
      </div>

      {/* New Columns: Sea/Port, Watch, US Line, Stats & Remarks */}
      <div className="flex items-center gap-4 p-3 pr-6 ml-auto border-l border-slate-200 dark:border-slate-800/50">
        {/* SEA / PORT */}
        <div className="w-12 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider cursor-pointer hover:text-slate-600 transition-colors">
          {day.seaPort === "SEA" ? "Sea" : "Port"}
        </div>

        {/* WATCH */}
        <div className="w-12 flex justify-center">
          <Checkbox
            checked={day.watchKeeper}
            className="data-[state=checked]:bg-slate-400 data-[state=checked]:border-slate-400"
          />
        </div>

        {/* US LINE */}
        <div className="w-12 flex justify-center">
          <Checkbox
            checked={day.usLine}
            className="data-[state=checked]:bg-slate-400 data-[state=checked]:border-slate-400"
          />
        </div>

        {/* WORK 24H */}
        <div className="w-16 text-center">
          <span
            className={`text-sm font-bold ${isWorkViolation ? "text-red-600 dark:text-red-400" : "text-slate-700 dark:text-slate-300"}`}
          >
            {workHours}
          </span>
        </div>

        {/* REST 24H */}
        <div className="w-16 text-center">
          <span
            className={`text-sm font-bold ${isRestViolation ? "text-red-600 dark:text-red-400" : "text-slate-400"}`}
          >
            {restHours}
          </span>
        </div>

        {/* REST 7D */}
        <div className="w-20 text-center">
          <span
            className={`text-sm font-bold ${is7DayViolation ? "text-red-600 dark:text-red-400" : "text-slate-700 dark:text-slate-300"}`}
          >
            {sevenDayRestTotal}
          </span>
        </div>

        {/* REMARKS */}
        <div className="w-64">
          <Input
            defaultValue={day.remarks}
            placeholder={hasViolation ? "Explain violation..." : "-"}
            className={`h-8 text-xs shadow-none focus-visible:ring-1 ${
              hasViolation
                ? "bg-red-100/50 border-red-200 placeholder:text-red-400/70"
                : "bg-transparent border-slate-200"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
