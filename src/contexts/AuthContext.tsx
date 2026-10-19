import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, DEMO_MODE } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  user_type: 'developer' | 'fund' | 'originador' | 'admin';
  company_name: string | null;
  email: string | null;
  phone: string | null;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, userData: any) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
  updatePassword: (password: string) => Promise<{ error: any }>;
  updateProfile: (data: any) => Promise<{ error: any }>;
  getDashboardRoute: () => string;
  demoLogin: (type: UserProfile['user_type']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
      
      return data as UserProfile;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  const demoLogin = (type: UserProfile['user_type']) => {
    const demoProfile: UserProfile = {
      id: 'demo-' + type,
      user_type: type,
      company_name: 'Demo Company',
      email: type + '@demo.example',
      phone: null,
    };
    try { localStorage.setItem('nextstone-demo-role', type); } catch { /* storage unavailable */ }
    setUser({ id: demoProfile.id, email: demoProfile.email } as unknown as User);
    setProfile(demoProfile);
  };

  useEffect(() => {
    if (DEMO_MODE) {
      let stored: string | null = null;
      try { stored = localStorage.getItem('nextstone-demo-role'); } catch { /* storage unavailable */ }
      if (stored) demoLogin(stored as UserProfile['user_type']);
      setLoading(false);
      return;
    }
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Fetch profile data when user signs in
        if (session?.user) {
          setTimeout(async () => {
            const profileData = await fetchUserProfile(session.user.id);
            setProfile(profileData);
            setLoading(false);
          }, 0);
        } else {
          setProfile(null);
          setLoading(false);
        }
      }
    );

    // Get initial session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        const profileData = await fetchUserProfile(session.user.id);
        setProfile(profileData);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, userData: any) => {
    const redirectUrl = `${window.location.origin}/dashboard`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          user_type: userData.userType,
          company_name: userData.companyName,
          phone: userData.phone
        }
      }
    });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { error };
  };

  const signOut = async () => {
    if (DEMO_MODE) {
      try { localStorage.removeItem('nextstone-demo-role'); } catch { /* storage unavailable */ }
      setUser(null);
      setProfile(null);
      return { error: null };
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    return { error };
  };

  const updatePassword = async (password: string) => {
    const { error } = await supabase.auth.updateUser({
      password: password
    });
    return { error };
  };

  const updateProfile = async (data: any) => {
    if (!user) return { error: new Error('No user logged in') };
    
    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', user.id);
    
    if (!error && profile) {
      setProfile({ ...profile, ...data });
    }
    
    return { error };
  };

  const getDashboardRoute = () => {
    if (!profile) return '/dashboard';
    
    switch (profile.user_type) {
      case 'developer':
        return '/dashboard';
      case 'fund':
        return '/investor';
      case 'originador':
        return '/originador';
      case 'admin':
        return '/admin';
      default:
        return '/dashboard';
    }
  };

  const value = {
    user,
    session,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    updateProfile,
    getDashboardRoute,
    demoLogin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};