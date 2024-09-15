import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaLightbulb, FaBrain, FaCode, FaUsers } from 'react-icons/fa'

const About = () => {
  return (
    <section className="py-20 bg-black text-lime-500 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-lime-400 font-inter"
        >
          Sobre Mim
        </motion.h2>
        <div className="grid md:grid-cols-12 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative h-full"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/fotoItamar.jpg"
                alt="Itamar Junior"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-lime-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-lime-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-lime-400 mb-6">Itamar Junior</h3>
              <p className="text-xl text-lime-100 leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
                Com uma sólida formação em desenvolvimento de software e uma mentalidade voltada 
                para o futuro, estou sempre buscando novas maneiras de impulsionar a tecnologia 
                e fazer a diferença no mundo digital.
              </p>
              <motion.div 
                className="bg-gray-900 p-6 rounded-xl border-2 border-lime-500 shadow-lg"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <h4 className="text-2xl font-semibold text-lime-300 mb-4">Atualmente</h4>
                <div className="flex items-start space-x-4">
                  <FaCode className="text-3xl text-lime-500 mt-1" />
                  <div>
                    <p className="text-lime-100 text-lg">
                      Trabalhando como desenvolvedor freelancer Frontend, criando interfaces 
                      intuitivas e responsivas para diversos clientes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mt-4">
                  <FaUsers className="text-3xl text-lime-500 mt-1" />
                  <div>
                    <p className="text-lime-100 text-lg">
                      Participando ativamente em projetos em grupo, colaborando com equipes 
                      multidisciplinares para entregar soluções de software inovadoras.
                    </p>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <FaRocket className="text-4xl text-lime-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-lime-300">Inovação Constante</h4>
                    <p className="text-lime-100">Sempre buscando as últimas tecnologias e melhores práticas.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <FaLightbulb className="text-4xl text-lime-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-lime-300">Soluções Criativas</h4>
                    <p className="text-lime-100">Abordagem única para resolver problemas complexos.</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <FaBrain className="text-4xl text-lime-500" />
                  <div>
                    <h4 className="text-xl font-semibold text-lime-300">Aprendizado Contínuo</h4>
                    <p className="text-lime-100">Comprometido com o crescimento pessoal e profissional.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <motion.a
                href="#contact"
                className="inline-block bg-lime-500 text-black font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-lime-400 hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vamos Conversar
              </motion.a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gray-900 p-10 rounded-2xl shadow-2xl border-2 border-lime-500 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500"></div>
          <h3 className="text-3xl font-bold mb-8 text-lime-400">Minha Visão</h3>
          <p className="text-xl text-lime-100 leading-relaxed mb-6">
            Acredito que a tecnologia tem o poder de transformar o mundo e melhorar a vida das pessoas. 
            Meu objetivo é contribuir para essa transformação, criando soluções inovadoras que não apenas 
            resolvam problemas atuais, mas também antecipem as necessidades futuras.
          </p>
          <p className="text-xl text-lime-100 leading-relaxed">
            Estou sempre em busca de desafios que me permitam aplicar minha criatividade e conhecimento 
            técnico para desenvolver produtos que façam a diferença. Seja trabalhando em inteligência 
            artificial, desenvolvimento web avançado ou explorando novas fronteiras tecnológicas, 
            estou comprometido em impulsionar a inovação e criar um impacto positivo.
          </p>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-500 rounded-full filter blur-3xl opacity-10"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default About