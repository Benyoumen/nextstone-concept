
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectDetail from "../ProjectDetail";

const opportunityProjects = [
  {
    name: "Parque Alto",
    company: "Alphaville",
    location: "Brasília, DF",
    type: "Residencial • Médio Padrão",
    rating: "A+",
    vgv: "R$ 6,5M",
    tir: "18.4%",
    units: "44",
    fase: "Lançamento",
    conclusao: "36 meses",
    vendido: "12%",
    description: "Projeto de condomínio residencial em bairro nobre de Brasília com infraestrutura de lazer completa.",
  },
  {
    name: "Plaza Offices",
    company: "Tecnisa",
    location: "Curitiba, PR",
    type: "Comercial",
    rating: "B+",
    vgv: "R$ 4,2M",
    tir: "15.8%",
    units: "30",
    fase: "Aprovação",
    conclusao: "30 meses",
    vendido: "0%",
    description: "Torre de escritórios modernos com localização privilegiada junto a zona empresarial central de Curitiba.",
  },
  {
    name: "Green Village",
    company: "Eztec",
    location: "Florianópolis, SC",
    type: "Residencial Alto Padrão",
    rating: "A",
    vgv: "R$ 5,8M",
    tir: "16.9%",
    units: "40",
    fase: "Projeto",
    conclusao: "40 meses",
    vendido: "3%",
    description: "Empreendimento sustentável focado em eficiência energética e área verde privilegiada.",
  },
];

export function PortfolioOpportunities() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        {opportunityProjects.map((project, index) => (
          <Card 
            key={index}
            className={`hover:border-gold cursor-pointer transition-all ${selectedProjectIndex === index ? 'border-2 border-gold' : ''}`}
            onClick={() => setSelectedProjectIndex(index)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-3">
                      <Building2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{project.name}</h3>
                      <p className="text-sm text-gray-500">{project.company} • {project.location}</p>
                    </div>
                  </div>
                </div>
                <Badge 
                  className={`${
                    project.rating === "A" || project.rating === "A+" 
                      ? "bg-green-100 text-green-800" 
                      : project.rating === "B+" 
                      ? "bg-yellow-100 text-yellow-800" 
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.rating}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">VGV</p>
                  <p className="font-medium">{project.vgv}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">TIR</p>
                  <p className="font-medium text-green-600">{project.tir}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Unidades</p>
                  <p className="font-medium">{project.units}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Prazo</p>
                  <p className="font-medium">{project.conclusao}</p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <Button size="sm" variant="outline" asChild>
                  <Link to="/investor/due-diligence">
                    Due Diligence
                  </Link>
                </Button>
                <Button size="sm" className="gap-2">
                  <Link to="/investor/due-diligence">
                    Analisar projeto
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="lg:sticky lg:top-4">
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Análise Detalhada</h3>
          <p className="text-sm text-gray-600">Selecione um projeto ao lado para visualizar os detalhes completos e análise de viabilidade.</p>
        </div>
        {opportunityProjects[selectedProjectIndex] && (
          <ProjectDetail project={opportunityProjects[selectedProjectIndex]} />
        )}
      </div>
    </div>
  );
}
