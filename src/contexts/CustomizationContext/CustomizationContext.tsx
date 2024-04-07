import { createContext } from 'react';

import { IColorParams, IModelParams, ITextureParams } from './interface';

export interface CustomizationContextProps {
  carModel?: IModelParams;
  setCarModel?: (model: IModelParams) => void;
  carColor?: IColorParams;
  setCarColor?: (colorParams: IColorParams) => void;
  carTexture?: ITextureParams;
  setCarTexture?: (textureParams: ITextureParams) => void;
  accessory?: any;
  setAccessory?: (value: any) => void;
}

export const CustomizationContext = createContext<CustomizationContextProps>({});
