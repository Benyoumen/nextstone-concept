
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import CompanyInfoForm, { CompanyFormData } from "@/components/signup/CompanyInfoForm";
import ResponsibleInfoForm, { ResponsibleFormData } from "@/components/signup/ResponsibleInfoForm";
import VerificationForm, { VerificationFormData } from "@/components/signup/VerificationForm";
import StepProgressBar from "@/components/signup/StepProgressBar";
import SignUpSuccess from "@/components/signup/SignUpSuccess";
import CompanyTypeSelection from "@/components/signup/CompanyTypeSelection";
import { useSignUpFlow } from "@/hooks/useSignUpFlow";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4 | 5;
type CompanyType = "incorporadora" | "loteadora" | null;

const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const profileType = searchParams.get("type");
  const { user } = useAuth();
  const signUpFlow = useSignUpFlow();
  const [companyType, setCompanyType] = useState<"incorporadora" | "loteadora" | null>(null);
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  // Initialize user type based on profile type from URL
  useEffect(() => {
    if (profileType && !signUpFlow.signUpData.userType) {
      let userType: 'developer' | 'fund' | 'originador' = 'developer';
      
      if (profileType === 'incorporador') userType = 'developer';
      else if (profileType === 'institucional') userType = 'fund';
      else if (profileType === 'originador') userType = 'originador';
      
      signUpFlow.updateData({ userType });
    }
  }, [profileType, signUpFlow]);

  const handleCompanyTypeSelect = (type: "incorporadora" | "loteadora") => {
    setCompanyType(type);
  };
  
  const handleContinueToCompanyInfo = () => {
    if (companyType) {
      signUpFlow.nextStep();
      window.scrollTo(0, 0);
    }
  };

  const handleCompanyFormSubmit = (data: CompanyFormData) => {
    signUpFlow.updateData({
      companyName: data.companyName,
      cnpj: data.cnpj,
      email: data.email // Store email from company form
    });
    signUpFlow.nextStep();
    window.scrollTo(0, 0);
  };
  
  const handleResponsibleFormSubmit = (data: ResponsibleFormData) => {
    signUpFlow.updateData({
      responsibleName: data.responsibleName,
      responsibleRole: data.responsibleRole,
      email: data.responsibleEmail, // Use the correct field name
      phone: data.responsiblePhone,
      // We'll need to get password from verification form
    });
    signUpFlow.nextStep();
    window.scrollTo(0, 0);
  };
  
  const handleVerificationFormSubmit = async (data: VerificationFormData) => {
    signUpFlow.updateData({
      email: data.email, // Final email from verification
      password: data.password,
      acceptTerms: true, // Assuming form submission means terms accepted
      acceptMarketing: false
    });
    
    const result = await signUpFlow.completeSignUp();
    
    if (result.success) {
      signUpFlow.nextStep(); // Go to success page
      window.scrollTo(0, 0);
    } else {
      toast.error(result.error || 'Erro ao finalizar cadastro');
    }
  };

  // Progress and step logic
  const isIncorporador = profileType === "incorporador";
  const isThreeStepProfile = profileType === "institucional" || profileType === "pessoa-fisica" || profileType === "originador";
  const totalSteps = isThreeStepProfile ? 3 : 4;

  const getDisplayStep = (): number => {
    if (isThreeStepProfile) {
      if (signUpFlow.currentStep === 1) return 1;
      if (signUpFlow.currentStep === 2) return 2;
      if (signUpFlow.currentStep >= 3) return 3;
      return signUpFlow.currentStep;
    } else {
      return signUpFlow.currentStep;
    }
  };

  const getProgressPercentage = (): number => {
    if (isThreeStepProfile) {
      switch (signUpFlow.currentStep) {
        case 1: return 33;
        case 2: return 66;
        case 3: return 100;
        default: return 0;
      }
    } else {
      switch (signUpFlow.currentStep) {
        case 1: return 25;
        case 2: return 50;
        case 3: return 75;
        case 4: return 100;
        default: return 0;
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-24 pb-16 relative">
        <div className="absolute top-4 left-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/cadastro/tipo")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>
        
        <div className="container max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-6">
            <Link to="/" className="block mb-2">
              <h1 className="text-2xl font-bold text-black text-center">
                NextStone
              </h1>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <StepProgressBar
              show={signUpFlow.currentStep < 5}
              currentStep={getDisplayStep()}
              totalSteps={totalSteps}
              progressPercent={getProgressPercentage()}
            />

            <div className="p-4 sm:p-6">
              {signUpFlow.currentStep === 1 && isIncorporador && (
                <CompanyTypeSelection
                  selectedCompanyType={companyType}
                  onSelect={handleCompanyTypeSelect}
                  onContinue={handleContinueToCompanyInfo}
                />
              )}

              {((signUpFlow.currentStep === 1 && !isIncorporador) || signUpFlow.currentStep === 2) && (
                <CompanyInfoForm 
                  onNext={handleCompanyFormSubmit}
                  companyType={companyType}
                />
              )}
              
              {signUpFlow.currentStep === 3 && (
                <ResponsibleInfoForm 
                  onNext={handleResponsibleFormSubmit}
                  onBack={() => signUpFlow.prevStep()}
                />
              )}
              
              {signUpFlow.currentStep === 4 && (
                <VerificationForm
                  onSubmit={handleVerificationFormSubmit}
                  onBack={() => signUpFlow.prevStep()}
                />
              )}
              
              {signUpFlow.currentStep === 5 && (
                <SignUpSuccess />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

