"use client";

import { Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, usePathname } from "next/navigation";

import DashboardTab from "./DashboardTab";
import CrewPoolTab from "../crew-pool/CrewPoolTab";
import ContractsTab from "../contracts/ContractsTab";
import WorkRestTab from "../work-rest/WorkRestTab";

export default function CrewHeader({ tab }: { tab: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabChange = (value: string) => {
    router.push(`${pathname}?tab=${value}`);
  };

  return (
    <div className="w-full space-y-8">
      <Card className="bg-blue-600 text-white border-none shadow-md overflow-hidden rounded-2xl">
        <CardHeader className="p-6 md:p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-end gap-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h1 className="text-2xl font-bold tracking-tight">
                    Crew Operations
                  </h1>
                </div>
                <p className="text-blue-100 text-sm mt-1">
                  Vessel crew management & records
                </p>
              </div>
            </div>
            <Button
              variant="secondary"
              className="bg-white/10 text-white hover:bg-white/20 border-none w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" /> Export
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="w-full flex justify-center">
        <div className="w-full">
          {/* 🚀 FIX: Changed defaultValue to value, and added onValueChange */}
          <Tabs
            value={tab}
            onValueChange={handleTabChange}
            className="w-full sm:w-auto gap-y-8"
          >
            <div className="flex justify-center w-full">
              <TabsList className="border text-blue-100 justify-center rounded-full px-2 py-6 h-auto flex-wrap sm:flex-nowrap">
                {/* 🚀 FIX: Removed <Link> tags to prevent button-inside-link hydration errors */}
                <TabsTrigger
                  value="dashboard"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  Dashboard
                </TabsTrigger>

                <TabsTrigger
                  value="crew-pool"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  Crew Pool
                </TabsTrigger>

                <TabsTrigger
                  value="contracts"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  Contracts
                </TabsTrigger>

                <TabsTrigger
                  value="work-rest"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  Work/Rest
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard">
              <DashboardTab />
            </TabsContent>
            <TabsContent value="crew-pool">
              <CrewPoolTab />
            </TabsContent>
            <TabsContent value="contracts">
              <ContractsTab />
            </TabsContent>
            <TabsContent value="work-rest">
              <WorkRestTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
