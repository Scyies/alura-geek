import React, { ButtonHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: 'primary' | 'secondary';
}

export default function Button({ children, variant, ...rest }: Props) {
  return (
    <button
      className={classNames(
        'py-3 border-blue border-2 font-semibold rounded-md min-w-[130px] md:min-w-[160px] lg:min-w-[180px] text-sm md:text-base lg:text-lg transition-all',
        {
          'text-blue hover:bg-blue hover:text-white': variant === 'primary',
          'bg-blue text-white hover:bg-cyan hover:border-cyan':
            variant === 'secondary',
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
