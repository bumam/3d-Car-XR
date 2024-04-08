import s from './Configurator.module.scss';
import { ColorOptionsPanel, ModelOptionsPanel, TextureOptionsPanel, WheelsOptionsPanel } from '../../components';
import { useCustomization } from '../../contexts';
import { CarModelNamesEnum } from '../../const';

export const Configurator = () => {
  const { setIsWheelsRotation, carModel } = useCustomization();

  return (
    <div className={s.Configurator}>
      <ModelOptionsPanel />
      <ColorOptionsPanel />
      <TextureOptionsPanel />
      {carModel.name === CarModelNamesEnum.Ferrari && <WheelsOptionsPanel />}
    </div>
  );
};

