import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  resultCount: number;
}

export default function ContractFilters({ searchTerm, setSearchTerm, resultCount }: FilterProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
      <div className="relative w-full md:w-[400px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input 
          placeholder="Search by crew, rank, vessel, status, or nationality..." 
          className="pl-10 h-11 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="text-sm font-medium text-muted-foreground bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-lg">
        <span className="font-bold text-slate-900 dark:text-slate-100">{resultCount}</span> record{resultCount !== 1 ? 's' : ''} · Page 1 of 1
      </div>
    </div>
  );
}