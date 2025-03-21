import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f2847] text-gray-300 py-4 text-center">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a8e8] transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a8e8] transition">
            LinkedIn
          </a>
          <a href="mailto:seuemail@example.com" className="hover:text-[#00a8e8] transition">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
