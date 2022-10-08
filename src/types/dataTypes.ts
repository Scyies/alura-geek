export interface IData {
  descricao?: string
  id?: number
  imagem: string
  nome: string
  preco: string
  row?: number
}

export interface IDataContextType {
  data: IData[] | undefined
  setData: React.Dispatch<React.SetStateAction<IData[] | undefined>>
}