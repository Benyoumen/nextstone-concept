
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Originadores from "./pages/Originadores";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SelectProfileType from "./pages/SelectProfileType";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";

// Dashboard imports
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Empreendimentos from "./pages/dashboard/Empreendimentos";
import NovoEmpreendimento from "./pages/dashboard/empreendimentos/NovoEmpreendimento";
import Negociacoes from "./pages/dashboard/Negociacoes";
import MeusDados from "./pages/dashboard/incorporadora/MeusDados";
import Balanco from "./pages/dashboard/incorporadora/Balanco";
import Pagamentos from "./pages/dashboard/incorporadora/Pagamentos";

// Investor Dashboard imports
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import DeveloperAnalysis from "./pages/investor/DeveloperAnalysis";
import InvestorProjectAnalysis from "./pages/investor/ProjectAnalysis";
import Portfolio from "./pages/investor/Portfolio";
import InvestorProfile from "./pages/investor/InvestorProfile";
import RiskAssessment from "./pages/investor/RiskAssessment";
import ProjectDueDiligence from "./pages/investor/ProjectDueDiligence";

// Originador Dashboard imports
import OriginadorLayout from "./components/dashboard/OriginadorLayout";
import OriginadorDashboard from "./pages/originador/OriginadorDashboard";
import ProjetosLista from "./pages/originador/ProjetosLista";
import NovoProjeto from "./pages/originador/NovoProjeto";
import Conversas from "./pages/originador/Conversas";
import Equipe from "./pages/originador/Equipe";
import Perfil from "./pages/originador/Perfil";
import ProjetoDetalhe from "./pages/originador/ProjetoDetalhe";

// Admin Dashboard imports
import AdminLayout from "./components/dashboard/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FundsManagement from "./pages/admin/FundsManagement";
import DocumentsReview from "./pages/admin/DocumentsReview";
import DealsTracking from "./pages/admin/DealsTracking";
import TeamManagement from "./pages/admin/TeamManagement";
import ProjectAnalysis from "./pages/admin/ProjectAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/originadores" element={<Originadores />} />
          <Route path="/cadastro/tipo" element={<SelectProfileType />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Developer Dashboard Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedUserTypes={['developer']}>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="empreendimentos" element={<Empreendimentos />} />
            <Route path="empreendimentos/novo" element={<NovoEmpreendimento />} />
            <Route path="negociacoes" element={<Negociacoes />} />
            <Route path="incorporadora/dados" element={<MeusDados />} />
            <Route path="incorporadora/balanco" element={<Balanco />} />
            <Route path="incorporadora/pagamentos" element={<Pagamentos />} />
          </Route>
          
          {/* Investor Dashboard Routes */}
          <Route path="/investor" element={
            <ProtectedRoute allowedUserTypes={['fund']}>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<InvestorDashboard />} />
            <Route path="developers" element={<DeveloperAnalysis />} />
            <Route path="projects" element={<InvestorProjectAnalysis />} />
            <Route path="due-diligence" element={<ProjectDueDiligence />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="profile" element={<InvestorProfile />} />
            <Route path="risk" element={<RiskAssessment />} />
          </Route>
          
          {/* Originador Dashboard Routes */}
          <Route path="/originador" element={
            <ProtectedRoute allowedUserTypes={['originador']}>
              <OriginadorLayout />
            </ProtectedRoute>
          }>
            <Route index element={<OriginadorDashboard />} />
            <Route path="projetos" element={<ProjetosLista />} />
            <Route path="projetos/novo" element={<NovoProjeto />} />
            <Route path="projetos/:id" element={<ProjetoDetalhe />} />
            <Route path="conversas" element={<Conversas />} />
            <Route path="equipe" element={<Equipe />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedUserTypes={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="funds" element={<FundsManagement />} />
            <Route path="documents" element={<DocumentsReview />} />
            <Route path="deals" element={<DealsTracking />} />
            <Route path="team" element={<TeamManagement />} />
            <Route path="analysis" element={<ProjectAnalysis />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
