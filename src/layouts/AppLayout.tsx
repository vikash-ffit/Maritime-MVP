"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "sonner";
import { UserRole } from "../../types/types";
import { PageTitleProvider } from "@/components/PageTitleContext";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const LayoutContent: React.FC<{
  children: React.ReactNode;
  userRole: UserRole;
}> = ({ children, userRole }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleLogout = async () => {
    toast.success("Successfully logged out!");
    await signOut({ redirect: false });
    router.push("/");
  };

  const isAuthRoute =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/register") ||
    pathname === "/";

  if (isAuthRoute) {
    return <>{children}</>;
  }

  return (
    <div className={`flex h-screen bg-background overflow-hidden`}>
      <div
        className={`fixed z-20 h-full transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggle={toggleSidebar}
          currentRole={userRole}
          onLogout={handleLogout}
        />
      </div>
      <div
        className={`flex-1 flex flex-col transition-all duration-300 min-w-0`}
      >
        <Navbar
          currentRole={userRole}
          onRoleChange={() => {}}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto overflow-x-hidden min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
};

const AppLayout: React.FC<{
  children: React.ReactNode;
  userRole: UserRole;
}> = ({ children, userRole }) => {
  return (
    <PageTitleProvider>
      <LayoutContent userRole={userRole}>{children}</LayoutContent>
    </PageTitleProvider>
  );
};

export default AppLayout;
