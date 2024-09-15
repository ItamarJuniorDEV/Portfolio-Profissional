import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaRocket } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://formspree.io/f/mjkbdaar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      setStatus("Obrigado! Sua mensagem foi enviada.")
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus("Oops! Houve um problema ao enviar sua mensagem.")
    }
  }

  return (
    <section className="py-20 bg-black text-lime-500">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center text-lime-400 font-inter"
        >
          Vamos Inovar Juntos
        </motion.h2>
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 rounded-2xl shadow-2xl border-2 border-lime-500 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500"></div>
            <div>
              <h3 className="text-4xl font-bold mb-12 text-lime-400 font-inter text-center relative">
                Informações de Contato
                <span className="absolute -top-6 -right-6 text-6xl text-lime-500 opacity-20">
                  <FaRocket />
                </span>
              </h3>
              <div className="space-y-10 font-inter relative z-10">
                <motion.div 
                  className="flex items-center space-x-6 bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <FaMapMarkerAlt className="text-lime-500 text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-lime-300 font-semibold mb-2 text-xl">Endereço</p>
                    <p className="text-lime-100 text-lg">RST 509, 4797, Casa 118</p>
                    <p className="text-lime-100 text-lg">Santa Maria, RS, 97110-800</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-6 bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <FaPhone className="text-lime-500 text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-lime-300 font-semibold mb-2 text-xl">Telefone</p>
                    <a href="tel:+5555991797040" className="text-lime-100 hover:text-lime-400 transition-colors text-lg">(55) 991797040</a>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-6 bg-gray-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <FaEnvelope className="text-lime-500 text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-lime-300 font-semibold mb-2 text-xl">E-mail</p>
                    <a href="mailto:cdajuniorf@gmail.com" className="text-lime-100 hover:text-lime-400 transition-colors text-lg">cdajuniorf@gmail.com</a>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="mt-16 relative z-10">
              <p className="text-2xl text-lime-300 font-bold mb-8 text-center">Pronto para levar sua empresa ao próximo nível?</p>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <motion.a 
                  href="https://linkedin.com/in/itamar-junior-b24006237/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-lime-500 text-black p-4 rounded-full hover:bg-lime-400 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.3 } }}
                >
                  <FaLinkedin className="text-3xl" />
                </motion.a>
                <motion.a 
                  href="https://github.com/ItamarJuniorDEV" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-lime-500 text-black p-4 rounded-full hover:bg-lime-400 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.3 } }}
                >
                  <FaGithub className="text-3xl" />
                </motion.a>
                <motion.a 
                  href="https://wa.me/5555991797040" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-lime-500 text-black p-4 rounded-full hover:bg-lime-400 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.3 } }}
                >
                  <FaWhatsapp className="text-3xl" />
                </motion.a>
              </div>
              <div className="text-center">
                <motion.a
                  href="https://wa.me/5555991797040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-lime-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-lime-400 hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Iniciar Conversa Inovadora
                </motion.a>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime-500 rounded-full filter blur-3xl opacity-20 -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500 rounded-full filter blur-3xl opacity-5 -z-10"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-2 bg-gray-900 p-8 rounded-2xl shadow-xl border-2 border-lime-500"
          >
            <h3 className="text-3xl font-bold mb-8 text-lime-400 font-inter text-center">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-lime-400 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border-2 border-lime-500 rounded-md text-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-lime-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border-2 border-lime-500 rounded-md text-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-lime-400 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border-2 border-lime-500 rounded-md text-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-lime-500 text-black font-bold py-3 px-4 rounded-md transition-all duration-300 hover:bg-lime-400 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensagem
              </motion.button>
            </form>
            {status && (
              <p className="mt-4 text-center text-lime-300">{status}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}