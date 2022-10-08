import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
  return (
    <form className="flex flex-col gap-4">
      <h3 className="text-gray font-bold text-base">Fale conosco</h3>
      <div className="flex flex-col bg-white rounded-md shadow-md px-3 py-2">
        <label htmlFor="" className="text-gray/50 text-xs">
          Nome
        </label>
        <input className="outline-none bg-white" />
      </div>
      <textarea
        name=""
        id=""
        cols={37}
        rows={3}
        placeholder="Escreva sua mensage"
        className="px-3 py-2 rounded-md shadow-md bg-white outline-none"
      ></textarea>
      <div>
        <Button variant="secondary">Enviar mensagem</Button>
      </div>
    </form>
  );
}
