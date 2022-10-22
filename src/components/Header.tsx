import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import Lupa from '../assets/Lupa.svg';
import Button from './Button';
import Input from './Input';
import classNames from 'classnames';
import cLogo from '../assets/control_logo.svg';
import { Link, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/authContext';
import { ShoppingCartSimple, SignOut, User } from 'phosphor-react';
import Search from './Search';
import Footer from './Footer';
import Info from './Info';
import CartAside from './CartAside';
import { useData } from '../context/dataContext';
import { IDataContextType } from '../types/dataTypes';

export default function Header() {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const { user, logOut } = useUserAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useData() as IDataContextType;

  return (
    <>
      <header className='m-4 md:mx-8 lg:mx-36 flex items-center justify-between'>
        <Link to={'/'}>
          <img
            src={openSearch ? cLogo : Logo}
            alt=''
            className={classNames(
              'order-1 max-h-[30px] md:max-h-[40px] lg:max-h-[60px]',
              {
                'max-w-[30px]': openSearch === true,
              }
            )}
          />
        </Link>
        <div
          className={classNames('flex gap-4 items-center order-2 md:order-3', {
            'hidden md:flex': openSearch === true,
          })}
        >
          <div
            className='relative cursor-pointer'
            onClick={() => setCartOpen(!cartOpen)}
          >
            <span className='text-blue'>
              <ShoppingCartSimple size={24} weight='bold' />
            </span>
            <span className='absolute -bottom-3 -right-1 flex items-center px-1 aspect-square bg-blue rounded-full text-white text-xs'>
              {cartItems.length}
            </span>
          </div>
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
              'rounded-full bg-black/10 self-end': openSearch === true,
            }
          )}
        >
          <Input
            className={classNames(
              'bg-transparent outline-none self-center rounded-full py-2 px-3',
              {
                'w-0 md:w-full ': openSearch === false,
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
      <CartAside cartState={cartOpen} />
      {search.length > 0 ? <Search filter={search} /> : <Outlet />}
      <Info />
      <Footer />
    </>
  );
}
