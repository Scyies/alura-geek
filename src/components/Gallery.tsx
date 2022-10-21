import arrowBackBlue from '../assets/arrow_back_blue.svg';
import Card from './Card';
import { useData } from '../context/dataContext';
import { IData, IDataContextType } from '../types/dataTypes';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const { starWarsProducts, consolesProducts, diversosProducts } =
    useData() as IDataContextType;

  return (
    <main className='m-4 md:m-8 lg:mx-36'>
      <div className='flex items-center justify-between'>
        <h2 className='text-gray font-bold text-xl'>Star Wars</h2>
        <Link to={'/description/Kag5V682gSTlXB76RMSA'}>
          <p className='text-blue font-bold text-sm flex items-center'>
            Ver tudo <img src={arrowBackBlue} alt='' className='h-4 w-4' />
          </p>
        </Link>
      </div>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4'>
        {starWarsProducts?.map((produto: IData) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </section>
      <div className='flex items-center justify-between mt-8'>
        <h2 className='text-gray font-bold text-xl'>Consoles</h2>
        <Link to={'/description/8a2101yUOUoolRP031yj'}>
          <p className='text-blue font-bold text-sm flex items-center'>
            Ver tudo <img src={arrowBackBlue} alt='' className='h-4 w-4' />
          </p>
        </Link>
      </div>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4'>
        {consolesProducts?.map((produto: IData) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </section>
      <div className='flex items-center justify-between mt-8'>
        <h2 className='text-gray font-bold text-xl'>Diversos</h2>
        <Link to={'/description/HUHw0WorOXp2IEbzk3Mt'}>
          <p className='text-blue font-bold text-sm flex items-center'>
            Ver tudo <img src={arrowBackBlue} alt='' className='h-4 w-4' />
          </p>
        </Link>
      </div>
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4'>
        {diversosProducts?.map((produto: IData) => (
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
