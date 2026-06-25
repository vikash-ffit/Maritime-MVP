import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User as UserIcon, Phone, Shield, Building, Ship } from "lucide-react";
import ProfileActions from "./_components/ProfileActions";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }

  const { name, email, role } = session.user;

  // Derive initials for the avatar
  const initials =
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  // Mock some dynamic data based on their role
  const mobile = role === "SHIP" ? "1234567895" : "+1 234 567 8900";
  const assignedVessels = role === "SHIP" ? "MV Vladimir" : "All Fleet Vessels";
  const roleId = role === "SHIP" ? "#7" : "#1";
  const company = "Navsuite Maritime";

  return (
    <div className=" mx-auto w-full animate-in fade-in duration-300">
      {/* Top Banner / Identity Section */}
      <Card className="shadow-sm border-slate-200 dark:border-slate-800 overflow-hidden mb-8 py-0">
        <div className="h-32 bg-linear-to-r from-blue-600 to-cyan-500"></div>
        <CardContent className="px-6 sm:px-10 pb-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-12 sm:-mt-16 mb-2">
            <div className="flex items-end gap-5">
              {/* Massive Avatar */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-slate-900 border-4 border-white dark:border-slate-950 flex items-center justify-center text-3xl sm:text-4xl font-black text-white shadow-lg">
                {initials}
              </div>

              <div className="pb-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                  {name}
                  <span className="text-sm text-slate-400 font-medium hidden sm:inline-block">
                    #{initials.toLowerCase()}33
                  </span>
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded border ${
                      role === "SHORE"
                        ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                        : "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-800"
                    }`}
                  >
                    {role} Level
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Buttons Component */}
            <ProfileActions />
          </div>
        </CardContent>
      </Card>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800/50">
            <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <UserIcon className="w-4 h-4" /> Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
              <div className="flex justify-between p-4 sm:px-6">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Email
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {email}
                </span>
              </div>
              <div className="flex justify-between p-4 sm:px-6">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Name
                </span>
                <span className="text-sm font-semibold tex  t-slate-900 dark:text-white">
                  {name}
                </span>
              </div>
              <div className="flex justify-between p-4 sm:px-6">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Username
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {email}
                </span>
              </div>
              <div className="flex justify-between p-4 sm:px-6">
                <span className="text-xs font-bold text-slate-400 uppercase flex items-center gap-1">
                  <Phone className="w-3 h-3" /> Mobile
                </span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {mobile}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          {/* Access Levels */}
          <Card className="shadow-sm border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800/50">
              <CardTitle className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4" /> Access
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
                <div className="flex justify-between p-4 sm:px-6">
                  <span className="text-xs font-bold text-slate-400 uppercase">
                    Role ID
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {roleId}
                  </span>
                </div>
                <div className="flex justify-between p-4 sm:px-6">
                  <span className="text-xs font-bold text-slate-400 uppercase">
                    User Level
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {role}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company & Vessels */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-sm border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <CardContent className="p-5">
                <Building className="w-5 h-5 text-indigo-500 mb-3" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Company
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {company}
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <CardContent className="p-5">
                <Ship className="w-5 h-5 text-emerald-500 mb-3" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Assigned Vessels
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {assignedVessels}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
