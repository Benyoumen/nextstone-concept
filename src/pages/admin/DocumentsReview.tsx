import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Download, Eye, CheckCircle, XCircle, Clock, FileText, AlertTriangle } from "lucide-react";

const DocumentsReview = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const documents = [
    {
      id: 1,
      projectName: "Residencial Jardim Norte",
      developer: "Incorporadora ABC",
      documentType: "Estudo de Viabilidade",
      uploadDate: "2024-01-15",
      status: "pending",
      assignedTo: "Legal",
      priority: "high",
      fileSize: "2.4 MB"
    },
    {
      id: 2,
      projectName: "Comercial Tech Plaza",
      developer: "XYZ Desenvolvimento",
      documentType: "Planta Baixa",
      uploadDate: "2024-01-14",
      status: "approved",
      assignedTo: "Data",
      priority: "medium",
      fileSize: "8.7 MB"
    },
    {
      id: 3,
      projectName: "Shopping Center Sul",
      developer: "Mega Incorporações",
      documentType: "Análise Financeira",
      uploadDate: "2024-01-13",
      status: "rejected",
      assignedTo: "Finance",
      priority: "high",
      fileSize: "1.2 MB"
    },
    {
      id: 4,
      projectName: "Residencial Vista Verde",
      developer: "Verde Imóveis",
      documentType: "Licença Ambiental",
      uploadDate: "2024-01-12",
      status: "under_review",
      assignedTo: "Legal",
      priority: "medium",
      fileSize: "3.1 MB"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Pendente</Badge>;
      case "under_review":
        return <Badge className="bg-blue-100 text-blue-800"><Eye className="h-3 w-3 mr-1" />Em Análise</Badge>;
      case "approved":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Aprovado</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800"><XCircle className="h-3 w-3 mr-1" />Rejeitado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Alta</Badge>;
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Média</Badge>;
      case "low":
        return <Badge variant="outline">Baixa</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.documentType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pendingCount = documents.filter(d => d.status === "pending").length;
  const underReviewCount = documents.filter(d => d.status === "under_review").length;
  const approvedCount = documents.filter(d => d.status === "approved").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Revisão de Documentos</h1>
        <p className="text-gray-600">Analise e aprove documentos das incorporadoras</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">Aguardando análise</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Análise</CardTitle>
            <Eye className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{underReviewCount}</div>
            <p className="text-xs text-muted-foreground">Sendo revisados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aprovados</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{approvedCount}</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <FileText className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents.length}</div>
            <p className="text-xs text-muted-foreground">Documentos totais</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Documentos para Revisão</CardTitle>
          <CardDescription>
            Gerencie e revise documentos enviados pelas incorporadoras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="pending">Pendentes ({pendingCount})</TabsTrigger>
              <TabsTrigger value="under_review">Em Análise ({underReviewCount})</TabsTrigger>
              <TabsTrigger value="approved">Aprovados</TabsTrigger>
            </TabsList>

            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por projeto, incorporadora ou tipo de documento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filtros</Button>
            </div>

            <TabsContent value="all" className="space-y-4">
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Projeto</TableHead>
                      <TableHead>Incorporadora</TableHead>
                      <TableHead>Tipo de Documento</TableHead>
                      <TableHead>Data de Upload</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Responsável</TableHead>
                      <TableHead>Prioridade</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.projectName}</TableCell>
                        <TableCell>{doc.developer}</TableCell>
                        <TableCell>{doc.documentType}</TableCell>
                        <TableCell>{new Date(doc.uploadDate).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>{getStatusBadge(doc.status)}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{doc.assignedTo}</Badge>
                        </TableCell>
                        <TableCell>{getPriorityBadge(doc.priority)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* Other tab contents would filter by status */}
            <TabsContent value="pending">
              <div className="text-center py-8 text-gray-500">
                Lista de documentos pendentes...
              </div>
            </TabsContent>

            <TabsContent value="under_review">
              <div className="text-center py-8 text-gray-500">
                Lista de documentos em análise...
              </div>
            </TabsContent>

            <TabsContent value="approved">
              <div className="text-center py-8 text-gray-500">
                Lista de documentos aprovados...
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentsReview;
