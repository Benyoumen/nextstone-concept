
import { Button } from "@/components/ui/button";
import { Building, BarChart4, Speaker } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para transformar o financiamento de projetos imobiliários?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Junte-se a milhares de incorporadoras e fundos de investimento que já utilizam nossa plataforma.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Incorporadoras</h3>
              <p className="text-white/80 mb-6">
                Garanta as melhores taxas com investidores qualificados e aumente sua credibilidade com nossa certificação de qualidade.
              </p>
              <Link to="/incorporadoras">
                <Button className="w-full bg-gold text-black hover:bg-gold/90">
                  Começar
                </Button>
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in animate-delay-200">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart4 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fundos de Investimento</h3>
              <p className="text-white/80 mb-6">
                Descubra oportunidades de investimento qualificadas e tome decisões mais inteligentes com nossas análises.
              </p>
              <Link to="/investidores">
                <Button className="w-full bg-white text-black hover:bg-gray-100">
                  Começar
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in animate-delay-400">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Speaker className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Originadores</h3>
              <p className="text-white/80 mb-6">
                Conecte incorporadoras com investidores e receba comissões atrativas. Seja o elo que viabiliza grandes empreendimentos.
              </p>
              <Link to="/originadores">
                <Button className="w-full bg-coral text-white hover:bg-coral/90">
                  Começar
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in">
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p className="text-white/80">Incorporadoras na Plataforma</p>
          </div>
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-4xl font-bold mb-2">R$10B+</h3>
            <p className="text-white/80">Financiamento Descomplicado</p>
          </div>
          <div className="animate-fade-in animate-delay-400">
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-white/80">Fundos de Investimento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
