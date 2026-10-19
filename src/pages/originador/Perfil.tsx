
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { User, PiggyBank, FileCheck, Bell, Shield, Lock } from "lucide-react";

export default function Perfil() {
  // Mock user data
  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    phone: "(11) 98765-4321",
    company: "Silva Consultoria Imobiliária",
    role: "Consultor Imobiliário",
    bio: "Especialista em projetos residenciais de alto padrão com mais de 10 anos de experiência no mercado imobiliário."
  });
  
  // Mock notification settings
  const [notifications, setNotifications] = useState({
    emailProjects: true,
    emailMarketing: false,
    pushStatus: true,
    pushChat: true,
  });
  
  // Mock banking info
  const [bankInfo, setBankInfo] = useState({
    bank: "Banco Exemplo",
    accountType: "Corrente",
    agency: "1234",
    account: "12345-6",
    document: "123.456.789-00",
    pixKey: "joao.silva@exemplo.com"
  });
  
  const handleSaveProfile = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso.",
    });
  };
  
  const handleSaveBank = () => {
    toast({
      title: "Dados bancários atualizados",
      description: "Suas informações bancárias foram atualizadas com sucesso.",
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Preferências de notificação atualizadas",
      description: "Suas preferências de notificação foram atualizadas com sucesso.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie suas informações pessoais e preferências.
        </p>
      </div>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" /> Perfil
          </TabsTrigger>
          <TabsTrigger value="bank" className="flex items-center gap-2">
            <PiggyBank className="h-4 w-4" /> Dados Bancários
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileCheck className="h-4 w-4" /> Documentos
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" /> Notificações
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" /> Segurança
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Atualize suas informações de contato e perfil.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="text-2xl bg-coral text-white">JS</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Alterar foto
                  </Button>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input 
                        id="name" 
                        value={userData.name}
                        onChange={(e) => setUserData({...userData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input 
                        id="phone" 
                        value={userData.phone}
                        onChange={(e) => setUserData({...userData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input 
                    id="company" 
                    value={userData.company}
                    onChange={(e) => setUserData({...userData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Cargo</Label>
                  <Input 
                    id="role" 
                    value={userData.role}
                    onChange={(e) => setUserData({...userData, role: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Conte-nos sobre sua experiência..."
                    value={userData.bio}
                    onChange={(e) => setUserData({...userData, bio: e.target.value})}
                    className="min-h-[120px]"
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveProfile}>
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bank" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Bancárias</CardTitle>
              <CardDescription>
                Configure suas informações bancárias para recebimento de comissões.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bank">Banco</Label>
                  <Input 
                    id="bank" 
                    value={bankInfo.bank}
                    onChange={(e) => setBankInfo({...bankInfo, bank: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="accountType">Tipo de Conta</Label>
                  <Input 
                    id="accountType" 
                    value={bankInfo.accountType}
                    onChange={(e) => setBankInfo({...bankInfo, accountType: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="agency">Agência</Label>
                  <Input 
                    id="agency" 
                    value={bankInfo.agency}
                    onChange={(e) => setBankInfo({...bankInfo, agency: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Conta</Label>
                  <Input 
                    id="account" 
                    value={bankInfo.account}
                    onChange={(e) => setBankInfo({...bankInfo, account: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="document">CPF/CNPJ</Label>
                  <Input 
                    id="document" 
                    value={bankInfo.document}
                    onChange={(e) => setBankInfo({...bankInfo, document: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pixKey">Chave PIX</Label>
                  <Input 
                    id="pixKey" 
                    value={bankInfo.pixKey}
                    onChange={(e) => setBankInfo({...bankInfo, pixKey: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-blue-700">
                  <strong>Importante:</strong> Todos os pagamentos de comissões serão feitos para a conta bancária informada acima.
                  Mantenha seus dados sempre atualizados.
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveBank}>
                  Salvar Informações Bancárias
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentos</CardTitle>
              <CardDescription>
                Upload dos documentos necessários para validação da sua conta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">RG ou CNH</h3>
                      <p className="text-sm text-muted-foreground">Documento de identificação com foto.</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Comprovante de Residência</h3>
                      <p className="text-sm text-muted-foreground">Documento em seu nome com até 90 dias.</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4 bg-slate-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Certificação Profissional (opcional)</h3>
                      <p className="text-sm text-muted-foreground">CRECI, COFECI ou outras certificações relevantes.</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>
                Configure como deseja receber informações e alertas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Notificações por E-mail</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailProjects">Atualizações de projetos</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba atualizações sobre o status dos seus projetos.
                      </p>
                    </div>
                    <Switch 
                      id="emailProjects"
                      checked={notifications.emailProjects}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, emailProjects: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailMarketing">Newsletter e materiais educativos</Label>
                      <p className="text-sm text-muted-foreground">
                        Dicas, novidades e materiais educativos sobre o mercado.
                      </p>
                    </div>
                    <Switch 
                      id="emailMarketing"
                      checked={notifications.emailMarketing}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, emailMarketing: checked})
                      }
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium">Notificações Push</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushStatus">Atualizações de status</Label>
                      <p className="text-sm text-muted-foreground">
                        Seja notificado quando o status dos seus projetos mudar.
                      </p>
                    </div>
                    <Switch 
                      id="pushStatus"
                      checked={notifications.pushStatus}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, pushStatus: checked})
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushChat">Novas mensagens</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba alertas quando receber novas mensagens.
                      </p>
                    </div>
                    <Switch 
                      id="pushChat"
                      checked={notifications.pushChat}
                      onCheckedChange={(checked) => 
                        setNotifications({...notifications, pushChat: checked})
                      }
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button onClick={handleSaveNotifications}>
                  Salvar Preferências
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>
                Gerencie a segurança da sua conta e acesso.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Alterar Senha</h3>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nova Senha</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Button>
                  <Lock className="mr-2 h-4 w-4" /> Atualizar Senha
                </Button>
              </div>
              
              <div className="border-t pt-6 space-y-4">
                <h3 className="font-medium">Dispositivos Conectados</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <p className="font-medium">Chrome em Windows</p>
                      <p className="text-sm text-muted-foreground">São Paulo, Brasil • Ativo agora</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Este dispositivo
                    </Button>
                  </div>
                  <div className="flex items-center justify-between border-b pb-3">
                    <div>
                      <p className="font-medium">Safari em iPhone</p>
                      <p className="text-sm text-muted-foreground">São Paulo, Brasil • Última atividade: ontem</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-red-500">
                      Desconectar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
