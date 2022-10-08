import { IData } from "../types/dataTypes";

export function starWarsFilter(produto: IData) {
  return produto.row == 1;
}

export function consoleFilter(produto: IData) {
  return produto.row == 2;
}

export function diversosFilter(produto: IData) {
  return produto.row == 3;
}
