import { Canvas } from '@react-three/fiber';
import './App.scss';
import Scene from './components/Scene';
import Configurator from './components/Configurator';
import { CustomizationProvider } from './contexts/Customization';
import Details from './components/Details';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';

function App() {
  return (
    <>
      <CustomizationProvider>
        <div className="App">
          <Suspense fallback={<Loader />}>
            <Canvas>
              <color attach="background" args={['#101010']} />
              <fog attach="fog" args={['#101010', 10, 20]} />
              <Scene />
            </Canvas>
          </Suspense>
          <Configurator />
          <Details />
        </div>
      </CustomizationProvider>
    </>
  );
}

export default App;
