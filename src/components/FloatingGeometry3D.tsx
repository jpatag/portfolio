'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, Torus, Octahedron, Box } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, color, type, speed }: { 
  position: [number, number, number]; 
  color: string; 
  type: 'sphere' | 'torus' | 'octahedron' | 'box';
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.001);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      
      // Rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // React to scroll
      meshRef.current.position.z = position[2] + scrollY * 2;
    }
  });

  const shapeProps = {
    ref: meshRef,
    position: position,
    castShadow: true,
  };

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      {type === 'sphere' && (
        <Sphere {...shapeProps} args={[0.8, 32, 32]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      )}
      {type === 'torus' && (
        <Torus {...shapeProps} args={[0.6, 0.25, 16, 32]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Torus>
      )}
      {type === 'octahedron' && (
        <Octahedron {...shapeProps} args={[0.8]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.5}
            speed={2.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Octahedron>
      )}
      {type === 'box' && (
        <Box {...shapeProps} args={[1, 1, 1]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.3}
            speed={1.8}
            roughness={0.2}
            metalness={0.8}
          />
        </Box>
      )}
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (particlesGeometry.current) {
      const particlesPosition = new Float32Array(500 * 3);
      for (let i = 0; i < 500; i++) {
        particlesPosition[i * 3] = (Math.random() - 0.5) * 20;
        particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20;
        particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      particlesGeometry.current.setAttribute(
        'position',
        new THREE.BufferAttribute(particlesPosition, 3)
      );
    }
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={particlesGeometry} />
      <pointsMaterial
        size={0.05}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function FloatingGeometry3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#8b5cf6" intensity={0.5} />
        <pointLight position={[10, 5, 5]} color="#3b82f6" intensity={0.5} />
        
        {/* Floating Shapes */}
        <FloatingShape position={[-3, 2, 0]} color="#3b82f6" type="sphere" speed={0.8} />
        <FloatingShape position={[3, -1, -2]} color="#8b5cf6" type="torus" speed={1.2} />
        <FloatingShape position={[-2, -2, -1]} color="#ec4899" type="octahedron" speed={1} />
        <FloatingShape position={[2, 2, -3]} color="#06b6d4" type="box" speed={0.9} />
        <FloatingShape position={[0, -3, -2]} color="#6366f1" type="sphere" speed={1.1} />
        <FloatingShape position={[-4, 0, -3]} color="#a855f7" type="octahedron" speed={0.7} />
        
        {/* Particle Field */}
        <ParticleField />
      </Canvas>
    </div>
  );
}
