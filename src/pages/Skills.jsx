import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer, FaBrain, FaRocket } from 'react-icons/fa'

const skillCategories = [
  {
    name: "Desenvolvimento Frontend",
    icon: <FaCode />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ]
  },
  {
    name: "Desenvolvimento Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PHP", level: 75 },
    ]
  },
  {
    name: "Banco de Dados",
    icon: <FaDatabase />,
    skills: [
      { name: "SQL", level: 85 },
    ]
  },
  {
    name: "Engenharia de Software",
    icon: <FaBrain />,
    skills: [
      { name: "Análise de Requisitos", level: 80 },
      { name: "Git & GitHub", level: 85 },
    ]
  },
  {
    name: "Ciência de Dados",
    icon: <FaRocket />,
    skills: [
      { name: "Python", level: 70 },
      { name: "Modelagem de Negócios", level: 75 },
    ]
  },
]

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-lime-300">{name}</span>
      <span className="text-sm font-medium text-lime-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div 
        className="bg-lime-500 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  </div>
)

const Skills = () => {
  return (
    <section className="py-20 bg-black text-lime-500 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-lime-400 font-inter"
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border-2 border-lime-500"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl text-lime-400 mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-lime-300">{category.name}</h3>
              </div>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-lime-500"
        >
          <h3 className="text-3xl font-bold mb-6 text-lime-400 text-center">Compromisso com a Inovação</h3>
          <p className="text-lime-100 text-lg leading-relaxed">
            Minha paixão pela tecnologia e meu compromisso com o aprendizado contínuo me permitem estar sempre na vanguarda das últimas tendências e inovações. Estou constantemente aprimorando minhas habilidades e explorando novas tecnologias para criar soluções inovadoras e eficientes que impulsionam o progresso e transformam ideias em realidade.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills