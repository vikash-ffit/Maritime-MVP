// app/crew/components/crew-pool/CrewPoolStats.tsx
import { Card } from "@/components/ui/card";

interface StatsProps {
  total: number;
  onboard: number;
  available: number;
}

export default function CrewPoolStats({
  total,
  onboard,
  available,
}: StatsProps) {
  const stats = [
    { label: "TOTAL CREW", value: total, dotColor: "bg-blue-500" },
    { label: "ONBOARD", value: onboard, dotColor: "bg-indigo-500" },
    { label: "AVAILABLE", value: available, dotColor: "bg-emerald-500" },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="flex-1 min-w-[120px] p-4 shadow-sm border-slate-200 dark:border-slate-800 flex flex-col justify-center gap-1"
        >
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
          <span className="text-2xl font-extrabold pl-4">{stat.value}</span>
        </Card>
      ))}
    </div>
  );
}
