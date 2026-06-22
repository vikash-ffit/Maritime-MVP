"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserRole } from "../../types/types";
import { LogOut, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { NAV_ITEMS } from "@/app/constants/constants";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
  currentRole: UserRole;
  onLogout: () => void;
}

const Sidebar = ({ isOpen, toggle, currentRole, onLogout }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative h-full  bg-card flex flex-col",
        "duration-300 ease-in-out border-r border-border transition-all",
        isOpen ? "w-64" : "w-20",
      )}
    >
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div
          className={cn(
            "flex items-center gap-3 font-bold text-xl tracking-tight",
            !isOpen && "hidden",
          )}
        >
          <div
            className={cn(
              "w-8 h-8 bg-primary rounded-lg",
              "flex items-center justify-center text-primary-foreground",
            )}
          >
            <LayoutGrid size={18} />
          </div>
          <span className="text-foreground">Maritime</span>
        </div>

        {!isOpen && (
          <div
            className={cn(
              "w-8 h-8 bg-primary rounded-lg",
              "flex items-center justify-center text-primary-foreground mx-auto",
            )}
          >
            <LayoutGrid size={18} />
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                isActive
                  ? "bg-secondary text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                !isOpen && "justify-center",
              )}
              title={!isOpen ? item.label : undefined}
            >
              <span className="shrink-0">{item.icon}</span>
              <span
                className={cn(
                  "whitespace-nowrap transition-opacity duration-300",
                  !isOpen && "hidden",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 space-y-4">
        <button
          onClick={onLogout}
          className={cn(
            "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200",
            "text-muted-foreground hover:bg-destructive/10 hover:text-destructive cursor-pointer",
            !isOpen && "justify-center",
          )}
          title={!isOpen ? "Logout" : undefined}
        >
          <LogOut size={20} />
          <span className={cn(!isOpen && "hidden")}>Logout</span>
        </button>

        <button
          onClick={toggle}
          className={cn(
            "hidden absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6",
            "md:flex items-center justify-center text-foreground",
            "bg-card border border-border rounded-full cursor-pointer",
            "hover:bg-secondary transition-colors shadow-sm",
          )}
        >
          {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
