import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust path to your route.ts
import AppLayout from "@/layouts/AppLayout";
import { UserRole } from "../../../types/types";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 🚀 Securely fetch the session on the server
  const session = await getServerSession(authOptions);

  // Default to SHIP if missing, casting to UserRole enum
  const userRole = (session?.user?.role as UserRole) || UserRole.SHIP;

  return (
    // 🚀 Pass the session role into your AppLayout
    <AppLayout userRole={userRole}>{children}</AppLayout>
  );
}
