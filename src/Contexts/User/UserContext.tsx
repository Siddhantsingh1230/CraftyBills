import { createContext, useState } from "react";
import {
  UserContextProviderTypes,
  UserContextInterface,
  UserType,
} from "./UserContext.types";

export const UserContext = createContext<UserContextInterface>({
  // byDefault the App is not loggedin
  isAuthenticated: false,
});

export const UserContextProvider = ({ children }: UserContextProviderTypes) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
