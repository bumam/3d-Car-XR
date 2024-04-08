import { Html, Loader, MeshReflectorMaterial, PresentationControls, Stage } from '@react-three/drei';

import { useCustomization } from '../../contexts';

import React, { Suspense } from 'react';
import { McLaren, Porsche } from '../../components';
import { CarModelNamesEnum } from '../../const';
import { Ferrari } from '../Cars/Ferrari';

const Scene = () => {
  const { carModel } = useCustomization();

  return (
    /* `PresentationControls` is a component from the `@react-three/drei` library that provides
            camera controls for a 3D scene. The `speed` prop sets the speed of camera movement, `global`
            prop enables global mode which allows the camera to move beyond the scene boundaries, `zoom`
            prop sets the initial zoom level of the camera, and `polar` prop sets the initial polar angle of the camera. */
    <Suspense
      fallback={
        <Html>
          <Loader />
        </Html>
      }
    >
      <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <Stage environment={'city'} intensity={0.6} shadows={false}>
            {carModel.model === CarModelNamesEnum.McLaren && <McLaren />}
            {carModel.model === CarModelNamesEnum.PORSCHE && <Porsche />}
            {carModel.model === CarModelNamesEnum.Ferrari && <Ferrari />}
          </Stage>
        </Suspense>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
          <planeGeometry args={[170, 170]} />
          {/* `MeshReflectorMaterial` is a material component from the `@react-three/drei` library that
        creates a reflective surface on a mesh. The props passed to it are used to customize the
    appearance and behavior of the reflective surface. */}
          <MeshReflectorMaterial
            mirror={1}
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={45}
            roughness={1}
            depthScale={1.3}
            minDepthThreshold={0.3}
            maxDepthThreshold={1.5}
            color="#101010"
            metalness={0.6}
          />
        </mesh>
      </PresentationControls>
    </Suspense>
  );
};

export default Scene;
