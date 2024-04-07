import { createContext } from 'react';
import { TextureNamesEnum } from './const';
import { IColorParams, IModelParams } from './interface';

export interface CustomizationContextProps {
  carModel?: IModelParams;
  setCarModel?: (model: IModelParams) => void;
  carColor?: IColorParams;
  setCarColor?: (colorParams: IColorParams) => void;
  carTexture?: TextureNamesEnum;
  setCarTexture?: (textureParams: any) => void;
  accessory?: any;
  setAccessory?: (value: any) => void;
}

export const CustomizationContext = createContext<CustomizationContextProps>({});
