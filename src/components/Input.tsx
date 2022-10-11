import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: Props) {
  return (
    <input
      className='bg-white rounded-md shadow-md px-3 py-2 outline-none'
      {...rest}
    />
  );
}
