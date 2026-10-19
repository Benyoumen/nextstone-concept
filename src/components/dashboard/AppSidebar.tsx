
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Home, Building2, FileText, BarChart2, CalendarIcon, 
  User, LogOut, BarChart3, Briefcase, LineChart, Shield,
  PieChart, FileBarChart
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();
  const isInvestorDashboard = location.pathname.startsWith('/investor');

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      console.error('Error signing out:', error);
    }
    navigate('/login');
  };

  return (
    <Sidebar side="left" className="border-r">
      <SidebarHeader className="flex items-center px-6 py-5 space-x-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center text-xl font-bold">
            N
          </div>
          <h2 className="text-xl font-bold">NextStone</h2>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        {isInvestorDashboard ? (
          // Investor sidebar menu
          <>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor">
                        <Home />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor/developers">
                        <Building2 />
                        <span>Incorporadoras</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor/projects">
                        <FileText />
                        <span>Projetos</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor/due-diligence">
                        <FileBarChart />
                        <span>Due Diligence</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor/portfolio">
                        <Briefcase />
                        <span>Meu Portfólio</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor/profile">
                        <User />
                        <span>Meu Perfil</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/investor/risk">
                        <Shield />
                        <span>Análise de Risco</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        ) : (
          // Developer sidebar menu (original)
          <>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard">
                        <Home />
                        <span>Dashboard</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/empreendimentos">
                        <Building2 />
                        <span>Empreendimentos</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/negociacoes">
                        <FileText />
                        <span>Negociações</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/incorporadora/dados">
                        <User />
                        <span>Meus Dados</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/incorporadora/balanco">
                        <BarChart2 />
                        <span>Balanço</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/dashboard/incorporadora/pagamentos">
                        <CalendarIcon />
                        <span>Pagamentos</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback>{isInvestorDashboard ? 'IF' : 'CC'}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{isInvestorDashboard ? 'Investidor' : 'Incorporadora'}</p>
              <p className="text-xs text-gray-500">{isInvestorDashboard ? 'Capital Fund' : 'Luckey'}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
