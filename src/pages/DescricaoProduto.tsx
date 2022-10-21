import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Info from '../components/Info';
import { useParams } from 'react-router-dom';
import { IData } from '../types/dataTypes';
import Card from '../components/Card';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../auth/firebaseAuth';

export default function DescricaoProduto() {
  const [descriptionProduct, setDescriptionProduct] = useState<IData>();
  const [similarProducts, setSimilarProducts] = useState<IData[]>();
  const productId = useParams();
  const similarCategory = descriptionProduct?.row;

  async function getMainProduct(productId: string) {
    const docRef = doc(db, 'produtos', productId);
    const unsubscribe = onSnapshot(docRef, (snapshot) =>
      setDescriptionProduct(snapshot.data() as IData)
    );
    return unsubscribe;
  }
  async function getSimilarProdutcs(row: number) {
    const q = query(collection(db, 'produtos'), where('row', '==', row));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setSimilarProducts(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as IData))
      );
    });
    return unsubscribe;
  }

  useEffect(() => {
    if (productId.id) {
      getMainProduct(productId.id);
    }
    if (similarCategory) {
      getSimilarProdutcs(similarCategory);
    }
  }, [productId.id, similarCategory]);
  return (
    <>
      <section className='bg-black/10 flex flex-col lg:py-16'>
        <div className='grid grid-cols-3 md:flex-row md:m-8 lg:mx-36 items-center'>
          <img
            src={descriptionProduct?.imagem}
            alt=''
            className='max-h-[190px] md:max-h-[250px] w-full lg:max-w-2xl object-cover rounded'
          />
          <div className='m-4 text-gray flex flex-col gap-2 lg:justify-center col-span-2'>
            <h2 className='font-medium text-xl lg:text-5xl'>
              {descriptionProduct?.nome}
            </h2>
            <p className='font-bold text-base'>{descriptionProduct?.preco}</p>
            <p className='text-sm lg:text-base'>
              {descriptionProduct?.descricao}
            </p>
          </div>
        </div>
        <div className='m-4 md:m-8 lg:mx-36'>
          <h3 className='font-bold text-xl lg:text-3xl text-gray'>
            Produtos similares
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4 md:my-8'>
            {similarProducts?.map((produto) => (
              <Card
                key={produto.id}
                imagem={produto.imagem}
                nome={produto.nome}
                preco={produto.preco}
                id={produto.id}
              />
            ))}
          </div>
        </div>
      </section>
      <Info />
      <Footer />
    </>
  );
}
