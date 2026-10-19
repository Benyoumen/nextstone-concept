import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Plus, 
  Search, 
  ArrowUpDown, 
  FileText, 
  MessageSquare 
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock project status components
const StatusBadge = ({ status }: { status: string }) => {
  switch (status.toLowerCase()) {
    case 'em análise':
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Em Análise</Badge>;
    case 'aprovado':
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Aprovado</Badge>;
    case 'negociação':
      return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Negociação</Badge>;
    case 'documentação':
      return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Documentação</Badge>;
    case 'recusado':
      return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Recusado</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function ProjetosLista() {
  const [filterStatus, setFilterStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data
  const projects = [
    {
      id: 1,
      name: "Residencial Vista Mar",
      developer: "Construtora Litoral",
      location: "Santos, SP",
      value: "R$ 12 milhões",
      status: "Em análise",
      createdAt: "15/03/2025",
      estimatedCommission: "R$ 60.000",
    },
    {
      id: 2,
      name: "Edifício Comercial Central",
      developer: "Grupo Empresarial Capital",
      location: "São Paulo, SP",
      value: "R$ 8 milhões",
      status: "Negociação",
      createdAt: "02/04/2025",
      estimatedCommission: "R$ 40.000",
    },
    {
      id: 3,
      name: "Condomínio Parque Verde",
      developer: "Construtora Horizonte",
      location: "Campinas, SP",
      value: "R$ 15 milhões",
      status: "Documentação",
      createdAt: "10/03/2025",
      estimatedCommission: "R$ 75.000",
    },
    {
      id: 4,
      name: "Centro Empresarial Sky Tower",
      developer: "Grupo Inovação",
      location: "Belo Horizonte, MG",
      value: "R$ 20 milhões",
      status: "Aprovado",
      createdAt: "28/02/2025",
      estimatedCommission: "R$ 100.000",
    },
    {
      id: 5,
      name: "Loteamento Jardins",
      developer: "Terras Incorporações",
      location: "Ribeirão Preto, SP",
      value: "R$ 7 milhões",
      status: "Recusado",
      createdAt: "05/02/2025",
      estimatedCommission: "R$ 35.000",
    },
  ];
  
  const filteredProjects = projects.filter(project => {
    const matchesStatus = filterStatus ? project.status.toLowerCase() === filterStatus.toLowerCase() : true;
    const matchesSearch = searchQuery 
      ? project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    return matchesStatus && matchesSearch;
  });
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meus Projetos</h1>
          <p className="text-muted-foreground">
            Gerencie todos os seus projetos cadastrados na plataforma.
          </p>
        </div>
        <Button asChild variant="default" className="bg-slate-800 text-white hover:bg-slate-700">
          <Link to="/originador/projetos/novo">
            <Plus className="mr-2 h-4 w-4" /> Cadastrar Projeto
          </Link>
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar projetos..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="em análise">Em Análise</SelectItem>
            <SelectItem value="documentação">Documentação</SelectItem>
            <SelectItem value="negociação">Negociação</SelectItem>
            <SelectItem value="aprovado">Aprovado</SelectItem>
            <SelectItem value="recusado">Recusado</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[280px]">Projeto</TableHead>
              <TableHead>Local</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Comissão Est.</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded bg-slate-100 p-2 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-slate-600" />
                      </div>
                      <div>
                        <div className="font-medium">{project.name}</div>
                        <div className="text-sm text-muted-foreground">{project.developer}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{project.location}</TableCell>
                  <TableCell>{project.value}</TableCell>
                  <TableCell><StatusBadge status={project.status} /></TableCell>
                  <TableCell>{project.createdAt}</TableCell>
                  <TableCell className="text-right font-medium">{project.estimatedCommission}</TableCell>
                  <TableCell>
                    <div className="flex justify-center space-x-2">
                      <Button variant="ghost" size="icon" asChild className="hover:bg-slate-100">
                        <Link to={`/originador/projetos/${project.id}`}>
                          <FileText className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-32 text-center">
                  Nenhum projeto encontrado com os critérios selecionados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
