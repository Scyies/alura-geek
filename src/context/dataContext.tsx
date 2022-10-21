import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
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

  const starWarsProducts = data?.filter((product) => product.row == 1);
  const consolesProducts = data?.filter((product) => product.row == 2);
  const diversosProducts = data?.filter((product) => product.row == 3);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        starWarsProducts,
        consolesProducts,
        diversosProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
