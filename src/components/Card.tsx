import React from 'react'
import defaultImg  from '../assets/produtos R1/produto1r1.jpg'

export default function Card() {
  return (
    <div>
      <img src={defaultImg} alt="" className="rounded-md" />
      <p className='text-gray font-medium text-sm'>Nome produto</p>
      <p className="text-gray font-bold text-base">R$ preço</p>
      <p className="text-blue font-bold text-sm">Ver produto</p>
    </div>
  )
}
