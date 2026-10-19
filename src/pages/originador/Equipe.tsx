
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Equipe() {
  // Mock data for the NextStone team
  const team = [
    {
      id: 1,
      name: "Ricardo Mendes",
      role: "Gerente de Relacionamento",
      email: "ricardo.mendes@nextstone.com.br",
      phone: "+55 (11) 98765-4321",
      projects: ["Residencial Vista Mar", "Edifício Comercial Central"],
      avatar: "/placeholder.svg",
      specialty: "Residencial e Comercial"
    },
    {
      id: 2,
      name: "Ana Silva",
      role: "Analista Financeira",
      email: "ana.silva@nextstone.com.br",
      phone: "+55 (11) 97654-3210",
      projects: ["Condomínio Parque Verde"],
      avatar: "/placeholder.svg",
      specialty: "Análise de Viabilidade"
    },
    {
      id: 3,
      name: "Carlos Santos",
      role: "Especialista em Due Diligence",
      email: "carlos.santos@nextstone.com.br",
      phone: "+55 (11) 96543-2109",
      projects: [],
      avatar: "/placeholder.svg",
      specialty: "Due Diligence e Compliance"
    },
    {
      id: 4,
      name: "Laura Oliveira",
      role: "Coordenadora de Investimentos",
      email: "laura.oliveira@nextstone.com.br",
      phone: "+55 (11) 95432-1098",
      projects: [],
      avatar: "/placeholder.svg",
      specialty: "Conectar Incorporadoras e Investidores"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Equipe NextStone</h1>
        <p className="text-muted-foreground mt-1">
          Conheça os profissionais dedicados ao sucesso dos seus projetos.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardHeader className="border-b bg-slate-50 p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-white">
                  <AvatarFallback className="bg-coral text-white text-xl">
                    {member.name.split(' ').map(part => part[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="mt-1">{member.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div>
                <div className="text-sm font-medium mb-1">Especialidade</div>
                <Badge variant="outline" className="bg-coral/10 text-coral border-coral/20">
                  {member.specialty}
                </Badge>
              </div>

              {member.projects.length > 0 && (
                <div>
                  <div className="text-sm font-medium mb-1">Projetos</div>
                  <div className="space-y-1">
                    {member.projects.map((project, idx) => (
                      <div key={idx} className="text-sm bg-slate-50 rounded px-2 py-1">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-2 pt-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-coral" />
                  <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-coral" />
                  <a href={`tel:${member.phone}`} className="text-sm hover:underline">
                    {member.phone}
                  </a>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a href={`/originador/conversas?member=${member.id}`}>
                  <MessageSquare className="mr-2 h-4 w-4" /> Iniciar Conversa
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-blue-50 border-blue-100">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div>
              <h3 className="font-semibold text-blue-800">Suporte 24/7</h3>
              <p className="text-blue-700">Nossa equipe está sempre disponível para ajudar você com seus projetos.</p>
            </div>
            <div className="md:ml-auto flex gap-2">
              <Button variant="outline" className="bg-white border-blue-200 text-blue-800">
                <Mail className="mr-2 h-4 w-4" />
                suporte@nextstone.com.br
              </Button>
              <Button variant="outline" className="bg-white border-blue-200 text-blue-800">
                <Phone className="mr-2 h-4 w-4" />
                0800 123 4567
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
