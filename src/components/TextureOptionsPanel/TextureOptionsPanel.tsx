import { FC } from 'react';
import classNames from 'classnames';
import { TEXTURE_PARAMS } from '../../const';
import { PanelSection } from '../PanelSection/PanelSection';
import { ITextureParams, useCustomization } from '../../contexts';
import s from './TextureOptions.module.scss';

export interface TextureOptionsPanelProps {
  className?: string;
}

export const TextureOptionsPanel: FC<TextureOptionsPanelProps> = ({ className }) => {
  const { carTexture, setCarTexture } = useCustomization();

  return (
    <div className={classNames(s.TextureOptionsPanel, className)}>
      <PanelSection title={'Texture'}>
        {TEXTURE_PARAMS.map((item: ITextureParams, index: number) => (
          <div
            key={index}
            className={s.TextureOptionsPanel__item}
            onClick={() => {
              setCarTexture(item);
            }}
          >
            <div
              className={classNames(
                s.TextureOptionsPanel__colorPreview,
                item.name === carTexture.name && s.TextureOptionsPanel__activeBorder,
              )}
            />
            <div
              className={classNames(
                s.TextureOptionsPanel__option,
                item.name === carTexture.name && s.TextureOptionsPanel__activeOption,
              )}
            >
              {item.name}
            </div>
          </div>
        ))}
      </PanelSection>
    </div>
  );
};
