import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Lupa from '../assets/Lupa.svg';
import Button from './Button';
import Input from './Input';
import classNames from 'classnames';
import cLogo from '../assets/control_logo.svg';
import { Link, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/authContext';
import { SignOut, User } from 'phosphor-react';
import Search from './Search';

export default function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const { user, logOut } = useUserAuth();

  return (
    <>
      <header className='m-4 md:mx-8 lg:mx-36 flex items-center justify-between'>
        <Link to={'/'}>
          <img
            src={openSearch ? cLogo : Logo}
            alt=''
            className={classNames(
              'max-w-[100px] order-1 md:max-w-[130px] lg:max-w-[170px]',
              {
                'max-w-[40px]': openSearch === true,
              }
            )}
          />
        </Link>
        <div
          className={classNames('order-2 md:order-3', {
            'hidden md:flex': openSearch === true,
          })}
        >
          {!user ? (
            <Link to={'/login'}>
              <Button variant='primary'>Login</Button>
            </Link>
          ) : (
            <div className='flex gap-2'>
              <Link to={'/admin/product-list'}>
                <span className='text-blue'>
                  <User size={24} weight='bold' />
                </span>
              </Link>
              <Link to={'/'}>
                <button
                  className='text-blue flex items-center'
                  onClick={logOut}
                >
                  <SignOut size={24} weight='bold' />
                </button>
              </Link>
            </div>
          )}
        </div>
        <div
          className={classNames(
            'flex order-3 md:order-2 items-center md:min-w-[270px] lg:min-w-[400px]',
            {
              'md:rounded-full md:bg-black/10': openSearch === false,
              'rounded-full bg-black/10 my-1 self-end': openSearch === true,
            }
          )}
        >
          <Input
            className={classNames(
              'bg-black/0 outline-none self-center rounded-full py-2 px-3',
              {
                'w-0 md:w-full': openSearch === false,
              }
            )}
            placeholder='O que deseja encontrar?'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src={Lupa}
            alt=''
            className='h-6 w-6 md:pointer-events-none mr-2'
            onClick={() => setOpenSearch(!openSearch)}
          />
        </div>
      </header>
      {search.length > 0 ? <Search filter={search} /> : <Outlet />}
    </>
  );
}
