import { BadgeCheck, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProfileHero({ member }: { member: any }) {
  const initials = `${member.firstName[0]}${member.lastName[0]}`;

  return (
    <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden mb-6">
      {/* Blue Gradient Banner */}
      <div className="h-32 md:h-40 bg-linear-to-r from-blue-600 to-indigo-600 w-full"></div>
      
      <div className="px-6 md:px-10 pb-6">
        {/* Overlapping Avatar */}
        <div className="flex justify-between items-end -mt-12 mb-4">
          <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center border-4 border-white dark:border-slate-950 text-4xl font-black text-slate-300 dark:text-slate-600">
            {initials}
          </div>
        </div>

        {/* Profile Details */}
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {member.firstName} {member.lastName}
              </h1>
              <BadgeCheck className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mt-1">
              {member.rank} • {member.code}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400" />
              {member.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400" />
              {member.phone}
            </div>
          </div>
        </div>

        {/* Current Status Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current Status</p>
            <div className="flex items-center gap-3">
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none rounded-sm px-2 py-0.5">
                {member.status}
              </Badge>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {member.vessel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}