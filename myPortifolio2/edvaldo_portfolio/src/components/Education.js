import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section name="education" className="w-full min-h-screen bg-[#0f2847] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00a8e8]">Educação</p>
          <p className="py-4 text-lg">Minha formação acadêmica</p>
        </div>

        <div className="w-full mt-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 bg-[#112240] p-6 rounded-lg flex items-start">
            <div className="bg-[#00a8e8] p-3 rounded-full mr-6 mt-1">
              <FaGraduationCap size={28} className="text-[#0a192f]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Universidade Lusófona</h3>
              <p className="text-[#00a8e8] text-lg">Licenciatura em Informática e Engenharia de Computadores (incompleto)</p>
              <p className="text-sm italic mb-4">Setembro 2019 - 2021</p>
              <p>
                Durante minha formação, adquiri conhecimentos em programação, algoritmos, estruturas de dados,
                desenvolvimento de software, redes de computadores e sistemas operacionais. Apesar de não ter 
                concluído o curso, as disciplinas cursadas me proporcionaram uma base sólida para minha 
                carreira em desenvolvimento de software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;