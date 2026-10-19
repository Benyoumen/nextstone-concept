
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function MeusDados() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Luckey</h1>
        <p className="text-muted-foreground">Atualize os dados da sua incorporadora.</p>
      </div>
      
      <Separator />
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-6">Dados da Incorporadora</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="razao-social" className="flex">
                Razão Social
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input id="razao-social" placeholder="Informe aqui a razão social" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nome-fantasia" className="flex">
                Nome Fantasia
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input id="nome-fantasia" placeholder="Luckey" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpj" className="flex">
                CNPJ
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input id="cnpj" placeholder="CNPJ da incorporadora" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ano-fundacao">
                Ano de Fundação
              </Label>
              <Input id="ano-fundacao" placeholder="Ano de Fundação" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Dados de Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">
                E-mail
              </Label>
              <Input id="email" type="email" placeholder="Informe o e-mail da incorporadora" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefone">
                Telefone
              </Label>
              <Input id="telefone" placeholder="Informe aqui o telefone" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="site">
                Site
              </Label>
              <Input id="site" placeholder="Informe aqui o seu site" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reclame-aqui">
                Reclame Aqui
              </Label>
              <Input id="reclame-aqui" placeholder="Informe aqui o seu Reclame Aqui" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Dados de Endereço</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="localizacao">
                Localização
              </Label>
              <Input id="localizacao" placeholder="Digite a localização" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Documentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contrato-social">
                Contrato Social
              </Label>
              <Button variant="outline" className="w-full justify-start h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m21 15-9 9-9-9" />
                  <path d="M21 8 12 17 3 8" />
                </svg>
                Enviar arquivo
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cartao-cnpj">
                Cartão CNPJ
              </Label>
              <Button variant="outline" className="w-full justify-start h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="m21 15-9 9-9-9" />
                  <path d="M21 8 12 17 3 8" />
                </svg>
                Enviar arquivo
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button>Salvar alterações</Button>
      </div>
    </div>
  );
}
