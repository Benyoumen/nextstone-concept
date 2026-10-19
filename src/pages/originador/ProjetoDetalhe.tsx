
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Calendar,
  MapPin,
  User,
  FileText,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertTriangle,
  PiggyBank,
  ChevronRight,
  Upload,
  Download
} from "lucide-react";
import { useParams } from "react-router-dom";

export default function ProjetoDetalhe() {
  const { id } = useParams();
  
  // Mock project data
  const project = {
    id: 1,
    name: "Residencial Vista Mar",
    developer: "Construtora Litoral",
    location: "Santos, SP",
    value: "R$ 12 milhões",
    status: "Em análise",
    createdAt: "15/03/2025",
    estimatedCommission: "R$ 60.000",
    description: "Empreendimento residencial de alto padrão com 45 unidades, localizado a 500m da praia. O projeto conta com 3 torres de 15 andares, área de lazer completa, piscina, academia, salão de festas e playground.",
    manager: "Ricardo Mendes",
    progress: 45,
    deadline: "15/05/2025",
    totalUnits: 45,
    landSize: "5.200m²",
    constructionArea: "12.800m²",
    timeline: [
      {
        date: "15/03/2025",
        status: "Cadastrado",
        message: "Projeto cadastrado na plataforma",
        completed: true
      },
      {
        date: "18/03/2025",
        status: "Análise Inicial",
        message: "Projeto em análise inicial pela equipe NextStone",
        completed: true
      },
      {
        date: "25/03/2025",
        status: "Documentação",
        message: "Documentação complementar solicitada",
        completed: true
      },
      {
        date: "02/04/2025",
        status: "Análise Financeira",
        message: "Projeto em análise financeira detalhada",
        completed: true
      },
      {
        date: "10/04/2025",
        status: "Em negociação",
        message: "Apresentação para investidores interessados",
        completed: false
      },
      {
        date: "25/04/2025",
        status: "Proposta",
        message: "Elaboração de proposta de financiamento",
        completed: false
      },
      {
        date: "15/05/2025",
        status: "Aprovação",
        message: "Decisão final sobre o financiamento",
        completed: false
      }
    ],
    tasks: [
      {
        id: 1,
        title: "Enviar memorial descritivo atualizado",
        status: "pendente",
        deadline: "15/04/2025",
        priority: "alta"
      },
      {
        id: 2,
        title: "Confirmar disponibilidade para reunião com investidor",
        status: "concluída",
        completedAt: "05/04/2025",
        priority: "média"
      }
    ],
    documents: [
      {
        name: "Matrícula do Terreno",
        uploadedAt: "15/03/2025",
        status: "aprovado"
      },
      {
        name: "Projeto Arquitetônico",
        uploadedAt: "15/03/2025",
        status: "aprovado"
      },
      {
        name: "Documentação Societária",
        uploadedAt: "15/03/2025",
        status: "revisão"
      },
      {
        name: "Estudo de Viabilidade",
        uploadedAt: "15/03/2025",
        status: "aprovado"
      }
    ]
  };
  
  // Calculate active timeline step
  const activeStep = project.timeline.findIndex(step => !step.completed);
  
  // Format status badge
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
  
  // Format document status badges
  const DocumentStatusBadge = ({ status }: { status: string }) => {
    switch (status.toLowerCase()) {
      case 'aprovado':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Aprovado</Badge>;
      case 'revisão':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">Em Revisão</Badge>;
      case 'pendente':
        return <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200">Pendente</Badge>;
      case 'rejeitado':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejeitado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <div className="flex items-center gap-2 mt-1">
            <StatusBadge status={project.status} />
            <span className="text-muted-foreground">
              Cadastrado em {project.createdAt}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Enviar Mensagem
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Enviar Documento
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 md:col-span-8">
          <Tabs defaultValue="overview" className="w-full">
            <CardHeader className="pb-0">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="documents">Documentos</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent className="pt-6">
              <TabsContent value="overview">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Descrição do Projeto</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-4 rounded-md">
                      <div className="flex items-center gap-2 text-slate-600 mb-1">
                        <Building2 className="h-4 w-4" /> Unidades
                      </div>
                      <div className="font-medium">{project.totalUnits}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <div className="flex items-center gap-2 text-slate-600 mb-1">
                        <MapPin className="h-4 w-4" /> Terreno
                      </div>
                      <div className="font-medium">{project.landSize}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <div className="flex items-center gap-2 text-slate-600 mb-1">
                        <Building2 className="h-4 w-4" /> Área Construída
                      </div>
                      <div className="font-medium">{project.constructionArea}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-md">
                      <div className="flex items-center gap-2 text-slate-600 mb-1">
                        <PiggyBank className="h-4 w-4" /> Valor
                      </div>
                      <div className="font-medium">{project.value}</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-medium">Status do Projeto</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progresso</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Clock className="h-4 w-4" />
                        <span>Prazo estimado para conclusão: {project.deadline}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="text-lg font-medium">Tarefas Pendentes</h3>
                    <div className="space-y-3">
                      {project.tasks.map((task) => (
                        <div key={task.id} className={`p-3 rounded-md border ${
                          task.status === 'concluída' ? 'bg-green-50 border-green-100' : 
                          task.priority === 'alta' ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'
                        }`}>
                          <div className="flex items-start">
                            <div className={`mt-0.5 ${
                              task.status === 'concluída' ? 'text-green-500' : 
                              task.priority === 'alta' ? 'text-red-500' : 'text-slate-500'
                            }`}>
                              {task.status === 'concluída' ? 
                                <CheckCircle2 className="h-5 w-5" /> : 
                                <AlertTriangle className="h-5 w-5" />
                              }
                            </div>
                            <div className="ml-3">
                              <p className={task.status === 'concluída' ? 'line-through text-slate-500' : 'font-medium'}>
                                {task.title}
                              </p>
                              <p className="text-sm mt-1">
                                {task.status === 'concluída' ? 
                                  `Concluída em ${task.completedAt}` : 
                                  `Prazo: ${task.deadline} • Prioridade: ${task.priority}`
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="timeline">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Progresso do Projeto</h3>
                    <p className="mt-1 text-gray-600">
                      Acompanhe o status atual do seu projeto e os próximos passos.
                    </p>
                  </div>
                  
                  <div className="relative">
                    {/* Timeline progress bar */}
                    <div className="absolute left-4 top-0 w-px h-full bg-slate-200"></div>
                    
                    {/* Timeline events */}
                    <div className="space-y-8 relative">
                      {project.timeline.map((event, index) => (
                        <div key={index} className="ml-10 relative">
                          <div className={`absolute -left-10 mt-1.5 flex items-center justify-center w-6 h-6 rounded-full border-2 ${
                            event.completed ? 'bg-coral text-white border-coral' : 
                            index === activeStep ? 'bg-white border-coral' : 'bg-white border-slate-300'
                          }`}>
                            {event.completed && <CheckCircle2 className="h-4 w-4" />}
                            {!event.completed && index === activeStep && <div className="w-2 h-2 bg-coral rounded-full"></div>}
                          </div>
                          
                          <div className={`${index === activeStep ? 'bg-coral/5 border-coral/20' : ''} p-4 rounded-md border`}>
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{event.status}</span>
                              <span className="text-sm text-muted-foreground">{event.date}</span>
                            </div>
                            <p className="text-sm mt-1">{event.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="documents">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Documentos do Projeto</h3>
                    <p className="mt-1 text-gray-600">
                      Acompanhe o status de toda a documentação enviada.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {project.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-slate-100 rounded flex items-center justify-center">
                            <FileText className="h-5 w-5 text-slate-600" />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">Enviado em {doc.uploadedAt}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <DocumentStatusBadge status={doc.status} />
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <Button className="w-full">
                      <Upload className="h-4 w-4 mr-2" /> Enviar Novo Documento
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        
        <div className="col-span-12 md:col-span-4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Projeto</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Incorporadora</p>
                    <p>{project.developer}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localização</p>
                    <p>{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center">
                    <PiggyBank className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Comissão Estimada</p>
                    <p className="font-semibold text-coral">{project.estimatedCommission}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center">
                    <User className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Gerente Responsável</p>
                    <p>{project.manager}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Falar com Gerente
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Próximos Passos</CardTitle>
              <CardDescription>
                O que precisa ser feito agora
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <div className="flex items-center gap-2 text-blue-800">
                    <AlertTriangle className="h-5 w-5" />
                    <p className="font-medium">Ação necessária</p>
                  </div>
                  <p className="mt-1 text-blue-700">
                    Envie o memorial descritivo atualizado até 15/04/2025.
                  </p>
                  <Button variant="outline" className="mt-3 w-full bg-white text-blue-700 border-blue-200">
                    Enviar Documento
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-coral" />
                    <div>
                      <p className="font-medium">Reunião com Investidores</p>
                      <p className="text-sm text-muted-foreground">15/04/2025, 14:00</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
