import React from "react";
import defaultImg from "../assets/produto-descricao.jpg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Info from "../components/Info";

export default function DescricaoProduto() {
  return (
    <>
      <section className="bg-black/10 flex flex-col">
        <div className="flex flex-col md:flex-row md:m-8">
          <img src={defaultImg} alt="" className="md:max-w-xs" />
          <div className="m-4 text-gray flex flex-col gap-2">
            <h2 className="font-medium text-xl">Nome produto</h2>
            <p className="font-bold text-base">R$ preço</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut fugiat illo quas nemo molestias animi rerum? Ex accusamus saepe repudiandae amet voluptas! Exercitationem dignissimos distinctio a qui recusandae repellat?</p>
          </div>
        </div>
        <div className="m-4 md:m-8">
          <h3 className="font-bold text-xl">Produtos similares</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 md:my-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
      <Info />
      <Footer />
    </>
  );
}
