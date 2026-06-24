import { LayoutDashboard } from "lucide-react";

import {PoolCrewMember} from "../../../types/types";

export const NAV_ITEMS = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/dashboard",
  },
];

export const STAT_COLORS = {
  TOTAL: "text-blue-500 bg-blue-100 dark:bg-blue-900/20",
  ONBOARD: "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/20",
  AVAILABLE: "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/20",
  ALERTS: "text-red-500 bg-red-100 dark:bg-red-900/20",
  ASSIGNED: "text-blue-500 bg-blue-100 dark:bg-blue-900/20",
  PENDING: "text-amber-600 bg-amber-100 dark:bg-amber-900/20",
  COMPLETED: "text-slate-600 bg-slate-100 dark:bg-slate-800",
} as const;

export const MOCK_CREW: PoolCrewMember[] = [
  {
    id: "1",
    firstName: "Rajveer",
    lastName: "Singh",
    rank: "3rd Officer",
    code: "CRW-32",
    status: "ONBOARD",
    vessel: "Black Pearl",
    nationality: null,
    joinDate: "16 Jun 2026",
    contractType: "3rd Officer · 6 mo",
    shoreOn: "03 Jun 2026",
    shipOn: "05 Jun 2026",
  },
  {
    id: "2",
    firstName: "Raman",
    lastName: "Yadav",
    rank: "Chief Officer",
    code: "CRW-001",
    status: "ONBOARD",
    vessel: "Black Pearl",
    nationality: "Indian",
    joinDate: "01 May 2026",
    contractType: "Chief Officer · 4 mo",
    shoreOn: "20 Apr 2026",
    shipOn: "25 Apr 2026",
  },
  {
    id: "3",
    firstName: "Utkarsh",
    lastName: "Jha",
    rank: "Chief Officer",
    code: "CREW-001",
    status: "ASSIGNED",
    vessel: "Black Pearl",
    nationality: "Indian",
    joinDate: "10 Jul 2026",
    contractType: "Chief Officer · 4 mo",
    shoreOn: "01 Jul 2026",
    shipOn: "05 Jul 2026",
  },
];
