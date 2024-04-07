import { useContext } from 'react';
import { CustomizationContext, CustomizationContextProps } from './CustomizationContext';

export function useCustomization(): CustomizationContextProps {
  const { carModel, setCarModel, carColor, setCarColor, carTexture, setCarTexture, accessory, setAccessory } =
    useContext(CustomizationContext);

  return {
    carModel,
    setCarModel,
    carColor,
    setCarColor,
    carTexture,
    setCarTexture,
    accessory,
    setAccessory,
  };
}
