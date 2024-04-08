import { FC } from 'react';
import classNames from 'classnames';
import { PanelSection } from '../PanelSection/PanelSection';
import { useCustomization } from '../../contexts';
import s from './WheelsOptions.module.scss';
import { SlSwitch } from '@shoelace-style/shoelace/dist/react';

export interface WheelsOptionsPanelProps {
  className?: string;
}

export const WheelsOptionsPanel: FC<WheelsOptionsPanelProps> = ({ className }) => {
  const { isWheelsRotation, setIsWheelsRotation } = useCustomization();

  return (
    <div className={classNames(s.TextureOptionsPanel, className)}>
      <PanelSection title={'Wheels rotation'}>
        <SlSwitch handleCheckedChange={() => setIsWheelsRotation(!isWheelsRotation)} checked={isWheelsRotation}>
          {isWheelsRotation ? 'On' : 'Off'}
        </SlSwitch>
      </PanelSection>
    </div>
  );
};
