import { Card } from "@/components/ui/card";

interface ContractStatsProps {
  pending: number;
  onboard: number;
  completed: number;
}

export default function ContractStats({ pending, onboard, completed }: ContractStatsProps) {
  const stats = [
    { 
      label: "PENDING", 
      value: pending, 
      desc: "Awaiting ship-side movement",
      dotColor: "bg-amber-500" 
    },
    { 
      label: "ONBOARD", 
      value: onboard, 
      desc: "Active vessel contracts",
      dotColor: "bg-indigo-500" 
    },
    { 
      label: "COMPLETED", 
      value: completed, 
      desc: "Finished contract workflows",
      dotColor: "bg-slate-500" 
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex-1 p-4 shadow-sm border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
            <span className="text-3xl font-extrabold pl-4 text-slate-900 dark:text-white">{stat.value}</span>
            <p className="text-xs text-muted-foreground pl-4 mt-1 font-medium">{stat.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}