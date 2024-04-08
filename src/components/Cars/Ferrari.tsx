/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/Ferrari/car_for_games_unity.gltf -t
*/

import * as THREE from 'three';
import React, {useRef} from 'react';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import {useCustomization} from '../../contexts';
import {useFrame} from '@react-three/fiber';
import {WHEELS_ROTATION_SPEED} from '../../const';

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_35: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_41: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_43: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_47: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_57: THREE.Mesh;
    Object_59: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_67: THREE.Mesh;
    Object_69: THREE.Mesh;
    Object_72: THREE.Mesh;
    Object_74: THREE.Mesh;
    Object_26: THREE.Mesh;
  };
  materials: {
    BodyAlbedo: THREE.MeshStandardMaterial;
    MainAlbedo: THREE.MeshStandardMaterial;
    Eu_Number_G: THREE.MeshStandardMaterial;
    Eu_Number_H: THREE.MeshStandardMaterial;
    Eu_Number_4: THREE.MeshStandardMaterial;
    Eu_Number_7: THREE.MeshStandardMaterial;
    Eu_Number_1: THREE.MeshStandardMaterial;
    Eu_Number_8: THREE.MeshStandardMaterial;
    Paint: THREE.MeshPhysicalMaterial;
    LicensePlateEuAlbedo: THREE.MeshStandardMaterial;
    Tire01Albedo: THREE.MeshStandardMaterial;
    Wheel: THREE.MeshStandardMaterial;
    WindowMetalness: THREE.MeshStandardMaterial;
    BlackWindows: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    BrakeDiscGlow: THREE.MeshStandardMaterial;
  };
};

export function Ferrari(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/Ferrari/car_for_games_unity.gltf') as GLTFResult;
  const { carColor, carTexture, isWheelsRotation } = useCustomization();
  const wheelRef1 = useRef<any>(null);
  const wheelRef2 = useRef<any>(null);
  const wheelRef3 = useRef<any>(null);
  const wheelRef4 = useRef<any>(null);

  useFrame(() => {
    if (isWheelsRotation) {
      if (wheelRef1) {
        wheelRef1.current.rotation.x += WHEELS_ROTATION_SPEED;
      }
      if (wheelRef2) {
        wheelRef2.current.rotation.x += WHEELS_ROTATION_SPEED;
      }
      if (wheelRef3) {
        wheelRef3.current.rotation.x += WHEELS_ROTATION_SPEED;
      }
      if (wheelRef4) {
        wheelRef4.current.rotation.x += WHEELS_ROTATION_SPEED;
      }
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_26.geometry} material={materials.MainAlbedo} />
      <group ref={wheelRef1} position={[-0.62, 0.32, -1.25]}>
        <mesh geometry={nodes.Object_29.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.Tire01Albedo} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Wheel} />
      </group>
      <group ref={wheelRef2} position={[0.62, 0.32, -1.25]}>
        <mesh geometry={nodes.Object_35.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Tire01Albedo} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Wheel} />
      </group>
      <group ref={wheelRef3} position={[-0.62, 0.32, 1.27]}>
        <mesh geometry={nodes.Object_41.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Tire01Albedo} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Wheel} />
      </group>
      <group ref={wheelRef4} position={[0.62, 0.32, 1.27]}>
        <mesh geometry={nodes.Object_47.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Tire01Albedo} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Wheel} />
      </group>
      <group position={[-0.62, 0.32, -1.25]}>
        <mesh geometry={nodes.Object_57.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.BrakeDiscGlow} />
      </group>
      <group position={[0.62, 0.32, -1.25]}>
        <mesh geometry={nodes.Object_62.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.BrakeDiscGlow} />
      </group>
      <group position={[-0.62, 0.32, 1.27]}>
        <mesh geometry={nodes.Object_67.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_69.geometry} material={materials.BrakeDiscGlow} />
      </group>
      <group position={[0.62, 0.32, 1.27]}>
        <mesh geometry={nodes.Object_72.geometry} material={materials.MainAlbedo} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.BrakeDiscGlow} />
      </group>
      <mesh geometry={nodes.Object_7.geometry} material={materials.BodyAlbedo} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.MainAlbedo} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.MainAlbedo} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Eu_Number_G} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Eu_Number_H} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Eu_Number_4} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Eu_Number_7} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Eu_Number_4} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.Eu_Number_1} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.Eu_Number_8} />
      <mesh geometry={nodes.Object_19.geometry}>
        <meshStandardMaterial
          color={carColor.color}
          roughness={carTexture.roughness}
          metalness={carTexture.metalness}
        />
      </mesh>
      <mesh geometry={nodes.Object_21.geometry} material={materials.MainAlbedo} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.LicensePlateEuAlbedo} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.Paint} />
      <mesh geometry={nodes.Object_52.geometry} material={materials.WindowMetalness} />
      <mesh geometry={nodes.Object_53.geometry} material={materials.BlackWindows} />
      <mesh geometry={nodes.Object_54.geometry} material={materials.Glass} />
    </group>
  );
}

useGLTF.preload('.models/Ferrari/car_for_games_unity.gltf');