/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/car1/car1.gltf -t
Author: Pitstop 3D - Euro (https://sketchfab.com/carfan100)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/porsche-carrera-gt-2003-street-1880cd019d6f4bc2a8aec8a220bd5f0c
Title: Porsche Carrera GT 2003 Street
*/

import * as THREE from 'three';
import React from 'react';
import {useGLTF} from '@react-three/drei';
import {GLTF} from 'three-stdlib';
import {useCustomization} from '../../contexts';

export type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_20: THREE.Mesh;
  };
  materials: {
    Main_Paint: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    Matted: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    Tail_Lights: THREE.MeshPhysicalMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    Globes: THREE.MeshStandardMaterial;
    Mirrors: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    Rims: THREE.MeshStandardMaterial;
    Tyres: THREE.MeshStandardMaterial;
  };
};

export const Porsche = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('./models/Porsche/car1.gltf') as GLTFResult;
  const { carColor, carTexture } = useCustomization();

  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.01, 0]} rotation={[3.13, 0, Math.PI]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Main_Paint}>
          <meshStandardMaterial
            color={carColor.color}
            roughness={carTexture.roughness}
            metalness={carTexture.metalness}
          />
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Black} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Tail_Lights} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Globes} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Mirrors} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Gold} />
      </group>
      <group position={[0, 0.05, -0.08]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.61, 0.65, 0.65]}>
        <mesh geometry={nodes.Object_15.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Gold} />
      </group>
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.Rims}
        position={[0, 0.05, 0.02]}
        scale={[0.61, 0.65, 0.65]}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.Tyres}
        position={[0, 0.05, 0.02]}
        scale={[0.61, 0.65, 0.65]}
      />
    </group>
  );
};

useGLTF.preload('./models/Porsche/car1.gltf');
