import React from "react";
import { Link } from "react-router-dom";
import AdminCard from "../components/AdminCard";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Info from "../components/Info";
import { useData } from "../context/dataContext";
import { IDataContextType } from "../types/dataTypes";

export default function AdminProductList() {
  const { data } = useData() as IDataContextType;
  return (
    <>
      <main className="bg-black/10 p-8 lg:px-36">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <h1 className="text-gray font-bold text-xl">Todos os produtos</h1>
          <Link to={"/admin/new-product"}>
            <Button variant="secondary">Adicionar produto</Button>
          </Link>
        </div>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
          {data?.map((produto) => (
            <AdminCard key={produto.id} nome={produto.nome} imagem={produto.imagem} id={produto.id} preco={produto.preco} />
          ))}
        </section>
      </main>
      <Info />
      <Footer />
    </>
  );
}
