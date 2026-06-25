"use client";

import { useState, useEffect } from "react";
import WorkRestRow from "./WorkRestRow";
import { DailyWorkRest } from "../../../../../types/types";

const createBlocks = (ranges: [number, number][]) => {
  const blocks = Array(48).fill(false);
  ranges.forEach(([start, end]) => {
    for (let i = start; i < end; i++) blocks[i] = true;
  });
  return blocks;
};

export default function WorkRestGrid() {
  const [days, setDays] = useState<DailyWorkRest[]>(
    Array.from({ length: 30 }, (_, i) => {
      // DYNAMIC MOCK DATA INJECTION (Matches Screenshot exactly)
      let blocks = Array(48).fill(false);
      let remarks = "-";
      let watchKeeper = false;

      if (i === 0) {
        // June 1
        blocks = createBlocks([
          [16, 26],
          [32, 40],
          [40, 48],
        ]); // ~13.5 hours
        remarks = "Arrival at Turkey, Berthing.";
      } else if (i === 1) {
        // June 2
        blocks = createBlocks([
          [16, 27],
          [30, 48],
        ]); // ~14.5 hours
        remarks = "Comoensation will be given next day.";
        watchKeeper = true;
      } else if (i === 2) {
        // June 3
        blocks = createBlocks([
          [16, 27],
          [40, 48],
        ]); // ~10.5 hours
      } else if (i === 3) {
        // June 4
        blocks = createBlocks([
          [4, 10],
          [12, 48],
        ]); // ~19.0 hours
        watchKeeper = true;
      }

      return {
        date: `${(i + 1).toString().padStart(2, "0")} Jun 2026`,
        dayNumber: i + 1,
        blocks,
        seaPort: "SEA",
        watchKeeper,
        usLine: false,
        remarks,
      };
    }),
  );

  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState<boolean | null>(null);

  useEffect(() => {
    const handlePointerUp = () => {
      setIsDragging(false);
      setDragMode(null);
    };
    window.addEventListener("pointerup", handlePointerUp);
    return () => window.removeEventListener("pointerup", handlePointerUp);
  }, []);

  const handleBlockToggle = (
    dayIndex: number,
    blockIndex: number,
    forceValue?: boolean,
  ) => {
    setDays((prev) => {
      const newDays = [...prev];
      const newBlocks = [...newDays[dayIndex].blocks];
      const newValue =
        forceValue !== undefined ? forceValue : !newBlocks[blockIndex];

      newBlocks[blockIndex] = newValue;
      newDays[dayIndex] = { ...newDays[dayIndex], blocks: newBlocks };

      if (forceValue === undefined) {
        setIsDragging(true);
        setDragMode(newValue);
      }
      return newDays;
    });
  };

  // Fixed 7-Day Rolling Rest Calculation
  const getSevenDayRest = (currentIndex: number) => {
    let totalRest = 0;
    const startIdx = Math.max(0, currentIndex - 6);
    const daysCounted = currentIndex - startIdx + 1;
    const missingDays = 7 - daysCounted;

    // Assume 11 hours of compliance rest for previous month days we can't see
    totalRest += missingDays * 11;

    for (let i = startIdx; i <= currentIndex; i++) {
      const workHours = days[i].blocks.filter((b) => b).length * 0.5;
      totalRest += 24 - workHours;
    }
    return totalRest;
  };

  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div
        className="overflow-x-auto custom-scrollbar"
        style={{ cursor: isDragging ? "ew-resize" : "default" }}
      >
        {/* Table Header */}
        <div className="flex items-stretch min-w-max bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="sticky left-0 bg-slate-50 dark:bg-slate-900 p-3 w-32 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 z-20 flex items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Date
            </span>
          </div>

          {/* 🚀 UPGRADED: Distinct boxed 2-Tier Timing Header */}
          <div className="flex flex-col justify-end border-r border-slate-200 dark:border-slate-800/50 pt-3">
            <div className="flex gap-1 px-3 pb-2">
              {Array.from({ length: 24 }).map((_, h) => (
                <div
                  key={`header-hour-${h}`}
                  className="flex flex-col w-[44px] border border-slate-300 dark:border-slate-700 rounded overflow-hidden bg-white dark:bg-slate-950 shadow-sm"
                >
                  {/* Top Half: Hour Label */}
                  <div className="w-full text-center text-[11px] font-black text-slate-800 dark:text-slate-200 bg-slate-200/50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 py-[2px]">
                    {h + 1}
                  </div>
                  {/* Bottom Half: Minutes (00 | 30) separated by a border divider */}
                  <div className="flex w-full divide-x divide-slate-200 dark:divide-slate-700">
                    <div className="flex-1 text-center text-[9px] font-bold text-slate-500 py-[2px]">
                      00
                    </div>
                    <div className="flex-1 text-center text-[9px] font-bold text-slate-500 py-[2px]">
                      30
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Data Headers */}
          <div className="flex items-center gap-4 p-3 pr-6 ml-auto border-l border-slate-200 dark:border-slate-800/50">
            <div className="w-12 text-center text-[10px] font-bold text-slate-500 uppercase">
              Sea / Port
            </div>
            <div className="w-12 text-center text-[10px] font-bold text-slate-500 uppercase">
              Watch
            </div>
            <div className="w-12 text-center text-[10px] font-bold text-slate-500 uppercase">
              US Line
            </div>
            <div className="w-16 text-center text-[10px] font-bold text-slate-500 uppercase">
              Work 24H
            </div>
            <div className="w-16 text-center text-[10px] font-bold text-slate-500 uppercase">
              Rest 24H
            </div>
            <div className="w-20 text-center text-[10px] font-bold text-slate-500 uppercase">
              Rest 7D
            </div>
            <div className="w-64 text-[10px] font-bold text-slate-500 uppercase pl-2">
              Remarks
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {days.map((day, idx) => (
            <WorkRestRow
              key={idx}
              day={day}
              dayIndex={idx}
              sevenDayRestTotal={getSevenDayRest(idx)}
              onBlockToggle={handleBlockToggle}
              isDragging={isDragging}
              dragMode={dragMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
