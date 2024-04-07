import { IColorParams, IModelParams } from './interface';

export enum ColorNamesEnum {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  WHITE = 'white',
  YELLOW = 'yellow',
  BLACK = 'black',
  GRAY = 'gray',
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
    color: '#1a5e1a',
    colorName: ColorNamesEnum.GREEN,
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
    color: '#59555b',
    colorName: ColorNamesEnum.GRAY,
  },
  {
    color: '#222222',
    colorName: ColorNamesEnum.BLACK,
  },
  {
    color: '#ececec',
    colorName: ColorNamesEnum.WHITE,
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
