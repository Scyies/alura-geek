import React from "react";
import defaultImg from "../assets/produtos R1/produto1r1.jpg";
import { IData } from "../types/dataTypes";
import { Link } from "react-router-dom";

export default function Card({ imagem, nome, preco, id }: IData) {
  return (
    <div>
      <img src={imagem} alt="" className="rounded-md w-full" />
      <p className="text-gray font-medium text-sm">{nome}</p>
      <p className="text-gray font-bold text-base">{preco}</p>
      <Link to={`/description/${id}`}>
        <p className="text-blue font-bold text-sm">Ver produto</p>
      </Link>
    </div>
  );
}
