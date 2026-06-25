"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Building2, Ship, Anchor, ArrowRight, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [activePortal, setActivePortal] = useState<"SHORE" | "SHIP" | null>(
    null,
  );
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent, role: "SHORE" | "SHIP") => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const email =
      role === "SHORE" ? "shore.crew@navsuite.com" : "ship.crew@navsuite.com";

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid password. Try Password1234");
      setIsLoading(false);
    } else {
      // Upon successful login, redirect to the dashboard
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden font-sans">
      {/* Center Navsuite Badge (Absolute Positioned) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 hidden md:flex pointer-events-none">
        <div className="w-20 h-20 bg-slate-950 rounded-full border-[6px] border-white flex items-center justify-center shadow-2xl">
          <Anchor className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="bg-slate-950 text-white text-[10px] font-bold tracking-widest px-4 py-1.5 rounded-full border border-slate-800">
          NAVSUITE
        </div>
      </div>

      {/* LEFT SIDE: SHORE PORTAL */}
      <div className="flex-1 bg-[#F5F9FF] flex flex-col items-center justify-center p-8 md:p-12 relative min-h-[50vh]">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full transition-all duration-500">
          <div className="w-28 h-28 bg-blue-600 rounded-[28px] flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20">
            <Building2 className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-blue-600 text-[11px] font-extrabold tracking-[0.2em] mb-2 uppercase">
            Operations Portal
          </h2>
          <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Shore
          </h1>

          <p className="text-slate-600 font-medium leading-relaxed mb-8">
            Fleet management, compliance reporting, crew administration, and
            analytics for shore-based staff.
          </p>

          {activePortal !== "SHORE" ? (
            <button
              onClick={() => setActivePortal("SHORE")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            >
              Enter Shore Portal <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <form
              onSubmit={(e) => handleLogin(e, "SHORE")}
              className="w-full space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-300"
            >
              <div className="text-left">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Shore Email
                </label>
                <input
                  disabled
                  value="shore.crew@navsuite.com"
                  className="w-full bg-slate-100 border border-slate-200 text-slate-500 px-4 py-3 rounded-xl mt-1 font-medium"
                />
              </div>
              <div className="text-left">
                <label className="text-xs font-bold text-slate-500 uppercase">
                  Password
                </label>
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs font-bold">{error}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActivePortal(null);
                    setPassword("");
                    setError("");
                  }}
                  className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-70"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Login Securely"
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 mt-12 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
              Fleet Tracking
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
              Reports
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{" "}
              Admin
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: SHIP PORTAL */}
      <div className="flex-1 bg-[#091120] flex flex-col items-center justify-center p-8 md:p-12 relative min-h-[50vh]">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full transition-all duration-500">
          <div className="w-28 h-28 bg-[#00E5FF] rounded-[28px] flex items-center justify-center mb-8 shadow-xl shadow-[#00E5FF]/10">
            <Ship className="w-12 h-12 text-slate-900" />
          </div>

          <h2 className="text-[#00E5FF] text-[11px] font-extrabold tracking-[0.2em] mb-2 uppercase">
            Operations Portal
          </h2>
          <h1 className="text-6xl font-black text-white mb-6 tracking-tight">
            Ship
          </h1>

          <p className="text-slate-400 font-medium leading-relaxed mb-8">
            Onboard access for ship officers, engineers, and crew members.
            Work-rest, PMS, safety, and more.
          </p>

          {activePortal !== "SHIP" ? (
            <button
              onClick={() => setActivePortal("SHIP")}
              className="bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-slate-900 font-bold py-4 px-8 rounded-full flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#00E5FF]/10"
            >
              Enter Ship Portal <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <form
              onSubmit={(e) => handleLogin(e, "SHIP")}
              className="w-full space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-300"
            >
              <div className="text-left">
                <label className="text-xs font-bold text-slate-400 uppercase">
                  Ship Email
                </label>
                <input
                  disabled
                  value="ship.crew@navsuite.com"
                  className="w-full bg-slate-900 border border-slate-800 text-slate-400 px-4 py-3 rounded-xl mt-1 font-medium"
                />
              </div>
              <div className="text-left">
                <label className="text-xs font-bold text-slate-400 uppercase">
                  Password
                </label>
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-700 text-white px-4 py-3 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] font-medium"
                />
              </div>
              {error && (
                <p className="text-red-400 text-xs font-bold">{error}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActivePortal(null);
                    setPassword("");
                    setError("");
                  }}
                  className="px-6 py-3 rounded-xl font-bold text-slate-400 hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-[#00E5FF] text-slate-900 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-[#00E5FF]/90 transition-colors disabled:opacity-70"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Login Securely"
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 mt-12 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>{" "}
              User Login
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>{" "}
              Crew Login
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>{" "}
              PMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
