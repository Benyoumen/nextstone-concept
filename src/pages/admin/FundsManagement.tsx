import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Eye, Edit, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const FundsManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const funds = [
    {
      id: 1,
      name: "Elite Capital Partners",
      type: "FII",
      aum: "R$ 2.5B",
      investments: 12,
      status: "active",
      manager: "João Silva",
      lastActivity: "2024-01-15"
    },
    {
      id: 2,
      name: "Real Estate Ventures",
      type: "Fundo Privado",
      aum: "R$ 890M",
      investments: 8,
      status: "active",
      manager: "Maria Santos",
      lastActivity: "2024-01-14"
    },
    {
      id: 3,
      name: "Urban Development Fund",
      type: "FII",
      aum: "R$ 1.2B",
      investments: 15,
      status: "pending",
      manager: "Carlos Oliveira",
      lastActivity: "2024-01-10"
    },
    {
      id: 4,
      name: "Metropolitan Holdings",
      type: "Fundo Privado",
      aum: "R$ 650M",
      investments: 6,
      status: "inactive",
      manager: "Ana Costa",
      lastActivity: "2024-01-05"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inativo</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredFunds = funds.filter(fund =>
    fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fund.manager.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Fundos</h1>
          <p className="text-gray-600">Acompanhe e gerencie todos os fundos da plataforma</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Fundo
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total de Fundos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">AUM Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.8B</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Fundos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">39</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Investimentos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Fundos</CardTitle>
          <CardDescription>
            Gerencie informações, status e atividades dos fundos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar por nome do fundo ou gestor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filtros</Button>
          </div>

          {/* Funds Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Fundo</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>AUM</TableHead>
                  <TableHead>Investimentos</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Gestor</TableHead>
                  <TableHead>Última Atividade</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFunds.map((fund) => (
                  <TableRow key={fund.id}>
                    <TableCell className="font-medium">{fund.name}</TableCell>
                    <TableCell>{fund.type}</TableCell>
                    <TableCell className="font-mono">{fund.aum}</TableCell>
                    <TableCell>{fund.investments}</TableCell>
                    <TableCell>{getStatusBadge(fund.status)}</TableCell>
                    <TableCell>{fund.manager}</TableCell>
                    <TableCell>{new Date(fund.lastActivity).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            Ver Detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FundsManagement;