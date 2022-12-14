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
  const [cartItems, setCartItems] = useState<IData[]>([]);

  const storedCartItemsInfo = sessionStorage.getItem('cartItems');
  const storedCartItems =
    storedCartItemsInfo?.length! > 0 && JSON.parse(storedCartItemsInfo!);

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
    if (storedCartItems) setCartItems(storedCartItems);
  }, []);
  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems.length]);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        starWarsProducts,
        consolesProducts,
        diversosProducts,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
