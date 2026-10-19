
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Users } from "lucide-react";

type ResponsibleInfoFormProps = {
  onNext: (data: ResponsibleFormData) => void;
  onBack: () => void;
};

export type TeamMember = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
};

export type ResponsibleFormData = {
  responsibleName: string;
  responsibleEmail: string;
  responsiblePhone: string;
  responsibleCPF: string;
  responsibleRole: string;
  teamMembers: TeamMember[];
};

const ResponsibleInfoForm = ({ onNext, onBack }: ResponsibleInfoFormProps) => {
  const [formData, setFormData] = useState<ResponsibleFormData>({
    responsibleName: "",
    responsibleEmail: "",
    responsiblePhone: "",
    responsibleCPF: "",
    responsibleRole: "",
    teamMembers: []
  });

  const [errors, setErrors] = useState<Partial<Record<keyof Omit<ResponsibleFormData, "teamMembers">, string>>>({});
  const [showAddMember, setShowAddMember] = useState(false);
  const [newMember, setNewMember] = useState<Omit<TeamMember, "id">>({
    name: "",
    email: "",
    phone: "",
    role: ""
  });
  const [memberErrors, setMemberErrors] = useState<Partial<Record<keyof Omit<TeamMember, "id">, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when typing
    if (errors[name as keyof Omit<ResponsibleFormData, "teamMembers">]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .substring(0, 14);
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setFormData({
      ...formData,
      responsibleCPF: formatted,
    });
    
    if (errors.responsibleCPF) {
      setErrors({
        ...errors,
        responsibleCPF: "",
      });
    }
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .substring(0, 15);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData({
      ...formData,
      responsiblePhone: formatted,
    });
    
    if (errors.responsiblePhone) {
      setErrors({
        ...errors,
        responsiblePhone: "",
      });
    }
  };

  const handleNewMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
    
    // Clear error when typing
    if (memberErrors[name as keyof Omit<TeamMember, "id">]) {
      setMemberErrors({
        ...memberErrors,
        [name]: "",
      });
    }
  };

  const handleNewMemberPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setNewMember({
      ...newMember,
      phone: formatted,
    });
    
    if (memberErrors.phone) {
      setMemberErrors({
        ...memberErrors,
        phone: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof Omit<ResponsibleFormData, "teamMembers">, string>> = {};
    
    if (!formData.responsibleName.trim()) {
      newErrors.responsibleName = "Nome é obrigatório";
    }
    
    if (!formData.responsibleEmail.trim()) {
      newErrors.responsibleEmail = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.responsibleEmail)) {
      newErrors.responsibleEmail = "Email inválido";
    }
    
    if (!formData.responsiblePhone.trim()) {
      newErrors.responsiblePhone = "Telefone é obrigatório";
    }
    
    if (!formData.responsibleCPF.trim()) {
      newErrors.responsibleCPF = "CPF é obrigatório";
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.responsibleCPF)) {
      newErrors.responsibleCPF = "CPF inválido (formato: xxx.xxx.xxx-xx)";
    }
    
    if (!formData.responsibleRole.trim()) {
      newErrors.responsibleRole = "Cargo é obrigatório";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateNewMember = () => {
    const newErrors: Partial<Record<keyof Omit<TeamMember, "id">, string>> = {};
    
    if (!newMember.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }
    
    if (!newMember.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newMember.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!newMember.role.trim()) {
      newErrors.role = "Cargo é obrigatório";
    }
    
    setMemberErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addTeamMember = () => {
    if (validateNewMember()) {
      const newTeamMember: TeamMember = {
        id: Date.now().toString(),
        ...newMember
      };
      
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, newTeamMember]
      });
      
      // Reset form
      setNewMember({
        name: "",
        email: "",
        phone: "",
        role: ""
      });
      
      setShowAddMember(false);
    }
  };

  const removeTeamMember = (id: string) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.filter(member => member.id !== id)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-6">Responsável e Equipe</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Informações do Responsável</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="responsibleName">Nome Completo</Label>
              <Input
                id="responsibleName"
                name="responsibleName"
                value={formData.responsibleName}
                onChange={handleInputChange}
                placeholder="Nome completo"
                className={errors.responsibleName ? "border-red-500" : ""}
              />
              {errors.responsibleName && (
                <p className="text-sm text-red-500">{errors.responsibleName}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="responsibleCPF">CPF</Label>
              <Input
                id="responsibleCPF"
                name="responsibleCPF"
                value={formData.responsibleCPF}
                onChange={handleCPFChange}
                placeholder="xxx.xxx.xxx-xx"
                className={errors.responsibleCPF ? "border-red-500" : ""}
              />
              {errors.responsibleCPF && (
                <p className="text-sm text-red-500">{errors.responsibleCPF}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="responsibleEmail">Email</Label>
              <Input
                id="responsibleEmail"
                name="responsibleEmail"
                type="email"
                value={formData.responsibleEmail}
                onChange={handleInputChange}
                placeholder="email@exemplo.com"
                className={errors.responsibleEmail ? "border-red-500" : ""}
              />
              {errors.responsibleEmail && (
                <p className="text-sm text-red-500">{errors.responsibleEmail}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="responsiblePhone">Telefone</Label>
              <Input
                id="responsiblePhone"
                name="responsiblePhone"
                value={formData.responsiblePhone}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                className={errors.responsiblePhone ? "border-red-500" : ""}
              />
              {errors.responsiblePhone && (
                <p className="text-sm text-red-500">{errors.responsiblePhone}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="responsibleRole">Cargo</Label>
            <Input
              id="responsibleRole"
              name="responsibleRole"
              value={formData.responsibleRole}
              onChange={handleInputChange}
              placeholder="Ex: Diretor, CEO, Gerente"
              className={errors.responsibleRole ? "border-red-500" : ""}
            />
            {errors.responsibleRole && (
              <p className="text-sm text-red-500">{errors.responsibleRole}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Membros da Equipe
            </h3>
            
            <Button 
              type="button" 
              variant="outline"
              className="flex items-center"
              onClick={() => setShowAddMember(true)}
              disabled={showAddMember}
            >
              <Plus className="h-4 w-4 mr-1" />
              Adicionar Membro
            </Button>
          </div>
          
          {showAddMember && (
            <div className="border rounded-lg p-4 bg-slate-50">
              <h4 className="font-medium mb-3">Novo Membro</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="memberName">Nome</Label>
                  <Input
                    id="memberName"
                    name="name"
                    value={newMember.name}
                    onChange={handleNewMemberChange}
                    placeholder="Nome completo"
                    className={memberErrors.name ? "border-red-500" : ""}
                  />
                  {memberErrors.name && (
                    <p className="text-sm text-red-500">{memberErrors.name}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="memberEmail">Email</Label>
                  <Input
                    id="memberEmail"
                    name="email"
                    type="email"
                    value={newMember.email}
                    onChange={handleNewMemberChange}
                    placeholder="email@exemplo.com"
                    className={memberErrors.email ? "border-red-500" : ""}
                  />
                  {memberErrors.email && (
                    <p className="text-sm text-red-500">{memberErrors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="memberPhone">Telefone (opcional)</Label>
                  <Input
                    id="memberPhone"
                    name="phone"
                    value={newMember.phone}
                    onChange={handleNewMemberPhoneChange}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="memberRole">Cargo</Label>
                  <Input
                    id="memberRole"
                    name="role"
                    value={newMember.role}
                    onChange={handleNewMemberChange}
                    placeholder="Ex: Analista, Gerente"
                    className={memberErrors.role ? "border-red-500" : ""}
                  />
                  {memberErrors.role && (
                    <p className="text-sm text-red-500">{memberErrors.role}</p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => {
                    setShowAddMember(false);
                    setMemberErrors({});
                  }}
                >
                  Cancelar
                </Button>
                <Button 
                  type="button" 
                  onClick={addTeamMember}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          )}
          
          {formData.teamMembers.length > 0 ? (
            <div className="space-y-3 mt-4">
              {formData.teamMembers.map(member => (
                <div key={member.id} className="border rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    type="button"
                    onClick={() => removeTeamMember(member.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 italic">
              Nenhum membro da equipe adicionado. Adicione membros da sua equipe que também terão acesso à plataforma.
            </p>
          )}
        </div>
      </div>
      
      <div className="pt-4 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button type="submit">
          Próximo
        </Button>
      </div>
    </form>
  );
};

export default ResponsibleInfoForm;
