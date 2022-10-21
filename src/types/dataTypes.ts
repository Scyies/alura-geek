import { UserCredential } from 'firebase/auth';

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
}

export interface IAuthContext {
  user?: string;
  logIn?: (email: string, password: string) => Promise<UserCredential>;
  logOut?: () => Promise<void>;
}
