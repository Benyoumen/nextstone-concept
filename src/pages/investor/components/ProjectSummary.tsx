
type ProjectSummaryProps = {
  vgv: string;
  tir: string;
  units: string;
  fase: string;
  conclusao: string;
  vendido: string;
};

export default function ProjectSummary({ vgv, tir, units, fase, conclusao, vendido }: ProjectSummaryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 bg-gradient-to-r from-sand to-white rounded-lg border border-gray-100 p-4 mb-6">
      <div>
        <div className="text-gray-500 text-xs mb-1">VGV</div>
        <div className="font-semibold text-lg">{vgv}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">TIR</div>
        <div className="font-semibold text-lg">{tir}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">Unidades</div>
        <div className="font-semibold text-lg">{units}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">Fase</div>
        <div className="font-semibold text-lg">{fase}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">Conclusão Prevista</div>
        <div className="font-semibold text-lg">{conclusao}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs mb-1">Vendido</div>
        <div className="font-semibold text-lg">{vendido}</div>
      </div>
    </div>
  );
}
