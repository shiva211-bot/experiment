"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

export function HoloScene() {
  return (
    <div className="h-[420px] w-full rounded-[1.5rem] border border-white/10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} color="#5ee7ff" intensity={2} />
        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.6}>
          <mesh>
            <icosahedronGeometry args={[1.2, 2]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#5ee7ff" emissiveIntensity={1.2} wireframe />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.4} />
      </Canvas>
    </div>
  );
}
