import { useContext } from "react";
import { UserContext } from "../../Contexts/User/UserContext";
import { ProtectedTypes } from "./Protected.types";
import { Navigate } from "react-router-dom";

const Protected = ({ children }: ProtectedTypes) => {
  const { user } = useContext(UserContext);
  return <>{user ? { children } : <Navigate to="/login" />}</>  ;
};

export default Protected;
