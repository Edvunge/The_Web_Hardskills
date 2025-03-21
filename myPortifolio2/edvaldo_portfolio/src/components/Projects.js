import React from 'react';
import { FaGlobe } from 'react-icons/fa';

const Projects = () => {
  return (
    <section name="projects" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00a8e8]">Projetos</p>
          <p className="py-4 text-lg">Projetos em que estou trabalhando</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="shadow-md shadow-[#040c16] bg-[#112240] rounded-lg overflow-hidden hover:scale-105 duration-500">
            <div className="bg-[#193773] h-40 flex items-center justify-center">
              <FaGlobe size={80} className="text-[#00a8e8]" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-[#00a8e8]">KUTANGA ZWELA</h3>
              <p className="text-lg mb-4">
                Plataforma para ensino e aprendizagem de línguas nacionais angolanas
              </p>
              <p className="mb-4">
                Atualmente estou desenvolvendo uma plataforma dedicada ao ensino e aprendizagem das línguas nacionais de Angola,
                contribuindo para a preservação e difusão da cultura linguística angolana.
              </p>
              <p className="text-[#8892b0]">
                <span className="font-bold">Tecnologias utilizadas:</span> ReactJS, Next.js, Clark, TypeScript
              </p>
              <div className="mt-4">
                <button className="bg-[#00a8e8] text-[#0a192f] px-6 py-3 rounded-md font-semibold hover:bg-[#0077b6] duration-300">
                  Em Desenvolvimento
                </button>
              </div>
            </div>
          </div>

          {/* Espaço para projetos adicionais */}
          <div className="shadow-md shadow-[#040c16] bg-[#112240] rounded-lg overflow-hidden flex flex-col items-center justify-center p-8 hover:scale-105 duration-500">
            <h3 className="text-2xl font-bold mb-4 text-center">Mais Projetos em Breve</h3>
            <p className="text-lg text-center mb-6">
              Estou constantemente trabalhando em novos projetos e aprimorando minhas habilidades.
            </p>
            <div className="w-20 h-20 rounded-full bg-[#193773] flex items-center justify-center">
              <span className="text-4xl text-[#00a8e8]">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;