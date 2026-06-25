/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, Ship, ChevronDown, Building2 } from "lucide-react";
import { useTheme } from "next-themes";
import { UserRole } from "../../types/types";

interface NavbarProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  currentRole = UserRole.SHIP,
  toggleSidebar,
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 sticky top-0 z-20">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
          title="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>

        {/* Mobile Brand Logo */}
        <div className="md:hidden flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
            <span className="font-bold">M</span>
          </div>
          <span className="font-bold text-foreground tracking-tight">
            Maritime
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="hidden sm:flex items-center gap-4 border-r border-border pr-5">
          <div
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
              currentRole === UserRole.SHORE
                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400"
                : "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-400"
            }`}
          >
            {currentRole === UserRole.SHORE ? (
              <Building2 size={12} strokeWidth={3} />
            ) : (
              <Ship size={12} strokeWidth={3} />
            )}

            {/* 🚀 FIXED: Appended " MODE" to the role text */}
            <span className="text-[10px] font-extrabold uppercase tracking-widest">
              {currentRole} MODE
            </span>
          </div>

          {/* Mode / Connection Status */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-extrabold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
              Live Sync
            </span>
          </div>

          {/* Active Vessel Selector */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer transition-all group">
            <Ship
              size={16}
              className="text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-slate-400 uppercase leading-none mb-0.5">
                Active Vessel
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                Black Pearl
              </span>
            </div>
            <ChevronDown size={14} className="text-slate-400 ml-1" />
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
          title="Toggle Theme"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )
          ) : (
            <div className="w-[18px] h-[18px]" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
