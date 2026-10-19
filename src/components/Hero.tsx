
import { Button } from "@/components/ui/button";
import { Building, TrendingUp, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-sand">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-1 md:order-1 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-darkGray mb-6 leading-none">
              <span className="block text-black">Construindo o futuro.</span>
              <span className="block text-black">Conectando capital.</span>
            </h1>
            <p className="text-lg md:text-xl text-darkGray mb-8 max-w-xl">
              A plataforma onde crédito de qualidade encontra projetos com potencial. 
              Do match ao financiamento, tudo em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#for-developers">
                <Button className="bg-gold text-black hover:bg-gold/90 px-8 py-6 text-lg">
                  Para Incorporadoras
                </Button>
              </a>
              <a href="#for-funds">
                <Button variant="outline" className="border-darkGray text-darkGray hover:bg-sand px-8 py-6 text-lg">
                  Para Fundos
                </Button>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Building className="h-6 w-6" />
                </div>
                <p className="text-darkGray font-medium">500+ Incorporadoras</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <p className="text-darkGray font-medium">R$10B+ Financiados</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <p className="text-darkGray font-medium">100+ Fundos</p>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-2 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-coral rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white shadow-2xl rounded-2xl overflow-hidden border border-lightGray">
                <img 
                  src="/lovable-uploads/78799f71-f844-4e5e-99ce-a8148350c215.png" 
                  alt="Empreendimento residencial" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-darkGray">Residencial Vista Verde</h3>
                      <p className="text-darkGray/70">Residencial</p>
                    </div>
                    <div className="bg-gold/20 text-darkGray px-3 py-1 rounded-full text-sm font-medium">
                      Em Alta
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-darkGray/70 text-sm">Meta de Financiamento</p>
                      <p className="font-semibold text-darkGray">R$75M</p>
                    </div>
                    <div>
                      <p className="text-darkGray/70 text-sm">Fase Atual</p>
                      <p className="font-semibold text-darkGray">Projeto</p>
                    </div>
                    <div>
                      <p className="text-darkGray/70 text-sm">Est. TIR</p>
                      <p className="font-semibold text-darkGray">17,5%</p>
                    </div>
                    <div>
                      <p className="text-darkGray/70 text-sm">Cronograma</p>
                      <p className="font-semibold text-darkGray">36 meses</p>
                    </div>
                  </div>
                  <div className="w-full bg-lightGray rounded-full h-2.5">
                    <div className="bg-coral h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-right text-sm text-darkGray/70 mt-1">65% Financiado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
