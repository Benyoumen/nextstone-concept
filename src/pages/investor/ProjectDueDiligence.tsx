import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart, 
  FileText, 
  Building2, 
  Users, 
  Briefcase, 
  Calendar, 
  AlertTriangle, 
  Check, 
  FileBarChart, 
  ArrowUpRight
} from "lucide-react";

const mockProjectData = {
  id: "proj-123",
  name: "Vista Verdejante",
  developer: "Construtora Alpha",
  location: "São Paulo, SP",
  type: "Residencial • Alto Padrão",
  status: "Em Análise",
  rating: "A",
  vgv: "R$ 25.000.000",
  tir: "16.4%",
  roi: "2.8x",
  units: 48,
  completionEstimate: "36 meses",
  soldPercentage: 18,
  riskAssessment: "Médio-Baixo",
  approvalStatus: 65,
  creationDate: "12/03/2025",
  lastUpdate: "05/04/2025",
  description: "Empreendimento residencial de alto padrão localizado em região nobre, com completa infraestrutura de lazer e certificação de sustentabilidade.",
  documents: [
    { name: "Relatório de Viabilidade", status: "Verificado", date: "15/03/2025" },
    { name: "Aprovações Legais", status: "Pendente", date: "18/03/2025" },
    { name: "Projetos Arquitetônicos", status: "Verificado", date: "20/03/2025" },
    { name: "Orçamento Detalhado", status: "Em Análise", date: "01/04/2025" },
    { name: "Cronograma de Obras", status: "Verificado", date: "25/03/2025" },
    { name: "Histórico Financeiro", status: "Em Análise", date: "03/04/2025" },
  ],
  financialMetrics: [
    { name: "VPL", value: "R$ 4.8M", trend: "positivo" },
    { name: "TIR", value: "16.4%", trend: "positivo" },
    { name: "Payback", value: "30 meses", trend: "neutro" },
    { name: "ROI", value: "2.8x", trend: "positivo" },
    { name: "Margem Bruta", value: "42%", trend: "positivo" },
    { name: "Razão Custo/Benefício", value: "1.7", trend: "positivo" },
  ],
  risks: [
    { category: "Mercado", level: "Médio", description: "Potencial saturação do mercado de alto padrão na região" },
    { category: "Execução", level: "Baixo", description: "Equipe experiente com histórico de entregas dentro do prazo" },
    { category: "Regulatório", level: "Baixo", description: "Todas as licenças iniciais já aprovadas" },
    { category: "Financeiro", level: "Médio", description: "Sensibilidade à variação de custos dos materiais" },
  ],
  checklistItems: [
    { name: "Análise de Documentação", status: "completo", progress: 100 },
    { name: "Validação Financeira", status: "em progresso", progress: 75 },
    { name: "Análise de Risco", status: "em progresso", progress: 85 },
    { name: "Validação Técnica", status: "em progresso", progress: 60 },
    { name: "Aprovação de Comitê", status: "pendente", progress: 0 },
  ],
  teamMembers: [
    { name: "Ana Silva", role: "Analista Financeiro", assigned: "15/03/2025" },
    { name: "Ricardo Torres", role: "Analista de Risco", assigned: "18/03/2025" },
    { name: "Marta Santos", role: "Analista Jurídico", assigned: "20/03/2025" },
    { name: "Paulo Menezes", role: "Gestor de Portfólio", assigned: "15/03/2025" },
  ]
};

export default function ProjectDueDiligence() {
  const [currentTab, setCurrentTab] = useState("overview");
  const project = mockProjectData;

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "alto": return "bg-red-100 text-red-800";
      case "médio": return "bg-yellow-100 text-yellow-800";
      case "baixo": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "verificado": return "bg-green-100 text-green-800";
      case "pendente": return "bg-yellow-100 text-yellow-800";
      case "em análise": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "positivo": return <ArrowUpRight className="h-4 w-4 text-green-600" />;
      case "negativo": return <ArrowUpRight className="h-4 w-4 text-red-600 rotate-180" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-gray-500">{project.developer}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{project.location}</span>
            <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
              {project.status}
            </Badge>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              Rating: {project.rating}
            </Badge>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">Solicitar Informações</Button>
          <Button 
            className="bg-[#4ADE80] hover:bg-[#22D163] text-white font-semibold"
            style={{ boxShadow: "0 2px 6px 0 #e6ffef" }}
          >
            Aprovar Financiamento
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-500">VGV Total</div>
              <div className="p-1 bg-green-100 rounded-md">
                <BarChart className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <div className="text-2xl font-bold">{project.vgv}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-500">TIR Estimada</div>
              <div className="p-1 bg-purple-100 rounded-md">
                <FileBarChart className="h-4 w-4 text-purple-600" />
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600">{project.tir}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-500">Status de Aprovação</div>
              <div className="p-1 bg-blue-100 rounded-md">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Progress className="flex-1" value={project.approvalStatus} />
              <span className="text-sm font-medium">{project.approvalStatus}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <TabsList className="grid grid-cols-5 w-full max-w-4xl">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="documents">Documentação</TabsTrigger>
          <TabsTrigger value="financials">Financeiro</TabsTrigger>
          <TabsTrigger value="risks">Análise de Risco</TabsTrigger>
          <TabsTrigger value="approvals">Processo de Aprovação</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Detalhes do Projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-4">Informações Básicas</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">Tipo</div>
                      <div>{project.type}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Unidades</div>
                      <div>{project.units}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Prazo Estimado</div>
                      <div>{project.completionEstimate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Percentual Vendido</div>
                      <div>{project.soldPercentage}%</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Métricas Financeiras</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">VGV</div>
                      <div>{project.vgv}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">TIR</div>
                      <div className="text-green-600">{project.tir}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">ROI</div>
                      <div className="text-green-600">{project.roi}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Avaliação de Risco</div>
                      <div>{project.riskAssessment}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Datas Importantes</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">Data de Criação</div>
                      <div>{project.creationDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Última Atualização</div>
                      <div>{project.lastUpdate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Equipe</div>
                      <div>{project.teamMembers.length} analistas</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Descrição do Projeto</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Status de Aprovação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.checklistItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm">
                          {item.status === "completo" ? (
                            <span className="text-green-600 flex items-center">
                              <Check className="h-4 w-4 mr-1" /> Completo
                            </span>
                          ) : item.status === "pendente" ? (
                            <span className="text-yellow-600">Pendente</span>
                          ) : (
                            <span className="text-blue-600">Em Progresso</span>
                          )}
                        </span>
                      </div>
                      <Progress value={item.progress} className={getProgressColor(item.progress)} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Equipe de Análise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.teamMembers.map((member, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 font-medium">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-gray-500">{member.role}</div>
                        <div className="text-xs text-gray-400 mt-1">Designado em: {member.assigned}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Documentação do Projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 mb-4">
                <p className="text-gray-600">Todos os documentos submetidos pela incorporadora para análise e due diligence.</p>
              </div>
              
              <div className="space-y-4">
                {project.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-50 rounded-md mr-4">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-gray-500">Atualizado em: {doc.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(doc.status)}>
                        {doc.status}
                      </Badge>
                      <Button variant="outline" size="sm">Visualizar</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline" className="mr-3">Solicitar Novos Documentos</Button>
                <Button>Marcar Todos como Verificados</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Análise Financeira</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {project.financialMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">{metric.name}</div>
                    <div className="flex items-center">
                      <div className="text-xl font-bold mr-2">{metric.value}</div>
                      {getTrendIcon(metric.trend)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Projeção de Fluxo de Caixa</h3>
                  <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Fluxo de Caixa</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Análise de Sensibilidade</h3>
                  <div className="bg-gray-50 p-4 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de Análise de Sensibilidade</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button variant="outline" className="mr-3">Exportar Relatório</Button>
                <Button>Solicitar Análise Detalhada</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Matriz de Riscos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {project.risks.map((risk, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-medium">{risk.category}</div>
                        <div className="text-sm text-gray-600 mt-1">{risk.description}</div>
                      </div>
                      <Badge className={getRiskColor(risk.level)}>
                        Risco {risk.level}
                      </Badge>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Impacto</span>
                        <span className="font-medium">Médio</span>
                      </div>
                      <Progress value={50} className="bg-gray-200" />
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Probabilidade</span>
                        <span className="font-medium">Baixa</span>
                      </div>
                      <Progress value={25} className="bg-gray-200" />
                    </div>
                  </div>
                ))}
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Atenção na Análise de Risco</h4>
                    <p className="text-yellow-700 mt-1">
                      O mercado imobiliário na região tem apresentado tendência de estabilização. 
                      Recomenda-se análise detalhada de demanda e preços praticados.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button>Adicionar Novo Risco</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approvals">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Processo de Aprovação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="font-medium text-lg">Status Atual</div>
                  <Badge className="bg-blue-100 text-blue-800">Em Análise</Badge>
                </div>
                
                <div>
                  <div className="font-medium mb-2">Progresso da Análise</div>
                  <Progress value={65} className="h-2.5 mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Início do Processo</span>
                    <span>Aprovação Final</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Fluxo de Aprovação</h3>
                  <div className="space-y-2">
                    {/* STEPPER ICONS */}
                    <div className="flex items-center justify-between w-full max-w-2xl mx-auto">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="w-12 h-1 bg-green-200"></div>
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="w-12 h-1 bg-blue-200"></div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="w-12 h-1 bg-gray-200"></div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {/* Comitê - Pendente: light gray icon */}
                        <Users className="h-5 w-5 text-gray-300" />
                      </div>
                      <div className="w-12 h-1 bg-gray-200"></div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        {/* Contratação - Pendente: light gray icon */}
                        <Briefcase className="h-5 w-5 text-gray-300" />
                      </div>
                    </div>
                    {/* LABELS BELOW ICONS */}
                    <div className="grid grid-cols-5 text-sm mt-2 max-w-2xl mx-auto text-center">
                      <div className="text-green-600 font-medium">Recebimento</div>
                      <div className="text-green-600 font-medium">Triagem</div>
                      <div className="text-blue-600 font-medium flex flex-col items-center">
                        <span>Análise</span>
                      </div>
                      <div className="text-gray-400 font-medium">Comitê</div>
                      <div className="text-gray-400 font-medium">Contratação</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Atividades Recentes</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 border-l-2 border-blue-500 pl-4 py-1">
                      <Calendar className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Análise Financeira Iniciada</p>
                        <p className="text-sm text-gray-500">03/04/2025 por Ana Silva</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-green-500 pl-4 py-1">
                      <Calendar className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Documentação Técnica Verificada</p>
                        <p className="text-sm text-gray-500">01/04/2025 por Ricardo Torres</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 border-l-2 border-purple-500 pl-4 py-1">
                      <Calendar className="h-5 w-5 text-purple-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Solicitação de Documentos Adicionais</p>
                        <p className="text-sm text-gray-500">28/03/2025 por Marta Santos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Recusar Projeto
                </Button>
                <div className="space-x-3">
                  <Button variant="outline">Solicitar Revisão</Button>
                  <Button className="bg-[#4ADE80] hover:bg-[#22D163] text-white font-semibold">
                    Aprovar Financiamento
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
