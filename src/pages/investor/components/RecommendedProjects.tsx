
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Project = {
  name: string;
  company: string;
  location: string;
  rating: string;
  tir: string;
  vgv: string;
  prazo: string;
};

const recommendedProjects: Project[] = [
  {
    name: "Vista Boulevard",
    company: "Alphaville",
    location: "São Paulo, SP",
    rating: "A+",
    tir: "17.2%",
    vgv: "R$ 85M",
    prazo: "36 meses",
  },
  {
    name: "Jardins Residencial",
    company: "Eztec",
    location: "Rio de Janeiro, RJ",
    rating: "A",
    tir: "16.8%",
    vgv: "R$ 62M",
    prazo: "30 meses",
  },
  {
    name: "Horizonte Tower",
    company: "Tecnisa",
    location: "Belo Horizonte, MG",
    rating: "B+",
    tir: "14.5%",
    vgv: "R$ 45M",
    prazo: "24 meses",
  },
];

export function RecommendedProjects() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Projetos Recomendados</h3>
      <div className="space-y-4">
        {recommendedProjects.map((project, idx) => (
          <Card key={project.name}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{project.name}</h4>
                  <p className="text-sm text-gray-500">
                    {project.company} • {project.location}
                  </p>
                </div>
                <span className={
                  project.rating === "A+" ?
                  "bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded" :
                  project.rating === "A" ?
                  "bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded" :
                  "bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded"
                }>
                  {project.rating}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                <div>
                  <p className="text-gray-500">TIR</p>
                  <p className="font-medium">{project.tir}</p>
                </div>
                <div>
                  <p className="text-gray-500">VGV</p>
                  <p className="font-medium">{project.vgv}</p>
                </div>
                <div>
                  <p className="text-gray-500">Prazo</p>
                  <p className="font-medium">{project.prazo}</p>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-3 w-full">
                <Link to="/investor/projects">Ver detalhes</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
