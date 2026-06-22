
export enum UserRole {
  ADMIN = 'Admin',
  OWNER = 'PG Owner',
  MANAGER = 'PG Manager'
}

export enum RentStatus {
  PAID = 'Paid',
  DUE = 'Due',
  OVERDUE = 'Overdue'
}

export enum UnitStatus {
  AVAILABLE = 'Available',
  OCCUPIED = 'Occupied',
  NOTICE = 'On Notice'
}

export interface Tenant {
  id: string;
  name: string;
  unitNumber: string;
  phone: string;
  rentAmount: number;
  rentStatus: RentStatus;
  noticePeriod: boolean;
  noticeEndDate?: string;
  joiningDate: string;
}

export enum PropertyType {
  PG = 'pg',
  FLAT = 'flat',
  HOUSE = 'house',
  COMMERCIAL = 'commercial'
}

export interface Unit {
  id: string;
  propertyId?: string;
  unitNumber: string;
  capacity: number;
  occupancy: number;
  status: UnitStatus;
  floor: number;
  type: string;
  rent: number;
  deposit: number;
  description: string;
  isOccupied: boolean;
  tenantId?: string;
}

export interface RentRecord {
  id: string;
  tenantName: string;
  tenantId: string;
  unitNumber: string;
  month: string;
  amount: number;
  dueDate: string;
  status: RentStatus;
}

export interface Property {
  id?: string;
  name: string;
  type: PropertyType;
  description: string;
  address: string;
  ownerId?: string;
  managerId?: string;
  units?: Unit[];
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
