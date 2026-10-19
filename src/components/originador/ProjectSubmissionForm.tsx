import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

// Define the form validation schema
const formSchema = z.object({
  projectName: z.string().min(3, "Nome do projeto é obrigatório"),
  developerName: z.string().min(3, "Nome da incorporadora é obrigatório"),
  developerContact: z.string().email("E-mail inválido"),
  developerPhone: z.string().min(10, "Telefone inválido"),
  projectType: z.string().min(1, "Tipo de projeto é obrigatório"),
  projectLocation: z.string().min(5, "Localização é obrigatória"),
  projectValue: z.string().min(1, "Valor estimado é obrigatório"),
  projectDescription: z.string().min(20, "Descrição deve ter pelo menos 20 caracteres"),
  hasLandOwnership: z.string(),
  hasApprovals: z.string(),
  financingPercentage: z.string(),
  originatorName: z.string().min(3, "Seu nome é obrigatório"),
  originatorEmail: z.string().email("E-mail inválido"),
  originatorPhone: z.string().min(10, "Telefone inválido")
});

const ProjectSubmissionForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      developerName: "",
      developerContact: "",
      developerPhone: "",
      projectType: "",
      projectLocation: "",
      projectValue: "",
      projectDescription: "",
      hasLandOwnership: "",
      hasApprovals: "",
      financingPercentage: "",
      originatorName: "",
      originatorEmail: "",
      originatorPhone: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would send the data to your backend
    console.log(values);
    
    // Show success state
    setIsSubmitted(true);
    
    // Show toast notification
    toast({
      title: "Projeto cadastrado com sucesso!",
      description: "Entraremos em contato em breve para dar continuidade ao processo.",
    });
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">Projeto cadastrado com sucesso!</h3>
        <p className="text-gray-600 mb-6">
          Recebemos seu projeto e iniciaremos a análise. Um de nossos especialistas 
          entrará em contato em até 2 dias úteis.
        </p>
        <div className="space-y-4">
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Cadastrar outro projeto
          </Button>
          <div className="text-sm text-gray-500 mt-2">
            ID de acompanhamento: PROJ-{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Informações do Projeto</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Projeto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Residencial Vista Mar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Projeto</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial Vertical</SelectItem>
                      <SelectItem value="horizontal">Residencial Horizontal</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="misto">Uso Misto</SelectItem>
                      <SelectItem value="loteamento">Loteamento</SelectItem>
                      <SelectItem value="retrofit">Retrofit</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="projectLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Localização</FormLabel>
                  <FormControl>
                    <Input placeholder="Cidade/Estado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="projectValue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor Estimado do Projeto</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a faixa de valor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="5-10">R$ 5-10 milhões</SelectItem>
                      <SelectItem value="10-20">R$ 10-20 milhões</SelectItem>
                      <SelectItem value="20-50">R$ 20-50 milhões</SelectItem>
                      <SelectItem value="50-100">R$ 50-100 milhões</SelectItem>
                      <SelectItem value="100+">Acima de R$ 100 milhões</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="projectDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição do Projeto</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva brevemente o projeto, incluindo número de unidades, área total, diferenciais, etc."
                    className="h-24"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="hasLandOwnership"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Propriedade do terreno</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sim">Terreno próprio</SelectItem>
                      <SelectItem value="parcial">Parcialmente pago</SelectItem>
                      <SelectItem value="nao">Não adquirido</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="hasApprovals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aprovações</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="completo">Totalmente aprovado</SelectItem>
                      <SelectItem value="parcial">Em aprovação</SelectItem>
                      <SelectItem value="nenhum">Não iniciado</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="financingPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>% Financiamento desejado</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ate-50">Até 50%</SelectItem>
                      <SelectItem value="50-70">Entre 50% e 70%</SelectItem>
                      <SelectItem value="70-90">Entre 70% e 90%</SelectItem>
                      <SelectItem value="90+">Acima de 90%</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Informações da Incorporadora</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="developerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Incorporadora</FormLabel>
                  <FormControl>
                    <Input placeholder="Razão social" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="developerContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="contato@empresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="developerPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(11) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Seus Dados</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="originatorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="originatorEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seuemail@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="originatorPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <FormDescription className="text-center">
          Ao submeter este formulário, você concorda com os <a href="#" className="text-coral">Termos de Uso</a> e <a href="#" className="text-coral">Política de Privacidade</a> da NextStone.
        </FormDescription>
        
        <div className="flex justify-center">
          <Button type="submit" size="lg" className="min-w-[200px]">
            Enviar Projeto
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectSubmissionForm;
