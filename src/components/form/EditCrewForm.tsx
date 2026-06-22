import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function EditCrewForm({ data }: { data: any }) {
  return (
    <div className="space-y-8 py-4">
      {/* Section 1: Personal Information */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">Personal Details</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>First Name</Label>
            <Input defaultValue={data.firstName} />
          </div>
          <div className="space-y-2">
            <Label>Last Name</Label>
            <Input defaultValue={data.lastName} />
          </div>
          <div className="space-y-2">
            <Label>Rank</Label>
            <Input defaultValue={data.rank} />
          </div>
        </div>
      </div>

      <Separator />

      {/* Section 2: Vessel & Contract */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">Contract Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Vessel Name</Label>
            <Input defaultValue={data.vessel} />
          </div>
          <div className="space-y-2">
            <Label>Contract Type</Label>
            <Input defaultValue={data.contractType} />
          </div>
          <div className="space-y-2">
            <Label>Join Date</Label>
            <Input type="date" defaultValue={data.joinDate} />
          </div>
        </div>
      </div>

      <Separator />

      {/* Section 3: Logistics (Shore/Ship Dates) */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600">Logistics & Dates</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Shore On</Label>
            <Input type="date" defaultValue={data.shoreOn} />
          </div>
          <div className="space-y-2">
            <Label>Ship On</Label>
            <Input type="date" defaultValue={data.shipOn} />
          </div>
          <div className="space-y-2">
            <Label>Ship Off</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Shore Off</Label>
            <Input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
}