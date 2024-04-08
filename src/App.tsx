import { Canvas } from '@react-three/fiber';
import './App.scss';
import Scene from './components/Scene/Scene.js';

import { Stats } from '@react-three/drei';
import { CustomizationProvider } from './contexts';
import Details from './components/Details/Details';
import { Configurator } from './components';
import '@shoelace-style/shoelace/dist/themes/light.css';

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
