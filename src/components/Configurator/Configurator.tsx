import s from './Configurator.module.scss';
import { ColorOptionsPanel, ModelOptionsPanel, TextureOptionsPanel } from '../../components';

export const Configurator = () => {
  return (
    <div className={s.Configurator}>
      <ModelOptionsPanel />
      <ColorOptionsPanel />
      <TextureOptionsPanel />
    </div>
  );
};

