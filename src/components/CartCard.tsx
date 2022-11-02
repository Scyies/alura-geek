import { X } from 'phosphor-react';
import { IData } from '../types/dataTypes';

interface ICartCard {
  item: IData;
  removeCartItems: (id: string) => void;
}

export function CartCard({ item, removeCartItems }: ICartCard) {
  return (
    <div
      key={item.id}
      className='relative flex gap-2 my-2 bg-black/10 p-1 rounded transition-all'
    >
      <img src={item.imagem} alt='' className='max-h-20 rounded' />
      <div className='flex flex-col justify-center'>
        <p className='font-bold text-gray'>{item.nome}</p>
        <p className='text-gray font-bold'>R$ {item.preco}</p>
      </div>
      <div
        className='absolute bottom-2 right-2 text-red-500 cursor-pointer'
        onClick={() => removeCartItems(item.id!)}
      >
        <X size={16} weight='bold' />
      </div>
    </div>
  );
}
