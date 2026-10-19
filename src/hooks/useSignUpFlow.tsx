import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface SignUpData {
  // Step 1: Profile Type
  userType: 'developer' | 'fund' | 'originador';
  
  // Step 2: Company Info
  companyName: string;
  cnpj: string;
  website?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Step 3: Responsible Person Info
  responsibleName: string;
  responsibleRole: string;
  email: string;
  phone: string;
  password: string;
  
  // Step 4: Verification/Additional Info
  acceptTerms: boolean;
  acceptMarketing?: boolean;
}

export const useSignUpFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signUpData, setSignUpData] = useState<Partial<SignUpData>>({});
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const updateData = (stepData: Partial<SignUpData>) => {
    setSignUpData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const completeSignUp = async (): Promise<{ success: boolean; error?: string }> => {
    if (!signUpData.email || !signUpData.password) {
      return { success: false, error: 'Email e senha são obrigatórios' };
    }

    setLoading(true);
    
    try {
      // Sign up the user
      const { error: authError } = await signUp(
        signUpData.email,
        signUpData.password,
        {
          userType: signUpData.userType,
          companyName: signUpData.companyName,
          phone: signUpData.phone
        }
      );

      if (authError) {
        return { success: false, error: authError.message };
      }

      // After successful auth signup, the trigger will create the profile
      // We need to wait a moment and then update it with additional info
      setTimeout(async () => {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          
          if (user) {
            // Update profile with additional information
            await supabase
              .from('profiles')
              .update({
                company_name: signUpData.companyName,
                phone: signUpData.phone
              })
              .eq('id', user.id);

            // Create entry in specific table based on user type
            if (signUpData.userType === 'developer') {
              await supabase
                .from('Developers')
                .insert({
                  Name: signUpData.companyName || '',
                  '# Buildings': 0,
                  profile_id: user.id
                });
            } else if (signUpData.userType === 'fund') {
              await supabase
                .from('Funds')
                .insert({
                  Name: signUpData.companyName || '',
                  profile_id: user.id
                });
            }
          }
        } catch (error) {
          console.error('Error updating additional profile info:', error);
        }
      }, 1000);

      toast.success('Cadastro realizado com sucesso! Verifique seu email.');
      return { success: true };
      
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado' };
    } finally {
      setLoading(false);
    }
  };

  return {
    currentStep,
    signUpData,
    loading,
    updateData,
    nextStep,
    prevStep,
    completeSignUp,
    setCurrentStep
  };
};