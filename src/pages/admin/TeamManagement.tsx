import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Mail, Phone, Calendar, Users } from "lucide-react";

const TeamManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const departments = ["Legal", "Data", "Finance", "Sales & Marketing", "Real Estate"];

  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Gerente Legal",
      department: "Legal",
      email: "ana.silva@nextstone.com",
      phone: "+55 11 99999-1111",
      avatar: "",
      status: "active",
      joinDate: "2023-06-15",
      activeProjects: 8,
      completedProjects: 23
    },
    {
      id: 2,
      name: "Carlos Oliveira",
      role: "Analista de Dados",
      department: "Data",
      email: "carlos.oliveira@nextstone.com",
      phone: "+55 11 99999-2222",
      avatar: "",
      status: "active",
      joinDate: "2023-08-20",
      activeProjects: 5,
      completedProjects: 18
    },
    {
      id: 3,
      name: "Maria Santos",
      role: "Diretora Financeira",
      department: "Finance",
      email: "maria.santos@nextstone.com",
      phone: "+55 11 99999-3333",
      avatar: "",
      status: "active",
      joinDate: "2023-03-10",
      activeProjects: 12,
      completedProjects: 35
    },
    {
      id: 4,
      name: "João Costa",
      role: "Especialista em Marketing",
      department: "Sales & Marketing",
      email: "joao.costa@nextstone.com",
      phone: "+55 11 99999-4444",
      avatar: "",
      status: "active",
      joinDate: "2023-09-05",
      activeProjects: 6,
      completedProjects: 12
    },
    {
      id: 5,
      name: "Fernanda Lima",
      role: "Analista Imobiliária",
      department: "Real Estate",
      email: "fernanda.lima@nextstone.com",
      phone: "+55 11 99999-5555",
      avatar: "",
      status: "active",
      joinDate: "2023-07-12",
      activeProjects: 9,
      completedProjects: 27
    },
    {
      id: 6,
      name: "Ricardo Alves",
      role: "Coordenador Legal",
      department: "Legal",
      email: "ricardo.alves@nextstone.com",
      phone: "+55 11 99999-6666",
      avatar: "",
      status: "vacation",
      joinDate: "2023-04-18",
      activeProjects: 4,
      completedProjects: 19
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case "vacation":
        return <Badge className="bg-blue-100 text-blue-800">Férias</Badge>;
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800">Inativo</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getDepartmentColor = (department: string) => {
    const colors: { [key: string]: string } = {
      "Legal": "bg-blue-100 text-blue-800",
      "Data": "bg-purple-100 text-purple-800",
      "Finance": "bg-green-100 text-green-800",
      "Sales & Marketing": "bg-orange-100 text-orange-800",
      "Real Estate": "bg-red-100 text-red-800"
    };
    return colors[department] || "bg-gray-100 text-gray-800";
  };

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Equipe</h1>
          <p className="text-gray-600">Gerencie os responsáveis por cada departamento</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Membro
        </Button>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {departments.map((dept) => {
          const deptMembers = teamMembers.filter(m => m.department === dept);
          const activeMembers = deptMembers.filter(m => m.status === 'active').length;
          
          return (
            <Card key={dept}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{dept}</p>
                    <p className="text-2xl font-bold">{activeMembers}</p>
                    <p className="text-xs text-gray-500">{deptMembers.length} total</p>
                  </div>
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Equipe NextStone</CardTitle>
          <CardDescription>
            Membros da equipe organizados por departamento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="grid grid-cols-6 w-full">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="Legal">Legal</TabsTrigger>
              <TabsTrigger value="Data">Data</TabsTrigger>
              <TabsTrigger value="Finance">Finance</TabsTrigger>
              <TabsTrigger value="Sales & Marketing">Marketing</TabsTrigger>
              <TabsTrigger value="Real Estate">Real Estate</TabsTrigger>
            </TabsList>

            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar por nome, cargo ou departamento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filtros</Button>
            </div>

            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4">
                {filteredMembers.map((member) => (
                  <Card key={member.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={member.avatar} />
                            <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                          </Avatar>
                          
                          <div className="space-y-2">
                            <div>
                              <h3 className="font-semibold text-lg">{member.name}</h3>
                              <p className="text-gray-600">{member.role}</p>
                            </div>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Mail className="h-4 w-4" />
                                {member.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="h-4 w-4" />
                                {member.phone}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Desde {new Date(member.joinDate).toLocaleDateString('pt-BR')}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex gap-2">
                            <Badge className={getDepartmentColor(member.department)}>
                              {member.department}
                            </Badge>
                            {getStatusBadge(member.status)}
                          </div>
                          
                          <div className="text-right text-sm text-gray-500">
                            <p>{member.activeProjects} projetos ativos</p>
                            <p>{member.completedProjects} completados</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {departments.map((dept) => (
              <TabsContent key={dept} value={dept}>
                <div className="grid gap-4">
                  {teamMembers
                    .filter(member => member.department === dept)
                    .map((member) => (
                      <Card key={member.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={member.avatar} />
                                <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                              </Avatar>
                              
                              <div className="space-y-2">
                                <div>
                                  <h3 className="font-semibold text-lg">{member.name}</h3>
                                  <p className="text-gray-600">{member.role}</p>
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Mail className="h-4 w-4" />
                                    {member.email}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Phone className="h-4 w-4" />
                                    {member.phone}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-end gap-2">
                              {getStatusBadge(member.status)}
                              <div className="text-right text-sm text-gray-500">
                                <p>{member.activeProjects} projetos ativos</p>
                                <p>{member.completedProjects} completados</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamManagement;