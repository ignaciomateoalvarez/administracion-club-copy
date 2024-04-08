import { auth } from "@services/Auth/Login/Login";
import { PropsWithChildren, createContext, useState } from "react";

interface AuthProps {
  login: (payload: AuthPayload) => Promise<void>;
  currentUser: User | null,
  logout: () => void;
}

interface AuthPayload {
  email: string;
  password: string;
}

interface User extends AuthPayload {}

const initialState: AuthProps = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_payload: AuthPayload) => {
    return Promise.resolve();
  },
  currentUser: null,
  logout: () => {}
};

const AuthContext = createContext<AuthProps>(initialState);

const AuthStateProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = async (payload: AuthPayload) => {
    const response = await auth.loginAdmin(payload);
    console.log(response)
    console.log(response.data)
      setCurrentUser(response.data);
    }

    const logout = () => {
      setCurrentUser(null);
    }

  return (
    <AuthContext.Provider
      value={{
        login,
        currentUser,
        logout,
      }}
      children={children}
    />
  );
};

export { AuthContext, AuthStateProvider };
