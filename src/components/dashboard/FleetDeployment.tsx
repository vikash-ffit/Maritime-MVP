import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DeploymentStat } from "../../../types/types";

export default function FleetDeployment({
  deployments,
}: {
  deployments: DeploymentStat[];
}) {
  return (
    <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex flex-col h-full px-3 py-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">Fleet Deployment</CardTitle>
        <p className="text-sm text-muted-foreground">
          Onboard crew distribution by category
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 flex-1 justify-between pt-4">
        <div className="flex flex-col gap-5">
          {deployments.map((dep, idx) => {
            // Calculate percentage safely
            const percentage =
              dep.total > 0 ? Math.round((dep.current / dep.total) * 100) : 0;

            return (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    {dep.category}
                  </span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    {dep.current}{" "}
                    <span className="text-muted-foreground font-medium">
                      / {dep.total}
                    </span>
                  </div>
                </div>

                {/* 🚀 FIXED: Custom Progress Bar for exact control over rounding and color */}
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}

          {deployments.length === 0 && (
            <div className="text-sm text-muted-foreground w-full text-center py-4">
              No deployment data available
            </div>
          )}
        </div>

        {/* Polished the empty state to look like a proper system notice */}
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg text-center border border-dashed border-slate-200 dark:border-slate-800 mt-2">
          No upcoming rotations planned
        </div>
      </CardContent>
    </Card>
  );
}
