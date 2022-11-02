import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './auth/ProtectedRoute';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Search from './components/Search';
import AdicionarNovoProduto from './pages/AdicionarNovoProduto';
import AdminProductList from './pages/AdminProductList';
import { Checkout } from './pages/Checkout';
import DescricaoProduto from './pages/DescricaoProduto';
import Home from './pages/Home';
import Login from './pages/Login';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/admin/product-list'
              element={
                <ProtectedRoute>
                  <AdminProductList />
                </ProtectedRoute>
              }
            />
            <Route
              path='/admin/new-product'
              element={
                <ProtectedRoute>
                  <AdicionarNovoProduto />
                </ProtectedRoute>
              }
            />
            <Route
              path='/admin/edit-product/:id'
              element={
                <ProtectedRoute>
                  <AdicionarNovoProduto />
                </ProtectedRoute>
              }
            />
            <Route path='/description/:id' element={<DescricaoProduto />} />
            <Route path='/search' element={<Search />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
