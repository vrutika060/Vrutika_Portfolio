
// import React from "react";
// import Navbar from "./components/navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// function App() {
//   return (
//     <div >
//       <div>
//     <Navbar/>
//     </div>
//     <div>
//     <Home/>
//     </div>
//    <div>
//     <About/>
//    </div>
//    <div>
//     <Skills/>
//    </div>
//    <div>
//     <Projects/>
//    </div>
//    <div>
//     <Contact/>
//    </div>
//     </div>
    
//   );
// }

// export default App;


import React from "react";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
        <div id="Certificates">
          <Certificates/>
        </div>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

