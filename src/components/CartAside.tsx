import classNames from 'classnames';
import { useData } from '../context/dataContext';
import { IData, IDataContextType } from '../types/dataTypes';
import { ChatTeardropText, X } from 'phosphor-react';
import Button from './Button';
import { useState } from 'react';
import { CartCard } from './CartCard';
import { Link } from 'react-router-dom';

interface IProps {
  cartState: boolean;
  inView: boolean;
}

export default function CartAside({ cartState, inView }: IProps) {
  const { cartItems, setCartItems } = useData() as IDataContextType;
  function removeCartItem(id: string) {
    setCartItems((prev) => prev.filter((obj) => obj.id !== id));
  }
  return (
    <aside
      id='scrollbar-hide'
      className={classNames(
        'fixed justify-between md:right-2 max-h-[50vh] min-h-[88px] p-4 flex flex-col bg-white rounded-lg  z-50 overflow-y-scroll transition-all overflow-x-hidden shadow-md',
        {
          'translate-x-[150%]': cartState === false,
          'translate-x-0': cartState === true,
          'bottom-20 md:right-3': inView === false,
        }
      )}
    >
      {cartItems.length > 0 ? (
        cartItems?.map((item: IData) => (
          <CartCard
            key={item.id}
            item={item}
            removeCartItems={removeCartItem}
          />
        ))
      ) : (
        <div className='flex flex-col items-center text-gray/60'>
          <ChatTeardropText size={32} />
          <p className='font-semibold'>Seu carrinho está vazio</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <Link to='/checkout' className='self-center'>
          <Button variant='secondary' type='button'>
            Continuar
          </Button>
        </Link>
      )}
    </aside>
  );
}
