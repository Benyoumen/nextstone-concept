
import { Progress } from "@/components/ui/progress";

type StepProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  progressPercent: number;
  show: boolean;
};

const StepProgressBar = ({ currentStep, totalSteps, progressPercent, show }: StepProgressBarProps) => {
  if (!show) return null;

  return (
    <div className="p-4 sm:p-6 border-b">
      <div className="flex justify-between mb-2">
        <div className="text-sm font-medium text-gray-600">
          Passo {currentStep} de {totalSteps}
        </div>
        <div className="text-sm font-medium text-gray-600">
          {progressPercent}% completo
        </div>
      </div>
      <Progress 
        value={progressPercent} 
        className="h-2.5 bg-slate-100" 
        indicatorClassName="bg-gold"
      />
    </div>
  );
}

export default StepProgressBar;
