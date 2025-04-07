
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images properly
import internship_C from "../assets/internship_c.jpg";
import machineLearning from "../assets/dl_c.jpg.jpg";
import reactCert from "../assets/AWS_c.jpg";
import pythonCert from "../assets/uDl_c.jpg.jpg";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Use imported images in the array
  const certificates = [
    { name: "Web Development Internship", src: internship_C },
    { name: "Hands On Deep Learning Training", src: machineLearning },
    { name: "AWS Academy Cloud Foundations", src: reactCert },
    { name: "Deep Learning A-Z Neural Network", src: pythonCert },
  ];

  return (
    <div className="min-h-screen bg-[#253959] flex flex-col items-center p-6 text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-indigo-500" data-aos="fade-down">
        Certificates
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-xl" data-aos="fade-up">
        Here are some of the certificates I have earned from various courses and training programs.
      </p>

      {/* Certificate List */}
      <div className="w-full max-w-3xl space-y-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#12264a] p-4 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 300} // Delay each animation
          >
            <span className="text-lg mb-2">{cert.name}</span>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              onClick={() => setSelectedCertificate(cert.src)}
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* Certificate Display Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            <button
              className="absolute top-4 right-4 text-black text-lg bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-400"
              onClick={() => setSelectedCertificate(null)}
            >
              ✖
            </button>
            <div className="max-h-[80vh] overflow-y-auto flex justify-center">
              <img
                src={selectedCertificate}
                alt="Certificate Preview"
                className="w-auto max-h-[75vh] rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
