
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function InvestorProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Capital Fund</h1>
        <p className="text-muted-foreground">Gerencie os dados e preferências do seu fundo.</p>
      </div>
      
      <Separator />
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-6">Dados do Fundo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="razao-social" className="flex">
                Razão Social
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input id="razao-social" defaultValue="Capital Fund Investimentos Ltda." />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nome-fantasia" className="flex">
                Nome Fantasia
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input id="nome-fantasia" defaultValue="Capital Fund" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cnpj" className="flex">
                CNPJ
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input id="cnpj" defaultValue="XX.XXX.XXX/0001-XX" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ano-fundacao">
                Ano de Fundação
              </Label>
              <Input id="ano-fundacao" defaultValue="2015" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="aum">
                AUM - Ativos sob Gestão
              </Label>
              <Input id="aum" defaultValue="R$ 350.000.000,00" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tipo-fundo">
                Tipo de Fundo
              </Label>
              <Select defaultValue="pe">
                <SelectTrigger id="tipo-fundo">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pe">Private Equity</SelectItem>
                  <SelectItem value="vc">Venture Capital</SelectItem>
                  <SelectItem value="re">Real Estate</SelectItem>
                  <SelectItem value="hedge">Hedge Fund</SelectItem>
                  <SelectItem value="pension">Fundo de Pensão</SelectItem>
                </SelectContent>
              </Select>
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
              <Input id="email" type="email" defaultValue="contato@capitalfund.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefone">
                Telefone
              </Label>
              <Input id="telefone" defaultValue="+55 (11) 3456-7890" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="site">
                Site
              </Label>
              <Input id="site" defaultValue="www.capitalfund.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedin">
                LinkedIn
              </Label>
              <Input id="linkedin" defaultValue="linkedin.com/company/capitalfund" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Dados de Endereço</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="endereco">
                Endereço
              </Label>
              <Input id="endereco" defaultValue="Av. Faria Lima, 3477, 14º andar" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cidade-estado">
                Cidade/Estado
              </Label>
              <Input id="cidade-estado" defaultValue="São Paulo, SP" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cep">
                CEP
              </Label>
              <Input id="cep" defaultValue="04538-133" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="pais">
                País
              </Label>
              <Input id="pais" defaultValue="Brasil" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-6">Perfil de Investimento</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <Label htmlFor="ticket-min">
                Ticket Mínimo (R$)
              </Label>
              <Input id="ticket-min" defaultValue="2.000.000" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ticket-max">
                Ticket Máximo (R$)
              </Label>
              <Input id="ticket-max" defaultValue="10.000.000" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tir-min">
                TIR Mínima Aceitável (%)
              </Label>
              <Input id="tir-min" defaultValue="14" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="prazo-max">
                Prazo Máximo (meses)
              </Label>
              <Input id="prazo-max" defaultValue="48" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="foco-investimento">
                Segmentos de Interesse
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
                <div className="flex items-center space-x-2">
                  <Switch id="residencial-alto" defaultChecked />
                  <Label htmlFor="residencial-alto">Residencial Alto</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="residencial-medio" defaultChecked />
                  <Label htmlFor="residencial-medio">Residencial Médio</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="comercial" defaultChecked />
                  <Label htmlFor="comercial">Comercial</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="corporativo" defaultChecked />
                  <Label htmlFor="corporativo">Corporativo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="logistico" />
                  <Label htmlFor="logistico">Logístico</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="hospitalar" />
                  <Label htmlFor="hospitalar">Hospitalar</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="hotelaria" />
                  <Label htmlFor="hotelaria">Hotelaria</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="industrial" />
                  <Label htmlFor="industrial">Industrial</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="regioes-interesse">
                Regiões de Interesse
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
                <div className="flex items-center space-x-2">
                  <Switch id="sp" defaultChecked />
                  <Label htmlFor="sp">São Paulo</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="rj" defaultChecked />
                  <Label htmlFor="rj">Rio de Janeiro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="mg" defaultChecked />
                  <Label htmlFor="mg">Minas Gerais</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="rs" />
                  <Label htmlFor="rs">Rio Grande do Sul</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="pr" />
                  <Label htmlFor="pr">Paraná</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="sc" />
                  <Label htmlFor="sc">Santa Catarina</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="df" />
                  <Label htmlFor="df">Distrito Federal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="outros" />
                  <Label htmlFor="outros">Outros</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="criterios-decisao">
                Critérios Prioritários para Decisão
              </Label>
              <Textarea 
                id="criterios-decisao" 
                rows={4}
                defaultValue="1. Solidez financeira da incorporadora (rating A ou superior)
2. Projetos em regiões com alta demanda e baixo estoque
3. Velocidade de vendas comprovada acima de 10% a.m.
4. TIR mínima de 14% a.a.
5. Instrumentos contratuais com garantias reais"
              />
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
