import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedUserTypes?: ('developer' | 'fund' | 'originador' | 'admin')[];
}

export const ProtectedRoute = ({ children, allowedUserTypes }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login');
        return;
      }

      if (allowedUserTypes && profile && !allowedUserTypes.includes(profile.user_type)) {
        // Redirect to appropriate dashboard based on user type
        switch (profile.user_type) {
          case 'developer':
            navigate('/dashboard');
            break;
          case 'fund':
            navigate('/investor');
            break;
          case 'originador':
            navigate('/originador');
            break;
          case 'admin':
            navigate('/admin');
            break;
          default:
            navigate('/dashboard');
        }
        return;
      }
    }
  }, [user, profile, loading, navigate, allowedUserTypes]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};