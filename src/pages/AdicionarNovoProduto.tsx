import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../auth/firebaseAuth';
import Button from '../components/Button';
import InputWLabel from '../components/InputWLabel';
import { IData } from '../types/dataTypes';
import { v4 } from 'uuid';

export default function AdicionarNovoProduto() {
  const productId = useParams();
  const [data, setData] = useState<IData>();
  const [selector, setSelector] = useState('');
  const navigate = useNavigate();
  const categoria = String(data?.row);

  async function getData(productId: string) {
    const docRef = doc(db, 'produtos', productId);
    const unsubscribe = onSnapshot(docRef, (snapshot) =>
      setData(snapshot.data() as IData)
    );
    return unsubscribe;
  }

  async function handleNewProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const input = Object.fromEntries(formData);

    if (!input) return;

    const collectionRef = collection(db, 'produtos');

    try {
      await addDoc(collectionRef, {
        nome: String(input.nome),
        descricao: String(input.descricao),
        imagem: String(input.imagem),
        preco: String(input.preco),
        row: Number(selector),
        id: v4(),
      });
      toast.success('Produto editado com sucesso!');
      navigate('/admin/product-list');
    } catch (error: any) {
      toast.error(error.message);
      console.error(error);
    }
  }

  async function handleEditProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const input = Object.fromEntries(formData);

    if (!input) return;

    const docRef = doc(db, 'produtos', productId.id!);
    try {
      const updatedPost = {
        nome: String(input.nome),
        descricao: String(input.descricao),
        imagem: String(input.imagem),
        preco: String(input.preco),
        row: Number(selector),
      };
      await updateDoc(docRef, updatedPost);
      toast.success('Produto editado com sucesso!');
      navigate('/admin/product-list');
    } catch (error: any) {
      toast.error(error.message);
      console.error(error);
    }
  }

  useEffect(() => {
    if (productId.id) {
      getData(productId.id);
      setSelector(categoria);
    }
  }, [productId, categoria]);
  return (
    <>
      <main className='bg-black/10 p-4 md:p-8 lg:py-12'>
        <form
          onSubmit={!productId.id ? handleNewProduct : handleEditProduct}
          className='flex flex-col gap-4 lg:max-w-xl lg:mx-auto'
        >
          <h1 className='text-gray font-bold text-xl lg:text-3xl'>
            Adicionar novo produto
          </h1>
          <InputWLabel
            label='URL da imagem'
            defaultValue={data && data?.imagem}
            name='imagem'
          />
          <div className='flex flex-col bg-white rounded-md shadow-md'>
            <label htmlFor='' className='text-sm text-gray/50 px-3 pt-2'>
              Categoria
            </label>
            <select
              name='row'
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
              id=''
              className='py-1 px-2 rounded-md bg-white outline-none'
            >
              <option value='0'></option>
              <option value='1'>StarWars</option>
              <option value='2'>Consoles</option>
              <option value='3'>Diversos</option>
            </select>
          </div>
          <InputWLabel
            label='Nome do produto'
            defaultValue={data && data?.nome}
            name='nome'
          />
          <InputWLabel
            label='Preço do produto'
            defaultValue={data && data?.preco}
            name='preco'
          />
          <textarea
            name='descricao'
            id=''
            cols={40}
            rows={3}
            placeholder='Descrição do produto'
            className='bg-white rounded-md shadow-md px-3 py-2 w-full outline-none'
            defaultValue={data && data.descricao}
          ></textarea>
          <Button variant='secondary' type='submit'>
            {productId.id ? 'Atualizar produto' : 'Adicionar produto'}
          </Button>
        </form>
      </main>
    </>
  );
}
