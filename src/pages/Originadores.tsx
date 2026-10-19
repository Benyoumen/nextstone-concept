
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Building2, Building, UserPlus, BarChart2, Users, 
  Mail, Phone, MessageSquare, FileText, ArrowRight, 
  ChevronRight, CheckCircle, User, HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import OriginadorFAQ from "@/components/originador/OriginadorFAQ";
import OriginadorChat from "@/components/originador/OriginadorChat";

const Originadores = () => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blackrock-900 to-blackrock-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Originadores: Conecte incorporadoras com investidores e maximize seus ganhos
              </h1>
              <p className="text-xl opacity-90 max-w-lg">
                Com a NextStone, você garante comissões de 10% a 20% ao conectar bons projetos com investidores qualificados, de forma transparente e profissional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-black hover:text-white" 
                  asChild
                >
                  <Link to="/cadastro/tipo">Criar conta</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="max-w-md bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-coral">20%</h3>
                    <p className="text-white/80 text-sm">Comissão máxima</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-white">R$50k+</h3>
                    <p className="text-white/80 text-sm">Comissão média</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-white">7 dias</h3>
                    <p className="text-white/80 text-sm">Análise inicial</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <h3 className="text-3xl font-bold text-coral">45 dias</h3>
                    <p className="text-white/80 text-sm">Tempo médio de financiamento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens para Originadores */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Vantagens exclusivas para Originadores</h2>
            <p className="text-lg text-gray-600">
              Maximize seus resultados com benefícios que só a NextStone oferece
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-coral/10 inline-block">
                <CheckCircle className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comissões garantidas</h3>
              <p className="text-gray-600">
                Pagamentos transparentes e garantidos por contrato, com possibilidade de adiantamento.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-coral/10 inline-block">
                <BarChart2 className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard de acompanhamento</h3>
              <p className="text-gray-600">
                Acompanhe em tempo real o status de todas as suas operações e comissões.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-coral/10 inline-block">
                <Building className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Acesso a grandes incorporadoras</h3>
              <p className="text-gray-600">
                Expanda sua rede de contatos com incorporadoras e fundos de prestígio no mercado.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-coral/10 inline-block">
                <FileText className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentação simplificada</h3>
              <p className="text-gray-600">
                Nosso sistema orienta você sobre todos os documentos necessários, sem burocracia excessiva.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 p-3 rounded-full bg-coral/10 inline-block">
                <Users className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte multicanal</h3>
              <p className="text-gray-600">
                Assistência por chat, e-mail e telefone para resolver todas as suas dúvidas com agilidade.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs com FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <Tabs defaultValue="faq" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full mb-8">
              <TabsTrigger value="faq" className="text-lg py-3">Perguntas Frequentes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq">
              <OriginadorFAQ />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-gradient-to-r from-coral to-coral/80 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar a ganhar comissões?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cadastre-se agora e comece a conectar incorporadoras com investidores. Sua expertise vale dinheiro!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-coral hover:bg-gray-100" asChild>
              <Link to="/cadastro/tipo">Criar conta</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:border-black hover:text-black hover:font-bold hover:bg-white"
              onClick={() => setOpenChat(true)}
            >
              Fale com um consultor
            </Button>
          </div>
        </div>
      </section>

      {openChat && <OriginadorChat onClose={() => setOpenChat(false)} />}

      <Footer />
    </div>
  );
};

export default Originadores;
