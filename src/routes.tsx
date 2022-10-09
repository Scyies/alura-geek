import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import Header from "./components/Header";
import AdicionarNovoProduto from "./pages/AdicionarNovoProduto";
import AdminProductList from "./pages/AdminProductList";
import DescricaoProduto from "./pages/DescricaoProduto";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/product-list" element={<ProtectedRoute><AdminProductList /></ProtectedRoute>} />
          <Route path="/admin/add-new-product" element={<ProtectedRoute><AdicionarNovoProduto /></ProtectedRoute>} />
          <Route path="/description/:id" element={<DescricaoProduto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
