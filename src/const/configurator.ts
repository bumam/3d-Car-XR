import { IColorParams, IModelParams, ITextureParams } from '../contexts';

export enum ColorNamesEnum {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  BLACK = 'black',
  LIGHT_GREEN = 'light-green',
  PINK = 'pink',
  PEACH = 'peach',
  MINT = 'mint',
  PURPLE = 'purple',
  GRAY = 'gray',
}

export enum TextureNamesEnum {
  METAL = 'Metal',
  MATTED = 'Matted',
  CHROME = 'Chrome',
}

export enum CarModelNamesEnum {
  PORSCHE = 'porsche',
  McLaren = 'McLaren',
  Ferrari = 'Ferrari',
  Ferrari2 = 'Ferrar2',
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
  {
    color: '#f845c3',
    colorName: ColorNamesEnum.PINK,
  },
  {
    color: '#a6ea20',
    colorName: ColorNamesEnum.LIGHT_GREEN,
  },
  {
    color: '#2de7b6',
    colorName: ColorNamesEnum.MINT,
  },
  {
    color: '#e5a259',
    colorName: ColorNamesEnum.PEACH,
  },
  {
    color: '#662cce',
    colorName: ColorNamesEnum.PURPLE,
  },
  {
    color: '#9d9b9d',
    colorName: ColorNamesEnum.GRAY,
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
  {
    name: 'Ferrari',
    model: CarModelNamesEnum.Ferrari,
  },
  {
    name: 'Ferrari2',
    model: CarModelNamesEnum.Ferrari2,
  },
];

export const WHEELS_ROTATION_SPEED = -0.5;
