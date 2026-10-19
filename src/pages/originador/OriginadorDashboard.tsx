import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, PiggyBank, Clock, ArrowUpRight, Plus, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

export default function OriginadorDashboard() {
  // Mock data
  const stats = [
    {
      title: "Projetos Ativos",
      value: "3",
      icon: Building2,
      change: "+1 este mês",
      trend: "up",
    },
    {
      title: "Incorporadoras",
      value: "2",
      icon: Users,
      change: "Mesmo do último mês",
      trend: "neutral",
    },
    {
      title: "Comissões Projetadas",
      value: "R$ 120.000",
      icon: PiggyBank,
      change: "+R$ 45.000 este mês",
      trend: "up",
    },
    {
      title: "Tempo Médio de Aprovação",
      value: "32 dias",
      icon: Clock,
      change: "-3 dias que a média",
      trend: "up",
    },
  ];

  // Mock project data
  const recentProjects = [
    {
      name: "Residencial Vista Mar",
      developer: "Construtora Litoral",
      status: "Em análise",
      progress: 45,
      value: "R$ 12 milhões",
      estimatedCommission: "R$ 60.000",
    },
    {
      name: "Edifício Comercial Central",
      developer: "Grupo Empresarial Capital",
      status: "Negociação",
      progress: 75,
      value: "R$ 8 milhões",
      estimatedCommission: "R$ 40.000",
    },
    {
      name: "Condomínio Parque Verde",
      developer: "Construtora Horizonte",
      status: "Documentação",
      progress: 25,
      value: "R$ 15 milhões",
      estimatedCommission: "R$ 75.000",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Visão Geral</h1>
          <p className="text-muted-foreground">
            Acompanhe seus projetos e comissões em uma visão consolidada.
          </p>
        </div>
        <Button asChild>
          <Link to="/originador/projetos/novo">
            <Plus className="mr-2 h-4 w-4" /> Cadastrar Projeto
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-7 md:col-span-4">
          <CardHeader>
            <CardTitle>Projetos Recentes</CardTitle>
            <CardDescription>
              Acompanhe o status dos seus últimos projetos cadastrados.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentProjects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">{project.developer}</p>
                    </div>
                    <Button variant="outline" size="sm" className="h-8" asChild>
                      <Link to={`/originador/projetos/${index + 1}`}>
                        Detalhes <ArrowUpRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">Status: {project.status}</span>
                    </div>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span>Valor do projeto: {project.value}</span>
                    <span className="font-medium text-coral">
                      Comissão estimada: {project.estimatedCommission}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-7 md:col-span-3">
          <CardHeader>
            <CardTitle>Sua Equipe NextStone</CardTitle>
            <CardDescription>
              Profissionais dedicados ao sucesso dos seus projetos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">Ricardo Mendes</h4>
                  <p className="text-sm text-muted-foreground">Gerente de Relacionamento</p>
                  <Button variant="link" className="h-8 p-0 text-slate-700">
                    ricardo.mendes@nextstone.com.br
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold">Ana Silva</h4>
                  <p className="text-sm text-muted-foreground">Analista Financeira</p>
                  <Button variant="link" className="h-8 p-0 text-slate-700">
                    ana.silva@nextstone.com.br
                  </Button>
                </div>
              </div>
              
              <div className="border-t pt-4 mt-6">
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" /> Iniciar Conversa
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
