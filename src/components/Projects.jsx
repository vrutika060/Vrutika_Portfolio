
//added todolist image photo
// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import todolistImage from '../assets/todolistimage.jpg'; // Correct path to the image

// const Projects = () => {
//   const projects = [
//     {
//       title: "Todo-List_App",
//       description:
//         "A simple to-do list app to manage daily tasks. Built using React and deployed on Netlify.",
//       image: todolistImage, // Using the imported image
//       url: "https://vrup1-todo-list-app.netlify.app/", // Add the project URL here
//     },
//     {
//       title: "E-Shop - Online Shopping Platform",
//       description:
//         "An e-commerce platform providing seamless online shopping experiences with secure payment options.",
//       image: "https://via.placeholder.com/300", // Replace with actual image URL
//       url: null, // No URL available
//     },
//   ];

//   useEffect(() => {
//     AOS.init(); // Initialize AOS for animations
//   }, []);

//   return (
//     <div className="h-auto bg-[#0a1a34] text-white py-16 px-6 sm:px-8 md:px-12 lg:px-20">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-center mb-12 text-white">
//           RECENT WORKS
//         </h1>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#12264a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
//               data-aos="flip-right"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="2000"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-md mb-6"
//               />

//               {/* Title */}
//               <h2 className="text-xl font-semibold text-blue-400 mb-4">
//                 {project.title}
//               </h2>

//               {/* Description */}
//               <p className="text-sm text-gray-300 mb-4">
//                 {project.description}
//               </p>

//               {/* View Project Button */}
//               {project.url && (
//                 <a
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 underline hover:text-white"
//                 >
//                   View Project
//                 </a>
//               )}

//               {/* Arrow Icon */}
//               <div className="text-blue-500 text-right mt-2">
//                 <span className="text-lg font-bold hover:text-white cursor-pointer">
//                   →
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Import project images
// import eshop from '../assets/eshop.png.png';
// import detect from '../assets/detectionapp.png.png';
// import editor from '../assets/codeeditor.png.png';
// import todolist from '../assets/todolistimage.jpg';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Alumni Portal",
//       description: "College Alumni Portal built using the MERN stack.",
//       image: eshop,
//       tech: "Technology: MERN Stack",
//     },
//     {
//       title: "TouristHub",
//       description: "Website for tourists to find the best places and guides.",
//       image: detect,
//       tech: "Technology: HTML / CSS / PHP / SQL",
//     },
//     {
//       title: "Stock Price Predictor",
//       description: "Predicts stock prices using historical data and AI models.",
//       image: editor,
//       tech: "Technology: Python / Machine Learning / Flask",
//     },
//     {
//       title: "E-Shop - Online Shopping Platform",
//       description: "An e-commerce platform providing seamless online shopping experiences.",
//       image: todolist,
//       tech: "Technology: React / Node.js / MongoDB",
//     },
//   ];

//   useEffect(() => {
//     AOS.init(); // Initialize AOS for animations
//   }, []);

//   return (
//     <div className="h-auto bg-[#0a1a34] text-white py-16 px-6 sm:px-8 md:px-12 lg:px-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-12 text-white">
//           RECENT WORKS
//         </h1>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#12264a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
//               data-aos="flip-right"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="2000"
//             >
//               {/* Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-md mb-6"
//               />

//               {/* Title */}
//               <h2 className="text-xl font-semibold text-blue-400 mb-2">
//                 {project.title}
//               </h2>

//               {/* Description */}
//               <p className="text-sm text-gray-300 mb-2">
//                 {project.description}
//               </p>

//               {/* Technology Used */}
//               <span className="bg-gray-700 px-3 py-1 rounded-md text-sm text-white">
//                 {project.tech}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Import project images (Ensure correct extensions)
// import eshop from '../assets/eshop.png.png';
// import detect from '../assets/detectionapp.png.png';
// import editor from '../assets/codeeditor.png.png';
// import todolist from '../assets/todolistimage.jpg';
// import crest from '../assets/codecrest.png.png'; // Add new image here

// const Projects = () => {
//   const projects = [
//     {
//       title: "e-shop",
//       description: "An e-commerce platform providing seamless online shopping experiences.",
//       image: eshop,
//       tech: "Technology: MERN Stack",
//       demo: "Coming Soon...",
//     },
//     {
//       title: "Potato Leaf diseases detection app",
//       description: "An AI-powered application for detecting potato leaf diseases using image processing and machine learning.",
//       image: detect,
//       tech: "Technology: Machine learning",
//       demo: "Coming Soon...",
//     },
//     {
//       title: "Online collaboration code editor",
//       description: "An online collaborative code editor enabling real-time coding and collaboration with multiple users.",
//       image: editor,
//       tech: "Technology: MERN Stack",
//       demo: "Coming Soon...",
//     },
//     {
//       title: "Todolist App",
//       description: "A simple and intuitive to-do list app for managing tasks efficiently with add, edit, and delete functionalities.",
//       image: todolist,
//       tech: "Technology: React.js , Tailwind , Javascript",
//       demo: "Coming Soon...",
//     },
//     {
//       title: "CodeCrest",  // Change this
//       description: "CodeCrest is a dynamic platform dedicated to offering a range of services tailored to students, enhancing their learning experience and academic growth.",
//       image: crest,
//       tech: "Technology: MERN Stack",
//       demo: "https://codecrestgithubio-production.up.railway.app/",
//     },
//   ];

//   useEffect(() => {
//     AOS.init(); // Initialize AOS for animations
//   }, []);

//   return (
//     <div className="h-auto bg-[#0a1a34] text-white py-16 px-6 sm:px-8 md:px-12 lg:px-20">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-12 text-white">
//           RECENT WORKS
//         </h1>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#12264a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
//               data-aos="flip-right"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="2000"
//             >
//               {/* Square Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-48 h-48 object-cover rounded-md mx-auto mb-6"
//               />

//               {/* Title */}
//               <h2 className="text-xl font-semibold text-blue-400 mb-2 text-center">
//                 {project.title}
//               </h2>

//               {/* Description */}
//               <p className="text-sm text-gray-300 mb-2 text-center">
//                 {project.description}
//               </p>

//               {/* Technology Used */}
//               <span className="block bg-gray-700 px-3 py-1 rounded-md text-sm text-white text-center">
//                 {project.tech}
//               </span>

//               {/*Demo*/}
//               <span className="text-1xl text-gray-500 ">
//                 {project.demo}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import project images (Ensure correct extensions)
import eshop from '../assets/eshop.png.png';
import detect from '../assets/detectionapp.png.png';
import editor from '../assets/codeeditor.png.png';
import todolist from '../assets/todolistimage.jpg';
import crest from '../assets/codecrest.png.png'; // Add new image here

const Projects = () => {
  const projects = [
    {
      title: "e-shop",
      description: "An e-commerce platform providing seamless online shopping experiences.",
      image: eshop,
      tech: "Technology: MERN Stack",
      demo: "Coming Soon...",
    },
    {
      title: "Potato Leaf Diseases Detection App",
      description: "An AI-powered application for detecting potato leaf diseases using image processing and machine learning.",
      image: detect,
      tech: "Technology: Machine Learning",
      demo: "Coming Soon...",
    },
    {
      title: "Online Collaboration Code Editor",
      description: "An online collaborative code editor enabling real-time coding and collaboration with multiple users.",
      image: editor,
      tech: "Technology: MERN Stack",
      demo: "Coming Soon...",
    },
    {
      title: "Todolist App",
      description: "A simple and intuitive to-do list app for managing tasks efficiently with add, edit, and delete functionalities.",
      image: todolist,
      tech: "Technology: React.js, Tailwind, JavaScript",
      demo: "Coming Soon...",
    },
    {
      title: "CodeCrest",
      description: "CodeCrest is a dynamic platform dedicated to offering a range of services tailored to students, enhancing their learning experience and academic growth.",
      image: crest,
      tech: "Technology: MERN Stack",
      demo: "https://codecrestgithubio-production.up.railway.app/",
    },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  return (
    <div className="h-auto bg-[#0a1a34] text-white py-16 px-6 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-white">
          RECENT WORKS
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#12264a] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              {/* Square Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-48 h-48 object-cover rounded-md mx-auto mb-6"
              />

              {/* Title */}
              <h2 className="text-xl font-semibold text-blue-400 mb-2 text-center">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-2 text-center">
                {project.description}
              </p>

              {/* Technology Used */}
              <span className="block bg-gray-700 px-3 py-1 rounded-md text-sm text-white text-center">
                {project.tech}
              </span>

              {/* Demo Link */}
              {project.demo !== "Coming Soon..." ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:underline text-center mt-2"
                >
                  View Demo
                </a>
              ) : (
                <span className="block text-gray-500 text-center mt-2">{project.demo}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;


