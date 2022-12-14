import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-[url('https://trello.com/1/cards/620bf3f8bf76ff71199adc86/attachments/620bf3f9bf76ff71199ade5c/download/banner-image.png')] min-h-[190px] md:min-h-[350px] bg-cover bg-no-repeat bg-center p-4 md:p-8 lg:px-36 relative">
      <div className='absolute bottom-4 md:bottom-8'>
        <h1 className='text-white font-bold text-xl md:text-5xl mb-2'>
          Dezembro Promocional
        </h1>
        <div>
          <p className='font-semibold text-sm md:text-xl text-white mb-2 pr-2'>
            Produtos selecionados com 33% de desconto
          </p>
          <Link to='/description/8a2101yUOUoolRP031yj'>
            <Button variant='secondary'>Ver Consoles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
