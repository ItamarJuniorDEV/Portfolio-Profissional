import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ComputerModel from '../components/ComputerModel'

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center h-[calc(100vh-128px)] pt-8">
      <div className="w-full h-[45vh] mb-4 relative">
        <div className="absolute inset-0 translate-y-[76px]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <ComputerModel />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-[-2rem]"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-2 font-logo text-lime-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Itamar Junior
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-4 text-lime-300 font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Desenvolvedor de Software | Analista de Sistemas
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/contato"
            className="bg-lime-500 text-black font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-lime-400 text-sm"
          >
            Entre em contato
          </Link>
          <Link
            to="/projetos"
            className="bg-transparent border-2 border-lime-500 text-lime-500 font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-lime-500 hover:text-black text-sm"
          >
            Ver Projetos
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home