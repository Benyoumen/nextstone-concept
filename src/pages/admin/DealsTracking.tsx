import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, DollarSign, Calendar, Users, Eye, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const DealsTracking = () => {
  const deals = [
    {
      id: 1,
      projectName: "Residencial Jardim Norte",
      developer: "Incorporadora ABC",
      fund: "Elite Capital Partners",
      totalValue: "R$ 45M",
      currentPhase: "Due Diligence",
      progress: 65,
      startDate: "2024-01-10",
      expectedClose: "2024-03-15",
      status: "active",
      tir: "16.5%",
      riskLevel: "Médio"
    },
    {
      id: 2,
      projectName: "Comercial Tech Plaza",
      developer: "XYZ Desenvolvimento",
      fund: "Real Estate Ventures",
      totalValue: "R$ 78M",
      currentPhase: "Negociação",
      progress: 40,
      startDate: "2024-01-05",
      expectedClose: "2024-04-20",
      status: "active",
      tir: "18.2%",
      riskLevel: "Alto"
    },
    {
      id: 3,
      projectName: "Shopping Center Sul",
      developer: "Mega Incorporações",
      fund: "Urban Development Fund",
      totalValue: "R$ 120M",
      currentPhase: "Análise Legal",
      progress: 25,
      startDate: "2024-01-15",
      expectedClose: "2024-05-30",
      status: "active",
      tir: "14.8%",
      riskLevel: "Baixo"
    },
    {
      id: 4,
      projectName: "Residencial Vista Verde",
      developer: "Verde Imóveis",
      fund: "Metropolitan Holdings",
      totalValue: "R$ 32M",
      currentPhase: "Finalização",
      progress: 90,
      startDate: "2023-11-20",
      expectedClose: "2024-02-10",
      status: "closing",
      tir: "15.7%",
      riskLevel: "Médio"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-blue-100 text-blue-800">Ativo</Badge>;
      case "closing":
        return <Badge className="bg-green-100 text-green-800">Finalizando</Badge>;
      case "paused":
        return <Badge className="bg-yellow-100 text-yellow-800">Pausado</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "Alto":
        return <Badge variant="destructive">Alto</Badge>;
      case "Médio":
        return <Badge className="bg-yellow-100 text-yellow-800">Médio</Badge>;
      case "Baixo":
        return <Badge className="bg-green-100 text-green-800">Baixo</Badge>;
      default:
        return <Badge variant="outline">{risk}</Badge>;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-blue-500";
    if (progress >= 25) return "bg-yellow-500";
    return "bg-red-500";
  };

  const totalDealsValue = deals.reduce((sum, deal) => sum + parseFloat(deal.totalValue.replace(/[R$M\s]/g, '')), 0);
  const activeDeals = deals.filter(d => d.status === 'active').length;
  const avgProgress = Math.round(deals.reduce((sum, deal) => sum + deal.progress, 0) / deals.length);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Evolução de Deals</h1>
        <p className="text-gray-600">Acompanhe o progresso de todos os negócios em andamento</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals Ativos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeDeals}</div>
            <p className="text-xs text-muted-foreground">Em andamento</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Volume Total</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {totalDealsValue.toFixed(0)}M</div>
            <p className="text-xs text-muted-foreground">Em negociação</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgProgress}%</div>
            <p className="text-xs text-muted-foreground">Dos deals ativos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">TIR Média</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16.3%</div>
            <p className="text-xs text-muted-foreground">Projetada</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline de Deals</CardTitle>
          <CardDescription>
            Acompanhe todas as transações em diferentes fases
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Ativos ({activeDeals})</TabsTrigger>
              <TabsTrigger value="closing">Finalizando</TabsTrigger>
              <TabsTrigger value="all">Todos os Deals</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-4">
                {deals.filter(deal => deal.status === 'active').map((deal) => (
                  <Card key={deal.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{deal.projectName}</h3>
                          <p className="text-sm text-gray-600">{deal.developer} → {deal.fund}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(deal.status)}
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
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Valor Total</p>
                          <p className="font-semibold">{deal.totalValue}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Fase Atual</p>
                          <p className="font-medium">{deal.currentPhase}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">TIR Projetada</p>
                          <p className="font-semibold text-green-600">{deal.tir}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Nível de Risco</p>
                          {getRiskBadge(deal.riskLevel)}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Fechamento Previsto</p>
                          <p className="font-medium">{new Date(deal.expectedClose).toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso: {deal.progress}%</span>
                          <span className="text-gray-500">{deal.currentPhase}</span>
                        </div>
                        <Progress value={deal.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="closing">
              <div className="grid gap-4">
                {deals.filter(deal => deal.status === 'closing').map((deal) => (
                  <Card key={deal.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{deal.projectName}</h3>
                          <p className="text-sm text-gray-600">{deal.developer} → {deal.fund}</p>
                        </div>
                        {getStatusBadge(deal.status)}
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progresso: {deal.progress}%</span>
                          <span className="text-gray-500">{deal.currentPhase}</span>
                        </div>
                        <Progress value={deal.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="all">
              <div className="text-center py-8 text-gray-500">
                Lista completa de todos os deals...
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealsTracking;