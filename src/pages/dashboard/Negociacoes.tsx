
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, List, Kanban, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Negociacao = {
  id: string;
  projeto: string;
  fundo: string;
  taxa: string;
  tempoLiberacao: string;
  tipo: "CRI" | "LCI";
  taxaServico: string;
  taxaEstruturacao: string;
  valorTotal: string;
  prazo: string;
  status: "Análise" | "Aprovado" | "Contratado" | "Recusado";
};

const mockNegociacoes: Negociacao[] = [
  {
    id: "1",
    projeto: "Vista Verdejante",
    fundo: "Fundo Alpha",
    taxa: "CDI + 3%",
    tempoLiberacao: "60 dias",
    tipo: "CRI",
    taxaServico: "1,5%",
    taxaEstruturacao: "2%",
    valorTotal: "R$ 15.000.000",
    prazo: "5 anos",
    status: "Análise"
  },
  {
    id: "2",
    projeto: "Jardins Horizonte",
    fundo: "Fundo Beta",
    taxa: "CDI + 2,5%",
    tempoLiberacao: "45 dias",
    tipo: "LCI",
    taxaServico: "1,2%",
    taxaEstruturacao: "1,8%",
    valorTotal: "R$ 10.000.000",
    prazo: "4 anos",
    status: "Aprovado"
  },
  {
    id: "3",
    projeto: "Monte Azul",
    fundo: "Fundo Gamma",
    taxa: "CDI + 3,5%",
    tempoLiberacao: "90 dias",
    tipo: "CRI",
    taxaServico: "1,6%",
    taxaEstruturacao: "2,2%",
    valorTotal: "R$ 20.000.000",
    prazo: "6 anos",
    status: "Contratado"
  }
];

const STATUS_LIST: Array<Negociacao["status"]> = [
  "Análise",
  "Aprovado",
  "Contratado",
  "Recusado"
];

export default function Negociacoes() {
  const [view, setView] = useState<"list" | "kanban">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [negociacoes] = useState<Negociacao[]>(mockNegociacoes);
  const [filteredNegociacoes, setFilteredNegociacoes] = useState<Negociacao[]>(negociacoes);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = negociacoes.filter(nego => 
      nego.projeto.toLowerCase().includes(query.toLowerCase()) ||
      nego.fundo.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNegociacoes(filtered);
  };

  const getStatusColor = (status: Negociacao['status']) => {
    switch (status) {
      case "Análise": return "bg-yellow-100 text-yellow-800";
      case "Aprovado": return "bg-green-100 text-green-800";
      case "Contratado": return "bg-blue-100 text-blue-800";
      case "Recusado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Build static columns for Kanban
  const buildColumns = () => {
    const columns: { [K in Negociacao["status"]]: Negociacao[] } = {
      "Análise": [],
      "Aprovado": [],
      "Contratado": [],
      "Recusado": []
    };
    filteredNegociacoes.forEach(neg => {
      columns[neg.status].push(neg);
    });
    return columns;
  };

  const columns = buildColumns();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Negociações</h1>
        <Tabs value={view} onValueChange={(v) => setView(v as "list" | "kanban")} className="w-auto">
          <TabsList>
            <TabsTrigger value="list" className="flex items-center gap-2">
              <List className="h-4 w-4" />
              <span>Lista</span>
            </TabsTrigger>
            <TabsTrigger value="kanban" className="flex items-center gap-2">
              <Kanban className="h-4 w-4" />
              <span>Kanban</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Buscar negociações" 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs value={view} className="w-full">
        <TabsContent value="list" className="mt-0">
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Projeto</TableHead>
                    <TableHead>Fundo</TableHead>
                    <TableHead>Taxa</TableHead>
                    <TableHead>Liberação</TableHead>
                    <TableHead>Tipo/Categoria</TableHead>
                    <TableHead>Tx Serviço</TableHead>
                    <TableHead>Tx Estruturação</TableHead>
                    <TableHead>Valor Total</TableHead>
                    <TableHead>Prazo</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredNegociacoes.length > 0 ? (
                    filteredNegociacoes.map((negociacao) => (
                      <TableRow key={negociacao.id}>
                        <TableCell>{negociacao.projeto}</TableCell>
                        <TableCell>{negociacao.fundo}</TableCell>
                        <TableCell>{negociacao.taxa}</TableCell>
                        <TableCell>{negociacao.tempoLiberacao}</TableCell>
                        <TableCell>
                          {/* Updated as per latest instruction */}
                          Residencial <br /> Apartamentos
                        </TableCell>
                        <TableCell>{negociacao.taxaServico}</TableCell>
                        <TableCell>{negociacao.taxaEstruturacao}</TableCell>
                        <TableCell>{negociacao.valorTotal}</TableCell>
                        <TableCell>{negociacao.prazo}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(negociacao.status)}>
                            {negociacao.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={10} className="text-center py-10">
                        <div className="flex flex-col items-center justify-center">
                          <div className="p-3 bg-gray-100 rounded-full mb-3">
                            <FileText className="h-6 w-6 text-gray-500" />
                          </div>
                          <p className="text-muted-foreground mb-2">Nenhuma negociação encontrada</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="kanban" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STATUS_LIST.map((status) => (
              <div
                key={status}
                className="p-2 min-h-[300px] bg-white rounded border"
              >
                <div className="mb-3">
                  <h3 className="font-medium">{status}</h3>
                  {status === "Análise" && (
                    <div className="h-1 w-full rounded-full bg-blue-500 mt-1" />
                  )}
                  {status === "Aprovado" && (
                    <div className="h-1 w-full rounded-full bg-orange-500 mt-1" />
                  )}
                  {status === "Contratado" && (
                    <div className="h-1 w-full rounded-full bg-green-500 mt-1" />
                  )}
                  {status === "Recusado" && (
                    <div className="h-1 w-full rounded-full bg-red-500 mt-1" />
                  )}
                </div>
                <div className="space-y-3">
                  {columns[status].length > 0 ? (
                    columns[status].map((negociacao) => (
                      <Card key={negociacao.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h4 className="font-medium">{negociacao.projeto}</h4>
                          <p className="text-sm text-muted-foreground">{negociacao.fundo}</p>
                          <div className="mt-2 text-sm">
                            <p className="flex justify-between">
                              <span>Taxa:</span>
                              <span className="font-medium">{negociacao.taxa}</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Valor:</span>
                              <span className="font-medium">{negociacao.valorTotal}</span>
                            </p>
                            <p className="flex justify-between">
                              <span>Tipo/Categoria:</span>
                              <span className="font-medium">Residencial <br /> Apartamentos</span>
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="h-24 border-2 border-dashed rounded-md flex items-center justify-center text-sm text-muted-foreground">
                      Nenhum item
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

