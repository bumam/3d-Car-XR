import classNames from 'classnames';
import { FC } from 'react';
import { IColorParams, useCustomization } from '../../contexts';
import { PanelSection } from '../PanelSection/PanelSection';
import s from './ColorOptions.module.scss';
import { COLORS_PARAMS } from '../../const';

export interface ColorOptionsPanelProps {
  className?: string;
}

export const ColorOptionsPanel: FC<ColorOptionsPanelProps> = ({ className }) => {
  const { carColor, setCarColor } = useCustomization();

  return (
    <div className={classNames(s.ColorOptionsPanel, className)}>
      <PanelSection title={'Color'}>
        {COLORS_PARAMS.map((item: IColorParams, index: number) => (
          <div
            key={index}
            className={`item ${item.color === carColor.color ? 'item-active' : ''}`}
            onClick={() => {
              console.log('setColor', item);

              setCarColor(item);
              console.log('carColor', carColor);
            }}
          >
            <div
              className="item_colour_preview"
              style={{
                backgroundColor: item.color,
              }}
            />
            <div className="item_option">{item.colorName}</div>
          </div>
        ))}
      </PanelSection>
    </div>
  );
};
