import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, Search, FileText, Users, BarChart2, Calendar, 
  ShieldCheck, AlertTriangle, TrendingUp, TrendingDown,
  AlertCircle, HelpCircle, CheckCircle, Gavel, Shield
} from "lucide-react";

export default function DeveloperAnalysis() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRating, setFilterRating] = useState("all");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Análise de Incorporadoras</h1>
        
        <div className="flex gap-2">
          <Select 
            defaultValue={filterRating} 
            onValueChange={setFilterRating}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Ratings</SelectItem>
              <SelectItem value="a">A e acima</SelectItem>
              <SelectItem value="b">B e acima</SelectItem>
              <SelectItem value="c">C e acima</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Buscar incorporadora por nome, localização ou segmento..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Alphaville</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Rating A+</Badge>
                    <span className="text-sm text-gray-500">São Paulo, SP</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Relatório Completo
                </Button>
                <Button size="sm">Ver Projetos</Button>
              </div>
            </div>
            
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="financial">Análise Financeira</TabsTrigger>
                <TabsTrigger value="projects">Projetos</TabsTrigger>
                <TabsTrigger value="risk">Análise de Risco</TabsTrigger>
                <TabsTrigger value="juridico">Jurídico</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Fundação</p>
                          <p className="text-xl font-semibold">1995</p>
                        </div>
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Projetos Entregues</p>
                          <p className="text-xl font-semibold">42</p>
                        </div>
                        <Building2 className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Total de Funcionários</p>
                          <p className="text-xl font-semibold">850+</p>
                        </div>
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">VGV Acumulado</p>
                          <p className="text-xl font-semibold">R$ 1.2B</p>
                        </div>
                        <BarChart2 className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Informações Gerais</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-500">CNPJ</p>
                          <p className="font-medium">XX.XXX.XXX/0001-XX</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Site</p>
                          <p className="font-medium text-blue-600">www.alphaville.com.br</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Segmento Principal</p>
                          <p className="font-medium">Residencial de Alto Padrão</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Áreas de Atuação</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <Badge variant="outline">São Paulo</Badge>
                            <Badge variant="outline">Rio de Janeiro</Badge>
                            <Badge variant="outline">Belo Horizonte</Badge>
                            <Badge variant="outline">Salvador</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Avaliação do Risco</h3>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Solidez Financeira</span>
                            <span className="text-sm font-medium flex items-center text-green-600">
                              <ShieldCheck className="h-4 w-4 mr-1" /> Excelente
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Histórico de Entrega</span>
                            <span className="text-sm font-medium flex items-center text-green-600">
                              <ShieldCheck className="h-4 w-4 mr-1" /> Excelente
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Liquidez</span>
                            <span className="text-sm font-medium flex items-center text-green-600">
                              <ShieldCheck className="h-4 w-4 mr-1" /> Muito Boa
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Governança</span>
                            <span className="text-sm font-medium flex items-center text-green-600">
                              <ShieldCheck className="h-4 w-4 mr-1" /> Muito Boa
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Prós e Contras</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-green-200 bg-green-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2" /> Pontos Fortes
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Forte presença nacional com projetos em várias regiões</p>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Histórico comprovado de entregas dentro do prazo</p>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Excelente reputação e reconhecimento da marca</p>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Forte estrutura financeira com baixo endividamento</p>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Equipe gerencial experiente e qualificada</p>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-yellow-200 bg-yellow-50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" /> Pontos de Atenção
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Alta dependência do mercado de alto padrão</p>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Sensibilidade a ciclos econômicos e taxas de juros</p>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5">•</div>
                            <p>Competição crescente no segmento premium</p>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="financial" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-500">Receita Anual</p>
                          <p className="text-xl font-semibold">R$ 380M</p>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> +12%
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
                          <p className="text-sm text-gray-500">Margem EBITDA</p>
                          <p className="text-xl font-semibold">24.5%</p>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> +1.8%
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
                          <p className="text-sm text-gray-500">ROE</p>
                          <p className="text-xl font-semibold">18.2%</p>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> +0.7%
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
                          <p className="text-sm text-gray-500">Dívida Líquida/EBITDA</p>
                          <p className="text-xl font-semibold">1.6x</p>
                          <p className="text-xs text-green-600 flex items-center">
                            <TrendingDown className="h-3 w-3 mr-1" /> -0.3x
                          </p>
                        </div>
                        <BarChart2 className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Indicadores Financeiros - Últimos 3 Anos</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px]">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Indicador</th>
                          <th className="text-right py-3 px-4 font-medium">2023</th>
                          <th className="text-right py-3 px-4 font-medium">2024</th>
                          <th className="text-right py-3 px-4 font-medium">2025</th>
                          <th className="text-right py-3 px-4 font-medium">Tendência</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">Receita (R$ M)</td>
                          <td className="text-right py-3 px-4">320</td>
                          <td className="text-right py-3 px-4">348</td>
                          <td className="text-right py-3 px-4">380</td>
                          <td className="text-right py-3 px-4 text-green-600">
                            <TrendingUp className="h-4 w-4 inline" />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">EBITDA (R$ M)</td>
                          <td className="text-right py-3 px-4">72.6</td>
                          <td className="text-right py-3 px-4">79.5</td>
                          <td className="text-right py-3 px-4">93.1</td>
                          <td className="text-right py-3 px-4 text-green-600">
                            <TrendingUp className="h-4 w-4 inline" />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Margem EBITDA (%)</td>
                          <td className="text-right py-3 px-4">22.7</td>
                          <td className="text-right py-3 px-4">22.8</td>
                          <td className="text-right py-3 px-4">24.5</td>
                          <td className="text-right py-3 px-4 text-green-600">
                            <TrendingUp className="h-4 w-4 inline" />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Lucro Líquido (R$ M)</td>
                          <td className="text-right py-3 px-4">42.3</td>
                          <td className="text-right py-3 px-4">48.5</td>
                          <td className="text-right py-3 px-4">56.2</td>
                          <td className="text-right py-3 px-4 text-green-600">
                            <TrendingUp className="h-4 w-4 inline" />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Liquidez Corrente</td>
                          <td className="text-right py-3 px-4">2.8</td>
                          <td className="text-right py-3 px-4">3.1</td>
                          <td className="text-right py-3 px-4">3.2</td>
                          <td className="text-right py-3 px-4 text-green-600">
                            <TrendingUp className="h-4 w-4 inline" />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Dívida Líquida (R$ M)</td>
                          <td className="text-right py-3 px-4">142</td>
                          <td className="text-right py-3 px-4">136</td>
                          <td className="text-right py-3 px-4">148</td>
                          <td className="text-right py-3 px-4 text-yellow-600">
                            <AlertTriangle className="h-4 w-4 inline" />
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Dívida Líquida/EBITDA</td>
                          <td className="text-right py-3 px-4">1.96</td>
                          <td className="text-right py-3 px-4">1.71</td>
                          <td className="text-right py-3 px-4">1.59</td>
                          <td className="text-right py-3 px-4 text-green-600">
                            <TrendingUp className="h-4 w-4 inline" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <h4 className="font-medium flex items-center mb-4">
                        <HelpCircle className="h-4 w-4 mr-2 text-gray-400" />
                        Conclusão da Análise Financeira
                      </h4>
                      <div className="text-sm space-y-2">
                        <p>A Alphaville apresenta uma situação financeira sólida, com crescimento consistente de receita e lucratividade nos últimos três anos.</p>
                        <p>A empresa mantém níveis confortáveis de liquidez e endividamento controlado, demonstrando disciplina na gestão financeira.</p>
                        <p>A tendência de crescimento da margem EBITDA indica melhoria na eficiência operacional e potencial para maior rentabilidade.</p>
                        <p>O aumento recente na dívida líquida em 2025 está relacionado a investimentos em novos projetos, mas a relação Dívida/EBITDA continua em declínio, indicando capacidade de absorver esse aumento.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="projects">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Projetos em Execução</h3>
                    <Button variant="outline" size="sm">Ver todos (18)</Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="h-40 bg-slate-100 rounded-md mb-3 flex items-center justify-center">
                          <Building2 className="h-16 w-16 text-slate-300" />
                        </div>
                        <h4 className="font-semibold">Vista Boulevard</h4>
                        <p className="text-sm text-gray-500 mb-2">São Paulo, SP</p>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                          <div>
                            <p className="text-gray-500">VGV</p>
                            <p className="font-medium">R$ 85M</p>
                          </div>
                          <div>
                            <p className="text-gray-500">TIR</p>
                            <p className="font-medium">17.2%</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Unidades</p>
                            <p className="font-medium">128</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Conclusão</p>
                            <p className="font-medium">2027</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-green-100 text-green-800">Fase: Construção</Badge>
                          <Button variant="ghost" size="sm">Detalhes</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="h-40 bg-slate-100 rounded-md mb-3 flex items-center justify-center">
                          <Building2 className="h-16 w-16 text-slate-300" />
                        </div>
                        <h4 className="font-semibold">Parque das Artes</h4>
                        <p className="text-sm text-gray-500 mb-2">Rio de Janeiro, RJ</p>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                          <div>
                            <p className="text-gray-500">VGV</p>
                            <p className="font-medium">R$ 62M</p>
                          </div>
                          <div>
                            <p className="text-gray-500">TIR</p>
                            <p className="font-medium">16.8%</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Unidades</p>
                            <p className="font-medium">96</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Conclusão</p>
                            <p className="font-medium">2026</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-blue-100 text-blue-800">Fase: Lançamento</Badge>
                          <Button variant="ghost" size="sm">Detalhes</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="h-40 bg-slate-100 rounded-md mb-3 flex items-center justify-center">
                          <Building2 className="h-16 w-16 text-slate-300" />
                        </div>
                        <h4 className="font-semibold">Morada Verde</h4>
                        <p className="text-sm text-gray-500 mb-2">Belo Horizonte, MG</p>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                          <div>
                            <p className="text-gray-500">VGV</p>
                            <p className="font-medium">R$ 45M</p>
                          </div>
                          <div>
                            <p className="text-gray-500">TIR</p>
                            <p className="font-medium">15.8%</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Unidades</p>
                            <p className="font-medium">64</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Conclusão</p>
                            <p className="font-medium">2027</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-yellow-100 text-yellow-800">Fase: Terraplanagem</Badge>
                          <Button variant="ghost" size="sm">Detalhes</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Histórico de Entregas</h3>
                    <Button variant="outline" size="sm">Ver todos (42)</Button>
                  </div>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px]">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium">Projeto</th>
                              <th className="text-left py-3 px-4 font-medium">Local</th>
                              <th className="text-left py-3 px-4 font-medium">Ano Entrega</th>
                              <th className="text-left py-3 px-4 font-medium">VGV (R$ M)</th>
                              <th className="text-left py-3 px-4 font-medium">Unidades</th>
                              <th className="text-left py-3 px-4 font-medium">Prazo</th>
                              <th className="text-left py-3 px-4 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">Horizonte Jardins</td>
                              <td className="py-3 px-4">São Paulo, SP</td>
                              <td className="py-3 px-4">2024</td>
                              <td className="py-3 px-4">92</td>
                              <td className="py-3 px-4">145</td>
                              <td className="py-3 px-4">No prazo</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-green-100 text-green-800">Entregue</Badge>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">Villa Serena</td>
                              <td className="py-3 px-4">Rio de Janeiro, RJ</td>
                              <td className="py-3 px-4">2023</td>
                              <td className="py-3 px-4">78</td>
                              <td className="py-3 px-4">124</td>
                              <td className="py-3 px-4">No prazo</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-green-100 text-green-800">Entregue</Badge>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">Reserva Alphaville</td>
                              <td className="py-3 px-4">Belo Horizonte, MG</td>
                              <td className="py-3 px-4">2023</td>
                              <td className="py-3 px-4">65</td>
                              <td className="py-3 px-4">86</td>
                              <td className="py-3 px-4">2 meses de atraso</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-green-100 text-green-800">Entregue</Badge>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-4">Parque Prime</td>
                              <td className="py-3 px-4">Salvador, BA</td>
                              <td className="py-3 px-4">2022</td>
                              <td className="py-3 px-4">58</td>
                              <td className="py-3 px-4">72</td>
                              <td className="py-3 px-4">No prazo</td>
                              <td className="py-3 px-4">
                                <Badge className="bg-green-100 text-green-800">Entregue</Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="risk">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Resumo de Risco</h3>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium">Pontuação de Risco Geral</span>
                          <span className="text-lg font-bold text-green-600">92/100</span>
                        </div>
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div className="bg-green-600 h-full rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-500">
                          <span>Alto Risco</span>
                          <span>Baixo Risco</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Risco Financeiro</span>
                            <span className="text-sm font-medium">95/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Risco Operacional</span>
                            <span className="text-sm font-medium">90/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Risco Legal e Regulatório</span>
                            <span className="text-sm font-medium">92/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Risco de Mercado</span>
                            <span className="text-sm font-medium">88/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Risco Reputacional</span>
                            <span className="text-sm font-medium">94/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Fatores de Risco</h3>
                      <div className="space-y-4">
                        <div className="p-3 border border-green-200 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2 flex items-center">
                            <ShieldCheck className="h-4 w-4 mr-2" /> Fatores Positivos
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-green-600">•</div>
                              <p>Forte posição de caixa e baixo nível de endividamento</p>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-green-600">•</div>
                              <p>Histórico comprovado de entrega de projetos dentro do prazo</p>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-green-600">•</div>
                              <p>Diversificação geográfica reduz exposição a mercados específicos</p>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-green-600">•</div>
                              <p>Governança corporativa robusta e transparente</p>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-green-600">•</div>
                              <p>Marca forte com alta capacidade de comercialização</p>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800 mb-2 flex items-center">
                            <AlertTriangle className="h-4 w-4 mr-2" /> Potenciais Riscos
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                              <p>Exposição à volatilidade da taxa de juros no mercado imobiliário</p>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                              <p>Dependência do mercado de alto padrão, mais sensível a crises econômicas</p>
                            </li>
                            <li className="flex items-start">
                              <div className="mr-2 mt-0.5 text-yellow-600">•</div>
                              <p>Risco de inflação de custos de construção impactando margens</p>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-3 border border-blue-200 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                            <HelpCircle className="h-4 w-4 mr-2" /> Recomendação da Análise
                          </h4>
                          <p className="text-sm">
                            A Alphaville apresenta um perfil de risco muito favorável, com sólida posição financeira e excelente histórico operacional. Recomendamos fortemente a consideração de parcerias e investimentos nos projetos desta incorporadora, especialmente aqueles com TIR superior a 16%.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Análise Comparativa do Setor</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[640px]">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4 font-medium">Métrica</th>
                              <th className="text-center py-3 px-4 font-medium">Alphaville</th>
                              <th className="text-center py-3 px-4 font-medium">Média do Setor</th>
                              <th className="text-center py-3 px-4 font-medium">Posição Relativa</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">Margem EBITDA</td>
                              <td className="text-center py-3 px-4">24.5%</td>
                              <td className="text-center py-3 px-4">18.2%</td>
                              <td className="text-center py-3 px-4 text-green-600">
                                <span className="flex items-center justify-center">
                                  <TrendingUp className="h-4 w-4 mr-1" /> +6.3%
                                </span>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">ROE</td>
                              <td className="text-center py-3 px-4">18.2%</td>
                              <td className="text-center py-3 px-4">14.5%</td>
                              <td className="text-center py-3 px-4 text-green-600">
                                <span className="flex items-center justify-center">
                                  <TrendingUp className="h-4 w-4 mr-1" /> +3.7%
                                </span>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">Dívida Líquida/EBITDA</td>
                              <td className="text-center py-3 px-4">1.59x</td>
                              <td className="text-center py-3 px-4">2.36x</td>
                              <td className="text-center py-3 px-4 text-green-600">
                                <span className="flex items-center justify-center">
                                  <TrendingUp className="h-4 w-4 mr-1" /> Melhor
                                </span>
                              </td>
                            </tr>
                            <tr className="border-b hover:bg-slate-50">
                              <td className="py-3 px-4">Liquidez Corrente</td>
                              <td className="text-center py-3 px-4">3.2</td>
                              <td className="text-center py-3 px-4">2.4</td>
                              <td className="text-center py-3 px-4 text-green-600">
                                <span className="flex items-center justify-center">
                                  <TrendingUp className="h-4 w-4 mr-1" /> +0.8
                                </span>
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                              <td className="py-3 px-4">TIR Média dos Projetos</td>
                              <td className="text-center py-3 px-4">16.7%</td>
                              <td className="text-center py-3 px-4">15.3%</td>
                              <td className="text-center py-3 px-4 text-green-600">
                                <span className="flex items-center justify-center">
                                  <TrendingUp className="h-4 w-4 mr-1" /> +1.4%
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="juridico" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Quadro Societário */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold flex items-center mb-4">
                        <Building2 className="mr-2 h-5 w-5 text-purple-600" />
                        Quadro Societário
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="font-medium">Carlos Mendes</p>
                            <p className="text-sm text-gray-600">CEO & Fundador</p>
                          </div>
                          <span className="text-sm font-medium">38%</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="font-medium">Patrícia Santos</p>
                            <p className="text-sm text-gray-600">CFO & Co-Fundadora</p>
                          </div>
                          <span className="text-sm font-medium">32%</span>
                        </div>
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                          <div>
                            <p className="font-medium">Grupo Vision</p>
                            <p className="text-sm text-gray-600">Investidor Institucional</p>
                          </div>
                          <span className="text-sm font-medium">20%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Outros Investidores</p>
                            <p className="text-sm text-gray-600">Investidores minoritários</p>
                          </div>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Governança */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold flex items-center mb-4">
                        <Gavel className="mr-2 h-5 w-5 text-purple-600" />
                        Governança
                      </h3>
                      <div className="space-y-4">
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Conselho Administrativo</p>
                          <p className="text-sm text-gray-600">7 membros, com reuniões mensais para definição de estratégias e monitoramento de desempenho</p>
                        </div>
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Diretoria Executiva</p>
                          <p className="text-sm text-gray-600">5 diretores responsáveis pela execução da estratégia e operação do dia-a-dia</p>
                        </div>
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Comitê de Riscos</p>
                          <p className="text-sm text-gray-600">Avaliação trimestral de riscos operacionais, financeiros e de mercado</p>
                        </div>
                        <div>
                          <p className="font-medium">Compliance e Auditoria</p>
                          <p className="text-sm text-gray-600">Departamento independente com reporte direto ao Conselho</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Estrutura Legal */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold flex items-center mb-4">
                      <Shield className="mr-2 h-5 w-5 text-purple-600" />
                      Estrutura Legal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Razão Social</p>
                          <p className="text-sm">Alphaville Urbanismo S.A.</p>
                          <p className="text-sm text-gray-600">CNPJ: XX.XXX.XXX/0001-XX</p>
                          <p className="text-sm text-gray-600">Fundada em 1995</p>
                        </div>
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Estrutura Societária</p>
                          <p className="text-sm text-gray-600">Sociedade Anônima de Capital Fechado</p>
                        </div>
                        <div>
                          <p className="font-medium">SPEs Ativas</p>
                          <p className="text-sm text-gray-600">28 Sociedades de Propósito Específico para empreendimentos individuais</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Registro e Regulamentações</p>
                          <p className="text-sm text-gray-600">Registrada na CVM - Categoria B</p>
                          <p className="text-sm text-gray-600">Regulamentação ABECIP para financiamento imobiliário</p>
                        </div>
                        <div className="pb-3 border-b border-gray-100">
                          <p className="font-medium">Histórico Legal</p>
                          <p className="text-sm text-gray-600">Sem processos judiciais materiais nos últimos 5 anos</p>
                        </div>
                        <div>
                          <p className="font-medium">Escritórios de Advocacia</p>
                          <p className="text-sm text-gray-600">Pinheiro Neto Advogados (Corporativo)</p>
                          <p className="text-sm text-gray-600">Machado Meyer (Projetos)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
