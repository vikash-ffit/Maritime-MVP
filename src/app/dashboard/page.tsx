import CrewHeader from "@/components/dashboard/CrewHeader";

export default async function CrewPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const currentTab = tab || "dashboard";

  return <CrewHeader tab={currentTab} />;
}