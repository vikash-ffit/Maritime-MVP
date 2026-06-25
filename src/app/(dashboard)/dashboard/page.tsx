import CrewHeader from "@/components/dashboard/CrewHeader";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CrewPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const currentTab = tab || "dashboard";

  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role || "SHIP";

  return <CrewHeader tab={currentTab} userRole={userRole} />;
}