'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Scene3D() {
  return (
    <section className="h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Canvas>
    </section>
  );
}
