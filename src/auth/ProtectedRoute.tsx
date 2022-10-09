import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/authContext";

export function ProtectedRoute({children}: any) {
  const { user } = useUserAuth()
  if(!user) return <Navigate to="/" />

  return children
}