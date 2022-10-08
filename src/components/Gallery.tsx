import React from "react";
import arrowBackBlue from "../assets/arrow_back_blue.svg";
import Card from "./Card";

export default function Gallery() {
  return (
    <main className="m-4 md:m-8">
      <div className="flex items-center justify-between">
        <h2 className="text-gray font-bold text-xl">Star Wars</h2>
        <p className="text-blue font-bold text-sm flex items-center">
          Ver tudo <img src={arrowBackBlue} alt="" className="h-4 w-4" />
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <div className="flex items-center justify-between mt-8">
        <h2 className="text-gray font-bold text-xl">Consoles</h2>
        <p className="text-blue font-bold text-sm flex items-center">
          Ver tudo <img src={arrowBackBlue} alt="" className="h-4 w-4" />
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <div className="flex items-center justify-between mt-8">
        <h2 className="text-gray font-bold text-xl">Diversos</h2>
        <p className="text-blue font-bold text-sm flex items-center">
          Ver tudo <img src={arrowBackBlue} alt="" className="h-4 w-4" />
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
