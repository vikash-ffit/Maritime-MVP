import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Edit2 } from "lucide-react";
import EditCrewForm from "./EditCrewForm";

export default function EditCrewModal({ crewMember }: { crewMember: any }) {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex items-center justify-center h-8 w-8 rounded-full hover:bg-blue-50 text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
        <Edit2 className="w-4 h-4" />
      </DialogTrigger>
      
      {/* 🚀 FIXED: Added sm: and lg: modifiers to override Shadcn's default locks */}
      <DialogContent className="w-[70vw] sm:max-w-[90vw] lg:max-w-7xl max-h-[90vh] p-0 overflow-hidden bg-white dark:bg-slate-950">
        
        <DialogHeader className="p-6 bg-slate-50 dark:bg-slate-900 border-b">
          <DialogTitle className="text-xl font-bold">
            Edit Crew Profile
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Manage details for {crewMember.firstName} {crewMember.lastName}
          </p>
        </DialogHeader>

        {/* Keeping the ScrollArea so long forms don't break the screen */}
        <ScrollArea className="px-6 max-h-[65vh]">
          <EditCrewForm data={crewMember} />
        </ScrollArea>

        <DialogFooter className="p-6 bg-slate-50 dark:bg-slate-900 border-t mt-auto">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}