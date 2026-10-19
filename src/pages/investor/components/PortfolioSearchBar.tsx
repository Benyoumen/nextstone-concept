
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
};

export function PortfolioSearchBar({ searchQuery, setSearchQuery }: Props) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <Input
        placeholder="Buscar investimento por projeto ou incorporadora..."
        className="pl-10"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}
