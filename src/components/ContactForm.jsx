import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const response = await fetch('https://formspree.io/f/https://formspree.io/f/mjkbdaar', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok) {
      setStatus("Obrigado! Sua mensagem foi enviada.")
      form.reset()
    } else {
      setStatus("Oops! Houve um problema ao enviar sua mensagem.")
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl"
    >
      <h2 className="text-2xl font-bold text-lime-400 mb-6">Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lime-300 mb-2">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lime-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lime-300 mb-2">Mensagem</label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-lime-500 text-black font-bold py-2 px-4 rounded hover:bg-lime-600 transition duration-300"
        >
          Enviar Mensagem
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-lime-300">{status}</p>
      )}
    </motion.div>
  )
}

export default ContactForm