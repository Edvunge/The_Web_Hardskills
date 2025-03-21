import React from 'react';
import { FaCode, FaDatabase } from 'react-icons/fa';

const Experience = () => {
  return (
    <section name="experience" className="w-full min-h-screen bg-[#0a192f] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00a8e8]">Experiência</p>
          <p className="py-4 text-lg">Minha experiência profissional</p>
        </div>

        <div className="w-full mt-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 bg-[#112240] p-6 rounded-lg mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-[#00a8e8] p-3 rounded-full mr-4">
                <FaCode size={24} className="text-[#0a192f]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Junior Software Engineer</h3>
                <p className="text-[#00a8e8]">Capgemini - Lisboa, Portugal</p>
                <p className="text-sm italic">Janeiro 2023 - Setembro 2023</p>
              </div>
            </div>
            <p className="text-lg mb-4">Systems Development - Banco BPI</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Participação no desenvolvimento e manutenção de sistemas bancários.</li>
              <li>Uso das seguintes tecnologias e ferramentas: COBOL, JCL, CICS, RTC e DB2.</li>
              <li>Implementação e otimização de processos mainframe.</li>
              <li>Análise e correção de incidentes, garantindo a estabilidade do sistema.</li>
              <li>Colaboração com equipes multidisciplinares para melhoria contínua de soluções.</li>
            </ul>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500 bg-[#112240] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-[#00a8e8] p-3 rounded-full mr-4">
                <FaDatabase size={24} className="text-[#0a192f]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Software Engineer Trainee</h3>
                <p className="text-[#00a8e8]">Indra - Lisboa, Portugal</p>
                <p className="text-sm italic">Novembro 2021 - Março 2022</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li>Desenvolvimento e manutenção, garantindo integração eficiente de backend.</li>
              <li>Manutenção e otimização de código, garantindo alta performance e escalabilidade.</li>
              <li>Integração de APIs usando JSON para comunicação entre sistemas.</li>
              <li>Versionamento de código e colaboração em equipe usando Bitbucket e SourceTree.</li>
              <li>Linguagens: Java Core, Java Streams, OOP.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;