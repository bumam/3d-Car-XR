import { createContext } from 'react';

import { IColorParams, IModelParams } from './interface';
import { TextureNamesEnum } from '../../const';

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
