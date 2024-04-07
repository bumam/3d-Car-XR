import { ColorOptionsPanel } from '../ColorOptionsPanel/ColorOptionsPanel';
import s from './Configurator.module.scss';
import { ModelOptionsPanel } from '../ModelOptionsPanel/ModelOptionsPanel';

const Configurator = () => {
  return (
    <div className={s.Configurator}>
      <ModelOptionsPanel />
      <ColorOptionsPanel />
    </div>
  );
};

export default Configurator;
