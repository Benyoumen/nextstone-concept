import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Plus, Search, Building2 } from "lucide-react";

const sampleProjects = [
  {
    id: "1",
    name: "Vista Verdejante",
    tipo: "Residencial",
    categoria: "Apartamentos", 
    unidades: "120 Apartamentos", 
    andares: "12",
    precoMedio: "R$ 350.000",
    vgv: "R$ 42.000.000",
    fase: "RI aprovado",
    meta: "R$ 15.000.000",
    tir: "18%",
    construtora: "Construde Ltda",
  },
];

export default function Empreendimentos() {
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState(sampleProjects);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = projects.filter(project => 
      project.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProjects(filtered);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h1 className="text-3xl font-bold">Empreendimentos</h1>
        <Button asChild>
          <Link to="/dashboard/empreendimentos/novo">
            <Plus className="h-5 w-5 mr-2" />
            <span>Novo Empreendimento</span>
          </Link>
        </Button>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Buscar" 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empreendimento</TableHead>
                <TableHead>Tipo/Categoria</TableHead>
                <TableHead>Unidades/andares</TableHead>
                <TableHead>VGV/Preço médio</TableHead>
                <TableHead>Financiamento/Fase atual</TableHead>
                <TableHead>Est. TIR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0"></div>
                        <div>
                          <div className="font-medium">{project.name}</div>
                          <div className="text-sm text-muted-foreground">{project.construtora}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>{project.tipo}</div>
                      <div className="text-sm text-muted-foreground">{project.categoria}</div>
                    </TableCell>
                    <TableCell>
                      <div>{project.unidades}</div>
                      <div className="text-sm text-muted-foreground">{project.andares} andares</div>
                    </TableCell>
                    <TableCell>
                      <div>{project.vgv}</div>
                      <div className="text-sm text-muted-foreground">{project.precoMedio}</div>
                    </TableCell>
                    <TableCell>
                      <div>{project.meta}</div>
                      <div className="text-sm text-muted-foreground">Fase: {project.fase}</div>
                    </TableCell>
                    <TableCell>
                      <div>{project.tir}</div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    <div className="flex flex-col items-center justify-center">
                      <div className="p-3 bg-gray-100 rounded-full mb-3">
                        <Building2 className="h-6 w-6 text-gray-500" />
                      </div>
                      <Button asChild variant="outline">
                        <Link to="/dashboard/empreendimentos/novo">
                          Cadastre seu primeiro empreendimento
                        </Link>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
