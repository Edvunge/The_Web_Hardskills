import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const About = () => {
  return (
    <section name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00a8e8]">
              Sobre Mim
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Olá! Sou Edvaldo Vunge, Desenvolvedor de Software.</p>
          </div>
          <div>
            <p className="text-lg">
              Sou um Desenvolvedor Java Junior/Backend apaixonado por leitura, música e tecnologia.
              Além da programação, sou Escoteiro e praticante ativo de xadrez, Judô e Jiu-Jitsu.
              Estou constantemente melhorando minhas habilidades e me esforçando para resolver problemas
              através de software de alta qualidade. Sou um profissional dedicado e motivado por desafios,
              ansioso para contribuir com minha paixão pela programação para uma equipe dinâmica.
            </p>
            <div className="flex justify-start items-center gap-4 mt-6">
              <a href="https://github.com/Edvunge" target="_blank" rel="noreferrer" className="text-[#00a8e8] hover:scale-125 duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/edvaldo-vunge" target="_blank" rel="noreferrer" className="text-[#00a8e8] hover:scale-125 duration-300">
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:edvaldolaurentina07@hotmail.com" className="text-[#00a8e8] hover:scale-125 duration-300">
                <HiOutlineMail size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;