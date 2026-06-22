import { Ship, Calendar, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { STAT_COLORS } from "@/app/constants/constants";
import { PoolCrewMember } from "../../../types/types";
import EditCrewModal from "../form/EditCrewModal";

export default function ContractCard({ member }: { member: PoolCrewMember }) {
  const getStatusBadge = (status: string) => {
    return STAT_COLORS[status as keyof typeof STAT_COLORS] || STAT_COLORS.COMPLETED;
  };

  return (
    <Card className="shadow-sm border-slate-200 dark:border-slate-800 hover:shadow-md transition-all relative overflow-hidden">
      {/* Left border highlight based on status */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        member.status === 'ONBOARD' ? 'bg-indigo-500' : 
        member.status === 'COMPLETED' ? 'bg-slate-400' : 'bg-amber-500'
      }`} />
      
      <CardContent className="p-5 sm:p-6 ml-1">
        
        {/* Header - Includes Name, Badge, and Edit Modal */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              {member.firstName} {member.lastName}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
              {member.rank} {member.nationality ? `· ${member.nationality}` : ''}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge className={`rounded-sm px-2.5 py-0.5 text-xs font-bold border-none ${getStatusBadge(member.status)}`}>
              {member.status}
            </Badge>
            <EditCrewModal crewMember={member} />
          </div>
        </div>

        {/* Primary Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 border-b border-slate-100 dark:border-slate-800 pb-5">
          <div className="flex items-start gap-3">
            <Ship className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Vessel</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{member.vessel}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Join Date</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{member.joinDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-4 h-4 text-slate-400 mt-0.5" />
            <div>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Contract</p>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{member.contractType}</p>
            </div>
          </div>
        </div>

        {/* Logistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Shore On</p>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{member.shoreOn || "—"}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Ship On</p>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{member.shipOn || "—"}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Ship Off</p>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{member.shipOff || "—"}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Shore Off</p>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-200">{member.shoreOff || "—"}</p>
          </div>
        </div>

        {/* Remarks Section */}
        {member.remarks && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">Remarks</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-amber-50/50 dark:bg-amber-900/10 p-2 rounded text-amber-900 dark:text-amber-200 inline-block">
              {member.remarks}
            </p>
          </div>
        )}

      </CardContent>
    </Card>
  );
}