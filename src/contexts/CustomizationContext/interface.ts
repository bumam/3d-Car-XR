import { CarModelNamesEnum, ColorNamesEnum } from '../../const';

export interface IColorParams {
  color: string;
  colorName: ColorNamesEnum;
}

export interface IModelParams {
  name: string;
  model: CarModelNamesEnum;
}
