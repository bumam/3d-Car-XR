import { IColorParams, IModelParams, ITextureParams } from '../contexts';

export enum ColorNamesEnum {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  BLACK = 'black',
}

export enum TextureNamesEnum {
  METAL = 'Metal',
  MATTED = 'Matted',
  CHROME = 'Chrome',
}

export enum CarModelNamesEnum {
  PORSCHE = 'porsche',
  McLaren = 'McLaren',
}

export const TEXTURE_PARAMS: ITextureParams[] = [
  {
    name: TextureNamesEnum.MATTED,
    roughness: 0.6,
    metalness: 0,
  },

  {
    name: TextureNamesEnum.METAL,
    roughness: 0.3,
    metalness: 0.8,
  },
  {
    name: TextureNamesEnum.CHROME,
    roughness: 0,
    metalness: 0.3,
  },
];

export const COLORS_PARAMS: IColorParams[] = [
  {
    color: '#FF0000',
    colorName: ColorNamesEnum.RED,
  },
  {
    color: '#0000FF',
    colorName: ColorNamesEnum.BLUE,
  },
  {
    color: '#ffd846',
    colorName: ColorNamesEnum.YELLOW,
  },
  {
    color: '#222222',
    colorName: ColorNamesEnum.BLACK,
  },
];
export const CAR_MODEL_PARAMS: IModelParams[] = [
  {
    name: 'Porsche',
    model: CarModelNamesEnum.PORSCHE,
  },
  {
    name: 'McLaren',
    model: CarModelNamesEnum.McLaren,
  },
];
