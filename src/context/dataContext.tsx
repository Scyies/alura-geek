import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { IData, IDataContextType } from "../types/dataTypes";

const DataContext = createContext<IDataContextType | null>(null);

export default function dataContext({ children }: any) {
  const [data, setData] = useState<IData[] | undefined>();

  async function getData() {
    const response = await axios.get("http://localhost:5555/produtos");
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}