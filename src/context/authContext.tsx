import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  UserInfo,
} from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../auth/firebaseAuth';
import { IAuthContext } from '../types/dataTypes';

const AuthContext = createContext<IAuthContext>({});

interface IProps {
  children: ReactNode;
}

export default function authContext({ children }: IProps) {
  const [user, setUser] = useState<UserInfo>();

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const authState = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(undefined);
      }
    });
    const unSubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);
    });
    return () => {
      authState();
      unSubscribe();
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
