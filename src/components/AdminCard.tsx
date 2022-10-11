import React from 'react';
import defaultImg from '../assets/produtos R1/produto1r1.jpg';
import deleteIcon from '../assets/delete_white.svg';
import editIcon from '../assets/edit_white.svg';
import { IData } from '../types/dataTypes';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AdminCard({ imagem, nome, preco, id }: IData) {
  const navigate = useNavigate();

  async function deleteProduct(id: number) {
    try {
      await axios
        .delete(`http://localhost:5555/produtos/delete/${id}`)
        .then(() => {
          toast.success('Produto excluído com sucesso!');
        });
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <div className='relative flex flex-col gap-2'>
      <img src={imagem} alt='' className='rounded-md aspect-square' />
      <p className='text-gray font-medium text-sm'>{nome}</p>
      <p className='text-gray font-bold text-base'>{preco}</p>
      <p className='text-sm text-gray'>{id}</p>
      <span
        className='absolute top-1 right-10'
        onClick={() => deleteProduct(id!)}
      >
        <img src={deleteIcon} alt='' className='h-6 w-6' />
      </span>
      <span
        className='absolute top-1 right-1'
        onClick={() => navigate(`/admin/edit-product/${id}`)}
      >
        <img src={editIcon} alt='' className='h-6 w-6' />
      </span>
    </div>
  );
}
