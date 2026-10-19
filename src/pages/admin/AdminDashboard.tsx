import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, FileText, TrendingUp, BarChart3, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
        <p className="text-gray-600">Visão geral da plataforma NextStone</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fundos Ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              +12% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incorporadoras</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +8 novas este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deals Ativos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              R$ 2.1B em volume
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Docs Pendentes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Requerem revisão
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Projects Pending Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Projetos Pendentes de Análise
            </CardTitle>
            <CardDescription>
              Projetos aguardando análise de viabilidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div>
                  <p className="font-medium">Residencial Jardim Norte</p>
                  <p className="text-sm text-gray-600">Incorporadora ABC - R$ 45M</p>
                </div>
                <Badge variant="outline" className="text-amber-600 border-amber-300">
                  Urgente
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Comercial Tech Plaza</p>
                  <p className="text-sm text-gray-600">XYZ Desenvolvimento - R$ 78M</p>
                </div>
                <Badge variant="outline">
                  Normal
                </Badge>
              </div>
            </div>
            <Button asChild className="w-full" variant="outline">
              <Link to="/admin/analysis">Ver Todos os Projetos</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Team Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Atividade da Equipe
            </CardTitle>
            <CardDescription>
              Últimas ações dos departamentos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800">Legal</Badge>
                <p className="text-sm">Análise jurídica concluída - Projeto Alpha</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-100 text-green-800">Finance</Badge>
                <p className="text-sm">Due diligence aprovado - Residencial Beta</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-100 text-purple-800">Data</Badge>
                <p className="text-sm">Relatório de mercado atualizado</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-100 text-orange-800">Sales</Badge>
                <p className="text-sm">Novo fundo cadastrado - Elite Capital</p>
              </div>
            </div>
            <Button asChild className="w-full" variant="outline">
              <Link to="/admin/team">Gerenciar Equipe</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>
            Acesse rapidamente as principais funcionalidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/admin/documents">
                <FileText className="h-6 w-6" />
                Revisar Documentos
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/admin/deals">
                <TrendingUp className="h-6 w-6" />
                Acompanhar Deals
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-20 flex-col gap-2">
              <Link to="/admin/funds">
                <Users className="h-6 w-6" />
                Gerenciar Fundos
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;