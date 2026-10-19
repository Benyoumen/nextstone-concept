
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CompanyType = "incorporadora" | "loteadora" | null;

type CompanyTypeSelectionProps = {
  selectedCompanyType: CompanyType;
  onSelect: (type: CompanyType) => void;
  onContinue: () => void;
};

const CompanyTypeSelection = ({ selectedCompanyType, onSelect, onContinue }: CompanyTypeSelectionProps) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold mb-4">Selecione o Tipo de Empresa</h2>
      <RadioGroup
        value={selectedCompanyType || undefined}
        onValueChange={(value) => onSelect(value as CompanyType)}
        className="grid gap-4"
      >
        <Card className="p-4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="incorporadora" id="incorporadora" />
            <Label htmlFor="incorporadora" className="font-medium cursor-pointer">
              Incorporadora
            </Label>
          </div>
        </Card>
        <Card className="p-4 cursor-pointer">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="loteadora" id="loteadora" />
            <Label htmlFor="loteadora" className="font-medium cursor-pointer">
              Loteadora
            </Label>
          </div>
        </Card>
      </RadioGroup>
    </div>
    <Button 
      onClick={onContinue}
      disabled={!selectedCompanyType}
      className="w-full"
    >
      Continuar
    </Button>
  </div>
);

export default CompanyTypeSelection;
