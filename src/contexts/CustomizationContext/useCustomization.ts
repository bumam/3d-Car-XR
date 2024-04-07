import { useContext, useEffect } from 'react';
import { CustomizationContext, CustomizationContextProps } from './CustomizationContext';

export function useCustomization(): CustomizationContextProps {
  const { carModel, setCarModel, carColor, setCarColor, carTexture, setCarTexture, accessory, setAccessory } =
    useContext(CustomizationContext);

  useEffect(() => {
    console.log('setCarColor');
  }, [setCarColor]);

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
