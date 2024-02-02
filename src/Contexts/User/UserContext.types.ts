import { Dispatch, SetStateAction } from "react";

export type UserType = {
  _id: string;
  name: string;
  email: string;
};
export interface UserContextInterface {
  user?: UserType | null;
  setUser?: Dispatch<SetStateAction<UserType | null>>;
  isAuthenticated: boolean;
  setIsAuthenticated?: Dispatch<SetStateAction<boolean>>;
}
export type UserContextProviderTypes = {
  children: React.ReactNode;
};
