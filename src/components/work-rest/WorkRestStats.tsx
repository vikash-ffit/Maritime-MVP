import { FileText, Clock, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WorkRestStatsProps {
  sheets: number;
  workHours: number;
  violations: number;
}

export default function WorkRestStats({
  sheets,
  workHours,
  violations,
}: WorkRestStatsProps) {
  const stats = [
    {
      title: "SHEETS",
      value: sheets,
      subtitle: "Submitted monthly records",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "WORK HOURS",
      value: workHours,
      subtitle: "Total logged work hours",
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      title: "VIOLATIONS",
      value: violations,
      subtitle: "Flagged days in the selected month",
      icon: AlertTriangle,
      color: "text-red-600",
      bg: "bg-red-100 dark:bg-red-900/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <Card
            key={idx}
            className="p-5 shadow-sm border-slate-200 dark:border-slate-800 flex flex-col items-center text-center sm:flex-row sm:text-left gap-4"
          >
            <div className={`p-3 rounded-full ${stat.bg}`}>
              <Icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                {stat.title}
              </p>
              <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide mt-1">
                {stat.subtitle}
              </p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
