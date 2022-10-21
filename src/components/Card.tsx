import React from 'react';
import { IData, IDataContextType } from '../types/dataTypes';
import { Link } from 'react-router-dom';
import { ShoppingCartSimple } from 'phosphor-react';
import { useData } from '../context/dataContext';

export default function Card({ imagem, nome, preco, id }: IData) {
  const { setCartItems } = useData() as IDataContextType;

  function addItemToCart() {
    setCartItems((prev) => [...prev, { nome, imagem, preco, id }]);
  }
  return (
    <div className='flex flex-col gap-2 hover:bg-black/10 rounded-md p-1'>
      <img src={imagem} alt='' className='rounded-md w-full aspect-square' />
      <p className='text-gray font-medium text-sm'>{nome}</p>
      <p className='text-gray font-bold text-base'>{preco}</p>
      <div className='flex justify-between items-center'>
        <Link to={`/description/${id}`}>
          <p className='text-blue font-bold text-sm'>Ver produto</p>
        </Link>
        <span className='cursor-pointer text-blue' onClick={addItemToCart}>
          <ShoppingCartSimple size={24} weight='bold' />
        </span>
      </div>
    </div>
  );
}
