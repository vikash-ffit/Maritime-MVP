import Link from "next/link";
import { ChevronLeft, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkRestHeader from "@/components/work-rest/WorkRestHeader";
import WorkRestGrid from "../../_components/WorkRestGrid";
import WorkRestPolicy from "@/components/work-rest/WorkRestPolicy";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function WorkRestRecordPage({ params }: PageProps) {
  const resolvedParams = await params;
  const crewId = resolvedParams.id;

  // Mock fetching the member details
  const mockMember = {
    firstName: "Rajveer",
    lastName: "Singh",
    rank: "3rd Officer",
    code: "CRW-32",
    vessel: "Black Pearl",
    joinDate: "05 Jun 2026",
  };

  return (
    <div className="max-w-[1400px] mx-auto w-full p-4 sm:p-6 space-y-6 animate-in fade-in duration-300">
      {/* Top Action Bar */}
      <div className="flex justify-between items-center">
        <Link href={`/crew/${crewId}`}>
          <Button
            variant="ghost"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white pl-0"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Profile
          </Button>
        </Link>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="font-semibold shadow-sm text-slate-600"
          >
            <Download className="w-4 h-4 mr-2" /> Export PDF
          </Button>
          <Button className="font-semibold bg-emerald-600 hover:bg-emerald-700 shadow-sm">
            <Check className="w-4 h-4 mr-2" /> Approve Month
          </Button>
        </div>
      </div>

      <WorkRestHeader member={mockMember} />
      <WorkRestGrid />
      <WorkRestPolicy />
    </div>
  );
}
