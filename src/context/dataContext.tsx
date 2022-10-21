import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import { IData, IDataContextType } from '../types/dataTypes';
import { db } from '../auth/firebaseAuth';
import { collection, onSnapshot, query } from 'firebase/firestore';

const DataContext = createContext<IDataContextType | null>(null);

interface IProps {
  children: ReactNode;
}

export default function dataContext({ children }: IProps) {
  const [data, setData] = useState<IData[]>();

  async function getProducts() {
    const collectionRef = collection(db, 'produtos');
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as IData))
      );
    });
    return unsubscribe;
  }

  console.log(data);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
