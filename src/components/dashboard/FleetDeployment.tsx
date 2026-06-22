import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DeploymentStat } from "../../../types/types";

export default function FleetDeployment({ deployments }: { deployments: DeploymentStat[] }) {
  return (
    <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex flex-col px-3 py-6">
      <CardHeader>
        <CardTitle className="text-lg">Fleet Deployment</CardTitle>
        <p className="text-sm text-muted-foreground">Onboard crew distribution by category</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 flex-1 justify-between">
        <div className="flex flex-col gap-5">
          {deployments.map((dep, idx) => {
            const percentage = dep.total > 0 ? (dep.current / dep.total) * 100 : 0;
            
            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {dep.category}
                  </span>
                  <div className="text-base font-bold">
                    {dep.current} <span className="text-muted-foreground font-medium text-sm">/ {dep.total}</span>
                  </div>
                </div>
                {/* You can customize the progress bar color by targeting the indicator via CSS 
                  or adjusting the default Shadcn theme variables. 
                */}
                <Progress value={percentage} className="h-2 bg-slate-100 dark:bg-slate-800" />
              </div>
            );
          })}
          {deployments.length === 0 && (
            <div className="text-sm text-muted-foreground w-full text-center py-4">
              No deployment data available
            </div>
          )}
        </div>
        
        <div className="text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900 p-3 rounded-md text-center border border-dashed mt-2">
          No upcoming rotations planned
        </div>
      </CardContent>
    </Card>
  );
}