

// aditional info about my codecrest

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import myPhoto from "../assets/vruimg1.jpg"; // Ensure the path is correct

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       offset: 200, // Offset from the top of the screen
//       easing: "ease-in-out", // Smooth easing effect
//       once: true, // Ensures animation triggers only once when scrolling
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#19274b] text-white py-16 px-6 md:px-10 lg:px-16">
//       <div className="max-w-6xl mx-auto">
//         {/* About Me Section */}
//         <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
//           <span className="text-white">About</span> <span className="text-indigo-500">Me</span>
//         </h1>

//         {/* Image Section */}
//         <div className="flex justify-center mb-12" data-aos="zoom-in">
//           <img
//             src={myPhoto}
//             alt="My Profile"
//             className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-indigo-500 shadow-lg shadow-cyan-500/50"
//           />
//         </div>

//         {/* Grid Layout for Education & Experience */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Education Section */}
//           <div data-aos="fade-up">
//             <h2 className="text-2xl font-semibold mb-6">Education</h2>
//             <div className="relative">
//               <div className="absolute top-0 left-5 h-full w-1 bg-indigo-500"></div>
//               <div className="pl-12 space-y-8">
//                 <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
//                   <h3 className="text-lg font-semibold text-indigo-400">Master Degree - KLE University</h3>
//                   <p className="text-gray-400 text-sm">MCA</p>
//                   <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//                     Dr. M. S. Sheshgiri College, Belagavi Campus
//                   </p>
//                 </div>
//                 <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
//                   <h3 className="text-lg font-semibold text-indigo-400">Bachelor Degree - Rani Channamma University</h3>
//                   <p className="text-gray-400 text-sm">BSC - PMCom Combination</p>
//                   <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//                     Govindram Seksaria Science College, Belagavi
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Experience Section */}
//           <div data-aos="fade-up" data-aos-delay="200">
//             <h2 className="text-2xl font-semibold mb-6">Experience</h2>
//             <div className="relative">
//               <div className="absolute top-0 left-5 h-full w-1 bg-indigo-500"></div>
//               <div className="pl-12 space-y-8">
//                 <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
//                   <h3 className="text-lg font-semibold text-indigo-400">Pre-Education - Karnataka State Board</h3>
//                   <p className="text-gray-400 text-sm">12th</p>
//                   <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//                     Govindram Seksaria Science College, Belagavi
//                   </p>
//                 </div>
//                 <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
//                   <h3 className="text-lg font-semibold text-indigo-400">Internship - Jabsa Infotech</h3>
//                   <p className="text-gray-400 text-sm">Web Designing</p>
//                   <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//                     Gained hands-on experience in UI/UX development and front-end technologies.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* About CodeCrest Section First */}
//         <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
//           <h2 className="text-2xl font-bold text-cyan-500 mb-6">About My CodeCrest</h2>
//           <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
//             CodeCrest is my personal brand dedicated to providing high-quality software solutions.
//             I specialize in building responsive and scalable web applications that cater to various needs.
//           </p>
//         </div>

//         {/* Services Section Below About CodeCrest */}
//         <div className="mt-16" data-aos="fade-up" data-aos-delay="500">
//           <h2 className="text-2xl font-bold text-cyan-500 text-center mb-10">Services I Provide</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {[ 
//               { title: "Web Development", desc: "Stunning websites and interactive web apps for your business." },
//               { title: "Machine Learning", desc: "Harness AI for intelligent predictions and data-driven insights." },
//               { title: "Deep Learning", desc: "Advanced neural networks for cutting-edge solutions." },
//               { title: "Mobile App Development", desc: "Seamless and user-friendly mobile applications tailored to your needs." },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-[#1e2a47] p-6 rounded-md shadow-lg shadow-cyan-500/50 text-center"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 200}
//               >
//                 <h3 className="text-xl font-semibold text-indigo-400 mb-3">{service.title}</h3>
//                 <p className="text-gray-400">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myPhoto from "../assets/vruimg1.jpg"; // Ensure the path is correct

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset from the top of the screen
      easing: "ease-in-out", // Smooth easing effect
      once: true, // Ensures animation triggers only once when scrolling
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#19274b] text-white py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          <span className="text-white">About</span> <span className="text-indigo-500">Me</span>
        </h1>

        {/* Image Section */}
        <div className="flex justify-center mb-12" data-aos="zoom-in">
          <img
            src={myPhoto}
            alt="My Profile"
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-indigo-500 shadow-lg shadow-cyan-500/50"
          />
        </div>

        {/* Grid Layout for Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Section */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="relative">
              <div className="absolute top-0 left-5 h-full w-1 bg-indigo-500"></div>
              <div className="pl-12 space-y-8">
                <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
                  <h3 className="text-lg font-semibold text-indigo-400">Master Degree - KLE University</h3>
                  <p className="text-gray-400 text-sm">MCA</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Dr. M. S. Sheshgiri College, Belagavi Campus
                  </p>
                </div>
                <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
                  <h3 className="text-lg font-semibold text-indigo-400">Bachelor Degree - Rani Channamma University</h3>
                  <p className="text-gray-400 text-sm">BSC - PMCom Combination</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Govindram Seksaria Science College, Belagavi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="relative">
              <div className="absolute top-0 left-5 h-full w-1 bg-indigo-500"></div>
              <div className="pl-12 space-y-8">
                <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
                  <h3 className="text-lg font-semibold text-indigo-400">Pre-Education - Karnataka State Board</h3>
                  <p className="text-gray-400 text-sm">12th</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Govindram Seksaria Science College, Belagavi
                  </p>
                </div>
                <div className="relative bg-[#1e2a47] p-4 rounded-md shadow-lg shadow-cyan-500/50">
                  <h3 className="text-lg font-semibold text-indigo-400">Internship - Jabsa Infotech</h3>
                  <p className="text-gray-400 text-sm">Web Designing</p>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Gained hands-on experience in UI/UX development and front-end technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About CodeCrest Section First */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-bold text-cyan-500 mb-6">About My CodeCrest</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            CodeCrest is my personal brand dedicated to providing high-quality software solutions.
            I specialize in building responsive and scalable web applications that cater to various needs.
          </p>
          <p className="text-indigo-400 text-lg mt-4">
            Visit: <a href="https://codecrestgithubio-production.up.railway.app/" className="underline hover:text-indigo-300"> <span className="text-white font-bold" >Code</span><span className="text-orange-500 font-bold">Crest</span> Website</a>
          </p>
        </div>

        {/* Services Section Below About CodeCrest */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="500">
          <h2 className="text-2xl font-bold text-cyan-500 text-center mb-10">Services I Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[ 
              { title: "Web Development", desc: "Stunning websites and interactive web apps for your business." },
              { title: "Machine Learning", desc: "Harness AI for intelligent predictions and data-driven insights." },
              { title: "Deep Learning", desc: "Advanced neural networks for cutting-edge solutions." },
              { title: "Mobile App Development", desc: "Seamless and user-friendly mobile applications tailored to your needs." },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#1e2a47] p-6 rounded-md shadow-lg shadow-cyan-500/50 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
