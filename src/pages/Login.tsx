
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { DEMO_MODE } from "@/integrations/supabase/client";
import { PasswordResetModal } from "@/components/auth/PasswordResetModal";

const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const { signIn, user, getDashboardRoute, demoLogin } = useAuth();
  const navigate = useNavigate();
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(getDashboardRoute());
    }
  }, [user, navigate, getDashboardRoute]);

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    try {
      const { error } = await signIn(data.email, data.password);
      
      if (error) {
        toast.error(error.message || "Erro ao fazer login");
        return;
      }
      
      toast.success("Login realizado com sucesso!");
      navigate(getDashboardRoute());
    } catch (error) {
      toast.error("Erro inesperado ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-darkGray">Bem-vindo de volta</h1>
            <p className="mt-2 text-gray-600">Entre na sua conta da NextStone</p>
          </div>
          
          {DEMO_MODE && (
            <div className="mb-6 rounded-lg border border-dashed p-4 text-center">
              <p className="mb-3 text-sm font-medium">Demonstração: entre como</p>
              <div className="flex flex-wrap justify-center gap-2">
                {([['developer', 'Incorporadora'], ['fund', 'Fundo'], ['originador', 'Originador'], ['admin', 'Admin']] as const).map(([role, label]) => (
                  <Button key={role} type="button" variant="outline" onClick={() => demoLogin(role)}>{label}</Button>
                ))}
              </div>
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="seu@email.com" 
                        type="email" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Sua senha" 
                          type={showPassword ? "text" : "password"} 
                          {...field} 
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gold border-gray-300 rounded focus:ring-gold"
                  />
                  <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Lembrar de mim
                  </Label>
                </div>
                
                <div className="text-sm">
                  <button 
                    type="button"
                    onClick={() => setResetModalOpen(true)}
                    className="font-medium text-primary hover:text-primary/80"
                  >
                    Esqueceu sua senha?
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2"
                disabled={loading}
              >
                <LogIn className="h-5 w-5" />
                {loading ? "Entrando..." : "Entrar"}
              </Button>
              
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Não tem uma conta?{" "}
                  <Link to="/cadastro" className="text-gold hover:text-gold/80 font-medium">
                    Cadastre-se
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </main>
      
      <PasswordResetModal 
        open={resetModalOpen} 
        onOpenChange={setResetModalOpen} 
      />
      
      <Footer />
    </div>
  );
};

export default Login;
