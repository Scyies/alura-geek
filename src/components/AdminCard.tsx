import React from "react";
import defaultImg from "../assets/produtos R1/produto1r1.jpg";
import deleteIcon from "../assets/delete_white.svg";
import editIcon from "../assets/edit_white.svg";

export default function AdminCard() {
  return (
    <div className="relative flex flex-col">
      <img src={defaultImg} alt="" className="rounded-md" />
      <p className="text-gray font-medium text-sm">Nome produto</p>
      <p className="text-gray font-bold text-base">R$ preço</p>
      <p className="text-sm text-gray">id produto</p>
      <span className="absolute top-1 right-10">
        <img src={deleteIcon} alt="" className="h-6 w-6" />
      </span>
      <span className="absolute top-1 right-1">
        <img src={editIcon} alt="" className="h-6 w-6" />
      </span>
    </div>
  );
}
