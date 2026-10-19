
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { FileChartLine } from "lucide-react";

type CashFlowData = {
  year: number;
  investment: number;
  revenue: number;
  netFlow: number;
};

type CashFlowAnalysisProps = {
  cashFlowData: CashFlowData[];
};

export default function CashFlowAnalysis({ cashFlowData }: CashFlowAnalysisProps) {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FileChartLine className="h-5 w-5 text-indigo-600" />
        Fluxo de Caixa Projetado
      </h3>
      <div className="mb-7 h-64 bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
        <ChartContainer 
          config={{
            investment: { color: "#ef4444" },
            revenue: { color: "#10b981" },
            netFlow: { color: "#4f46e5" }
          }}
        >
          <LineChart data={cashFlowData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="investment" name="Investimento (R$ M)" stroke="var(--color-investment)" strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" name="Receita (R$ M)" stroke="var(--color-revenue)" strokeWidth={2} />
            <Line type="monotone" dataKey="netFlow" name="Fluxo Líquido (R$ M)" stroke="var(--color-netFlow)" strokeWidth={2} />
          </LineChart>
        </ChartContainer>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ano</TableHead>
            <TableHead>Investimento</TableHead>
            <TableHead>Receita</TableHead>
            <TableHead>Fluxo Líquido</TableHead>
            <TableHead>VPL Acumulado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cashFlowData.map((data, index) => {
            let cumulativeNPV = 0;
            for (let i = 0; i <= index; i++) {
              const flow = cashFlowData[i].netFlow;
              cumulativeNPV += flow / Math.pow(1.15, i);
            }
            return (
              <TableRow key={data.year}>
                <TableCell>{data.year}</TableCell>
                <TableCell className="text-red-500">
                  {data.investment < 0 ? `- R$ ${Math.abs(data.investment).toFixed(1)}M` : '-'}
                </TableCell>
                <TableCell className="text-green-500">
                  {data.revenue > 0 ? `+ R$ ${data.revenue.toFixed(1)}M` : '-'}
                </TableCell>
                <TableCell className={data.netFlow >= 0 ? "text-green-500" : "text-red-500"}>
                  {data.netFlow >= 0 ? 
                    `+ R$ ${data.netFlow.toFixed(1)}M` : 
                    `- R$ ${Math.abs(data.netFlow).toFixed(1)}M`}
                </TableCell>
                <TableCell className={cumulativeNPV >= 0 ? "text-green-500" : "text-red-500"}>
                  {cumulativeNPV >= 0 ? 
                    `+ R$ ${cumulativeNPV.toFixed(1)}M` : 
                    `- R$ ${Math.abs(cumulativeNPV).toFixed(1)}M`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
