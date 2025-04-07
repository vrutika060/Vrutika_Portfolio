
// responsive code 
// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Contact = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS for animations
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#253959] flex items-center justify-center p-6">
//       <div
//         data-aos="zoom-in-down"
//         data-aos-easing="ease-out-cubic"
//         data-aos-duration="2000"
//         className="w-full max-w-lg bg-[#12264a] shadow-lg shadow-cyan-500/50 p-8 rounded-lg"
//       >
//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-center mb-6 text-white">
//           Contact <span className="text-blue-400">Me!</span>
//         </h1>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Full Name and Email Address */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg shadow-cyan-500/50 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg shadow-cyan-500/50 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Mobile Number and Email Subject */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg shadow-cyan-500/50 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <input
//               type="text"
//               placeholder="Email Subject"
//               className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg shadow-cyan-500/50 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Your Message */}
//           <textarea
//             placeholder="Your Message"
//             rows="4"
//             className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg shadow-cyan-500/50 text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           ></textarea>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // export default Contact;


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";

// const Contact = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS for animations
//   }, []);

//   return (
//     <div className="min-h-screen bg-[#253959] flex flex-col items-center justify-center p-6">
//       {/* Heading and Intro Text */}
//       <h1 className="text-4xl font-bold text-white text-center mb-4">
//         Contact
//       </h1>
//       <p className="text-lg text-gray-300 text-center mb-8">
//         If you have any questions or would like to get in touch, please feel free to contact me using the below form.
//       </p>

//       {/* Main Container */}
//       <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
//         {/* Contact Info Box */}
//         <div
//           data-aos="fade-right"
//           data-aos-duration="2000"
//           className="w-full md:w-1/3 bg-[#12264a] p-6 rounded-lg shadow-lg shadow-cyan-500/50 text-white"
//         >
//           <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
//           <p className="mb-2">📍 <strong>Address:</strong> Belagavi, India</p>
//           <p className="mb-2">📞 <strong>Call Me:</strong> +91 8050772852</p>
//           <p>📧 <strong>Email Me:</strong> birje.vrutika22@gmail.com</p>
//         </div>

//         {/* Contact Form */}
//         <div
//           data-aos="fade-left"
//           data-aos-duration="2000"
//           className="w-full md:w-2/3 bg-[#12264a] shadow-lg shadow-cyan-500/50 p-8 rounded-lg"
//         >
//           <h2 className="text-3xl font-bold text-center mb-6 text-white">
//             Contact <span className="text-blue-400">Me!</span>
//           </h2>
//           <form className="space-y-4">
//             {/* Full Name and Email Address */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             {/* Mobile Number and Email Subject */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               <input
//                 type="text"
//                 placeholder="Mobile Number"
//                 className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Email Subject"
//                 className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             {/* Your Message */}
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             ></textarea>
//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-8 text-center text-white">
//         <p className="text-lg">© Copyright Vrutika Birje All Rights Reserved</p>
//         <div className="flex justify-center mt-4 space-x-4">
//           <a href="https://www.instagram.com/thevrutikabirje/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-400">
//             <FaInstagram />
//           </a>
//           <a href="https://www.linkedin.com/in/vrutika-birje-01ab29286" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-400">
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// formspree form handling
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  // State for Form Data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // Status for success/error messages

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mgvanzkl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#253959] flex flex-col items-center justify-center p-6">
      {/* Heading and Intro Text */}
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Contact
      </h1>
      <p className="text-lg text-gray-300 text-center mb-8">
        If you have any questions or would like to get in touch, please feel free to contact me using the form below.
      </p>

      {/* Main Container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Contact Info Box */}
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="w-full md:w-1/3 bg-[#12264a] p-6 rounded-lg shadow-lg shadow-cyan-500/50 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-2">📍 <strong>Address:</strong> Belagavi, India</p>
          <p className="mb-2">📞 <strong>Call Me:</strong> +91 8050772852</p>
          <p>📧 <strong>Email Me:</strong> birje.vrutika22@gmail.com</p>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="w-full md:w-2/3 bg-[#12264a] shadow-lg shadow-cyan-500/50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Contact <span className="text-blue-400">Me!</span>
          </h2>

          {/* Success/Error Message */}
          {status === "success" && (
            <p className="text-green-400 text-center mb-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mb-4">Error sending message. Try again later.</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name and Email Address */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Mobile Number and Email Subject */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Your Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#0a1a34] shadow-lg text-white border border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md font-bold hover:bg-blue-600 transition"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-center text-white">
        <p className="text-lg">© Copyright Vrutika Birje All Rights Reserved</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://www.instagram.com/thevrutikabirje/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-2xl hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/vrutika-birje-01ab29286" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

