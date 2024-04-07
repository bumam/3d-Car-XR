import s from './ModelOptionsPanel.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { PanelSection } from '../../components';

import { IModelParams, useCustomization } from '../../contexts';
import { CAR_MODEL_PARAMS } from '../../const';

export interface ModelOptionsPanelProps {
  className?: string;
}

export const ModelOptionsPanel: FC<ModelOptionsPanelProps> = ({ className }) => {
  const { carModel, setCarModel } = useCustomization();

  return (
    <div className={classNames(s.ModelOptionsPanel, className)}>
      <PanelSection title={'Model'}>
        {CAR_MODEL_PARAMS.map((item: IModelParams, index: number) => {
          return (
            <div
              key={index}
              className={`item ${item.model === carModel.model ? 'item-active' : ''}`}
              onClick={() => {
                setCarModel(item);
              }}
            >
              <div className="item_option">{item.name}</div>
            </div>
          );
        })}
      </PanelSection>
    </div>
  );
};
