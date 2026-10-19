import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart, BadgeCheck, SearchCheck, LineChart } from "lucide-react";
import DevelopersList from "./DevelopersList";

const ForFunds = () => {
  return (
    <section id="for-funds" className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative animate-fade-in animate-delay-200">
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-coral rounded-full opacity-10 blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-lightGray">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-black">Dashboard do Investidor</h3>
                    <p className="text-darkGray">Listagem das oportunidades de investimento</p>
                  </div>
                  {/* Removed the "Visão Analítica" button */}
                </div>
                
                <div className="mb-8">
                  <h4 className="font-medium text-black mb-4">Distribuição das oportunidades</h4>
                  <div className="grid grid-cols-5 gap-1 h-20">
                    <div className="bg-coral/30 rounded-tl-md rounded-bl-md" style={{ height: '30%', marginTop: 'auto' }}></div>
                    <div className="bg-coral/50" style={{ height: '40%', marginTop: 'auto' }}></div>
                    <div className="bg-gold/50" style={{ height: '70%', marginTop: 'auto' }}></div>
                    <div className="bg-gold/70" style={{ height: '90%', marginTop: 'auto' }}></div>
                    <div className="bg-gold rounded-tr-md rounded-br-md" style={{ height: '60%', marginTop: 'auto' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-darkGray mt-1">
                    <span>D</span>
                    <span>C</span>
                    <span>B</span>
                    <span>A</span>
                    <span>A+</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-lightGray rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center mr-3">
                          <BadgeCheck className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Incorporador A*****</h4>
                          <p className="text-sm text-darkGray">Rating: A+</p>
                        </div>
                      </div>
                      <span className="text-coral font-medium text-sm">Recomendado</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-darkGray">Volume de Projetos</p>
                        <p className="font-medium text-black">R$125M</p>
                      </div>
                      <div>
                        <p className="text-darkGray">Taxa de Sucesso</p>
                        <p className="font-medium text-black">97%</p>
                      </div>
                      <div>
                        <p className="text-darkGray">TIR Médio</p>
                        <p className="font-medium text-black">16,4%</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-lightGray rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center mr-3">
                          <BadgeCheck className="h-5 w-5 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black">Incorporador B*****</h4>
                          <p className="text-sm text-darkGray">Rating: A</p>
                        </div>
                      </div>
                      <span className="text-coral font-medium text-sm">Em Alta</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <p className="text-darkGray">Volume de Projetos</p>
                        <p className="font-medium text-black">R$78M</p>
                      </div>
                      <div>
                        <p className="text-darkGray">Taxa de Sucesso</p>
                        <p className="font-medium text-black">92%</p>
                      </div>
                      <div>
                        <p className="text-darkGray">TIR Médio</p>
                        <p className="font-medium text-black">14,2%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 text-black font-medium text-sm flex items-center hover:text-black/90">
                  Ver todas as incorporadoras <ArrowRight className="ml-1 h-4 w-4 text-black" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <div className="inline-block mb-4 bg-gold/20 text-black px-3 py-1 rounded-full text-sm font-medium">
              Para Fundos de Investimento
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transparência total para um investimento seguro.
            </h2>
            <p className="text-lg text-darkGray mb-8">
              Dados confiáveis, incorporadoras avaliadas e decisões mais seguras ao seu alcance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Mitigação de Riscos</h3>
                  <p className="text-darkGray">Análise e verificação detalhada de todas as incorporadoras.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <BarChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Dados de Desempenho</h3>
                  <p className="text-darkGray">Histórico de desempenho de projetos e métricas financeiras</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <SearchCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Descoberta de Oportunidades</h3>
                  <p className="text-darkGray">Encontre oportunidades exclusivas de investimento imobiliário</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-1">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Gestão de Portfólio</h3>
                  <p className="text-darkGray">Ferramentas para monitorar seus investimentos em tempo real</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-gold text-black hover:bg-gold/90 px-6 py-6 text-lg group">
              Cadastre-se como Fundo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <DevelopersList />
        </div>

        
      </div>
    </section>
  );
};

export default ForFunds;
