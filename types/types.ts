
export enum UserRole {
  SHORE = 'SHORE',
  SHIP = 'SHIP'
}

// CREW
export interface DashboardStats {
  total: number;
  onboard: number;
  available: number;
  alerts: number;
}

export interface DeploymentStat {
  category: string;
  current: number;
  total: number;
}

export interface ExpiryAlert {
  id: string;
  name: string;
  status: 'VALID' | 'EXPIRING_SOON' | 'EXPIRED';
  expiresAt: Date;
  crewName: string;
}


export type CrewStatus = 'ONBOARD' | 'AVAILABLE' | 'ASSIGNED' | 'ON_LEAVE' | 'PENDING' | 'COMPLETED';

export interface PoolCrewMember {
  id: string;
  firstName: string;
  lastName: string;
  rank: string;
  code?: string;
  status: CrewStatus;
  vessel: string | null;
  nationality: string | null;
  joinDate?: string;
  contractType?: string;
  shoreOn?: string;
  shipOn?: string;
  shipOff?: string;
  shoreOff?: string;
  remarks?: string;
}

export interface CrewContract {
  id: string;
  firstName: string;
  lastName: string;
  rank: string;
  status: CrewStatus;
  vessel: string;
  joinDate: string;
  contractType: string;
  shoreOn: string;
  shipOn: string;
  shipOff?: string;
  shoreOff?: string;
}

export interface WorkRestRecord {
  id: string;
  memberId: string;
  firstName: string;
  lastName: string;
  rank: string;
  code: string;
  vessel: string;
  days: number;
  workHours: number;
  violations: number;
  signedOn: string;
}

export interface DailyWorkRest {
  date: string;
  dayNumber: number;
  blocks: boolean[]; // 48 boolean values (true = work, false = rest)
  seaPort: 'SEA' | 'PORT';
  watchKeeper: boolean;
  usLine: boolean;
  remarks: string;
}
