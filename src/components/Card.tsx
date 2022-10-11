import React from 'react';
import { IData } from '../types/dataTypes';
import { Link } from 'react-router-dom';

export default function Card({ imagem, nome, preco, id }: IData) {
  return (
    <div className='flex flex-col gap-2 hover:bg-black/10 rounded-md p-1'>
      <img src={imagem} alt='' className='rounded-md w-full aspect-square' />
      <p className='text-gray font-medium text-sm'>{nome}</p>
      <p className='text-gray font-bold text-base'>{preco}</p>
      <Link to={`/description/${id}`}>
        <p className='text-blue font-bold text-sm'>Ver produto</p>
      </Link>
    </div>
  );
}
