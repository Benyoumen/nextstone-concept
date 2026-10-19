
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart2, TrendingUp, TrendingDown, FileText, 
  AlertTriangle, ShieldCheck, HelpCircle, CheckCircle
} from "lucide-react";

export default function RiskAssessment() {
  const [year, setYear] = useState("2025");
  const [quarter, setQuarter] = useState("q1");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
        <h1 className="text-3xl font-bold">Análise de Risco</h1>
        
        <div className="flex space-x-4">
          <Select defaultValue={year} onValueChange={setYear}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue={quarter} onValueChange={setQuarter}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="q1">Q1</SelectItem>
              <SelectItem value="q2">Q2</SelectItem>
              <SelectItem value="q3">Q3</SelectItem>
              <SelectItem value="q4">Q4</SelectItem>
              <SelectItem value="year">Ano</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="market">
        <TabsList className="mb-6">
          <TabsTrigger value="market">Mercado</TabsTrigger>
          <TabsTrigger value="developers">Incorporadoras</TabsTrigger>
          <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
          <TabsTrigger value="macroeconomic">Macroeconômico</TabsTrigger>
        </TabsList>
        
        <TabsContent value="market" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">VGV Total Lançado</p>
                    <p className="text-xl font-semibold">R$ 28,2B</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +8,4% vs 2024
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Velocidade de Vendas</p>
                    <p className="text-xl font-semibold">12,6% a.m.</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +2,1% vs 2024
                    </p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Estoque Disponível</p>
                    <p className="text-xl font-semibold">12,4 meses</p>
                    <p className="text-xs text-red-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" /> -3,2 meses
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Preço Médio m²</p>
                    <p className="text-xl font-semibold">R$ 9.860</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +5,2% vs 2024
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance por Segmento</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                        Residencial Alto Padrão
                      </span>
                      <span className="text-sm font-medium text-green-600">+12,8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                        Residencial Médio
                      </span>
                      <span className="text-sm font-medium text-green-600">+8,4%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                        Residencial Econômico
                      </span>
                      <span className="text-sm font-medium text-green-600">+5,2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
                        Comercial
                      </span>
                      <span className="text-sm font-medium text-red-600">-2,1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                        Lajes Corporativas
                      </span>
                      <span className="text-sm font-medium text-red-600">-4,8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance por Região</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                        São Paulo - Capital
                      </span>
                      <span className="text-sm font-medium text-green-600">+14,2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                        São Paulo - Interior
                      </span>
                      <span className="text-sm font-medium text-green-600">+9,8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                        Rio de Janeiro
                      </span>
                      <span className="text-sm font-medium text-green-600">+7,5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
                        Minas Gerais
                      </span>
                      <span className="text-sm font-medium text-green-600">+6,2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                        Outras Regiões
                      </span>
                      <span className="text-sm font-medium text-green-600">+3,4%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Indicadores de Mercado</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Indicador</th>
                      <th className="text-center py-3 px-4 font-medium">Q1 2025</th>
                      <th className="text-center py-3 px-4 font-medium">Q4 2024</th>
                      <th className="text-center py-3 px-4 font-medium">Variação</th>
                      <th className="text-center py-3 px-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">Demanda de Mercado</td>
                      <td className="text-center py-3 px-4">Alto</td>
                      <td className="text-center py-3 px-4">Médio-Alto</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingUp className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">Oferta de Projetos</td>
                      <td className="text-center py-3 px-4">Médio</td>
                      <td className="text-center py-3 px-4">Médio</td>
                      <td className="text-center py-3 px-4 text-gray-600">
                        -
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">Nível de Competição</td>
                      <td className="text-center py-3 px-4">Alto</td>
                      <td className="text-center py-3 px-4">Médio-Alto</td>
                      <td className="text-center py-3 px-4 text-yellow-600">
                        <TrendingUp className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <AlertTriangle className="h-4 w-4 text-yellow-600 inline" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">Disponibilidade de Crédito</td>
                      <td className="text-center py-3 px-4">Médio</td>
                      <td className="text-center py-3 px-4">Médio-Baixo</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingUp className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4">Risco Geral do Mercado</td>
                      <td className="text-center py-3 px-4">Médio</td>
                      <td className="text-center py-3 px-4">Médio-Alto</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingDown className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" /> Análise de Mercado - Q1 2025
              </h4>
              <div className="text-sm space-y-2">
                <p>O mercado imobiliário apresenta condições favoráveis para investimentos no Q1 de 2025, com alta demanda especialmente no segmento residencial de médio e alto padrão.</p>
                <p>A redução dos estoques disponíveis para 12,4 meses indica um cenário de possível aquecimento de preços a curto prazo, especialmente nas regiões metropolitanas de São Paulo e Rio de Janeiro.</p>
                <p>O aumento consistente da velocidade de vendas (VSO) para 12,6% ao mês sinaliza bom momento para o lançamento de novos empreendimentos, já que o mercado está absorvendo rapidamente os produtos lançados.</p>
                <p>Por outro lado, o aumento da competição representa um ponto de atenção, exigindo maior seletividade na escolha de projetos e incorporadoras com diferenciais competitivos claros.</p>
                <p className="font-medium text-blue-800">Recomendação: Manter alocação direcionada ao segmento residencial de alto padrão em regiões metropolitanas, com preferência para incorporadoras com rating A ou superior e velocidade de vendas comprovada acima da média do mercado.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="developers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Total de Incorporadoras</p>
                    <p className="text-xl font-semibold">168</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +12 novos
                    </p>
                  </div>
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Rating Médio</p>
                    <p className="text-xl font-semibold">B+</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +0.3 pts
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">VGV Médio por Inc.</p>
                    <p className="text-xl font-semibold">R$ 168M</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +7.8%
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Inadimplência Média</p>
                    <p className="text-xl font-semibold">2.8%</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" /> -0.6%
                    </p>
                  </div>
                  <TrendingDown className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Distribuição por Rating</h3>
              <div className="h-60 flex items-end space-x-4 mb-4">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-700" style={{ height: '12%' }}></div>
                  <span className="text-xs mt-2">A+</span>
                  <span className="text-xs font-medium">5%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-500" style={{ height: '24%' }}></div>
                  <span className="text-xs mt-2">A</span>
                  <span className="text-xs font-medium">14%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-300" style={{ height: '38%' }}></div>
                  <span className="text-xs mt-2">B+</span>
                  <span className="text-xs font-medium">22%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-yellow-400" style={{ height: '65%' }}></div>
                  <span className="text-xs mt-2">B</span>
                  <span className="text-xs font-medium">32%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-orange-400" style={{ height: '42%' }}></div>
                  <span className="text-xs mt-2">C+</span>
                  <span className="text-xs font-medium">18%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-red-400" style={{ height: '28%' }}></div>
                  <span className="text-xs mt-2">C</span>
                  <span className="text-xs font-medium">9%</span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <p className="text-center">41% das incorporadoras possuem rating B+ ou superior, representando opções de baixo risco para investimento.</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Principais Indicadores de Risco</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Alavancagem Financeira</span>
                      <span className="text-sm font-medium text-yellow-600">Médio</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Liquidez</span>
                      <span className="text-sm font-medium text-green-600">Bom</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Rentabilidade</span>
                      <span className="text-sm font-medium text-green-600">Bom</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Capacidade de Entrega</span>
                      <span className="text-sm font-medium text-green-600">Muito Bom</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Governança</span>
                      <span className="text-sm font-medium text-yellow-600">Médio</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tendências Observadas</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-800 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" /> Tendências Positivas
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-green-600">•</div>
                        <p>Aumento da transparência e qualidade dos relatórios financeiros</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-green-600">•</div>
                        <p>Redução dos níveis de endividamento médio do setor</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-green-600">•</div>
                        <p>Melhoria nos prazos de entrega de empreendimentos</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-green-600">•</div>
                        <p>Adoção de práticas ESG por incorporadoras de grande porte</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" /> Pontos de Atenção
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                        <p>Aumento da competição levando a margens mais apertadas</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                        <p>Pressão inflacionária em custos de construção</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                        <p>Incorporadoras pequenas com dificuldades de acesso a capital</p>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                        <p>Aumento do número de disputas legais no setor</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" /> Análise de Risco das Incorporadoras - Q1 2025
              </h4>
              <div className="text-sm space-y-2">
                <p>O perfil de risco das incorporadoras apresenta uma melhoria constante, com 41% das empresas analisadas classificadas como B+ ou superior, indicando níveis adequados de solidez financeira e operacional.</p>
                <p>A redução da inadimplência média para 2,8% reflete uma melhor gestão financeira e critérios mais rigorosos de aprovação de clientes, contribuindo para a estabilidade do setor.</p>
                <p>Os principais fatores de risco continuam sendo a alavancagem financeira e os níveis de governança, especialmente entre incorporadoras de médio e pequeno porte.</p>
                <p>Por outro lado, os indicadores de capacidade de entrega e rentabilidade mostram-se robustos, com tendência positiva no último trimestre.</p>
                <p className="font-medium text-blue-800">Recomendação: Manter a estratégia de seletividade, com foco em incorporadoras com rating A- ou superior, que representam 19% do mercado. Para incorporadoras B+, recomenda-se uma análise mais detalhada e garantias reforçadas.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Rating Médio</p>
                    <p className="text-xl font-semibold">A-</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> vs B+ do mercado
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">TIR Média</p>
                    <p className="text-xl font-semibold">16.2%</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> vs 15.3% do mercado
                    </p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Prazo Médio</p>
                    <p className="text-xl font-semibold">32 meses</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" /> vs 38 meses do mercado
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Índice de Diversificação</p>
                    <p className="text-xl font-semibold">0.72</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> vs 0.58 do mercado
                    </p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Distribuição por Rating</h3>
              <div className="h-60 flex items-end space-x-4 mb-4">
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-700" style={{ height: '25%' }}></div>
                  <span className="text-xs mt-2">A+</span>
                  <span className="text-xs font-medium">12%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-500" style={{ height: '42%' }}></div>
                  <span className="text-xs mt-2">A</span>
                  <span className="text-xs font-medium">21%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-300" style={{ height: '60%' }}></div>
                  <span className="text-xs mt-2">B+</span>
                  <span className="text-xs font-medium">30%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-yellow-400" style={{ height: '36%' }}></div>
                  <span className="text-xs mt-2">B</span>
                  <span className="text-xs font-medium">18%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-orange-400" style={{ height: '24%' }}></div>
                  <span className="text-xs mt-2">C+</span>
                  <span className="text-xs font-medium">12%</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-red-400" style={{ height: '14%' }}></div>
                  <span className="text-xs mt-2">C</span>
                  <span className="text-xs font-medium">7%</span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <p className="text-center">63% do portfólio está alocado em ativos com rating B+ ou superior, acima da média de mercado de 41%.</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Distribuição por Tipo de Empreendimento</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                        Residencial Alto Padrão
                      </span>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                        Residencial Médio
                      </span>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                        Residencial Econômico
                      </span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
                        Comercial
                      </span>
                      <span className="text-sm font-medium">8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                        Lajes Corporativas
                      </span>
                      <span className="text-sm font-medium">2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '2%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Distribuição por Região</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-sm mr-2"></div>
                        São Paulo - Capital
                      </span>
                      <span className="text-sm font-medium">52%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></div>
                        São Paulo - Interior
                      </span>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-sm mr-2"></div>
                        Rio de Janeiro
                      </span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
                        Minas Gerais
                      </span>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-sm mr-2"></div>
                        Outras Regiões
                      </span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="macroeconomic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Taxa SELIC</p>
                    <p className="text-xl font-semibold">8.5%</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" /> -0.5 pontos
                    </p>
                  </div>
                  <BarChart2 className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Inflação (IPCA)</p>
                    <p className="text-xl font-semibold">3.2%</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" /> -0.3 pontos
                    </p>
                  </div>
                  <TrendingDown className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Crescimento PIB</p>
                    <p className="text-xl font-semibold">2.1%</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" /> +0.4 pontos
                    </p>
                  </div>
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500">Desemprego</p>
                    <p className="text-xl font-semibold">7.8%</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" /> -0.6 pontos
                    </p>
                  </div>
                  <TrendingDown className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Índices do Setor Imobiliário</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Índice</th>
                      <th className="text-center py-3 px-4 font-medium">Valor Atual</th>
                      <th className="text-center py-3 px-4 font-medium">Variação Anual</th>
                      <th className="text-center py-3 px-4 font-medium">Tendência</th>
                      <th className="text-center py-3 px-4 font-medium">Impacto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">INCC (Custo Construção)</td>
                      <td className="text-center py-3 px-4">3.8%</td>
                      <td className="text-center py-3 px-4">+0.2%</td>
                      <td className="text-center py-3 px-4 text-yellow-600">
                        <TrendingUp className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <AlertTriangle className="h-4 w-4 text-yellow-600 inline" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">FipeZAP (Preços)</td>
                      <td className="text-center py-3 px-4">+5.4%</td>
                      <td className="text-center py-3 px-4">+1.2%</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingUp className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">CRI (Spread Médio)</td>
                      <td className="text-center py-3 px-4">IPCA+5.8%</td>
                      <td className="text-center py-3 px-4">-0.4%</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingDown className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="py-3 px-4">Financiamento (Taxa Média)</td>
                      <td className="text-center py-3 px-4">8.9% a.a.</td>
                      <td className="text-center py-3 px-4">-0.7%</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingDown className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4">Confiança do Consumidor</td>
                      <td className="text-center py-3 px-4">104.6</td>
                      <td className="text-center py-3 px-4">+6.2</td>
                      <td className="text-center py-3 px-4 text-green-600">
                        <TrendingUp className="h-4 w-4 inline" />
                      </td>
                      <td className="text-center py-3 px-4">
                        <ShieldCheck className="h-4 w-4 text-green-600 inline" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 mr-2" /> Análise Macroeconômica - Q1 2025
              </h4>
              <div className="text-sm space-y-2">
                <p>O cenário macroeconômico apresenta condições favoráveis para o setor imobiliário em 2025, com redução gradual da taxa SELIC e manutenção da inflação dentro da meta.</p>
                <p>A queda nas taxas de financiamento imobiliário e o aumento da confiança do consumidor contribuem positivamente para a demanda no setor residencial.</p>
                <p>O crescimento consistente do PIB e a redução do desemprego fortalecem o poder de compra das famílias, sustentando o bom momento do mercado imobiliário residencial.</p>
                <p>A pressão de custos de construção (INCC) representa um ponto de atenção, podendo comprimir margens das incorporadoras no médio prazo caso a tendência persista.</p>
                <p className="font-medium text-blue-800">Recomendação: O ambiente macroeconômico permanece favorável para investimentos no setor imobiliário, com preferência para projetos residenciais de médio e alto padrão em regiões metropolitanas. O momento é oportuno para a estruturação de operações de crédito de longo prazo, aproveitando o ciclo de queda de juros.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
