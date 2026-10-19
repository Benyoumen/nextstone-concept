
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Building, UserRound, Speaker, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

type ProfileType = "incorporador" | "institucional" | "pessoa-fisica" | "originador" | null;

const SelectProfileType = () => {
  const [selectedType, setSelectedType] = useState<ProfileType>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedType) {
      navigate(`/cadastro?type=${selectedType}`);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute top-4 left-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 pt-16 pb-16">
        <div className="mb-8">
          <Link to="/" className="block mb-2">
            <h1 className="text-2xl font-bold text-black text-center">
              NextStone
            </h1>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Crie sua Conta</h1>
          <p className="text-lg text-gray-600 mb-8">
            Para começar, selecione o perfil que melhor descreve sua atuação.
            Em seguida, você poderá prosseguir para preencher as informações de acesso.
          </p>

          <div className="space-y-4 mb-8">
            <Card
              className={`p-6 cursor-pointer transition-all hover:border-gold ${
                selectedType === "incorporador" ? "border-2 border-gold" : ""
              }`}
              onClick={() => setSelectedType("incorporador")}
            >
              <div className="flex items-center gap-4">
                <Building2 className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-lg">Incorporador ou Loteador</h3>
                  <p className="text-gray-600">Para desenvolvedores de empreendimentos imobiliários de todos os portes.</p>
                </div>
              </div>
            </Card>

            <Card
              className={`p-6 cursor-pointer transition-all hover:border-gold ${
                selectedType === "institucional" ? "border-2 border-gold" : ""
              }`}
              onClick={() => setSelectedType("institucional")}
            >
              <div className="flex items-center gap-4">
                <Building className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-lg">Investidor Institucional</h3>
                  <p className="text-gray-600">Gestoras de recursos, instituições financeiras, family offices e investidores profissionais.</p>
                </div>
              </div>
            </Card>

            <Card
              className={`p-6 cursor-pointer transition-all hover:border-gold ${
                selectedType === "pessoa-fisica" ? "border-2 border-gold" : ""
              }`}
              onClick={() => setSelectedType("pessoa-fisica")}
            >
              <div className="flex items-center gap-4">
                <UserRound className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-lg">Investidor Pessoa Física</h3>
                  <p className="text-gray-600">Para investidores individuais interessados em oportunidades imobiliárias.</p>
                </div>
              </div>
            </Card>

            <Card
              className={`p-6 cursor-pointer transition-all hover:border-gold ${
                selectedType === "originador" ? "border-2 border-gold" : ""
              }`}
              onClick={() => setSelectedType("originador")}
            >
              <div className="flex items-center gap-4">
                <Speaker className="h-6 w-6 text-gray-600" />
                <div>
                  <h3 className="font-semibold text-lg">Originador</h3>
                  <p className="text-gray-600">Para originadores de negócios imobiliários que conectam incorporadoras com investidores.</p>
                </div>
              </div>
            </Card>
          </div>

          <Button 
            onClick={handleContinue}
            disabled={!selectedType}
            className="w-full"
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectProfileType;
