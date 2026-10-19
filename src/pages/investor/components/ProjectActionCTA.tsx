
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ProjectActionCTA() {
  const navigate = useNavigate();

  const handleAdvanceToNegotiation = () => {
    navigate("/investor/due-diligence");
  };

  return (
    <div
      className="w-full border border-gold rounded-xl shadow-lg p-6 mt-8 flex flex-col items-center gap-4 animate-fade-in"
      style={{ background: "#FAF6F0" }}
    >
      <div className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
        Próxima ação estratégica
        <ArrowRight className="h-6 w-6 text-coral animate-pulse" />
      </div>
      <p className="text-md text-gray-700 max-w-lg text-center">
        Confirme seu interesse ou avance para a diligência detalhada deste projeto.
        Esta análise sugere uma oportunidade compatível com os padrões dos fundos institucionais sofisticados, baseada em métricas de mercado e risco ajustado.
        Clique abaixo para avançar para negociação, solicitar documentos completos ou marcar uma reunião estratégica com o incorporador.
      </p>
      <Button
        size="lg"
        className="bg-coral text-white text-base px-8 rounded-full font-semibold hover:scale-105 transition-transform"
        onClick={handleAdvanceToNegotiation}
      >
        Avançar para Negociação
        <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
}

