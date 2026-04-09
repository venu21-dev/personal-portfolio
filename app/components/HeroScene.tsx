'use client';

import { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Center } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import * as THREE from 'three';

useGLTF.preload('/3d-modell/hero_3D_model.glb');

// Forces the camera to look at the model center after mount
function CameraSetup() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

function Model() {
  const { scene } = useGLTF('/3d-modell/hero_3D_model.glb');
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [3.5, 1.2, 3.5], fov: 40, near: 0.1, far: 100 }}
      style={{ background: '#e8e8e8' }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
        powerPreference: 'high-performance',
      }}
    >
      <CameraSetup />
      <Suspense fallback={null}>
        <Model />
        <Environment files="/3d-modell/studio_small_09_4k.exr" />
        <EffectComposer>
          <DepthOfField
            focusDistance={0.01}
            focalLength={0.08}
            bokehScale={1.5}
            height={480}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
