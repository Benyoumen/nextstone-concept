
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

type Props = {
  searchQuery: string;
};

// You can adapt this list to fetch real data when backend is ready
const negotiationProjects = [
  {
    name: "Parque Alto",
    company: "Alphaville",
    stage: "Aguardando Documentação",
    phase: "Negociação Inicial",
    vgv: "R$ 6,5M",
    status: "Em andamento",
    deadline: "10 dias restantes"
  },
  {
    name: "Plaza Offices",
    company: "Tecnisa",
    stage: "Revisão Jurídica",
    phase: "Análise de Proposta",
    vgv: "R$ 4,2M",
    status: "Aguardando Resposta",
    deadline: "5 dias restantes"
  },
  {
    name: "Green Village",
    company: "Eztec",
    stage: "Due Diligence",
    phase: "Negociação de Condições",
    vgv: "R$ 5,8M",
    status: "Em diligência",
    deadline: "20 dias restantes"
  },
];

export function PortfolioNegotiationSummary({ searchQuery }: Props) {
  // Normalize query for case-insensitive compare
  const query = searchQuery.toLowerCase().trim();
  
  // Filter projects based on name or company
  const filteredProjects = negotiationProjects.filter(project => {
    if (query === "") return true;
    
    const projectNameMatch = project.name.toLowerCase().includes(query);
    const companyNameMatch = project.company.toLowerCase().includes(query);
    
    return projectNameMatch || companyNameMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredProjects.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 py-10">
          Nenhum projeto encontrado.
        </div>
      ) : (
        filteredProjects.map((project, i) => (
          <Card key={i} className="hover:shadow-lg transition">
            <CardContent className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-1">
                <FolderOpen className="text-gold" />
                <div>
                  <div className="font-semibold">{project.name}</div>
                  <div className="text-xs text-gray-500">{project.company}</div>
                </div>
                <Badge className="ml-auto bg-sand text-black">{project.phase}</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-xs">
                  {project.stage}
                </Badge>
                <span className="text-xs text-gray-600">
                  VGV: <b>{project.vgv}</b>
                </span>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>
                  Status: <span className="font-medium text-gray-800">{project.status}</span>
                </span>
                <span>
                  Prazo: <span className="font-medium text-coral">{project.deadline}</span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
