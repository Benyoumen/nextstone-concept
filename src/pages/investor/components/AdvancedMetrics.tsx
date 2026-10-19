
import { FileChartLine } from "lucide-react";

type AdvancedMetricsProps = {
  irr: number;
  npvEstimated: number;
  paybackYears: number;
  capexEstimated: number;
  cashOnCashReturn: number;
  equityMultiple: number;
  wacc: number;
  debtEquityRatio: number;
  sharpeRatio: number;
  markToMarketPremium: number;
  rentabilidadePerSqMeter: number;
  breakEvenOccupancy: number;
};

export default function AdvancedMetrics({
  irr,
  npvEstimated,
  paybackYears,
  capexEstimated,
  cashOnCashReturn,
  equityMultiple,
  wacc,
  debtEquityRatio,
  sharpeRatio,
  markToMarketPremium,
  rentabilidadePerSqMeter,
  breakEvenOccupancy
}: AdvancedMetricsProps) {
  return (
    <section className="mt-10 mb-1">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FileChartLine className="h-5 w-5 text-indigo-600" />
        Métricas Avançadas de Investimento
      </h3>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">TIR Ajustada</p>
            <p className="font-semibold">{irr.toFixed(2)}%</p>
            <span className="block text-xs text-gray-400">Pós-premium de risco</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">VPL Projetado</p>
            <p className="font-semibold">R$ {npvEstimated}M</p>
            <span className="block text-xs text-gray-400">NPV descontado (15%)</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Payback Estimado</p>
            <p className="font-semibold">{paybackYears} anos</p>
            <span className="block text-xs text-gray-400">Horizonte de saída</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Capex Total</p>
            <p className="font-semibold">R$ {capexEstimated.toFixed(1)}M</p>
            <span className="block text-xs text-gray-400">75% do VGV</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Retorno Anual (CoC)</p>
            <p className="font-semibold">{cashOnCashReturn.toFixed(2)}%</p>
            <span className="block text-xs text-gray-400">Cash On Cash Yield</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Equity Multiple</p>
            <p className="font-semibold">{equityMultiple.toFixed(2)}x</p>
            <span className="block text-xs text-gray-400">Multiplicador de capital investido</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">WACC</p>
            <p className="font-semibold">{wacc}%</p>
            <span className="block text-xs text-gray-400">Custo do capital ponderado</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Razão Dívida/Capital</p>
            <p className="font-semibold">{debtEquityRatio.toFixed(2)}</p>
            <span className="block text-xs text-gray-400">Alavancagem do projeto</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Índice de Sharpe</p>
            <p className="font-semibold">{sharpeRatio.toFixed(2)}</p>
            <span className="block text-xs text-gray-400">Risco-retorno ajustado</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Prêmio de Mercado</p>
            <p className="font-semibold">R$ {markToMarketPremium.toFixed(2)}M</p>
            <span className="block text-xs text-gray-400">Valor adicional pela localização/tier</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Rentabilidade/m²</p>
            <p className="font-semibold">R$ {rentabilidadePerSqMeter}/m²</p>
            <span className="block text-xs text-gray-400">Eficiência operacional</span>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">Breakeven Ocupação</p>
            <p className="font-semibold">{breakEvenOccupancy.toFixed(1)}%</p>
            <span className="block text-xs text-gray-400">Perc. mínimo para viabilidade</span>
          </div>
        </div>
      </div>
    </section>
  );
}
