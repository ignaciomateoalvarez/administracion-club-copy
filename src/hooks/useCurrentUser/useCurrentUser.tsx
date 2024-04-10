import { useContext } from "react";
import { AuthContext } from "@hooks/useAuth/provider";

const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);

  return {
    currentUser
  };
};

export default useCurrentUser;