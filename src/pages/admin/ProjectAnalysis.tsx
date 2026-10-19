import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search, FileText, CheckCircle, AlertTriangle, Clock, BarChart3, TrendingUp, Users } from "lucide-react";

const ProjectAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      name: "Residencial Jardim Norte",
      developer: "Incorporadora ABC",
      requestedAmount: "R$ 45M",
      projectType: "Residencial",
      location: "São Paulo, SP",
      submissionDate: "2024-01-15",
      status: "pending_analysis",
      priority: "high",
      estimatedTIR: "16.5%",
      riskScore: 75,
      viabilityScore: null,
      analysisProgress: 15,
      assignedAnalyst: "Ana Silva",
      documents: {
        businessPlan: "submitted",
        financialProjection: "submitted", 
        legalDocs: "pending",
        environmentalStudy: "submitted"
      }
    },
    {
      id: 2,
      name: "Comercial Tech Plaza",
      developer: "XYZ Desenvolvimento",
      requestedAmount: "R$ 78M",
      projectType: "Comercial",
      location: "Rio de Janeiro, RJ",
      submissionDate: "2024-01-10",
      status: "under_analysis",
      priority: "medium",
      estimatedTIR: "18.2%",
      riskScore: 65,
      viabilityScore: null,
      analysisProgress: 60,
      assignedAnalyst: "Carlos Oliveira",
      documents: {
        businessPlan: "approved",
        financialProjection: "under_review", 
        legalDocs: "approved",
        environmentalStudy: "approved"
      }
    },
    {
      id: 3,
      name: "Shopping Center Sul",
      developer: "Mega Incorporações",
      requestedAmount: "R$ 120M",
      projectType: "Comercial",
      location: "Belo Horizonte, MG",
      submissionDate: "2024-01-08",
      status: "approved",
      priority: "high",
      estimatedTIR: "14.8%",
      riskScore: 45,
      viabilityScore: 85,
      analysisProgress: 100,
      assignedAnalyst: "Maria Santos",
      documents: {
        businessPlan: "approved",
        financialProjection: "approved", 
        legalDocs: "approved",
        environmentalStudy: "approved"
      }
    },
    {
      id: 4,
      name: "Residencial Vista Verde",
      developer: "Verde Imóveis",
      requestedAmount: "R$ 32M",
      projectType: "Residencial",
      location: "Salvador, BA",
      submissionDate: "2024-01-05",
      status: "rejected",
      priority: "low",
      estimatedTIR: "12.3%",
      riskScore: 85,
      viabilityScore: 35,
      analysisProgress: 100,
      assignedAnalyst: "João Costa",
      documents: {
        businessPlan: "rejected",
        financialProjection: "rejected", 
        legalDocs: "approved",
        environmentalStudy: "pending"
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending_analysis":
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="h-3 w-3 mr-1" />Aguardando Análise</Badge>;
      case "under_analysis":
        return <Badge className="bg-blue-100 text-blue-800"><BarChart3 className="h-3 w-3 mr-1" />Em Análise</Badge>;
      case "approved":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Aprovado</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800"><AlertTriangle className="h-3 w-3 mr-1" />Rejeitado</Badge>;
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

  const getDocumentStatus = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "under_review":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "rejected":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-gray-400" />;
      case "submitted":
        return <FileText className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getRiskColor = (score: number) => {
    if (score >= 70) return "text-red-600";
    if (score >= 50) return "text-yellow-600";
    return "text-green-600";
  };

  const getViabilityColor = (score: number | null) => {
    if (!score) return "text-gray-400";
    if (score >= 70) return "text-green-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pendingCount = projects.filter(p => p.status === "pending_analysis").length;
  const underAnalysisCount = projects.filter(p => p.status === "under_analysis").length;
  const approvedCount = projects.filter(p => p.status === "approved").length;
  const rejectedCount = projects.filter(p => p.status === "rejected").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Análise de Projetos</h1>
        <p className="text-gray-600">Avalie a viabilidade dos projetos submetidos pelas incorporadoras</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aguardando</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
            <p className="text-xs text-muted-foreground">Projetos pendentes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Análise</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{underAnalysisCount}</div>
            <p className="text-xs text-muted-foreground">Sendo analisados</p>
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
            <CardTitle className="text-sm font-medium">Rejeitados</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{rejectedCount}</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Projetos para Análise</CardTitle>
          <CardDescription>
            Analise a viabilidade e riscos dos projetos submetidos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pending" className="space-y-4">
            <TabsList>
              <TabsTrigger value="pending">Pendentes ({pendingCount})</TabsTrigger>
              <TabsTrigger value="analysis">Em Análise ({underAnalysisCount})</TabsTrigger>
              <TabsTrigger value="completed">Concluídos</TabsTrigger>
              <TabsTrigger value="all">Todos</TabsTrigger>
            </TabsList>

            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por projeto, incorporadora ou localização..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filtros</Button>
            </div>

            <TabsContent value="pending" className="space-y-4">
              <div className="grid gap-4">
                {filteredProjects.filter(p => p.status === "pending_analysis").map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <p className="text-sm text-gray-600">{project.developer} • {project.location}</p>
                          <p className="text-sm text-gray-500">Submetido em {new Date(project.submissionDate).toLocaleDateString('pt-BR')}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getPriorityBadge(project.priority)}
                          {getStatusBadge(project.status)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Valor Solicitado</p>
                          <p className="font-semibold">{project.requestedAmount}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Tipo</p>
                          <p className="font-medium">{project.projectType}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">TIR Estimada</p>
                          <p className="font-semibold text-green-600">{project.estimatedTIR}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Analista</p>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span className="text-sm">{project.assignedAnalyst}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-6">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Plano de Negócios:</span>
                            {getDocumentStatus(project.documents.businessPlan)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Projeção Financeira:</span>
                            {getDocumentStatus(project.documents.financialProjection)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Docs Legais:</span>
                            {getDocumentStatus(project.documents.legalDocs)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Estudo Ambiental:</span>
                            {getDocumentStatus(project.documents.environmentalStudy)}
                          </div>
                        </div>
                        <Button>Iniciar Análise</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-4">
              <div className="grid gap-4">
                {filteredProjects.filter(p => p.status === "under_analysis").map((project) => (
                  <Card key={project.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <p className="text-sm text-gray-600">{project.developer} • {project.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getPriorityBadge(project.priority)}
                          {getStatusBadge(project.status)}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Valor Solicitado</p>
                          <p className="font-semibold">{project.requestedAmount}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">TIR Estimada</p>
                          <p className="font-semibold text-green-600">{project.estimatedTIR}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Score de Risco</p>
                          <p className={`font-semibold ${getRiskColor(project.riskScore)}`}>
                            {project.riskScore}/100
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Viabilidade</p>
                          <p className={`font-semibold ${getViabilityColor(project.viabilityScore)}`}>
                            {project.viabilityScore ? `${project.viabilityScore}/100` : "Em análise"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Analista</p>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span className="text-sm">{project.assignedAnalyst}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Progresso da Análise: {project.analysisProgress}%</span>
                          <span className="text-gray-500">Em andamento</span>
                        </div>
                        <Progress value={project.analysisProgress} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex gap-6">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Plano de Negócios:</span>
                            {getDocumentStatus(project.documents.businessPlan)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Projeção Financeira:</span>
                            {getDocumentStatus(project.documents.financialProjection)}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">Docs Legais:</span>
                            {getDocumentStatus(project.documents.legalDocs)}
                          </div>
                        </div>
                        <Button variant="outline">Ver Detalhes</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="text-center py-8 text-gray-500">
                Lista de projetos com análise concluída...
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="text-center py-8 text-gray-500">
                Lista completa de todos os projetos...
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectAnalysis;