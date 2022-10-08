import React from "react";
import Logo from "../assets/Logo.svg";
import Form from "./Form";

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between lg:justify-around p-4 md:p-8 lg:px-36 bg-blue/10">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <img src={Logo} alt="" className="max-w-[170px] self-center lg:self-start lg:mr-12" />
        <ul className="text-center md:text-left my-4">
          <li className="text-gray font-medium mb-4">Quem somos nós</li>
          <li className="text-gray font-medium mb-4">Política de privacidade</li>
          <li className="text-gray font-medium mb-4">Programa fidelidade</li>
          <li className="text-gray font-medium mb-4">Nossas lojas</li>
          <li className="text-gray font-medium mb-4">Quero ser franqueado</li>
          <li className="text-gray font-medium">Anuncie aqui</li>
        </ul>
      </div>
      <Form />
    </div>
  );
}
