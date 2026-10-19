
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FileText, BarChart2, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react";

export default function InvestorDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard do Investidor</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full bg-black text-white">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Bem-vindo, Capital Fund</h2>
                <p className="text-gray-300 mb-4">
                  Você tem 12 incorporadoras sob análise e 28 projetos disponíveis para investimento.
                </p>
              </div>
              <Button asChild className="bg-white text-black hover:bg-gray-100">
                <Link to="/investor/developers">
                  <Building2 className="h-5 w-5 mr-2" />
                  Analisar Incorporadoras
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
                <span className="font-medium">+2 novas</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">12</h3>
            <p className="text-gray-500 text-sm">Incorporadoras</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-md">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex items-center text-sm text-green-600">
                <span className="font-medium">+5 novos</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">28</h3>
            <p className="text-gray-500 text-sm">Projetos Disponíveis</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between mb-4">
              <div className="p-2 bg-yellow-100 rounded-md">
                <BarChart2 className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex items-center text-sm text-green-600">
                <span className="font-medium">+12.5%</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-1">R$ 18,5M</h3>
            <p className="text-gray-500 text-sm">Investimento Total</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Análise Comparativa de Incorporadoras</h3>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2 font-medium">Incorporadora</th>
                    <th className="text-left py-3 px-2 font-medium">Rating</th>
                    <th className="text-left py-3 px-2 font-medium">Projetos</th>
                    <th className="text-left py-3 px-2 font-medium">VGV Total</th>
                    <th className="text-left py-3 px-2 font-medium">TIR Média</th>
                    <th className="text-left py-3 px-2 font-medium">Liquidez</th>
                    <th className="text-left py-3 px-2 font-medium">Risco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">A</div>
                        <span className="font-medium">Alphaville</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded text-xs">A+</span>
                    </td>
                    <td className="py-3 px-2">18</td>
                    <td className="py-3 px-2">R$ 1.2B</td>
                    <td className="py-3 px-2">16.7%</td>
                    <td className="py-3 px-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="flex items-center text-green-600">
                        <ShieldCheck className="h-4 w-4 mr-1" /> Baixo
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">E</div>
                        <span className="font-medium">Eztec</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded text-xs">A</span>
                    </td>
                    <td className="py-3 px-2">14</td>
                    <td className="py-3 px-2">R$ 950M</td>
                    <td className="py-3 px-2">15.2%</td>
                    <td className="py-3 px-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="flex items-center text-green-600">
                        <ShieldCheck className="h-4 w-4 mr-1" /> Baixo
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold">T</div>
                        <span className="font-medium">Tecnisa</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="bg-yellow-100 text-yellow-800 font-medium px-2 py-1 rounded text-xs">B+</span>
                    </td>
                    <td className="py-3 px-2">9</td>
                    <td className="py-3 px-2">R$ 680M</td>
                    <td className="py-3 px-2">14.3%</td>
                    <td className="py-3 px-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="flex items-center text-yellow-600">
                        <AlertTriangle className="h-4 w-4 mr-1" /> Médio
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold">L</div>
                        <span className="font-medium">Luckey</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="bg-red-100 text-red-800 font-medium px-2 py-1 rounded text-xs">C</span>
                    </td>
                    <td className="py-3 px-2">3</td>
                    <td className="py-3 px-2">R$ 120M</td>
                    <td className="py-3 px-2">18.9%</td>
                    <td className="py-3 px-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <span className="flex items-center text-red-600">
                        <AlertTriangle className="h-4 w-4 mr-1" /> Alto
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/investor/developers">Ver todas as incorporadoras</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Projetos Recomendados</h3>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Vista Boulevard</h4>
                    <p className="text-sm text-gray-500">Alphaville • São Paulo, SP</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">A+</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                  <div>
                    <p className="text-gray-500">TIR</p>
                    <p className="font-medium">17.2%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">VGV</p>
                    <p className="font-medium">R$ 85M</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Prazo</p>
                    <p className="font-medium">36 meses</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full">Ver detalhes</Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Jardins Residencial</h4>
                    <p className="text-sm text-gray-500">Eztec • Rio de Janeiro, RJ</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">A</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                  <div>
                    <p className="text-gray-500">TIR</p>
                    <p className="font-medium">16.8%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">VGV</p>
                    <p className="font-medium">R$ 62M</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Prazo</p>
                    <p className="font-medium">30 meses</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full">Ver detalhes</Button>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-slate-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">Horizonte Tower</h4>
                    <p className="text-sm text-gray-500">Tecnisa • Belo Horizonte, MG</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">B+</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-sm">
                  <div>
                    <p className="text-gray-500">TIR</p>
                    <p className="font-medium">14.5%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">VGV</p>
                    <p className="font-medium">R$ 45M</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Prazo</p>
                    <p className="font-medium">24 meses</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-3 w-full">Ver detalhes</Button>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/investor/projects">Ver todos os projetos</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Análise de Mercado</h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Retorno por Segmento</h4>
                  <span className="text-xs text-gray-500">Último trimestre</span>
                </div>
                <div className="h-60 flex items-end space-x-2">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-purple-500" style={{ height: '65%' }}></div>
                    <span className="text-xs mt-2">Residencial Alto Padrão</span>
                    <span className="text-xs font-medium">16.4%</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-blue-500" style={{ height: '48%' }}></div>
                    <span className="text-xs mt-2">Residencial Médio</span>
                    <span className="text-xs font-medium">12.2%</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-green-500" style={{ height: '40%' }}></div>
                    <span className="text-xs mt-2">Comercial</span>
                    <span className="text-xs font-medium">10.5%</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-yellow-500" style={{ height: '32%' }}></div>
                    <span className="text-xs mt-2">Industrial</span>
                    <span className="text-xs font-medium">8.1%</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-red-500" style={{ height: '28%' }}></div>
                    <span className="text-xs mt-2">Logístico</span>
                    <span className="text-xs font-medium">7.3%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Tendências de Investimento</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">São Paulo</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Rio de Janeiro</span>
                      <span className="text-sm font-medium">24%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Belo Horizonte</span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Outros</span>
                      <span className="text-sm font-medium">16%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '16%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/investor/risk">Ver análise completa</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
