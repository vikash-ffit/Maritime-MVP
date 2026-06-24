export default function WorkRestPolicy() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 text-xs">Part A - ILO / MLC Policy</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 font-medium">
            <li>• Maximum work: 14 hours in any 24-hour period.</li>
            <li>• Minimum rest: 10 hours in any 24-hour period and 77 hours in any 7-day period.</li>
            <li>• Rest may be split into no more than 2 periods, one of which should be at least 6 hours.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 text-xs">Part B - Operational Notes</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 font-medium">
            <li>• Use the sea/port selector and tick watch-keeper when applicable.</li>
            <li>• Orange cells indicate work. Empty grey cells are treated as rest.</li>
            <li>• Remarks should be used for clock changes, exceptions, or drills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}