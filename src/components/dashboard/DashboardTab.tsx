import {
  DashboardStats,
  DeploymentStat,
  ExpiryAlert,
} from "../../../types/types";
import CrewStats from "./CrewStats";
import FleetDeployment from "./FleetDeployment";
import UrgentExpiries from "./UrgentExpiries";

const DashboardTab = () => {
  const stats: DashboardStats = {
    total: 9,
    onboard: 2,
    available: 0,
    alerts: 1,
  };

  const deployments: DeploymentStat[] = [
    {
      category: "GENERAL",
      current: 0,
      total: 6,
    },
    {
      category: "DECK",
      current: 2,
      total: 3,
    },
    {
      category: "ENGINE",
      current: 4,
      total: 5,
    },
    {
      category: "CATERING",
      current: 1,
      total: 2,
    },
    {
      category: "ELECTRICAL",
      current: 1,
      total: 1,
    },
  ];

  const expiries: ExpiryAlert[] = [
    {
      id: "cert_123",
      name: "STCW Basic Safety",
      status: "EXPIRED", // Must match 'VALID' | 'EXPIRING_SOON' | 'EXPIRED'
      expiresAt: new Date("2026-03-24T00:00:00.000Z"),
      crewName: "Raman Yadav",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <CrewStats stats={stats} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <FleetDeployment deployments={deployments} />
        <UrgentExpiries expiries={expiries} />
      </div>
    </div>
  );
};

export default DashboardTab;
