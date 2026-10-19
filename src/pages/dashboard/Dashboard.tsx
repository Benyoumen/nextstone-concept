
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Building2, FileText, BarChart2 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full bg-black text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Bem-vindo, Luckey</h2>
                <p className="text-gray-300 mb-4">
                  Você ainda não tem nenhum empreendimento cadastrado. Comece agora com a NextStone!
                </p>
              </div>
              <Button asChild className="bg-white text-black hover:bg-gray-100">
                <Link to="/dashboard/empreendimentos/novo">
                  <Plus className="h-5 w-5 mr-2" />
                  Cadastre seu Empreendimento
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <div className="p-2 bg-purple-100 rounded-md">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
              <div className="flex items-center text-sm text-green-600">
                <span className="font-medium">+0%</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">0</h3>
            <p className="text-gray-500 text-sm">Empreendimentos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-md">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex items-center text-sm text-green-600">
                <span className="font-medium">+0%</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">0</h3>
            <p className="text-gray-500 text-sm">Negociações</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <div className="p-2 bg-yellow-100 rounded-md">
                <BarChart2 className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex items-center text-sm text-green-600">
                <span className="font-medium">R$ 0</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">R$ 0</h3>
            <p className="text-gray-500 text-sm">VGV Total</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Negociações Recentes</h3>
            <div className="text-center py-8 text-gray-500">
              <p>Você ainda não possui negociações.</p>
              <Button variant="link" asChild className="mt-2">
                <Link to="/dashboard/negociacoes">Ver negociações</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Empreendimentos</h3>
            <div className="text-center py-8 text-gray-500">
              <p>Você ainda não possui empreendimentos cadastrados.</p>
              <Button variant="link" asChild className="mt-2">
                <Link to="/dashboard/empreendimentos/novo">Cadastrar empreendimento</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
