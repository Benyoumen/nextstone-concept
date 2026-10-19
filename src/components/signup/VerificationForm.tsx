
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export type VerificationFormData = {
  email: string;
  password: string;
  // ... any other fields (e.g. code, etc) as before ...
};

export const verificationSchema = z.object({
  email: z.string().min(1, "Obrigatório").email("Digite um email válido"),
  password: z.string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .regex(/[A-Z]/, "Inclua pelo menos uma letra maiúscula")
    .regex(/[a-z]/, "Inclua pelo menos uma letra minúscula")
    .regex(/[0-9]/, "Inclua pelo menos um número")
    .regex(/[@#$]/, "Inclua pelo menos um caractere especial (@, #, $)"),
  // ... other field validations ...
});

export default function VerificationForm({ onSubmit, onBack }: { onSubmit: (data: VerificationFormData) => void, onBack: () => void }) {
  const form = useForm<VerificationFormData>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        autoComplete="off"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Configure seu acesso</h2>
          <p className="text-sm text-gray-600">Defina seu e-mail e senha para criar sua conta</p>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Digite seu e-mail" {...field} />
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
                <Input
                  type="password"
                  placeholder="Crie uma senha forte"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <div className="text-xs text-muted-foreground mt-1">
                A senha deve ter pelo menos 8 caracteres com letra maiúscula, minúscula, número e caractere especial (@, #, $).
              </div>
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Voltar
          </Button>
          <Button type="submit">
            Finalizar Cadastro
          </Button>
        </div>
      </form>
    </Form>
  );
}
