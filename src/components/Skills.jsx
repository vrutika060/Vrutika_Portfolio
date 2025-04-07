



// import React, { useEffect } from "react";
// import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiMui, SiTypescript, SiExpress, SiReact } from "react-icons/si";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//   }, []);

//   const technicalSkills = [
//     { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
//     { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
//     { name: "Bootstrap", level: 85, icon: <FaBootstrap className="text-purple-500 text-2xl" /> },
//     { name: "Tailwind", level: 80, icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
//     { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-500 text-2xl" /> },
//     { name: "TypeScript", level: 85, icon: <SiTypescript className="text-blue-400 text-2xl" /> },
//     { name: "React.js", level: 85, icon: <FaReact className="text-blue-400 text-2xl" /> },
//     { name: "React Native", level: 80, icon: <SiReact className="text-blue-400 text-2xl" /> },
//     { name: "Material UI", level: 85, icon: <SiMui className="text-indigo-500 text-2xl" /> },
//     { name: "ShadCN", level: 80, icon: <SiTailwindcss className="text-green-500 text-2xl" /> },
//     { name: "Node.js", level: 75, icon: <FaNodeJs className="text-green-500 text-2xl" /> },
//     { name: "Express.js", level: 75, icon: <SiExpress className="text-gray-500 text-2xl" /> },
//     { name: "SQL", level: 80, icon: <SiMysql className="text-blue-700 text-2xl" /> },
//     { name: "MongoDB", level: 70, icon: <SiMongodb className="text-green-600 text-2xl" /> },
//     { name: "Python", level: 85, icon: <FaPython className="text-yellow-500 text-2xl" /> },
//   ];

//   const professionalSkills = [
//     { name: "Creativity", level: 90 },
//     { name: "Communication", level: 85 },
//     { name: "Problem Solving", level: 75 },
//     { name: "Teamwork", level: 85 },
//   ];

//   return (
//     <div className="min-h-screen bg-[#18223e] text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Main Heading */}
//         <h1 className="text-4xl font-bold text-center mb-12">
//           <span className="text-white">My</span>{" "}
//           <span className="text-indigo-500">Skills</span>
//         </h1>

//         <div className="grid grid-cols-2 gap-10">
//           {/* Technical Skills */}
//           <div
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"
//           >
//             <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
//             {technicalSkills.map((skill, index) => (
//               <div key={index} className="mb-4">
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-3">
//                     {skill.icon}
//                     <span className="text-base">{skill.name}</span>
//                   </div>
//                   <span className="text-base">{skill.level}%</span>
//                 </div>
//                 <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden mt-1">
//                   <div
//                     className="h-full bg-indigo-800"
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Professional Skills */}
//           <div
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="2000"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-center">Professional Skills</h2>
//             <div className="grid grid-cols-2 gap-6">
//               {professionalSkills.map((skill, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   {/* Circular Progress */}
//                   <div className="relative w-24 h-24">
//                     <svg className="w-full h-full">
//                       <circle
//                         cx="50%"
//                         cy="50%"
//                         r="40%"
//                         fill="none"
//                         stroke="#374151"
//                         strokeWidth="6"
//                       />
//                       <circle
//                         cx="50%"
//                         cy="50%"
//                         r="40%"
//                         fill="none"
//                         stroke="#6366f1"
//                         strokeWidth="6"
//                         strokeDasharray="251.2"
//                         strokeDashoffset={251.2 - (251.2 * skill.level) / 100}
//                         className="transition-all duration-500"
//                       />
//                     </svg>
//                     <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-base">
//                       {skill.level}%
//                     </div>
//                   </div>
//                   <p className="mt-3 text-base text-center">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


// import React, { useEffect } from "react";
// import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiTypescript, SiMaterialdesign, SiReact, SiExpress, SiPython  } from "react-icons/si";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Skills = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const technicalSkills = [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
//     { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
//     { name: "React.js", icon: <FaReact className="text-blue-400" /> },
//     { name: "React Native", icon: <SiReact className="text-blue-400" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//     { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
//     { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
//     { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
//     { name: "Material UI", icon: <SiMaterialdesign className="text-indigo-500" /> },
//     { name: "Python", icon: <SiPython className="text-yellow-400" /> },
//   ];

//   const professionalSkills = [
//     { name: "Creativity" },
//     { name: "Communication" },
//     { name: "Problem Solving" },
//     { name: "Teamwork" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white py-16 px-6 flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-12">
//         <span className="text-white">My</span> <span className="text-indigo-500">Skills</span>
//       </h1>

//       {/* Technical Skills Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl">
//         {technicalSkills.map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center  p-5 rounded-xl shadow-lg hover:bg-[#1e293b] transition-all duration-300"
//             data-aos="zoom-in"
//           >
//             <div className="text-5xl mb-3">{skill.icon}</div>
//             <p className="text-lg font-semibold">{skill.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Professional Skills */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-6">Professional <span className="text-indigo-500">Skills</span></h2>
//         <div className="flex gap-6 flex-wrap justify-center">
//           {professionalSkills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-[#141b27] text-white px-5 py-3 rounded-full text-lg font-semibold shadow-lg"
//               data-aos="flip-up"
//             >
//               {skill.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


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
