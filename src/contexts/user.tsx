import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types/user-type";

interface UserContextType {
  loginUser: (user: User) => void;
  logoutUser: () => void;
  isAuthenticated: boolean;
  currentUser: User | null;
}

const UserContext = createContext<UserContextType>({
  loginUser: () => {},
  logoutUser: () => {},
  isAuthenticated: false,
  currentUser: null,
});

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const logoutUser = () => {
    setCurrentUser(null);
  };

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  const isAuthenticated = currentUser !== null;

  return (
    <UserContext.Provider
      value={{ loginUser, logoutUser, isAuthenticated, currentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
