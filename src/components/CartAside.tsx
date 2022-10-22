import classNames from 'classnames';
import { useData } from '../context/dataContext';
import { IData, IDataContextType } from '../types/dataTypes';
import { ChatTeardropText, X } from 'phosphor-react';
import Button from './Button';
import { useState } from 'react';

interface IProps {
  cartState: boolean;
}

export default function CartAside({ cartState }: IProps) {
  const { cartItems } = useData() as IDataContextType;
  const [delCartItem, setDelCartItem] = useState(false);
  function removeCartItems(id: string) {
    const index = cartItems.findIndex((item) => {
      return item.id === id;
    });
    cartItems.splice(index, 1);
    setDelCartItem(!delCartItem);
  }
  return (
    <aside
      className={classNames(
        'fixed justify-between md:right-2 max-h-[70vh] min-h-[88px] p-4 flex flex-col bg-white rounded-lg  z-50 overflow-y-scroll transition-all overflow-x-hidden',
        {
          'translate-x-[150%]': cartState === false,
          'translate-x-0': cartState === true,
        }
      )}
    >
      {cartItems.length > 0 ? (
        cartItems?.map((item: IData) => (
          <div
            key={item.id}
            className='relative flex gap-2 my-2 bg-black/10 p-1 rounded transition-all'
          >
            <img src={item.imagem} alt='' className='max-h-20 rounded' />
            <div className='flex flex-col justify-center'>
              <p className='font-bold text-gray'>{item.nome}</p>
              <p className='text-gray font-bold'>{item.preco}</p>
            </div>
            <div
              className='absolute bottom-2 right-2 text-red-500 cursor-pointer'
              onClick={() => removeCartItems(item.id!)}
            >
              <X size={16} weight='bold' />
            </div>
          </div>
        ))
      ) : (
        <div className='flex flex-col items-center text-gray/60'>
          <ChatTeardropText size={32} />
          <p className='font-semibold'>Seu carrinho está vazio</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <Button variant='secondary' type='button'>
          Continuar
        </Button>
      )}
    </aside>
  );
}
