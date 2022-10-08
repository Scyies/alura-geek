import React from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Info from "../components/Info";
import InputWLabel from "../components/InputWLabel";

export default function AdicionarNovoProduto() {
  return (
    <>
      <main className="bg-black/10 p-4 md:p-8">
        <form action="" className="flex flex-col gap-4 ">
          <h1 className="text-gray font-bold text-xl">Adicionar novo produto</h1>
          <InputWLabel label="URL da imagem" />
          <InputWLabel label="Nome do produto" />
          <InputWLabel label="Preço do produto" />
          <textarea
            name=""
            id=""
            cols={40}
            rows={3}
            placeholder="Descrição do produto"
            className="bg-white rounded-md shadow-md px-3 py-2 w-full outline-none"
          ></textarea>
          <Button variant="secondary">Adicionar produto</Button>
        </form>
      </main>
      <Info />
      <Footer />
    </>
  );
}
