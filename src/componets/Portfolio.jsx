import React from "react";
import myImage from "../assets/me.jpg";
import { motion } from "framer-motion";

function navigateToUrl() {
  const cvUrl =
    "https://drive.google.com/file/d/1PyL1eWm7zp-2L6wPSwzzzbPiUXoiHZsj/view?usp=drive_link";
  window.open(cvUrl, "_blank");
}

const Portfolio = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      
      {/* Animated blurred background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute w-80 h-80 bg-pink-400/30 rounded-full blur-[100px] top-10 left-10"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-[120px] bottom-20 right-20"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: "loop" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 gap-16">
        
        {/* Left: Profile Image */}
        <motion.div
          className="flex-[40%] flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src={myImage}
              alt="Danushan Ravendran"
              className="rounded-3xl shadow-xl object-cover max-h-[550px] border-4 border-white"
            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-pink-400/50"></div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="flex-[60%] flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
          initial="hidden"
          whileInView="visible"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-sm md:text-base font-medium text-gray-500 tracking-widest uppercase"
          >
            Colombo, Sri Lanka
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Building{" "}
            <span className="text-pink-500">impactful apps</span> with code &
            design.
          </motion.h1>

       <motion.p
  variants={fadeUp}
  custom={2}
  className="text-gray-700 md:text-lg max-w-xl leading-relaxed"
>
  I&apos;m <span className="font-semibold text-gray-900">Danushan Ravendran</span>, 
  a Flutter & React Developer passionate about crafting modern, 
  scalable mobile and web applications. My focus is on delivering{" "}
  <span className="text-gray-900 font-medium">clean UI/UX, seamless performance,</span> 
  and solutions that make an impact.
</motion.p>


          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="mailto:Danuthasan008@gmail.com"
              className="px-8 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>
            <button
              onClick={navigateToUrl}
              className="px-8 py-3 font-semibold rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
