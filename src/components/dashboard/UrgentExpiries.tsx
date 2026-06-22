import { AlertCircle, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExpiryAlert } from "../../../types/types";
import { Badge } from "../ui/badge";

export default function UrgentExpiries({
  expiries,
}: {
  expiries: ExpiryAlert[];
}) {
  return (
    <Card className="shadow-sm border-red-100 dark:border-red-900/50 h-fit px-3 py-6">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          Urgent Expiries
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Critical certificate alerts
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {expiries.length > 0 ? (
          expiries.map((alert) => (
            <div
              key={alert.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg bg-red-50/50 dark:bg-red-900/10 gap-4"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm">{alert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {alert.crewName}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Badge
                      variant={
                        alert.status === "EXPIRED" ? "destructive" : "secondary"
                      }
                      className="text-[10px] px-1.5 py-0"
                    >
                      {alert.status.replace("_", " ")}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">
                      Expires:{" "}
                      {format(new Date(alert.expiresAt), "dd MMM yyyy")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm text-muted-foreground text-center py-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
            All certificates are up to date.
          </div>
        )}

        <Button variant="outline" size={"lg"} className="w-full mt-2 text-sm">
          View Full Registry <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
