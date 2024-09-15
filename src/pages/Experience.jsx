import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaCode, FaDatabase, FaRocket, FaBrain, FaChartLine } from 'react-icons/fa'

const certifications = [
  {
    platform: "DevMedia",
    course: "Autoridade em React.js",
    url: "https://www.devmedia.com.br/certificado/tecnologia/react/itamar-alves-ferreira-junior",
    category: "Frontend"
  },
  {
    platform: "DevMedia",
    course: "Autoridade em JavaScript",
    url: "https://www.devmedia.com.br/certificado/tecnologia/javascript/itamar-alves-ferreira-junior",
    category: "Frontend"
  },
  {
    platform: "DevMedia",
    course: "Autoridade em HTML",
    url: "https://www.devmedia.com.br/certificado/tecnologia/html/itamar-alves-ferreira-junior",
    category: "Frontend"
  },
  {
    platform: "DevMedia",
    course: "Autoridade em CSS",
    url: "https://www.devmedia.com.br/certificado/tecnologia/css/itamar-alves-ferreira-junior",
    category: "Frontend"
  },
  {
    platform: "DevMedia",
    course: "Autoridade em Node.js",
    url: "https://www.devmedia.com.br/certificado/tecnologia/node-js/itamar-alves-ferreira-junior",
    category: "Backend"
  },
  {
    platform: "Udemy",
    course: "PHP do 0 a Maestria + 4 Projetos Incríveis",
    url: "https://www.udemy.com/certificate/UC-1a858c18-058f-45a8-a6c7-d91e7c5c4d02/",
    category: "Backend"
  },
  {
    platform: "Udemy",
    course: "Oracle Database SQL Certified Expert",
    url: "https://www.udemy.com/certificate/UC-66f0be2f-5696-42cd-a969-1c5a5c4c1544/",
    category: "Database"
  },
  {
    platform: "Rocketseat",
    course: "O básico de Git e GitHub",
    url: "https://app.rocketseat.com.br/certificates/0c43fc12-4397-4ebb-915a-cc506356a47d",
    category: "DevOps"
  },
  {
    platform: "Universidade Franciscana",
    course: "Ciência de Dados com Python",
    credential: "Certificado registrado sob n° 8, livro 00642OL. Santa Maria-RS, 23 de julho de 2022.",
    category: "Data Science"
  },
  {
    platform: "Udemy",
    course: "Análise de Requisitos de Software com Histórias de Usuários",
    url: "https://www.udemy.com/certificate/UC-135ef5c0-2c86-4467-858a-6b17b9bf7ebb/",
    category: "Software Engineering"
  },
  {
    platform: "Universidade Franciscana",
    course: "Modelagem de Novos Negócios estratégias para tomada de decisão",
    credential: "Certificado registrado sob n° 1, livro 00579OL. Santa Maria-RS, 22 de outubro de 2021.",
    category: "Business"
  }
]

const categoryIcons = {
  Frontend: <FaCode />,
  Backend: <FaCode />,
  Database: <FaDatabase />,
  DevOps: <FaRocket />,
  "Data Science": <FaChartLine />,
  "Software Engineering": <FaBrain />,
  Business: <FaRocket />
}

const Experience = () => {
  const [filter, setFilter] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCerts = certifications.filter(cert => 
    (selectedCategory === "All" || cert.category === selectedCategory) &&
    (cert.course.toLowerCase().includes(filter.toLowerCase()) ||
     cert.platform.toLowerCase().includes(filter.toLowerCase()))
  )

  const categories = ["All", ...new Set(certifications.map(cert => cert.category))]

  return (
    <section className="py-20 bg-black text-lime-500 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-lime-400 font-inter"
        >
          Certificações e Experiência
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 bg-gray-900 p-8 rounded-xl shadow-lg border-2 border-lime-500"
        >
          <h3 className="text-3xl font-bold mb-4 text-lime-400">Destaques de Competências</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-lime-100">
            <li className="flex items-center"><FaCode className="mr-2 text-lime-500" /> Desenvolvimento Frontend e Backend</li>
            <li className="flex items-center"><FaDatabase className="mr-2 text-lime-500" /> Gerenciamento de Banco de Dados</li>
            <li className="flex items-center"><FaChartLine className="mr-2 text-lime-500" /> Ciência de Dados e Análise</li>
            <li className="flex items-center"><FaBrain className="mr-2 text-lime-500" /> Engenharia de Software e Requisitos</li>
            <li className="flex items-center"><FaRocket className="mr-2 text-lime-500" /> Inovação e Estratégia de Negócios</li>
          </ul>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar certificações..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full py-3 px-4 bg-gray-900 text-lime-100 rounded-full border-2 border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lime-500" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-lime-500 text-black'
                    : 'bg-gray-800 text-lime-400 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border-2 border-lime-500 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl text-lime-400 group-hover:scale-110 transition-transform duration-300">
                    {categoryIcons[cert.category]}
                  </span>
                  <span className="text-sm font-semibold text-lime-300 bg-lime-900 px-3 py-1 rounded-full">
                    {cert.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-lime-300 group-hover:text-lime-400 transition-colors duration-300">
                  {cert.course}
                </h3>
                <p className="text-lime-100 mb-4">{cert.platform}</p>
              </div>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-lime-500 text-black font-bold py-2 px-4 rounded-full text-sm transition-all duration-300 hover:bg-lime-400 hover:shadow-xl transform hover:-translate-y-1"
                >
                  Ver Credencial
                </a>
              ) : (
                <p className="text-sm text-lime-300 italic">{cert.credential}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience