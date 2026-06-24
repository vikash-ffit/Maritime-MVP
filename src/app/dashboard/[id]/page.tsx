import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileHero from "../_components/ProfileHero";
import ProfileSections from "../_components/ProfileSections";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CrewProfilePage({ params }: PageProps) {
  const resolvedParams = await params;
  const crewId = resolvedParams.id;

  const mockMember = {
    id: crewId,
    firstName: "Rajveer",
    lastName: "Singh",
    rank: "3rd Officer",
    code: "CRW-32",
    email: "crew1@navsuite.com",
    phone: "1345678923",
    status: "ONBOARD",
    vessel: "Black Pearl",
    joinDate: "16 Jun 2026",
    plannedSignOff: "16 Dec 2026",
  };

  return (
    <div className="max-w-5xl mx-auto w-full animate-in fade-in duration-300">
      {/* Top Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/dashboard?tab=crew-pool">
          <Button
            variant="ghost"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white pl-0"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back to Pool
          </Button>
        </Link>
        <Button variant="outline" className="font-semibold shadow-sm">
          <Download className="w-4 h-4 mr-2 text-slate-500" /> Download Dossier
        </Button>
      </div>

      {/* Content Components */}
      <ProfileHero member={mockMember} />
      <ProfileSections member={mockMember} />
    </div>
  );
}
