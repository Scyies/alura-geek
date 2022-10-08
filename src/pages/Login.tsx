import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Input from '../components/Input'

export default function Login() {
  return (
    <>
    <main className='flex flex-col text-center min-h-[50vh] bg-black/10 p-4 py-16'>
      <h1 className="text-gray font-bold text-base lg:text-lg mb-4">Iniciar Sessão</h1>
      <form className='flex flex-col gap-4 mx-6 md:max-w-[275px] lg:max-w-[420px] md:w-full md:mx-auto'>
        <Input placeholder='Escreva seu email' />
        <Input placeholder='Escreva sua senha' />
        <div className='self-center'>
          <Button variant='secondary'>Entrar</Button>
        </div>
      </form>
    </main>
    <Info />
    <Footer />
    </>
  )
}
