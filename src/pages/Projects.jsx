import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3, FaJs } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: "PousadaDev",
    description: "Um site responsivo para uma pousada, desenvolvido com React. O projeto inclui uma página de quartos com galeria de fotos, sistema de reservas online e informações detalhadas sobre as acomodações e serviços oferecidos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quarto-1N34XNhMPqwmUV30ZV4rsyLvP8PuWk.png",
    tech: ["React", "Node.js", "MongoDB", "Styled Components"]
  },
  {
    id: 2,
    title: "Pousada Secreta",
    description: "Um site elegante para uma pousada exclusiva em Angra dos Reis. Desenvolvido com React, o site apresenta uma interface imersiva com belas imagens da localização, informações sobre acomodações e um sistema de reservas integrado.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pousada%20secreta-QAiQ6GzMi0pzvFirxgWVSbKlkrCGjC.png",
    tech: ["React", "Next.js", "Tailwind CSS", "Prisma"]
  },
  {
    id: 3,
    title: "AlfaTech Hospedagem",
    description: "Uma landing page moderna para um serviço de hospedagem web. Criada com HTML, CSS e JavaScript, a página apresenta os planos de hospedagem, recursos oferecidos e utiliza design responsivo para uma ótima experiência em todos os dispositivos.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/provedor-uXAg2JhHlZd9v9KDAiCRer6bjfpXPR.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: 4,
    title: "Óticas Vida",
    description: "Uma plataforma e-commerce para uma ótica, construída com React. O projeto inclui um catálogo de produtos dinâmico, apresentação dos serviços oferecidos e integração com um CMS headless para fácil gerenciamento de conteúdo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/otica-oSTj6MVcuhkhYZSepjW5aI2tYghVau.png",
    tech: ["React", "Redux", "Styled Components", "Strapi CMS"]
  },
  {
    id: 5,
    title: "Manhattan Coffee House",
    description: "Um site sofisticado para uma cafeteria gourmet, desenvolvido com React e Styled Components. O projeto conta com um design elegante, menu interativo, galeria de fotos e integração com o Google Maps para fácil localização.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caf%C3%A9-Qt32R2sf4cxsUP7l6K8jQmVlRCxqWs.png",
    tech: ["React", "Styled Components", "Framer Motion", "Google Maps API"]
  }
]

const Notebook = ({ image }) => {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <svg
        viewBox="0 0 1280 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <rect width="1280" height="720" rx="22" fill="#1E1E1E" />
        <rect x="32" y="32" width="1216" height="656" rx="8" fill="#121212" />
      </svg>
      <div className="absolute" style={{ top: "4.5%", left: "2.5%", right: "2.5%", bottom: "8.5%" }}>
        <img 
          src={image} 
          alt="Project Screenshot" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  )
}

export default function Component() {
  const [currentProject, setCurrentProject] = useState(projects[0])

  return (
    <section className="py-20 bg-black text-lime-500 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-lime-400 font-inter"
        >
          Meus Projetos
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl mx-auto lg:mx-0"
          >
            <Notebook image={currentProject.image} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-lime-300">{currentProject.title}</h3>
            <p className="text-lime-100 text-lg leading-relaxed">{currentProject.description}</p>
            <div className="flex flex-wrap gap-4">
              {currentProject.tech.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-lime-900 text-lime-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-2xl text-lime-400">
              <FaReact />
              <FaNodeJs />
              <FaDatabase />
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <motion.button
              key={project.id}
              onClick={() => setCurrentProject(project)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                currentProject.id === project.id
                  ? 'bg-lime-500 text-black'
                  : 'bg-gray-800 text-lime-400 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-lime-500"
        >
          <h3 className="text-3xl font-bold mb-6 text-lime-400 text-center">Inovação e Excelência Técnica</h3>
          <p className="text-lime-100 text-lg leading-relaxed text-center">
            Estes projetos demonstram minha capacidade de criar soluções web inovadoras e eficientes, 
            utilizando as mais recentes tecnologias e melhores práticas de desenvolvimento. 
            Minha experiência abrange desde o desenvolvimento frontend com React até a implementação 
            de backends robustos com Node.js, sempre focando na performance, escalabilidade e experiência do usuário.
          </p>
        </motion.div>
      </div>
    </section>
  )
}