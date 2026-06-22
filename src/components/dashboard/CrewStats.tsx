import { Users, Ship, UserCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardStats } from "../../../types/types";
import { STAT_COLORS } from "@/app/constants/constants";

export default function CrewStats({ stats }: { stats: DashboardStats }) {
  const statCards = [
    {
      title: "TOTAL FLEET CREW",
      value: stats.total,
      icon: Users,
      colorClass: STAT_COLORS.TOTAL,
    },
    {
      title: "ONBOARD NOW",
      value: stats.onboard,
      icon: Ship,
      colorClass: STAT_COLORS.ONBOARD,
    },
    {
      title: "AVAILABLE POOL",
      value: stats.available,
      icon: UserCheck,
      colorClass: STAT_COLORS.AVAILABLE,
    },
    {
      title: "COMPLIANCE ALERTS",
      value: stats.alerts,
      icon: AlertTriangle,
      colorClass: STAT_COLORS.ALERTS,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={index}
            className="shadow-sm border-slate-200 dark:border-slate-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
          >
            <CardContent className="p-6 flex items-center gap-4">
              <div
                className={`p-4 rounded-xl ${stat.colorClass.split(" ")[1]}`}
              >
                <Icon className={`w-6 h-6 ${stat.colorClass.split(" ")[0]}`} />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
