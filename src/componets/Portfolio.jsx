import React from "react";
import myImage from "../assets/me.jpg";
import { motion } from "framer-motion";

function navigateToUrl() {
  const cvUrl =
    "https://drive.google.com/file/d/1PyL1eWm7zp-2L6wPSwzzzbPiUXoiHZsj/view?usp=drive_link";
  window.open(cvUrl, "_blank");
}

const Portfolio = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-gray-100 via-pink-50 to-gray-100 overflow-hidden">
      
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          className="absolute w-72 h-72 bg-pink-300 rounded-full opacity-30 top-10 left-10"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div 
          className="absolute w-60 h-60 bg-purple-300 rounded-full opacity-20 bottom-20 right-20"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 gap-12">

        {/* Left: Image */}
        <motion.div
          className="flex-[40%] flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={myImage}
            alt="Danushan Ravendran"
            className="rounded-3xl shadow-2xl border-4 border-gray-200 object-cover max-h-[550px]"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="flex-[60%] flex flex-col items-center text-center lg:text-left gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-Jost font-semibold text-gray-600 tracking-wide">
            WELLAWATAI, COLOMBO, SRI LANKA
          </h2>
          <h1 className="text-4xl md:text-6xl font-Butler-Free-Lgt text-gray-900 leading-tight">
            Make your <span className="text-pink-500">next move</span> your best move.
          </h1>
          <p className="text-gray-700 md:text-lg max-w-lg">
            I am a passionate Flutter & React Developer delivering scalable, high-performance mobile and web applications. I focus on UI/UX excellence and clean, modern design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="mailto:Danuthasan008@gmail.com"
              className="px-8 py-3 text-white font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Hire Me
            </a>
            <button
              onClick={navigateToUrl}
              className="px-8 py-3 font-bold rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-md"
            >
              Download CV
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;
