"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut, Key } from "lucide-react";

export default function ProfileActions() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-0">
      <Button variant="outline" className="font-semibold shadow-sm">
        <Key className="w-4 h-4 mr-2 text-slate-500" />
        Change Password
      </Button>
      <Button
        variant="destructive"
        className="font-bold shadow-sm"
        onClick={handleLogout}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}
