import s from './Configurator.module.scss';
import { ColorOptionsPanel, ModelOptionsPanel } from '../../components';

export const Configurator = () => {
  return (
    <div className={s.Configurator}>
      <ModelOptionsPanel />
      <ColorOptionsPanel />
    </div>
  );
};

