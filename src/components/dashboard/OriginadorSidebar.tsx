
import { LucideIcon, BarChart2, FileText, MessageSquare, Users, UserPlus, Building2 } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type NavItem = {
  title: string;
  icon: LucideIcon;
  href: string;
  badge?: number;
};

const navItems: NavItem[] = [
  {
    title: "Visão Geral",
    icon: BarChart2,
    href: "/originador",
  },
  {
    title: "Meus Projetos",
    icon: Building2,
    href: "/originador/projetos",
  },
  {
    title: "Cadastrar Projeto",
    icon: FileText,
    href: "/originador/projetos/novo",
  },
  {
    title: "Conversas",
    icon: MessageSquare,
    href: "/originador/conversas",
    badge: 2,
  },
  {
    title: "Equipe NextStone",
    icon: Users,
    href: "/originador/equipe",
  },
  {
    title: "Perfil",
    icon: UserPlus,
    href: "/originador/perfil",
  },
];

export default function OriginadorSidebar() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Originador</h1>
        <p className="text-sm text-muted-foreground mt-1">Portal de projetos</p>
      </div>
      
      <nav className="flex-1 px-4 pt-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              to={item.href}
            >
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  location.pathname === item.href && "bg-slate-100 font-medium"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.title}
                {item.badge && (
                  <span className="ml-auto bg-coral text-white text-xs font-medium rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </Button>
            </Link>
          ))}
        </div>
      </nav>
      
      <div className="border-t p-4 mt-auto">
        <div className="bg-slate-50 rounded-md p-3">
          <h3 className="font-medium text-sm">Precisa de ajuda?</h3>
          <p className="text-xs text-muted-foreground mt-1">Entre em contato com seu gestor dedicado.</p>
          <Button
            variant="link"
            className="h-8 p-0 text-coral text-xs mt-1"
            asChild
          >
            <a href="mailto:suporte@nextstone.com.br">suporte@nextstone.com.br</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
