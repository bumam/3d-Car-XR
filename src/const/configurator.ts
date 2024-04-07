import { IColorParams, IModelParams } from '../contexts';

export enum ColorNamesEnum {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  BLACK = 'black',
}

export enum TextureNamesEnum {}

export enum CarModelNamesEnum {
  CAR1 = 'car1',
  CAR2 = 'car2',
}

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
    model: CarModelNamesEnum.CAR1,
  },
  {
    name: 'McLaren',
    model: CarModelNamesEnum.CAR2,
  },
];
