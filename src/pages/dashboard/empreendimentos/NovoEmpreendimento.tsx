
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";

export default function NovoEmpreendimento() {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard/empreendimentos");
  };
  
  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/dashboard/empreendimentos")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold">Novo Empreendimento</h1>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            {formStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Informações Básicas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome-empreendimento" className="flex">
                        Nome do Empreendimento
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="nome-empreendimento" 
                        placeholder="Ex: Vista Verde"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nome-incorporadora" className="flex">
                        Nome da Incorporadora
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="nome-incorporadora" 
                        placeholder="Ex: Luckey" 
                        defaultValue="Luckey"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="nome-construtora" className="flex">
                        Nome da Construtora
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="nome-construtora" 
                        placeholder="Ex: Construtora ABC" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="localizacao" className="flex">
                        Localização
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="localizacao" 
                        placeholder="Ex: São Paulo, SP" 
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Tipologia</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="tipo-projeto" className="flex">
                        Tipo de Projeto
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="tipo-projeto">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residencial">Residencial</SelectItem>
                          <SelectItem value="comercial">Comercial</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="misto">Misto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tipo-edificacao" className="flex">
                        Tipo de Edificação
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="tipo-edificacao">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="predio">Prédio</SelectItem>
                          <SelectItem value="loteamento">Loteamento</SelectItem>
                          <SelectItem value="condominio">Condomínio Horizontal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tipo-unidades" className="flex">
                        Tipo de Unidades
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="tipo-unidades">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartamentos">Apartamentos</SelectItem>
                          <SelectItem value="casas">Casas</SelectItem>
                          <SelectItem value="lajes">Lajes Corporativas</SelectItem>
                          <SelectItem value="galpao">Galpão</SelectItem>
                          <SelectItem value="lotes">Lotes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fase-atual" className="flex">
                        Fase Atual
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger id="fase-atual">
                          <SelectValue placeholder="Selecione a fase" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aquisicao">Aquisição do Terreno</SelectItem>
                          <SelectItem value="ri-aprovado">RI aprovado</SelectItem>
                          <SelectItem value="vendas-10">10% vendas realizadas</SelectItem>
                          <SelectItem value="vendas-30">30% vendas realizadas</SelectItem>
                          <SelectItem value="vendas-50">50% vendas realizadas</SelectItem>
                          <SelectItem value="construcao">Em construção</SelectItem>
                          <SelectItem value="finalizando">Finalizando</SelectItem>
                          <SelectItem value="entregue">Entregue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="button" onClick={nextStep}>
                    Próximo
                  </Button>
                </div>
              </div>
            )}
            
            {formStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Informações Quantitativas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="num-unidades" className="flex">
                        Número de Unidades
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="num-unidades" 
                        type="number" 
                        placeholder="Ex: 120" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="num-andares" className="flex">
                        Número de Andares
                      </Label>
                      <Input 
                        id="num-andares" 
                        type="number" 
                        placeholder="Ex: 15"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="area-terreno" className="flex">
                        Área do Terreno (m²)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="area-terreno" 
                        type="number" 
                        placeholder="Ex: 5000" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="area-construida" className="flex">
                        Área Total Construída (m²)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="area-construida" 
                        type="number" 
                        placeholder="Ex: 15000" 
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Informações Financeiras</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preco-medio" className="flex">
                        Preço Médio por Unidade (R$)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="preco-medio" 
                        type="number" 
                        placeholder="Ex: 450000" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="vgv-total" className="flex">
                        VGV Total (R$)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="vgv-total" 
                        type="number" 
                        placeholder="Ex: 54000000" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="meta-financiamento" className="flex">
                        Meta de Financiamento (R$)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="meta-financiamento" 
                        type="number" 
                        placeholder="Ex: 20000000" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tir-estimada" className="flex">
                        TIR Estimada (%)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="tir-estimada" 
                        type="number" 
                        placeholder="Ex: 18" 
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Voltar
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Próximo
                  </Button>
                </div>
              </div>
            )}
            
            {formStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Cronograma</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="inicio-obra" className="flex">
                        Data de Início da Obra
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="inicio-obra" 
                        type="date" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="previsao-entrega" className="flex">
                        Previsão de Entrega
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="previsao-entrega" 
                        type="date" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inicio-vendas" className="flex">
                        Início das Vendas
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="inicio-vendas" 
                        type="date" 
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="prazo-financiamento" className="flex">
                        Prazo desejado para Financiamento (anos)
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Input 
                        id="prazo-financiamento" 
                        type="number" 
                        placeholder="Ex: 5" 
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Informações Adicionais</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="descricao-empreendimento" className="flex">
                        Descrição do Empreendimento
                      </Label>
                      <Textarea 
                        id="descricao-empreendimento" 
                        placeholder="Descreva o empreendimento com detalhes..." 
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="diferenciais" className="flex">
                        Diferenciais do Projeto
                      </Label>
                      <Textarea 
                        id="diferenciais" 
                        placeholder="Descreva os diferenciais e vantagens competitivas..." 
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Voltar
                  </Button>
                  <Button type="submit">
                    Cadastrar Empreendimento
                  </Button>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
