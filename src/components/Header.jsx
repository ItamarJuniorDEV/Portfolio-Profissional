import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { path: "/", label: "HOME" },
    { path: "/sobre", label: "SOBRE" },
    { path: "/certificacoes", label: "CERTIFICAÇÕES" },
    { path: "/habilidades", label: "HABILIDADES" },
    { path: "/projetos", label: "PROJETOS" },
    { path: "/contato", label: "CONTATO" },
  ];

  return (
    <header className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lime-500 text-3xl font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          Itamar Junior
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-lime-500 hover:text-lime-300 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-lime-500">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="block text-lime-500 hover:text-lime-300 transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="border-b border-lime-500 mt-4"></div>
    </header>
  );
};

export default Header;