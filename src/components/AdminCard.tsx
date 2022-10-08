import React from "react";
import defaultImg from "../assets/produtos R1/produto1r1.jpg";
import deleteIcon from "../assets/delete_white.svg";
import editIcon from "../assets/edit_white.svg";
import { IData } from "../types/dataTypes";

export default function AdminCard({imagem, nome, preco, id}: IData) {
  return (
    <div className="relative flex flex-col">
      <img src={imagem} alt="" className="rounded-md" />
      <p className="text-gray font-medium text-sm">{nome}</p>
      <p className="text-gray font-bold text-base">{preco}</p>
      <p className="text-sm text-gray">{id}</p>
      <span className="absolute top-1 right-10" 
        onClick={() => console.log(id)}
      >
        <img src={deleteIcon} alt="" className="h-6 w-6" />
      </span>
      <span className="absolute top-1 right-1"
        onClick={() => console.log(id)}
      >
        <img src={editIcon} alt="" className="h-6 w-6" />
      </span>
    </div>
  );
}
