import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Info from '../components/Info';
import InputWLabel from '../components/InputWLabel';
import { useData } from '../context/dataContext';
import { IData } from '../types/dataTypes';

export default function AdicionarNovoProduto() {
  const productId = useParams();
  const [data, setData] = useState<IData | undefined>();
  const [selector, setSelector] = useState('');
  const navigate = useNavigate();
  const categoria = String(data?.row);

  async function getData() {
    const response = await axios.get(
      `https://alura-geek-server.vercel.app/produtos/${productId.id}`
    );
    setData(response.data);
  }

  async function handleNewProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const input = Object.fromEntries(formData);

    if (!input) return;

    console.log(input);

    try {
      axios
        .post(`https://alura-geek-server.vercel.app/produtos/novo-produto`, {
          nome: String(input.nome),
          descricao: String(input.descricao),
          imagem: String(input.imagem),
          preco: String(input.preco),
          row: Number(input.row),
        })
        .then(() => {
          toast.success('Produto adicionado com sucesso!');
          navigate('/admin/product-list');
        });
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

    try {
      console.log(input);

      axios
        .put(
          `https://alura-geek-server.vercel.app/produtos/edit/${productId.id}`,
          {
            nome: String(input.nome),
            descricao: String(input.descricao),
            imagem: String(input.imagem),
            preco: String(input.preco),
            row: Number(input.row),
          }
        )
        .then(() => {
          toast.success('Produto editado com sucesso!');
          navigate('/admin/product-list');
        });
    } catch (error: any) {
      toast.error(error.message);
      console.error(error);
    }
  }

  useEffect(() => {
    if (productId.id) {
      getData();
      setSelector(categoria);
    }
  }, [productId, categoria]);
  return (
    <>
      <main className='bg-black/10 p-4 md:p-8 lg:py-12'>
        <form
          onSubmit={!productId ? handleNewProduct : handleEditProduct}
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
            Adicionar produto
          </Button>
        </form>
      </main>
      <Info />
      <Footer />
    </>
  );
}
