/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\Campfire.glb --transform
Author: Minzkraut (https://sketchfab.com/Minzkraut)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-forest-campfire-updated-af086b62a4c84ea89eda895b23d64813
Title: Low Poly Forest Campfire [Updated]
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF(
    "models/campfire/Campfire-transformed.glb"
  );
  return (
    <group scale={0.4} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere001_0.geometry}
          material={materials.Rock}
          position={[-1.49, -0.51, 0.81]}
          rotation={[0, 0, -2.91]}
          scale={0.34}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere003_0.geometry}
          material={materials.Rock}
          position={[-2.97, 1.63, 0.22]}
          rotation={[0, 0, -1.35]}
          scale={0.15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere005_0.geometry}
          material={materials.Rock}
          position={[-0.62, 2.37, 0.36]}
          rotation={[-1, -0.58, -0.91]}
          scale={0.66}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere007_0.geometry}
          material={materials.Rock}
          position={[0.21, 2.13, 0.7]}
          rotation={[0, 0, -2.25]}
          scale={0.39}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_0.geometry}
          material={materials.Rock}
          position={[0.33, 0.83, 0.5]}
          rotation={[2.15, -1.56, 2.82]}
          scale={0.38}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere010_0.geometry}
          material={materials.Rock}
          position={[0.74, 0.49, 0.62]}
          rotation={[0.33, -0.12, -1.7]}
          scale={0.38}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere014_0.geometry}
          material={materials.Rock}
          position={[-2.32, 1.83, 0.53]}
          rotation={[-1.65, -1.17, 0]}
          scale={0.39}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere015_0.geometry}
          material={materials.Rock}
          position={[-2.51, 1.35, 0.79]}
          rotation={[0, 0, -0.42]}
          scale={0.42}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere017_0.geometry}
          material={materials.Rock}
          position={[-2.33, 2.48, 0.05]}
          rotation={[-1.29, -0.59, -2.08]}
          scale={0.46}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere018_0.geometry}
          material={materials.Rock}
          position={[-2.07, -0.27, 0.6]}
          rotation={[0, 0, -0.83]}
          scale={0.26}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere019_0.geometry}
          material={materials.Rock}
          position={[-2.57, -0.18, 0.51]}
          rotation={[1.58, -0.74, 2.24]}
          scale={0.38}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere020_0.geometry}
          material={materials.Rock}
          position={[-1.97, -0.06, 0.59]}
          rotation={[3.11, -0.65, 2.81]}
          scale={0.39}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere021_0.geometry}
          material={materials.Rock}
          position={[0.12, -0.03, 0.8]}
          rotation={[3.13, -0.62, 3.13]}
          scale={0.32}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere024_0.geometry}
          material={materials.Rock}
          position={[-2.45, 0.42, 0.05]}
          rotation={[0.04, 1.34, 2.43]}
          scale={0.39}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere025_0.geometry}
          material={materials.Rock}
          position={[-2.75, 0.69, 0.18]}
          rotation={[-0.6, -1.21, -1.55]}
          scale={0.31}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere026_0.geometry}
          material={materials.Rock}
          position={[-0.12, 2.72, 0.1]}
          rotation={[-1.27, -0.67, -2.05]}
          scale={0.39}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mball018_0.geometry}
          material={materials.Fire}
          position={[-1.21, 1.42, 0.74]}
          scale={[0.2, 0.2, 0.57]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath008_0.geometry}
          material={materials.LightWood}
          position={[-1.67, 0.54, 1.44]}
          rotation={[0.88, -0.34, -1.88]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath009_0.geometry}
          material={materials.LightWood}
          position={[-1.57, 1.49, 1.49]}
          rotation={[-0.31, -0.89, 2.71]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath010_0.geometry}
          material={materials.LightWood}
          position={[-1.63, 1.21, 1.1]}
          rotation={[0.34, -1.24, -1.98]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath011_0.geometry}
          material={materials.LightWood}
          position={[-1.33, 1.38, 1.09]}
          rotation={[-0.42, 1.22, 1.25]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath012_0.geometry}
          material={materials.LightWood}
          position={[-0.89, 0.91, 1.03]}
          rotation={[0.27, 0.9, -0.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath013_0.geometry}
          material={materials.LightWood}
          position={[-1.24, 1.65, 0.98]}
          rotation={[-0.88, 0.32, 1.28]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath014_0.geometry}
          material={materials.LightWood}
          position={[-1.24, 0.95, 1.22]}
          rotation={[-0.88, 0.32, 1.28]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/campfire/Campfire-transformed.glb");
