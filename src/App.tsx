import { Canvas } from '@react-three/fiber';
import './App.scss';
import Scene from './components/Scene.js';

import { Stats } from '@react-three/drei';
import { CustomizationProvider } from './contexts';
import Configurator from './components/Configurator/Configurator';
import Details from './components/Details';

function App() {
  return (
    <>
      <CustomizationProvider>
        <div className="App">
          <Stats />
          <Canvas>
            <color attach="background" args={['#101010']} />
            <fog attach="fog" args={['#101010', 10, 20]} />
            <Scene />
          </Canvas>
          <Configurator />
          <Details />
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;
