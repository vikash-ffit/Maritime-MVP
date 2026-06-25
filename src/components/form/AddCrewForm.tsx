"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddCrewForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-2">
      {/* Names Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="firstName"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            First Name *
          </Label>
          <Input
            id="firstName"
            placeholder="First name"
            required
            className="bg-slate-50/50"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="middleName"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Middle Name
          </Label>
          <Input
            id="middleName"
            placeholder="Middle name"
            className="bg-slate-50/50"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="lastName"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Last Name
          </Label>
          <Input
            id="lastName"
            placeholder="Last name"
            className="bg-slate-50/50"
          />
        </div>
      </div>

      {/* Contact Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Email ID
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="bg-slate-50/50"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="contact"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Contact Details
          </Label>
          <Input
            id="contact"
            type="tel"
            placeholder="+1 555 000 0000"
            className="bg-slate-50/50"
          />
        </div>
      </div>

      {/* DOB & Rank Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="dob"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Date of Birth
          </Label>
          <Input id="dob" type="date" className="bg-slate-50/50" />
          <p className="text-xs text-blue-500 mt-1">
            Mariners should be at least 18 years old
          </p>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="rank"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Rank *
          </Label>
          <Select required>
            <SelectTrigger className="bg-slate-50/50">
              <SelectValue placeholder="Select Rank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="captain">Captain</SelectItem>
              <SelectItem value="chief_engineer">Chief Engineer</SelectItem>
              <SelectItem value="first_officer">First Officer</SelectItem>
              {/* Add your ranks here */}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Address & Company Row */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label
            htmlFor="address"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Address
          </Label>
          <Input
            id="address"
            placeholder="Address"
            className="bg-slate-50/50"
          />
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="previousCompany"
            className="text-xs font-bold text-slate-500 uppercase"
          >
            Previous Company
          </Label>
          <Input
            id="previousCompany"
            placeholder="Previous Company"
            className="bg-slate-50/50"
          />
        </div>
      </div>

      {/* Draft Approval Flow Section */}
      <div className="space-y-4 pt-4 border-t">
        <h3 className="text-sm font-bold text-blue-700 uppercase">
          Draft Approval Flow
        </h3>
        <p className="text-sm font-medium text-slate-700">
          Select shore approvers
        </p>
        <p className="text-xs text-slate-500">
          Required approvers are locked from the approval master. Optional
          approvers can be added per crew draft before the approval emails are
          sent.
        </p>
        <div className="p-4 bg-slate-50 border rounded-md text-sm text-slate-500 italic">
          No active approvers are configured in the crew approval master.
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end items-center gap-3 pt-6">
        {/* Note: In shadcn, we usually use DialogClose for the cancel button to dismiss the modal automatically */}
        <Button type="button" variant="outline" className="px-6">
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          Create Member
        </Button>
      </div>
    </form>
  );
}
