import React from 'react'
import AdminCard from '../components/AdminCard'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Info from '../components/Info'

export default function AdminProductList() {
  return (
    <>
      <main className='bg-black/10 p-8'>
        <div className='flex flex-col md:flex-row md: justify-between gap-4'>
          <h1 className='text-gray font-bold text-xl'>Todos os produtos</h1>
          <div>
            <Button variant='secondary'>Adicionar produto</Button>
          </div>
        </div>
        <section className='grid grid-cols-2 md:grid-cols-4 gap-4 my-4'>
          <AdminCard />
          <AdminCard />
          <AdminCard />
          <AdminCard />
        </section>
      </main>
      <Info />
      <Footer />
    </>
  )
}
