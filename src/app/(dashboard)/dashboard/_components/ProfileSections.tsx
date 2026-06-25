import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SectionHeader = ({ title, count }: { title: string; count?: number }) => (
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center gap-3">
      <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
        {title}
      </h3>
      {count !== undefined && (
        <span className="text-xs font-bold text-slate-500">{count} Total</span>
      )}
    </div>
    <Button variant="outline" size="sm" className="h-8 text-xs font-bold">
      <Plus className="w-3 h-3 mr-1" /> Add
    </Button>
  </div>
);

const EmptyState = ({ message }: { message: string }) => (
  <div className="text-center py-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-500">
    {message}
  </div>
);

export default function ProfileSections({ member }: { member: any }) {
  return (
    <div className="space-y-8 pb-6">
      
      {/* Sea Service Records */}
      <section>
        <SectionHeader title="Sea Service Records" />
        <EmptyState message="No sea service records." />
      </section>

      {/* Contract History */}
      <section>
        <SectionHeader title="Contract History" count={1} />
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-950">
          <Table>
            <TableHeader className="bg-slate-50 dark:bg-slate-900">
              <TableRow>
                <TableHead className="p-4 text-xs font-bold uppercase tracking-wider">Vessel</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Rank</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Join</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Sign Off</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="p-4 font-bold text-slate-900 dark:text-white">{member.vessel}</TableCell>
                <TableCell className="font-medium text-slate-600">{member.rank}</TableCell>
                <TableCell className="font-medium text-slate-600">{member.joinDate}</TableCell>
                <TableCell className="font-medium text-slate-600">{member.plannedSignOff}</TableCell>
                <TableCell>
                  <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none rounded-sm">
                    {member.status}
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Certificates */}
      <section>
        <SectionHeader title="Certificates" count={0} />
        <EmptyState message="No certificates on file." />
      </section>

      {/* Trainings */}
      <section>
        <SectionHeader title="Trainings" />
        <EmptyState message="No training records." />
      </section>
      
    </div>
  );
}