
import { useState } from 'react';
import { Building, Mail, BarChart2, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Cadastre o projeto",
      description: "Preencha o formulário com as informações essenciais do empreendimento e da incorporadora.",
      icon: <Building className="h-6 w-6 text-coral" />
    },
    {
      id: 2,
      title: "Análise preliminar",
      description: "Nossa equipe técnica fará uma avaliação inicial do projeto em até 7 dias úteis.",
      icon: <FileText className="h-6 w-6 text-coral" />
    },
    {
      id: 3,
      title: "Aprovação e comunicação",
      description: "Se aprovado, entraremos em contato com você e com a incorporadora para seguir com o processo.",
      icon: <Mail className="h-6 w-6 text-coral" />
    },
    {
      id: 4,
      title: "Apresentação aos investidores",
      description: "O projeto é apresentado aos fundos de investimento adequados ao perfil da operação.",
      icon: <BarChart2 className="h-6 w-6 text-coral" />
    },
    {
      id: 5,
      title: "Financiamento e comissão",
      description: "Após a assinatura do contrato, você recebe sua comissão conforme combinado previamente.",
      icon: <CheckCircle className="h-6 w-6 text-coral" />
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-sand">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Como funciona para Originadores</h2>
          <p className="text-lg text-gray-600">
            Do cadastro à comissão: acompanhe o passo a passo do processo na NextStone
          </p>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gray-200">
            <div 
              className="h-full bg-coral transition-all duration-500"
              style={{ width: `${(activeStep - 1) * 25}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`relative ${activeStep === step.id ? 'scale-105' : ''} transition-all duration-300`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Step number circle */}
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  mx-auto mb-4 z-20 relative transition-colors duration-300
                  ${activeStep === step.id ? 'bg-coral text-white' : 'bg-white text-gray-500 border border-gray-200'}
                `}>
                  {step.id}
                </div>

                {/* Content */}
                <div className={`
                  p-6 rounded-lg text-center transition-all duration-300
                  ${activeStep === step.id ? 'bg-white shadow-lg' : 'bg-gray-50'}
                `}>
                  <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="gap-2">
            Cadastre seu primeiro projeto <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
