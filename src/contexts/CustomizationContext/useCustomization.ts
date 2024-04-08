import { useContext } from 'react';
import { CustomizationContext, CustomizationContextProps } from './CustomizationContext';

export function useCustomization(): CustomizationContextProps {
  return { ...useContext(CustomizationContext) };
}
