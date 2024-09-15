import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingIcons = () => {
  const iconRefs = useRef([])

  useFrame((state) => {
    iconRefs.current.forEach((ref, index) => {
      const t = state.clock.getElapsedTime()
      ref.position.y = Math.sin(t * 2 + index * Math.PI * 0.5) * 0.1
    })
  })

  const icons = [
    { geometry: new THREE.BoxGeometry(0.3, 0.3, 0.3), position: [-1, 1, 0], color: "#bef264" },
    { geometry: new THREE.SphereGeometry(0.15, 32, 32), position: [1, 1, 0], color: "#84cc16" },
    { geometry: new THREE.ConeGeometry(0.15, 0.3, 32), position: [0, 1.5, 0], color: "#65a30d" },
  ]

  return (
    <group>
      {icons.map((icon, index) => (
        <mesh
          key={index}
          ref={(el) => (iconRefs.current[index] = el)}
          geometry={icon.geometry}
          position={icon.position}
        >
          <meshStandardMaterial color={icon.color} />
        </mesh>
      ))}
    </group>
  )
}

export default FloatingIcons