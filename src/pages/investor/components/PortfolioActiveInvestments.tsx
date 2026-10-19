
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  searchQuery: string;
};

// Sample data for active investments
const activeInvestments = [
  {
    name: "Vista Boulevard",
    company: "Alphaville",
    location: "São Paulo, SP",
    status: "Em Construção",
    investment: "R$ 5,2M",
    tir: "17.2%",
    date: "Jan/2023",
    duration: "36 meses",
    progress: 48,
    icon: "Building2",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    statusBg: "bg-green-100",
    statusColor: "text-green-800",
    progressColor: "bg-green-600"
  },
  {
    name: "Jardins Residencial",
    company: "Eztec",
    location: "Rio de Janeiro, RJ",
    status: "Lançamento",
    investment: "R$ 4,8M",
    tir: "16.8%",
    date: "Mar/2023",
    duration: "30 meses",
    progress: 12,
    icon: "Building2",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    statusBg: "bg-blue-100",
    statusColor: "text-blue-800",
    progressColor: "bg-blue-600"
  },
  {
    name: "Horizonte Tower",
    company: "Tecnisa",
    location: "Belo Horizonte, MG",
    status: "Terraplanagem",
    investment: "R$ 3,5M",
    tir: "14.5%",
    date: "Jun/2023",
    duration: "24 meses",
    progress: 5,
    icon: "Building2",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    statusBg: "bg-yellow-100",
    statusColor: "text-yellow-800",
    progressColor: "bg-yellow-500"
  }
];

export function PortfolioActiveInvestments({ searchQuery }: Props) {
  // Normalize query for case-insensitive compare
  const query = searchQuery.toLowerCase().trim();
  
  // Filter investments based on name or company
  const filteredInvestments = activeInvestments.filter(investment => {
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
          Nenhum investimento encontrado.
        </div>
      ) : (
        filteredInvestments.map((investment, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${investment.bgColor} rounded-md flex items-center justify-center mr-3`}>
                      <Building2 className={`h-5 w-5 ${investment.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{investment.name}</h3>
                      <p className="text-sm text-gray-500">{investment.company} • {investment.location}</p>
                    </div>
                  </div>
                </div>
                <Badge className={`${investment.statusBg} ${investment.statusColor}`}>{investment.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Investimento</p>
                  <p className="text-lg font-semibold">{investment.investment}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">TIR Projetada</p>
                  <p className="text-lg font-semibold text-green-600">{investment.tir}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data do Aporte</p>
                  <p className="font-medium">{investment.date}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Prazo</p>
                  <p className="font-medium">{investment.duration}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Progresso da Obra</span>
                  <span className="text-sm font-medium">{investment.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className={`${investment.progressColor} h-2.5 rounded-full`} style={{ width: `${investment.progress}%` }}></div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Detalhes
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
