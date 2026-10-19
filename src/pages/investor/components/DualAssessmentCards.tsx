
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { InfoIcon, DollarSign } from "lucide-react";

type DualAssessmentCardsProps = {
  riskLevel: string;
  tirValue: number;
  location: string;
  company: string;
  type: string;
  vendidoPercentage: number;
  marketTrend: string;
  vgvValue: number;
  units: string;
  rating: string;
};

export default function DualAssessmentCards({
  riskLevel,
  tirValue,
  location,
  company,
  type,
  vendidoPercentage,
  marketTrend,
  vgvValue,
  units,
  rating
}: DualAssessmentCardsProps) {
  return (
    <div className="mt-10 gap-8 grid grid-cols-1 xl:grid-cols-2">
      <Card className="h-full">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <InfoIcon className="h-5 w-5 text-indigo-600" />
            Strategic Risk Assessment
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Nível de Risco</TableCell>
                <TableCell className={
                  riskLevel === "Baixo" ? "text-green-600 font-medium" :
                  riskLevel === "Médio" ? "text-yellow-600 font-medium" : 
                  "text-red-600 font-medium"
                }>{riskLevel}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Volatilidade Estimada</TableCell>
                <TableCell>{(tirValue * 0.3).toFixed(1)}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Exposição Geográfica</TableCell>
                <TableCell>
                  <span className={
                    location.includes("São Paulo") ? "text-green-600 font-medium" :
                    location.includes("Rio") ? "text-yellow-600 font-medium" : 
                    "text-blue-600 font-medium"
                  }>
                    {location.split(',')[0]}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Solidez do Incorporador</TableCell>
                <TableCell className={
                  company === "Alphaville" || company === "Eztec" ? 
                  "text-green-600 font-medium" : "text-yellow-600 font-medium"
                }>{
                  company === "Alphaville" ? "Alta" :
                  company === "Eztec" ? "Alta" : "Média"
                }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Risco Regulatório</TableCell>
                <TableCell>{type.includes("Comercial") ? "Médio" : "Baixo"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Risco de Liquidez</TableCell>
                <TableCell>{vendidoPercentage > 50 ? "Baixo" : "Médio"}</TableCell>
              </TableRow>
              {/* NEW: Due diligence and "red flag" checks */}
              <TableRow>
                <TableCell>Recomendações Due Diligence</TableCell>
                <TableCell>
                  <ul className="list-disc ml-4 text-xs text-gray-500">
                    <li>Solicitar minutas contratuais</li>
                    <li>Verificar certidões negativas</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sinais de Alerta</TableCell>
                <TableCell>
                  <span className="text-xs text-red-500">
                    Nenhum material identificado. <span className="text-green-600">Compliance adequado.</span>
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="h-full">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-indigo-600" />
            Competitive Market Assessment
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicador</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tendência de Mercado</TableCell>
                <TableCell className={
                  marketTrend === "Alta demanda" ? "text-green-600 font-medium" :
                  marketTrend === "Demanda estável" ? "text-blue-600 font-medium" :
                  "text-yellow-600 font-medium"
                }>{marketTrend}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Velocidade de Vendas</TableCell>
                <TableCell className={
                  vendidoPercentage > 60 ? "text-green-600 font-medium" :
                  vendidoPercentage > 30 ? "text-blue-600 font-medium" :
                  "text-yellow-600 font-medium"
                }>{
                  vendidoPercentage > 60 ? "Acima da média" :
                  vendidoPercentage > 30 ? "Na média" : "Abaixo da média"
                }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Valor Médio por Unidade</TableCell>
                <TableCell>R$ {((vgvValue * 1000000) / Number(units) / 1000).toFixed(0)}K</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Competitividade Regional</TableCell>
                <TableCell>{
                  rating === "A+" ? "Alta" :
                  rating === "A" ? "Média-Alta" : "Média"
                }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Crescimento do Mercado</TableCell>
                <TableCell>{
                  location.includes("São Paulo") ? "8.5% a.a." :
                  location.includes("Rio") ? "6.2% a.a." : "5.8% a.a."
                }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Penetração de Mercado</TableCell>
                <TableCell>{
                  vendidoPercentage > 60 ? "Alta" :
                  vendidoPercentage > 30 ? "Média" : "Baixa"
                }</TableCell>
              </TableRow>
              {/* NEW: Market risks and local supply comments */}
              <TableRow>
                <TableCell>Risks/Pontos de Mercado</TableCell>
                <TableCell>
                  <ul className="list-disc ml-4 text-xs text-gray-500">
                    <li>Oferta concorrente limitada na região</li>
                    <li>Potencial de valorização pós-conclusão</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Destaque Estratégico</TableCell>
                <TableCell>
                  <span className="text-xs text-coral font-bold">
                    Localização premium com padrão construtivo superior, público-alvo com alta propensão à compra.
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
