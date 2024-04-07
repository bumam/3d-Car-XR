import classNames from 'classnames';
import { FC } from 'react';
import { IColorParams, useCustomization } from '../../contexts';
import { PanelSection } from '../../components';
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
            className={s.ColorOptionsPanel__item}
            onClick={() => {
              setCarColor(item);
            }}
          >
            <div
              className={classNames(
                s.ColorOptionsPanel__colorPreview,
                item.color === carColor.color && s.ColorOptionsPanel__activeBorder,
              )}
              style={{
                backgroundColor: item.color,
              }}
            />
            <div
              className={classNames(
                s.ColorOptionsPanel__option,
                item.color === carColor.color && s.ColorOptionsPanel__activeOption,
              )}
            >
              {item.colorName}
            </div>
          </div>
        ))}
      </PanelSection>
    </div>
  );
};
