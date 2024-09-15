import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Cylinder, Html } from '@react-three/drei'

const ComputerModel = () => {
  const group = useRef()

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.2
  })

  return (
    <group ref={group} scale={[1.5, 1.5, 1.5]}>
      {/* Base do notebook */}
      <Box args={[3, 0.2, 2]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>

      {/* Tela do notebook */}
      <Box args={[3, 2, 0.1]} position={[0, 1, -0.95]} rotation={[Math.PI / 8, 0, 0]}>
        <meshStandardMaterial color="#222222" />
        <Html
          transform
          occlude
          position={[0, 0, 0.051]}
          rotation-x={-Math.PI / 8}
          scale={[0.25, 0.25, 0.25]}
        >
          <div style={{
            width: '400px',
            height: '300px',
            backgroundColor: 'transparent',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <pre style={{
              color: '#84cc16',
              fontSize: '32px',
              fontFamily: "'Fira Code', monospace",
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(132, 204, 22, 0.5)',
              letterSpacing: '2px'
            }}>
              Hello, World!
            </pre>
          </div>
        </Html>
      </Box>

      {/* Teclado */}
      <Box args={[2.8, 0.1, 1.8]} position={[0, 0.05, 0]}>
        <meshStandardMaterial color="#444444" />
      </Box>

      {/* Touchpad */}
      <Box args={[1, 0.05, 0.6]} position={[0, 0.1, 0.6]}>
        <meshStandardMaterial color="#555555" />
      </Box>

      {/* Logo (círculo na tampa) */}
      <Cylinder args={[0.2, 0.2, 0.05, 32]} position={[0, 1, -1]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#84cc16" />
      </Cylinder>
    </group>
  )
}

export default ComputerModel