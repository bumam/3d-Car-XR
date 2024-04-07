import { CarModelNamesEnum, ColorNamesEnum, TextureNamesEnum } from '../../const';

export interface IColorParams {
  color: string;
  colorName: ColorNamesEnum;
}

export interface IModelParams {
  name: string;
  model: CarModelNamesEnum;
}

export interface ITextureParams {
  name: TextureNamesEnum;
  roughness: number;
  metalness: number;
}
