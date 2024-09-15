import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-lime-500 py-4 border-t border-lime-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0"></div>
        <p className="text-center w-full md:w-1/3 mb-4 md:mb-0 text-xs md:text-base">
          Desenvolvido por Itamar Alves Ferreira Júnior &copy; 2024
        </p>
        <div className="flex justify-center md:justify-end items-center space-x-6 w-full md:w-1/3 md:pr-[76px]">
          <a href="https://github.com/ItamarJuniorDEV" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/itamar-junior-b24006237/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://wa.me/5555991797040" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300">
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer