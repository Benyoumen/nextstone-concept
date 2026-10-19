import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProjectDetail from "./ProjectDetail";

type Project = {
  id: string;
  name: string;
  company: string;
  location: string;
  type: string;
  rating: string;
  vgv: string;
  tir: string;
  units: string;
  fase: string;
  conclusao: string;
  vendido: string;
  description?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: "vista-boulevard",
    name: "Vista Boulevard",
    company: "Alphaville",
    location: "São Paulo, SP",
    type: "Residencial Alto Padrão",
    rating: "A+",
    vgv: "R$ 85M",
    tir: "17.2%",
    units: "128",
    fase: "Construção",
    conclusao: "2027",
    vendido: "72%",
    description: "Empreendimento de alto padrão com vista privilegiada para o skyline da cidade. Unidades de 120 a 280m² com acabamento premium e áreas de lazer completas."
  },
  {
    id: "jardins-residencial",
    name: "Jardins Residencial",
    company: "Eztec",
    location: "Rio de Janeiro, RJ",
    type: "Residencial Médio Padrão",
    rating: "A",
    vgv: "R$ 62M",
    tir: "16.8%",
    units: "96",
    fase: "Lançamento",
    conclusao: "2026",
    vendido: "45%",
    description: "Condomínio residencial com conceito de integração com a natureza. Amplas áreas verdes e unidades sustentáveis em localização privilegiada."
  },
  {
    id: "horizonte-tower",
    name: "Horizonte Tower",
    company: "Tecnisa",
    location: "Belo Horizonte, MG",
    type: "Comercial",
    rating: "B+",
    vgv: "R$ 45M",
    tir: "14.5%",
    units: "32",
    fase: "Terraplanagem",
    conclusao: "2027",
    vendido: "12%",
    description: "Torre comercial com salas e andares corporativos em zona empresarial em desenvolvimento. Possui certificação LEED e tecnologia de ponta."
  }
];

export default function ProjectAnalysis() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Análise de Projetos</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-white rounded-lg border p-5 cursor-pointer transition-all hover:shadow-md ${
              selectedProject.id === project.id ? "border-gold border-2" : "border-gray-200"
            }`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  project.rating === "A+" ? "bg-green-100 text-green-800" :
                  project.rating === "A" ? "bg-green-100 text-green-800" :
                  "bg-yellow-100 text-yellow-800"
                }`}
              >
                {project.rating}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              {project.company} • {project.location}
            </p>
            <p className="text-gray-500 text-xs mb-4">
              <span className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              {project.type}
            </p>

            <div className="grid grid-cols-3 gap-2 text-sm mb-4">
              <div>
                <p className="text-gray-500 text-xs">VGV</p>
                <p className="font-medium">{project.vgv}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">TIR</p>
                <p className="font-medium">{project.tir}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Unidades</p>
                <p className="font-medium">{project.units}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Fase</p>
                <p className="font-medium">{project.fase}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Conclusão</p>
                <p className="font-medium">{project.conclusao}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Vendido</p>
                <p className="font-medium">{project.vendido}</p>
              </div>
            </div>
            
            <Button 
              className="w-full" 
              variant="default"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
            >
              Analisar Projeto
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-800 mb-2">Análise Detalhada</h3>
        <p className="text-sm text-gray-600">
          Detalhes completos e análise de viabilidade do projeto selecionado.
        </p>
      </div>

      {selectedProject && <ProjectDetail project={selectedProject} />}
    </div>
  );
}
