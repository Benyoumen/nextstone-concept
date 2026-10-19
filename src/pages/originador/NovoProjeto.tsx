
import ProjectSubmissionForm from "@/components/originador/ProjectSubmissionForm";
import { Card } from "@/components/ui/card";

export default function NovoProjeto() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Cadastrar Novo Projeto</h1>
        <p className="text-muted-foreground mt-1">
          Preencha os dados do projeto para análise da NextStone.
        </p>
      </div>
      
      <Card className="p-6">
        <ProjectSubmissionForm />
      </Card>
      
      <div className="bg-blue-50 border border-blue-100 rounded-md p-4 text-blue-800 text-sm">
        <p><strong>Dica:</strong> Quanto mais detalhes você fornecer sobre o projeto, maiores as chances de aprovação rápida.</p>
      </div>
    </div>
  );
}
