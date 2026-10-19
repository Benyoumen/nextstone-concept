
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Users, PieChart, Briefcase } from "lucide-react";

const ForDevelopers = () => {
  return <section id="for-developers" className="section bg-lightGray">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 bg-gold/20 text-black px-3 py-1 rounded-full text-sm font-medium">
              Para Incorporadoras
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Acesse as melhores ofertas de credito para financiar sua obra.
            </h2>
            <p className="text-lg text-darkGray mb-8">
              Simplificamos o acesso a investidores qualificados para seus projetos.
              Transformamos burocracia em oportunidade para quem constrói.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Financiamento rápido</h3>
                  <p className="text-darkGray">Reduza o tempo de financiamento em 60% comparado aos métodos tradicionais</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <DollarSign className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Taxas competitivas</h3>
                  <p className="text-darkGray">Acesse as melhores condições de financiamento através da nossa rede de fundos e investidores</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Conexões com fundos qualificados</h3>
                  <p className="text-darkGray">Construa relacionamentos sólidos com investidores qualificados</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <PieChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Aumente sua visibilidade</h3>
                  <p className="text-darkGray">Divulgue seus projetos para a maior rede de fundos de investimentos interessados em projetos de incorporação</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gold text-black hover:bg-gold/90 px-6 py-6 text-lg group">
              Cadastre-se como Incorporadora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative animate-fade-in animate-delay-200">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-coral rounded-full opacity-10 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-lightGray">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black">Dashboard Incorporadora</h3>
                    <p className="text-darkGray">Gerencie seus projetos e financiamentos</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-black">Credit Score</span>
                    <span className="font-bold text-black">A+</span>
                  </div>
                  <div className="w-full bg-lightGray rounded-full h-2.5">
                    <div className="bg-coral h-2.5 rounded-full" style={{
                    width: '85%'
                  }}></div>
                  </div>
                  <p className="text-right text-xs text-darkGray mt-1">85/100</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-lightGray rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center mr-3">
                          <Briefcase className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Residencial Horizonte</h4>
                          <p className="text-sm text-darkGray">São Paulo, SP</p>
                        </div>
                      </div>
                      <span className="text-coral font-medium text-sm">RI aprovado</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-darkGray">Valor</p>
                        <p className="font-medium text-black">R$28M</p>
                      </div>
                      <div>
                        <p className="text-darkGray">Prazo</p>
                        <p className="font-medium text-black">48 Meses</p>
                      </div>
                      <div>
                        <p className="text-darkGray">Taxa</p>
                        <p className="font-medium text-black">12,2%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-lightGray rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center mr-3">
                          <Briefcase className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Jardins da Cidade</h4>
                          <p className="text-sm text-darkGray">Campinas, SP</p>
                        </div>
                      </div>
                      <span className="text-coral font-medium text-sm">Acquisição do terreno</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-darkGray">Valor</p>
                        <p className="font-medium text-black">R$15M</p>
                      </div>
                      <div>
                        <p className="text-darkGray">Prazo</p>
                        <p className="font-medium text-black">36 Meses</p>
                      </div>
                      <div>
                        <p className="text-darkGray">Taxa</p>
                        <p className="font-medium text-black">11,8%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 font-medium text-sm flex items-center text-slate-950">
                  Ver todos os projetos <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ForDevelopers;
