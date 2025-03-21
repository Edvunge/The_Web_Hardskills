import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaGitAlt, FaGithub, 
  FaDatabase, FaCode 
} from 'react-icons/fa';
import { 
  SiJavascript, SiSpringboot, SiMongodb, SiMysql, SiTailwindcss, 
  SiPostman, SiExpress, SiCobol, SiC, SiPython 
} from 'react-icons/si';

const Skills = () => {
  return (
    <section name="skills" className="w-full min-h-screen bg-[#0f2847] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00a8e8]">Habilidades</p>
          <p className="py-4 text-lg">Estas são as tecnologias com as quais trabalho</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#00a8e8]">Frontend</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-4">
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaHtml5 size={50} className="w-20 mx-auto text-[#e34c26]" />
              <p className="my-4">HTML5</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaCss3Alt size={50} className="w-20 mx-auto text-[#264de4]" />
              <p className="my-4">CSS3</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiJavascript size={50} className="w-20 mx-auto text-[#f0db4f]" />
              <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaReact size={50} className="w-20 mx-auto text-[#61DBFB]" />
              <p className="my-4">ReactJS</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiTailwindcss size={50} className="w-20 mx-auto text-[#38B2AC]" />
              <p className="my-4">Tailwind CSS</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#00a8e8]">Backend</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-4">
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaJava size={50} className="w-20 mx-auto text-[#f89820]" />
              <p className="my-4">Java</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiSpringboot size={50} className="w-20 mx-auto text-[#6DB33F]" />
              <p className="my-4">Spring Boot</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaNodeJs size={50} className="w-20 mx-auto text-[#68a063]" />
              <p className="my-4">Node.js</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiExpress size={50} className="w-20 mx-auto text-white" />
              <p className="my-4">Express</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiMysql size={50} className="w-20 mx-auto text-[#00758F]" />
              <p className="my-4">MySQL</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiMongodb size={50} className="w-20 mx-auto text-[#4DB33D]" />
              <p className="my-4">MongoDB</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#00a8e8]">Ferramentas & Outras Linguagens</h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-4">
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaGitAlt size={50} className="w-20 mx-auto text-[#F1502F]" />
              <p className="my-4">Git</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaGithub size={50} className="w-20 mx-auto text-white" />
              <p className="my-4">GitHub</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiPostman size={50} className="w-20 mx-auto text-[#FF6C37]" />
              <p className="my-4">Postman</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiCobol size={50} className="w-20 mx-auto text-[#005ca5]" />
              <p className="my-4">COBOL</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiC size={50} className="w-20 mx-auto text-[#00599C]" />
              <p className="my-4">C</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <SiPython size={50} className="w-20 mx-auto text-[#306998]" />
              <p className="my-4">Python</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaDatabase size={50} className="w-20 mx-auto text-[#336791]" />
              <p className="my-4">SQL</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-500 py-6 rounded-lg">
              <FaCode size={50} className="w-20 mx-auto text-[#FF8C00]" />
              <p className="my-4">REST APIs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;