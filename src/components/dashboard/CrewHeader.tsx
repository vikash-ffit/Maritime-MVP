import { Users, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CrewPoolTab from "../crew-pool/CrewPoolTab";
import DashboardTab from "./DashboardTab";
import Link from "next/link";
import CrewContractCard from "../contracts/ContractCard";
import { MOCK_CREW } from "@/app/constants/constants";
import ContractsTab from "../contracts/ContractsTab";

export default function CrewHeader({tab}: {tab: string}) {
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
          <Tabs defaultValue={tab} className="w-full sm:w-auto gap-y-8">
            <div className="flex justify-center w-full">
              <TabsList className="border text-blue-100 justify-center rounded-full px-2 py-6 h-auto flex-wrap sm:flex-nowrap">
                <TabsTrigger
                  value="dashboard"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  <Link href="?tab=dashboard" className="flex items-center gap-2">
                  Dashboard
                  </Link>
                </TabsTrigger>

                <TabsTrigger
                  value="crew-pool"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  <Link href="?tab=crew-pool" className="flex items-center gap-2">
                  Crew Pool
                  </Link>
                </TabsTrigger>

                <TabsTrigger
                  value="contracts"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  <Link href="?tab=contracts" className="flex items-center gap-2">
                  Contracts
                  </Link>
                </TabsTrigger>

                <TabsTrigger
                  value="work-rest"
                  className="rounded-full px-6 py-4 data-[state=active]:bg-white data-[state=active]:text-blue-700 transition-all"
                >
                  <Link href="?tab=work-rest" className="flex items-center gap-2">
                  Work/Rest
                  </Link>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dashboard">
              <DashboardTab />
            </TabsContent>
            <TabsContent value="crew-pool">
              <CrewPoolTab />
            </TabsContent>
            <TabsContent value="contracts"> <ContractsTab /> </TabsContent>
            <TabsContent value="work-rest"></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
