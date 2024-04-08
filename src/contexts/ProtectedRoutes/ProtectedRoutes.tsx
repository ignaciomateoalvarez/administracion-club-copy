import { useNavigate } from 'react-router-dom'
import useAuth from '@hooks/useAuth'
import { useEffect } from 'react';

const ProtectedRoutes = ({children} : {children: React.ReactNode}) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth/login");
    }
  }, [currentUser]);

    return(<>{children}</>)
}

export default ProtectedRoutes