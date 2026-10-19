
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  searchQuery: string;
};

// Sample data for completed investments
const completedInvestments = [
  {
    name: "Mansão Riviera",
    company: "Alphaville",
    location: "Campinas, SP",
    status: "Concluído",
    investment: "R$ 3,2M",
    tir: "16.9%",
    return: "R$ 4,3M",
    duration: "28 meses",
    performance: "+0.4%",
    progress: 100,
    icon: "Building2",
    trend: "up",
    performanceColor: "text-green-600"
  },
  {
    name: "Edifício Cristal",
    company: "Eztec",
    location: "São Paulo, SP",
    status: "Concluído",
    investment: "R$ 2,8M",
    tir: "15.2%",
    return: "R$ 3,6M",
    duration: "32 meses",
    performance: "-1.3%",
    progress: 92,
    icon: "Building2",
    trend: "down",
    performanceColor: "text-yellow-600"
  }
];

export function PortfolioCompletedInvestments({ searchQuery }: Props) {
  // Normalize query for case-insensitive compare
  const query = searchQuery.toLowerCase().trim();
  
  // Filter investments based on name or company
  const filteredInvestments = completedInvestments.filter(investment => {
    if (query === "") return true;
    
    const nameMatch = investment.name.toLowerCase().includes(query);
    const companyMatch = investment.company.toLowerCase().includes(query);
    const locationMatch = investment.location.toLowerCase().includes(query);
    
    return nameMatch || companyMatch || locationMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredInvestments.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 py-10">
          Nenhum investimento concluído encontrado.
        </div>
      ) : (
        filteredInvestments.map((investment, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-3">
                      <Building2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{investment.name}</h3>
                      <p className="text-sm text-gray-500">{investment.company} • {investment.location}</p>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">{investment.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Investimento</p>
                  <p className="text-lg font-semibold">{investment.investment}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">TIR Realizada</p>
                  <p className={`text-lg font-semibold ${investment.performanceColor}`}>{investment.tir}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Retorno Total</p>
                  <p className={`font-medium ${investment.performanceColor}`}>
                    {investment.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 inline mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 inline mr-1" />
                    )}
                    {investment.return}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duração</p>
                  <p className="font-medium">{investment.duration}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Resultado vs. Projetado</span>
                  <span className={`text-sm font-medium ${investment.performanceColor}`}>{investment.performance}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`${investment.performanceColor === "text-green-600" ? "bg-green-600" : "bg-yellow-500"} h-2.5 rounded-full`} style={{ width: `${investment.progress}%` }}></div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Relatório Final
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
