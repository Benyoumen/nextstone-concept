
import { Badge } from "@/components/ui/badge";

type ProjectHeaderProps = {
  name: string;
  company: string;
  location: string;
  type: string;
  rating: string;
};

export default function ProjectHeader({ name, company, location, type, rating }: ProjectHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
      <div>
        <h2 className="text-2xl font-bold text-blackrock-800">{name}</h2>
        <div className="text-gray-600">{company} &bull; {location}</div>
        <div className="text-sm text-gray-500 mt-1">{type}</div>
      </div>
      <Badge
        className={`text-md px-3 py-1 ${rating === "A" || rating === "A+" ? "bg-green-100 text-green-800" : rating === "B+" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`}
      >
        {rating}
      </Badge>
    </div>
  );
}
