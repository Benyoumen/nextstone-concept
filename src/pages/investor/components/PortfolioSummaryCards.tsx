
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Percent } from "lucide-react";

export function PortfolioSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-md">
              <Building2 className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-1">R$ 18,5M</h3>
          <p className="text-gray-500 text-sm">Capital Investido</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-md">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex items-center text-sm text-green-600">
              <span className="font-medium">+16.8%</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-1">R$ 3,1M</h3>
          <p className="text-gray-500 text-sm">Rendimento Total</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-md">
              <Percent className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-1">16.2%</h3>
          <p className="text-gray-500 text-sm">TIR Média da Carteira</p>
        </CardContent>
      </Card>
    </div>
  );
}
