
//responsive code cv functionality
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myPhoto from "../assets/vrutimg2.jpg";
import "../index.css";

const Home = () => {
  const homeRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentRef = homeRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const elements = currentRef.querySelectorAll("[data-animate]");
        elements.forEach((el) =>
          entry.isIntersecting ? el.classList.add("animate") : el.classList.remove("animate")
        );
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={homeRef}
      className="min-h-screen pt-[100px] bg-[#0b0f19] flex flex-col items-center justify-center text-white px-6"
    >
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center px-4 lg:px-8">
        {/* Left Section */}
        <div data-animate className="fade-in-left text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-500">Vrutika Birje</span>
          </h1>

          <h2 className="text-xl md:text-4xl font-semibold mb-4 text-animate" data-animate>
            Fullstack Developer
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6 fade-in-up text-sm md:text-base" data-animate>
            I am a passionate and motivated individual with a strong foundation in web and app development technologies,
            committed to continuous learning and improvement. With expertise in both frontend and backend development, I can
            build complete, scalable, and high-performing applications.
          </p>

          {/* Download CV Button */}
          <div className="flex justify-center lg:justify-start space-x-4 fade-in-up mb-6" data-animate>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent border-2 border-indigo-500 text-indigo-500 px-5 py-2 rounded hover:bg-indigo-500 hover:text-white transition duration-300"
            >
              Download CV
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-8 fade-in-up" data-animate>
            <a
              href="https://www.linkedin.com/in/vrutika-birje-01ab29286"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/thevrutikabirje/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center relative fade-in-up " data-animate>
          <img
            src={myPhoto}
            alt="Vrutika Birje"
            className="w-44 h-44  md:w-64 md:h-64 object-cover mb-11 rounded-full shadow-lg shadow-cyan-500/50"
            style={{ filter: "brightness(80%) contrast(110%)" }}
          />
          {/* <div className="absolute inset-0 bg-[#1b2640] opacity-20 mix-blend-multiply rounded-full "></div> */}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-black">
            <h2 className="text-lg font-semibold">Download file again?</h2>
            <p className="text-sm text-gray-600 mt-2">Do you want to download</p>
            <a
              href="/Vrutika_Resume.pdf"
              download
              className="text-blue-600 hover:underline mt-1 block"
            >
              Vrutika_Resume.pdf (157.56 KB) again?
            </a>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 mr-2"
              >
                Cancel
              </button>
              <a
                href="/Vrutika_Resume.pdf"
                download
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Download 
              </a>
            </div>
          </div>
        </div>
      )}



      
    </div>
  );
};

export default Home;
