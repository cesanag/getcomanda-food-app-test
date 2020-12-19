import AuthContext from "./context";
import useLogin from "./useLogin";
import { useContext, useEffect } from "react";

export default function AuthProvider({ children }) {
  const { isLogged, mutate, ...data } = useLogin();

  return (
    <AuthContext.Provider value={{ isLogged, mutate, data }}>
      {children}
    </AuthContext.Provider>
  );
}

function PrivateComponent({ children }) {
  const ctx = useContext(AuthContext);
  const { isLogged } = ctx;
  return isLogged ? children : <>/</>;
}

function RoleComponent({ children, role }) {
  const ctx = useContext(AuthContext);
  const { data } = ctx;
  const { role: dbRole } = data;
  const hasRole = role === dbRole;
  return hasRole ? children : <></>;
}

export function AdminComponent({ children }) {
  return <RoleComponent role="admin">{children}</RoleComponent>;
}

export function AgenziaComponent({ children }) {
  return <RoleComponent role="agenzia">{children}</RoleComponent>;
}

export function UtenteComponent({ children }) {
  return <RoleComponent role="utente_base">{children}</RoleComponent>;
}
