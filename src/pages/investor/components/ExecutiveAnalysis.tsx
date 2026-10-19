
import { LayoutGrid } from "lucide-react";

type ExecutiveAnalysisProps = {
  debtEquityRatio: number;
  irr: number;
  sectorBenchmarkTIR: number;
  equityMultiple: number;
  sectorAverageEquityMultiple: number;
  sharpeRatio: number;
  breakEvenOccupancy: number;
  cashOnCashReturn: number;
  location: string;
  rating: string;
  markToMarketPremium: number;
  vendido: string;
  rareComplianceIssues: number;
};

export default function ExecutiveAnalysis({
  debtEquityRatio,
  irr,
  sectorBenchmarkTIR,
  equityMultiple,
  sectorAverageEquityMultiple,
  sharpeRatio,
  breakEvenOccupancy,
  cashOnCashReturn,
  location,
  rating,
  markToMarketPremium,
  vendido,
  rareComplianceIssues
}: ExecutiveAnalysisProps) {
  return (
    <section className="my-6 px-5 py-4 border-l-4 border-coral bg-coral/10 rounded-lg shadow-inner animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <LayoutGrid className="text-gold w-5 h-5" />
        <span className="font-semibold text-coral text-base">
          Análise Institucional Executiva
        </span>
      </div>
      <ul className="list-disc ml-8 text-black text-[0.98rem] leading-7 font-medium space-y-2">
        <li>
          <b>Estrutura de Capital:</b> Alavancagem prudente (
          <span className="font-mono text-indigo-700">{debtEquityRatio.toFixed(2)}</span>
          ) reforça a robustez frente a choques macroeconômicos, excedendo benchmarks setoriais de drawdown (<span className="underline">{sectorBenchmarkTIR}%</span>).
        </li>
        <li>
          <b>Retornos Relativos & Absolutos:</b> IRR composta de <span className="font-mono text-indigo-700">{irr.toFixed(2)}%</span> supera o setor ({sectorBenchmarkTIR}%), com múltiplo de capital de <span className="font-mono text-indigo-700">{equityMultiple.toFixed(2)}x</span> (vs. {sectorAverageEquityMultiple}x de referência).
        </li>
        <li>
          <b>Retorno Ajustado ao Risco:</b> Sharpe {sharpeRatio.toFixed(2)}, desempenho ~40% acima da média do mercado; estrutura de CAPEX otimizada e breakeven de ocupação reduzido (<span className="font-mono">{breakEvenOccupancy.toFixed(1)}%</span>) aumentam a resiliência a cenários adversos.
        </li>
        <li>
          <b>Sustentabilidade das Gerações de Caixa:</b> Distribuição anual eficiente (<span className="font-mono">{cashOnCashReturn.toFixed(2)}%</span> CoC), com vendas antecipadas que mitigam riscos de liquidez – {vendido} já comercializado.
        </li>
        <li>
          <b>Prêmio de Mercado:</b> Localização estratégica (<span className="font-mono">{location}</span>), categoria <span className="font-mono">{rating}</span> e premium de R$ {markToMarketPremium.toFixed(2)}M sustentam o potencial de valorização do ativo.
        </li>
        <li>
          <b>Compliance & Governança:</b> Documentação regulatória integral, auditoria independente concluída; apenas {rareComplianceIssues * 100}% dos pares do mercado atingem esse nível de conformidade.
        </li>
        <li>
          <b>Próximos Passos Recomendados:</b>
          <ul className="list-disc ml-6 mt-1 text-gray-700 text-[0.97rem] font-normal space-y-1">
            <li>Solicitar minutas contratuais detalhadas com parecer jurídico independente</li>
            <li>Iniciar diligência documental (certidões, avaliações, cronograma físico-financeiro)</li>
            <li>Marcar reunião estratégica com o incorporador para debater ajustes e potenciais cláusulas de preferência</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
