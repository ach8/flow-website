import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line, Points } from '@react-three/drei';
import * as THREE from 'three';
import { colors } from '../../utils/colors';

const GLOBE_RADIUS = 2;
const NODES_COUNT = 30;
const CONNECTION_COUNT = 20;
const PARTICLE_COUNT = 1000;

interface Node {
  position: THREE.Vector3;
  connections: number[];
}

const Globe: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const nodesRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particles
  const particles = useMemo(() => {
    const temp = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = GLOBE_RADIUS * (1 + Math.random() * 0.2);

      temp[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      temp[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      temp[i * 3 + 2] = radius * Math.cos(phi);
    }
    return temp;
  }, []);

  // Create nodes and their connections
  const nodes = useMemo(() => {
    const temp: Node[] = [];
    for (let i = 0; i < NODES_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const node: Node = {
        position: new THREE.Vector3(
          GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta),
          GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta),
          GLOBE_RADIUS * Math.cos(phi)
        ),
        connections: []
      };

      // Create random connections
      for (let j = 0; j < CONNECTION_COUNT; j++) {
        const targetIndex = Math.floor(Math.random() * NODES_COUNT);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }

      temp.push(node);
    }
    return temp;
  }, []);

  // Animation
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
    if (nodesRef.current) {
      nodesRef.current.rotation.y += 0.001;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      {/* Globe mesh */}
      <Sphere ref={globeRef} args={[GLOBE_RADIUS, 64, 64]}>
        <meshBasicMaterial
          color={colors.neon.blue}
          opacity={0.4}
          transparent
          wireframe
        />
      </Sphere>
      <Sphere args={[GLOBE_RADIUS * 1.02, 64, 64]}>
        <meshBasicMaterial
          color={colors.neon.blue}
          opacity={0.2}
          transparent
        />
      </Sphere>

      {/* Particles */}
      <Points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={colors.neon.blue}
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.6}
          depthWrite={false}
        />
      </Points>

      {/* Nodes and connections */}
      <group ref={nodesRef}>
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <Sphere position={node.position} args={[0.08, 16, 16]}>
              <meshBasicMaterial
                color={colors.neon.blue}
                opacity={1}
                transparent
              />
            </Sphere>

            <Sphere position={node.position} args={[0.15, 16, 16]}>
              <meshBasicMaterial
                color={colors.neon.blue}
                opacity={0.6}
                transparent
              />
            </Sphere>

            {node.connections.map((targetIndex) => (
              <Line
                key={`${index}-${targetIndex}`}
                points={[node.position, nodes[targetIndex].position]}
                color={colors.neon.blue}
                lineWidth={2.5}
                opacity={0.6}
                transparent
              />
            ))}
          </React.Fragment>
        ))}
      </group>

      {/* Lighting */}
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color={colors.neon.blue} />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color={colors.neon.green} />
    </>
  );
};

export default Globe;