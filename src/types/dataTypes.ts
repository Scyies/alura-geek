import { UserCredential, UserInfo } from 'firebase/auth';

export interface IData {
  descricao?: string;
  id?: string;
  imagem: string;
  nome: string;
  preco: string;
  row?: number;
}

export interface IDataContextType {
  data: IData[] | undefined;
  setData: React.Dispatch<React.SetStateAction<IData[] | undefined>>;
  diversosProducts: IData[] | undefined;
  starWarsProducts: IData[] | undefined;
  consolesProducts: IData[] | undefined;
  cartItems: IData[];
  setCartItems: React.Dispatch<React.SetStateAction<IData[]>>;
}

export interface IAuthContext {
  user?: UserInfo;
  logIn?: (email: string, password: string) => Promise<UserCredential>;
  logOut?: () => Promise<void>;
}
