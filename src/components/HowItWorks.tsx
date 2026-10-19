
import { ArrowRight, Building, Search, FileText, BarChart4, CheckCircle2, LineChart } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Como a NextStone funciona</h2>
          <p className="text-lg text-darkGray">
            A ponte entre crédito eficiente para incorporadoras e oportunidades sob medida para fundos. 
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* For Developers */}
          <div className="mb-16">
            <div className="inline-block bg-sand text-black px-4 py-2 rounded-full font-medium mb-8">
              Para Incorporadoras
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-lightGray animate-fade-in">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">1. Crie sua conta</h3>
                <p className="text-darkGray">
                  Cadastre sua empresa e seu portfólio de projetos realizados.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-lightGray animate-fade-in animate-delay-200">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">2. Liste seus projetos</h3>
                <p className="text-darkGray">
                   Informe os empreendimentos que gostaria de financiar. Te assesoramos na estruturação dos seus projetos para aumentar suas chances de sucesso. 
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-lightGray animate-fade-in animate-delay-400">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">3. Identificamos as melhores ofertas de crédito</h3>
                <p className="text-darkGray">
                  Com nosso algoritmo, identificamos as melhores ofertas de credito disponiveis no mercado.
                </p>
              </div>
            </div>
          </div>

          <div className="w-px h-16 bg-lightGray"></div>

          {/* For Funds */}
          <div>
            <div className="inline-block bg-gold/20 text-black px-4 py-2 rounded-full font-medium mb-8">
              Para Fundos de Investimento
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-lightGray animate-fade-in">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">1. Descubra Projetos Imobiliários</h3>
                <p className="text-darkGray">
                  Acesse nosso marketplace de empreendimentos imobiliários, filtrado por incorporadoras verificadas, e segmentadas por tipo de projeto, localização e volume de financiamento.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-lightGray animate-fade-in animate-delay-200">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <BarChart4 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">2. Avalie Oportunidades</h3>
                <p className="text-darkGray">
                  Analise dados completos, histórico das incorporadoras, pontuações e métricas consolidadas para investir com mais transparência e segurança.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-lightGray animate-fade-in animate-delay-400">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <LineChart className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">3. Acompanhe seus Investimentos</h3>
                <p className="text-darkGray">
                  Monitore o andamento dos projetos, receba atualizações em tempo real e gerencie seu portfólio com eficiência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
