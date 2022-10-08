import arrowBackBlue from "../assets/arrow_back_blue.svg";
import Card from "./Card";
import { useData } from "../context/dataContext";
import { IData, IDataContextType } from "../types/dataTypes";
import {
  consoleFilter,
  diversosFilter,
  starWarsFilter,
} from "../utils/homeFilters";

export default function Gallery() {
  const { data } = useData() as IDataContextType;
  const starwars = data?.filter(starWarsFilter);
  const consoles = data?.filter(consoleFilter);
  const diversos = data?.filter(diversosFilter);

  return (
    <main className="m-4 md:m-8 lg:mx-36">
      <div className="flex items-center justify-between">
        <h2 className="text-gray font-bold text-xl">Star Wars</h2>
        <p className="text-blue font-bold text-sm flex items-center">
          Ver tudo <img src={arrowBackBlue} alt="" className="h-4 w-4" />
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
        {starwars?.map((produto: IData) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </section>
      <div className="flex items-center justify-between mt-8">
        <h2 className="text-gray font-bold text-xl">Consoles</h2>
        <p className="text-blue font-bold text-sm flex items-center">
          Ver tudo <img src={arrowBackBlue} alt="" className="h-4 w-4" />
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
        {consoles?.map((produto: IData) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </section>
      <div className="flex items-center justify-between mt-8">
        <h2 className="text-gray font-bold text-xl">Diversos</h2>
        <p className="text-blue font-bold text-sm flex items-center">
          Ver tudo <img src={arrowBackBlue} alt="" className="h-4 w-4" />
        </p>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4">
        {diversos?.map((produto: IData) => (
          <Card
            key={produto.id}
            imagem={produto.imagem}
            nome={produto.nome}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </section>
    </main>
  );
}
