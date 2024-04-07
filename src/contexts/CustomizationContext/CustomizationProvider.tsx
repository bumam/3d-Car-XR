import React, { FC, PropsWithChildren, useMemo, useState } from 'react';

import { CustomizationContext, CustomizationContextProps } from './CustomizationContext';
import { CAR_MODEL_PARAMS, COLORS_PARAMS } from './const';
import { IColorParams, IModelParams } from './interface';

export const CustomizationProvider: FC<PropsWithChildren<CustomizationContextProps>> = ({ children }) => {
  const [carModel, setCarModel] = useState<IModelParams>(CAR_MODEL_PARAMS[0]);
  const [accessory, setAccessory] = useState(0);
  const [carColor, setCarColor] = useState<IColorParams>(COLORS_PARAMS[0]);
  const [carTexture, setCarTexture] = useState(null);

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
    [],
  );

  return <CustomizationContext.Provider value={defaultProps}>{children}</CustomizationContext.Provider>;
};
