import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <h1 className="text-2xl font-bold text-[#00a8e8]">Edvaldo Vunge</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#00a8e8] duration-300">
          <Link to="about" smooth={true} duration={500}>Sobre</Link>
        </li>
        <li className="hover:text-[#00a8e8] duration-300">
          <Link to="skills" smooth={true} duration={500}>Habilidades</Link>
        </li>
        <li className="hover:text-[#00a8e8] duration-300">
          <Link to="experience" smooth={true} duration={500}>Experiência</Link>
        </li>
        <li className="hover:text-[#00a8e8] duration-300">
          <Link to="education" smooth={true} duration={500}>Educação</Link>
        </li>
        <li className="hover:text-[#00a8e8] duration-300">
          <Link to="projects" smooth={true} duration={500}>Projetos</Link>
        </li>
        <li className="hover:text-[#00a8e8] duration-300">
          <Link to="contact" smooth={true} duration={500}>Contato</Link>
        </li>
      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav 
        ? 'hidden' 
        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl hover:text-[#00a8e8] duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>Sobre</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#00a8e8] duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Habilidades</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#00a8e8] duration-300">
          <Link onClick={handleClick} to="experience" smooth={true} duration={500}>Experiência</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#00a8e8] duration-300">
          <Link onClick={handleClick} to="education" smooth={true} duration={500}>Educação</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#00a8e8] duration-300">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projetos</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#00a8e8] duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contato</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;