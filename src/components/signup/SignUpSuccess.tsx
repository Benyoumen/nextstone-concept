
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUpSuccess = () => (
  <div className="flex flex-col items-center justify-center py-10">
    <div className="flex justify-center mb-6">
      <CheckCircle2 className="h-16 w-16 text-green-500" />
    </div>
    <h2 className="text-2xl font-bold text-center mb-2">Cadastro Enviado!</h2>
    <p className="text-center text-gray-600 mb-8 max-w-md">
      Sua solicitação de cadastro foi realizada com sucesso. Nosso time irá revisar suas informações. Em breve, você receberá um email de confirmação de sua conta.
    </p>
    <div className="space-y-3">
      <Button asChild className="w-full">
        <Link to="/">Voltar para a Página Inicial</Link>
      </Button>
    </div>
  </div>
);

export default SignUpSuccess;
