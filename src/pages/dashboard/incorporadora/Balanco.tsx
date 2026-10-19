
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Edit, Save, FileText, BarChart2, CreditCard, TrendingUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";

type BalanceItem = {
  id: string;
  name: string;
  value: string;
  isEditing: boolean;
};

export default function Balanco() {
  const [year, setYear] = useState("2024");
  const [quarter, setQuarter] = useState("year");
  const [isLoading, setIsLoading] = useState(false);
  
  // Assets (Ativo)
  const [currentAssets, setCurrentAssets] = useState<BalanceItem[]>([
    { id: "disponibilidades", name: "Disponibilidades", value: "0,00", isEditing: false },
    { id: "contas-receber", name: "Contas a Receber", value: "0,00", isEditing: false },
    { id: "estoques", name: "Estoques", value: "0,00", isEditing: false },
    { id: "aplicacoes", name: "Aplicações Financeiras", value: "0,00", isEditing: false }
  ]);
  
  const [nonCurrentAssets, setNonCurrentAssets] = useState<BalanceItem[]>([
    { id: "imobilizado", name: "Imobilizado", value: "0,00", isEditing: false },
    { id: "investimentos", name: "Investimentos", value: "0,00", isEditing: false }
  ]);
  
  // Liabilities (Passivo)
  const [currentLiabilities, setCurrentLiabilities] = useState<BalanceItem[]>([
    { id: "adiantamentos", name: "Adiantamento de Clientes", value: "0,00", isEditing: false },
    { id: "emprestimos-cp", name: "Empréstimos e Financiamentos CP", value: "0,00", isEditing: false }
  ]);
  
  const [nonCurrentLiabilities, setNonCurrentLiabilities] = useState<BalanceItem[]>([
    { id: "emprestimos-lp", name: "Empréstimos e Financiamentos LP", value: "0,00", isEditing: false },
    { id: "obrigacoes-lp", name: "Obrigações LP", value: "0,00", isEditing: false }
  ]);
  
  // Calculated totals
  const [totalCurrentAssets, setTotalCurrentAssets] = useState("0,00");
  const [totalNonCurrentAssets, setTotalNonCurrentAssets] = useState("0,00");
  const [totalCurrentLiabilities, setTotalCurrentLiabilities] = useState("0,00");
  const [totalNonCurrentLiabilities, setTotalNonCurrentLiabilities] = useState("0,00");
  const [equityTotal, setEquityTotal] = useState("0,00");
  
  // Financial ratios
  const [financialRatios, setFinancialRatios] = useState({
    currentRatio: 0,
    quickRatio: 0, 
    immediateRatio: 0,
    netMargin: 0
  });
  
  // Calculate totals when values change
  useEffect(() => {
    const calculateTotal = (items: BalanceItem[]) => {
      return items.reduce((acc, item) => {
        const numValue = parseFloat(item.value.replace(".", "").replace(",", ".")) || 0;
        return acc + numValue;
      }, 0).toFixed(2).replace(".", ",");
    };
    
    const newTotalCurrentAssets = calculateTotal(currentAssets);
    const newTotalNonCurrentAssets = calculateTotal(nonCurrentAssets);
    const newTotalCurrentLiabilities = calculateTotal(currentLiabilities);
    const newTotalNonCurrentLiabilities = calculateTotal(nonCurrentLiabilities);
    
    setTotalCurrentAssets(newTotalCurrentAssets);
    setTotalNonCurrentAssets(newTotalNonCurrentAssets);
    setTotalCurrentLiabilities(newTotalCurrentLiabilities);
    setTotalNonCurrentLiabilities(newTotalNonCurrentLiabilities);
    
    // Calculate equity (Patrimônio Líquido)
    const totalAssets = parseFloat(newTotalCurrentAssets.replace(",", ".")) + 
                        parseFloat(newTotalNonCurrentAssets.replace(",", "."));
    const totalLiabilities = parseFloat(newTotalCurrentLiabilities.replace(",", ".")) + 
                             parseFloat(newTotalNonCurrentLiabilities.replace(",", "."));
    
    const equity = (totalAssets - totalLiabilities).toFixed(2).replace(".", ",");
    setEquityTotal(equity);
    
    // Calculate financial ratios
    const currentRatioValue = parseFloat(newTotalCurrentLiabilities.replace(",", ".")) !== 0 
      ? parseFloat(newTotalCurrentAssets.replace(",", ".")) / parseFloat(newTotalCurrentLiabilities.replace(",", "."))
      : 0;
      
    const inventoryValue = parseFloat(currentAssets.find(item => item.id === "estoques")?.value.replace(",", ".") || "0");
    const quickRatioValue = parseFloat(newTotalCurrentLiabilities.replace(",", ".")) !== 0
      ? (parseFloat(newTotalCurrentAssets.replace(",", ".")) - inventoryValue) / parseFloat(newTotalCurrentLiabilities.replace(",", "."))
      : 0;
      
    const cashValue = parseFloat(currentAssets.find(item => item.id === "disponibilidades")?.value.replace(",", ".") || "0");
    const immediateRatioValue = parseFloat(newTotalCurrentLiabilities.replace(",", ".")) !== 0
      ? cashValue / parseFloat(newTotalCurrentLiabilities.replace(",", "."))
      : 0;
    
    setFinancialRatios({
      currentRatio: currentRatioValue,
      quickRatio: quickRatioValue,
      immediateRatio: immediateRatioValue,
      netMargin: 0.15 // Example value
    });
    
  }, [currentAssets, nonCurrentAssets, currentLiabilities, nonCurrentLiabilities]);
  
  // Toggle edit mode for an item
  const toggleEdit = (id: string, category: string) => {
    if (category === "currentAssets") {
      setCurrentAssets(currentAssets.map(item => 
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      ));
    } else if (category === "nonCurrentAssets") {
      setNonCurrentAssets(nonCurrentAssets.map(item => 
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      ));
    } else if (category === "currentLiabilities") {
      setCurrentLiabilities(currentLiabilities.map(item => 
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      ));
    } else if (category === "nonCurrentLiabilities") {
      setNonCurrentLiabilities(nonCurrentLiabilities.map(item => 
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      ));
    }
  };
  
  // Update item value
  const updateValue = (id: string, value: string, category: string) => {
    // Format value - replace dots, ensure comma as decimal separator
    let formattedValue = value.replace(/\D/g, "");
    formattedValue = formattedValue 
      ? (parseInt(formattedValue, 10) / 100).toFixed(2).replace(".", ",") 
      : "0,00";
    
    if (category === "currentAssets") {
      setCurrentAssets(currentAssets.map(item => 
        item.id === id ? { ...item, value: formattedValue } : item
      ));
    } else if (category === "nonCurrentAssets") {
      setNonCurrentAssets(nonCurrentAssets.map(item => 
        item.id === id ? { ...item, value: formattedValue } : item
      ));
    } else if (category === "currentLiabilities") {
      setCurrentLiabilities(currentLiabilities.map(item => 
        item.id === id ? { ...item, value: formattedValue } : item
      ));
    } else if (category === "nonCurrentLiabilities") {
      setNonCurrentLiabilities(nonCurrentLiabilities.map(item => 
        item.id === id ? { ...item, value: formattedValue } : item
      ));
    }
  };
  
  // Save all data
  const saveBalanceSheet = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Balanço salvo com sucesso",
        description: `Balanço patrimonial de ${quarter === "year" ? "Ano" : quarter} ${year} foi atualizado.`,
      });
    }, 800);
  };
  
  // Get percentage for progress bars
  const getPercentage = (value: number) => {
    // Scale the value for the progress bar (values usually between 0-3)
    if (value <= 0) return 0;
    if (value >= 3) return 100;
    return (value / 3) * 100;
  };
  
  // Format currency
  const formatCurrency = (value: string) => {
    return `R$ ${value}`;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Balanço Patrimonial</h1>
          <p className="text-gray-500">Visualize e atualize os dados do balanço patrimonial</p>
        </div>
        
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
              <SelectItem value="Q1">1º Trimestre</SelectItem>
              <SelectItem value="Q2">2º Trimestre</SelectItem>
              <SelectItem value="Q3">3º Trimestre</SelectItem>
              <SelectItem value="Q4">4º Trimestre</SelectItem>
              <SelectItem value="year">Ano Completo</SelectItem>
            </SelectContent>
          </Select>
          
          <Button 
            onClick={saveBalanceSheet} 
            disabled={isLoading}
            className="bg-gold text-black hover:bg-gold/90"
          >
            {isLoading ? "Salvando..." : "Salvar Balanço"}
            <Save className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-blue-100 rounded-md">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{formatCurrency(totalCurrentAssets)}</h3>
            <p className="text-gray-500 text-sm">Ativo Circulante</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-purple-100 rounded-md">
                <BarChart2 className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{formatCurrency(totalNonCurrentAssets)}</h3>
            <p className="text-gray-500 text-sm">Ativo Não Circulante</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-red-100 rounded-md">
                <FileText className="h-5 w-5 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{formatCurrency(totalCurrentLiabilities)}</h3>
            <p className="text-gray-500 text-sm">Passivo Circulante</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <div className="p-2 bg-green-100 rounded-md">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{formatCurrency(equityTotal)}</h3>
            <p className="text-gray-500 text-sm">Patrimônio Líquido</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            {/* Current Assets Table */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Ativo Circulante</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-right">Valor (R$)</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentAssets.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">
                          {item.isEditing ? (
                            <Input 
                              value={item.value}
                              onChange={(e) => updateValue(item.id, e.target.value, "currentAssets")}
                              className="text-right"
                            />
                          ) : (
                            formatCurrency(item.value)
                          )}
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => toggleEdit(item.id, "currentAssets")}
                          >
                            {item.isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="font-medium">
                      <TableCell>Total</TableCell>
                      <TableCell className="text-right">{formatCurrency(totalCurrentAssets)}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            {/* Non-Current Assets Table */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Ativo Não Circulante</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-right">Valor (R$)</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {nonCurrentAssets.map(item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-right">
                          {item.isEditing ? (
                            <Input 
                              value={item.value}
                              onChange={(e) => updateValue(item.id, e.target.value, "nonCurrentAssets")}
                              className="text-right"
                            />
                          ) : (
                            formatCurrency(item.value)
                          )}
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => toggleEdit(item.id, "nonCurrentAssets")}
                          >
                            {item.isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="font-medium">
                      <TableCell>Total</TableCell>
                      <TableCell className="text-right">{formatCurrency(totalNonCurrentAssets)}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Current Liabilities Table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Passivo Circulante</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Valor (R$)</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentLiabilities.map(item => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right">
                        {item.isEditing ? (
                          <Input 
                            value={item.value}
                            onChange={(e) => updateValue(item.id, e.target.value, "currentLiabilities")}
                            className="text-right"
                          />
                        ) : (
                          formatCurrency(item.value)
                        )}
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => toggleEdit(item.id, "currentLiabilities")}
                        >
                          {item.isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-medium">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-right">{formatCurrency(totalCurrentLiabilities)}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {/* Non-Current Liabilities Table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Passivo Não Circulante</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Valor (R$)</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nonCurrentLiabilities.map(item => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right">
                        {item.isEditing ? (
                          <Input 
                            value={item.value}
                            onChange={(e) => updateValue(item.id, e.target.value, "nonCurrentLiabilities")}
                            className="text-right"
                          />
                        ) : (
                          formatCurrency(item.value)
                        )}
                      </TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => toggleEdit(item.id, "nonCurrentLiabilities")}
                        >
                          {item.isEditing ? <Save className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-medium">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-right">{formatCurrency(totalNonCurrentLiabilities)}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          {/* Equity Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Patrimônio Líquido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">{formatCurrency(equityTotal)}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${parseFloat(equityTotal.replace(",", ".")) >= 0 ? "bg-green-500" : "bg-red-500"}`}
                    style={{ width: `${Math.min(Math.abs(parseFloat(equityTotal.replace(",", ".")) / 100000 * 100), 100)}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Financial Ratios Card */}
          <Card className="bg-slate-50">
            <CardHeader className="pb-3">
              <CardTitle>Índices Financeiros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Liquidez Corrente</span>
                  <span className="text-sm font-medium">{financialRatios.currentRatio.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${getPercentage(financialRatios.currentRatio)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {financialRatios.currentRatio >= 1 
                    ? "Boa capacidade de pagamento a curto prazo" 
                    : "Potencial dificuldade de pagamento a curto prazo"}
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Liquidez Seca</span>
                  <span className="text-sm font-medium">{financialRatios.quickRatio.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full" 
                    style={{ width: `${getPercentage(financialRatios.quickRatio)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Capacidade de pagar dívidas de curto prazo sem considerar estoques
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Liquidez Imediata</span>
                  <span className="text-sm font-medium">{financialRatios.immediateRatio.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-600 h-2 rounded-full" 
                    style={{ width: `${getPercentage(financialRatios.immediateRatio)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Capacidade de pagar dívidas de curto prazo apenas com disponibilidades
                </p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Margem Líquida</span>
                  <span className="text-sm font-medium">{(financialRatios.netMargin * 100).toFixed(2)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${financialRatios.netMargin * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Lucro líquido em relação à receita líquida
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
