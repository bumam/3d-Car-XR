import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { CustomizationContext, CustomizationContextProps } from './CustomizationContext';

import { IColorParams, IModelParams } from './interface';
import { CAR_MODEL_PARAMS, COLORS_PARAMS, TEXTURE_PARAMS } from '../../const';

export const CustomizationProvider: FC<PropsWithChildren<CustomizationContextProps>> = ({ children }) => {
  const [carModel, setCarModel] = useState<IModelParams>(CAR_MODEL_PARAMS[0]);
  const [accessory, setAccessory] = useState(0);
  const [carColor, setCarColor] = useState<IColorParams>(COLORS_PARAMS[0]);
  const [carTexture, setCarTexture] = useState(TEXTURE_PARAMS[0]);

  const defaultProps = useMemo(
    () => ({
      carModel,
      setCarModel,
      accessory,
      setAccessory,
      carColor,
      setCarColor,
      carTexture,
      setCarTexture,
    }),
    [carModel, accessory, carColor, carTexture],
  );

  return <CustomizationContext.Provider value={defaultProps}>{children}</CustomizationContext.Provider>;
};
