import { useData } from '../context/dataContext';
import { IData, IDataContextType } from '../types/dataTypes';
import Card from './Card';

interface ISearch {
  filter?: string;
}

export default function Search({ filter }: ISearch) {
  const { data } = useData() as IDataContextType;

  const searchData = data?.filter((produto) =>
    produto.nome.toLowerCase().includes(filter!.toLowerCase())
  );

  return (
    <main className='p-4 md:p-8 lg:px-36 bg-black/10 min-h-screen'>
      <div className='flex items-center justify-between'>
        <h2 className='text-gray font-bold text-xl'>
          Resultado da pesquisa sobre "{filter}"
        </h2>
      </div>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4'>
        {data &&
          searchData?.map((produto: IData) => (
            <Card
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              preco={produto.preco}
              id={produto.id}
            />
          ))}
      </section>
    </main>
  );
}
