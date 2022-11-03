import { X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { ICartCard, ISelectedItems } from '../types/dataTypes';

export function CheckoutCard({
  item,
  removeCartItems,
  setSelectedItems,
  selectedItems,
}: ICartCard) {
  const [quantity, setQuantity] = useState<number>(1);

  const storedCartItemsInfo = sessionStorage.getItem('cartItems');
  const storedCartItems =
    storedCartItemsInfo?.length! > 0 && JSON.parse(storedCartItemsInfo!);

  const updatedPrice = Number(item.preco) * quantity;

  useEffect(() => {
    function updateValue() {
      const newValue = selectedItems.map((obj) => {
        if (obj.id === item.id)
          return { id: obj.id!, nome: obj.nome, preco: String(updatedPrice) };
        return obj;
      });
      setSelectedItems(newValue);
    }
    updateValue();
  }, [quantity]);

  useEffect(() => {
    if (storedCartItems) setSelectedItems(storedCartItems as ISelectedItems[]);
  }, [storedCartItemsInfo]);

  return (
    <div className='relative flex gap-2 my-2 bg-black/10 p-1 rounded transition-all'>
      <img
        src={item.imagem}
        alt=''
        className='max-h-[120px] md:h-full rounded'
      />
      <div className='flex flex-col gap-1 justify-center'>
        <p className='text-gray'>{item.nome}</p>
        <div className='flex items-center gap-2'>
          <p className='text-gray'>Quantidade</p>
          <input
            type='number'
            className='max-w-[50px] rounded outline-none bg-black/10 p-2 text-center'
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <p className='text-gray'>
          Valor total: <span className='font-bold'>R$ {updatedPrice}</span>
        </p>
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
