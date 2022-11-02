import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { CheckoutCard } from '../components/CheckoutCard';
import { useData } from '../context/dataContext';
import { IDataContextType, ISelectedItems } from '../types/dataTypes';

export function Checkout() {
  const { cartItems, setCartItems } = useData() as IDataContextType;
  const [selectedItems, setSelectedItems] = useState<ISelectedItems[]>([]);

  const navigate = useNavigate();

  const totalSum =
    selectedItems.length > 0
      ? selectedItems.reduce((accumulator, object) => {
          return accumulator + Number(object.preco);
        }, 0)
      : null;

  function removeCartItem(id: string) {
    setCartItems((prev) => prev.filter((obj) => obj.id !== id));
  }

  function clearCart() {
    setCartItems([]);
    navigate('/');
  }

  return (
    <main className='min-h-[calc(100vh-480px)] flex flex-col gap-4 p-4 md:p-6'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-2 lg:grid-cols-3'>
        {cartItems.map((item) => (
          <CheckoutCard
            key={item.id}
            item={item}
            removeCartItems={removeCartItem}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        ))}
      </div>
      <div className='flex flex-col justify-center items-center gap-10 p-6 rounded text-gray'>
        <p>
          O valor total da sua compra é de:{' '}
          <span className='font-bold'> R$: {String(totalSum)}</span>
        </p>
        <Button variant='secondary' onClick={clearCart}>
          Finalizar pedido
        </Button>
      </div>
    </main>
  );
}
