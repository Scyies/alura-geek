import deleteIcon from '../assets/delete_white.svg';
import editIcon from '../assets/edit_white.svg';
import { IData } from '../types/dataTypes';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../auth/firebaseAuth';

export default function AdminCard({ imagem, nome, preco, id }: IData) {
  const navigate = useNavigate();

  async function deleteProduct(id: string) {
    try {
      await deleteDoc(doc(db, 'produtos', id));
      toast.success('Produto excluído com sucesso!');
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className='relative flex flex-col gap-2 overflow-hidden'>
      <img src={imagem} alt='' className='rounded-md aspect-square' />
      <p className='text-gray font-medium text-sm'>{nome}</p>
      <p className='text-gray font-bold text-base'>{preco}</p>
      <p className='text-sm text-gray'>{id}</p>
      <span
        className='absolute top-1 right-10 cursor-pointer rounded-full p-1 hover:bg-blue transition-all'
        onClick={() => deleteProduct(id!)}
      >
        <img src={deleteIcon} alt='' className='h-6 w-6' />
      </span>
      <span
        className='absolute top-1 right-1 cursor-pointer rounded-full p-1 hover:bg-blue transition-all'
        onClick={() => navigate(`/admin/edit-product/${id}`)}
      >
        <img src={editIcon} alt='' className='h-6 w-6' />
      </span>
    </div>
  );
}
