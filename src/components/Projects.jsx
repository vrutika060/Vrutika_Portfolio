
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


