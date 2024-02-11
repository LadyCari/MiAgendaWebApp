import { IConstantesPalia, IItemPalia } from "./model-implements";

export class ItemPalia implements IItemPalia {
    nombre: string = '';
    imagen: string = '';
    precio: number = 0;
    lumigusanos: number = 0;
    speedyGro: number = 0;
    harversBoost: number = 0;
    precioFinal: number = 0;
    profit: number = 0;
    ganancia: number = 0;
  }

  export class ConstantesPalia implements IConstantesPalia{
    nombre: string = '';
    imagen: string = '';
    precio: number = 0;
  }