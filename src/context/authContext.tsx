import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebaseAuth";
import { IAuthContext } from "../types/dataTypes";

const AuthContext = createContext<IAuthContext>({});

export default function authContext({ children }: any) {
  const [user, setUser] = useState("");

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const authState = onAuthStateChanged(auth, (currentUser: any) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser("");
      }
    });
    // const unSubscribe = onAuthStateChanged(auth, (currentUser: any) => {
    //   setUser(currentUser);
    // });
    return () => {
      authState()
      // unSubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(AuthContext);
}
