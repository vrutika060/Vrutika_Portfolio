
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-[#0b0f19] shadow-lg z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo / Name */}
//         <div className="text-2xl font-bold text-white">
//           Vrutika<span className="text-indigo-500">.</span>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex space-x-8">
//           <li>
//             <a
//               href="#home"
//               className="text-indigo-400 font-medium border-b-2 border-indigo-500 pb-1"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="text-gray-300 hover:text-indigo-400 transition duration-300"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#skills"
//               className="text-gray-300 hover:text-indigo-400 transition duration-300"
//             >
//               Skills
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className="text-gray-300 hover:text-indigo-400 transition duration-300"
//             >
//               Projects
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="text-gray-300 hover:text-indigo-400 transition duration-300"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f19] shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-white">
          Vrutika<span className="text-indigo-500">.</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0b0f19] md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <a
              href="#home"
              className="block md:inline-block text-indigo-400 font-medium border-b-2 border-indigo-500 pb-1 px-6 md:px-0 md:pb-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block md:inline-block text-gray-300 hover:text-indigo-400 transition duration-300 px-6 md:px-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block md:inline-block text-gray-300 hover:text-indigo-400 transition duration-300 px-6 md:px-0"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Certificates"
              className="block md:inline-block text-gray-300 hover:text-indigo-400 transition duration-300 px-6 md:px-0"
            >
              Certificates
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block md:inline-block text-gray-300 hover:text-indigo-400 transition duration-300 px-6 md:px-0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block md:inline-block text-gray-300 hover:text-indigo-400 transition duration-300 px-6 md:px-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
