import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "../ui/textarea";

export default function EditCrewForm({ data }: { data: any }) {
  return (
    <div className="space-y-8 p-4">
      {/* Section 1: Personal & Contact Information */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Personal Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input defaultValue={data.firstName} placeholder="e.g. Utkarsh" />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input defaultValue={data.lastName} placeholder="e.g. Jha" />
          </div>
          <div className="space-y-2">
            <Label>Date of Birth</Label>
            <Input type="date" defaultValue={data.dob} />
          </div>
          <div className="space-y-2">
            <Label>Nationality</Label>
            <Input defaultValue={data.nationality} placeholder="e.g. Indian" />
          </div>
          <div className="space-y-2">
            <Label>Contact Number</Label>
            <Input
              defaultValue={data.contactNumber}
              placeholder="e.g. 9717563658"
            />
          </div>
          <div className="space-y-2">
            <Label>Current Rank</Label>
            <Input defaultValue={data.rank} placeholder="e.g. Chief Officer" />
          </div>
        </div>
      </div>

      <Separator />

      {/* Section 2: Vessel & Contract Setup */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Contract Setup
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Vessel Name</Label>
            <Input defaultValue={data.vessel} placeholder="e.g. Black Pearl" />
          </div>
          <div className="space-y-2">
            <Label>Joining Rank</Label>
            <Input
              defaultValue={data.joiningRank || data.rank}
              placeholder="e.g. Chief Officer"
            />
          </div>
          <div className="space-y-2">
            <Label>Scheduled Joining Date</Label>
            <Input type="date" defaultValue={data.joinDate} />
          </div>
          <div className="space-y-2">
            <Label>Contract Period</Label>
            <Input
              defaultValue={data.contractPeriod}
              placeholder="e.g. 6 months"
            />
          </div>
          <div className="space-y-2">
            <Label>Planned Sign-off Date</Label>
            <Input type="date" defaultValue={data.plannedSignOff} />
          </div>
        </div>

        <div className="space-y-2 mt-4">
          <Label>Remarks</Label>
          <Textarea
            defaultValue={data.remarks}
            placeholder="Add any operational notes or contract remarks here..."
            className="resize-none"
            rows={3}
          />
        </div>
      </div>

      <Separator />

      {/* Section 3: Workflow & Logistics */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Workflow Stages
        </h4>

        {/* Shore Signed On */}
        <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
          <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Shore Signed On
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-xs">Date</Label>
              <Input type="date" defaultValue={data.shoreOn} />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Country</Label>
              <Input
                defaultValue={data.shoreOnCountry}
                placeholder="e.g. India"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Port</Label>
              <Input
                defaultValue={data.shoreOnPort}
                placeholder="e.g. Mumbai"
              />
            </div>
          </div>
        </div>

        {/* Ship Signed On */}
        <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
          <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Ship Signed On
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-xs">Date</Label>
              <Input type="date" defaultValue={data.shipOn} />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Country</Label>
              <Input
                defaultValue={data.shipOnCountry}
                placeholder="e.g. India"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Port</Label>
              <Input defaultValue={data.shipOnPort} placeholder="e.g. Mumbai" />
            </div>
          </div>
        </div>

        {/* Ship Signed Off */}
        <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
          <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Ship Signed Off
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-xs">Date</Label>
              <Input type="date" defaultValue={data.shipOff} />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Country</Label>
              <Input
                defaultValue={data.shipOffCountry}
                placeholder="e.g. Singapore"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Port</Label>
              <Input defaultValue={data.shipOffPort} placeholder="e.g. ABC" />
            </div>
          </div>
        </div>

        {/* Shore Signed Off */}
        <div className="space-y-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800">
          <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Shore Signed Off
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-xs">Date</Label>
              <Input type="date" defaultValue={data.shoreOff} />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Country</Label>
              <Input
                defaultValue={data.shoreOffCountry}
                placeholder="e.g. Singapore"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs">Port</Label>
              <Input defaultValue={data.shoreOffPort} placeholder="e.g. ABC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
