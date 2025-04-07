
import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiTypescript, SiMaterialdesign, SiReact, SiExpress, SiPython, SiC } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const technicalSkills = [
    { name: "C", icon: <SiC className="text-blue-600" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "React Native", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-indigo-500" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
  ];

  const professionalSkills = [
    { name: "Creativity" },
    { name: "Communication" },
    { name: "Problem Solving" },
    { name: "Teamwork" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white py-16 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">
        <span className="text-white">My</span> <span className="text-indigo-500">Skills</span>
      </h1>

      {/* Technical Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 rounded-xl shadow-lg hover:bg-[#1e293b] transition-all duration-300"
            data-aos="zoom-in"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Professional Skills */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Professional <span className="text-indigo-500">Skills</span></h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {professionalSkills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#141b27] text-white px-5 py-3 rounded-full text-lg font-semibold shadow-lg"
              data-aos="flip-up"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
