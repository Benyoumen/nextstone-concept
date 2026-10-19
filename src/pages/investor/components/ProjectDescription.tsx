
import { FileSearch } from "lucide-react";

type ProjectDescriptionProps = {
  description?: string;
};

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  if (!description) return null;
  
  return (
    <div className="mt-7 mb-1">
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <FileSearch className="h-5 w-5 text-indigo-600" />
        Descrição Técnica do Projeto
      </h3>
      <div className="text-gray-700 text-md bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
        {description}
      </div>
    </div>
  );
}
