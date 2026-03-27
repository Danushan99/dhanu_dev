import React from "react";
import { motion } from "framer-motion";

function navigateToUrl() {
  window.open(
    "https://drive.google.com/file/d/1PyL1eWm7zp-2L6wPSwzzzbPiUXoiHZsj/view?usp=drive_link",
    "_blank",
  );
}

const stacks = [
  {
    name: "Flutter",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  {
    name: "Dart",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    border: "border-cyan-200",
  },
  {
    name: "React",
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
  },
  {
    name: "Firebase",
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
  },
  {
    name: "Node.js",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  {
    name: "FastAPI",
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
  },
  {
    name: "AWS",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const Portfolio = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/40" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Large watermark monogram */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-EB-Garamond font-bold leading-none tracking-tighter text-gray-900"
          style={{ fontSize: "38vw", opacity: 0.025 }}
        >
          DR
        </span>
      </div>

      {/* Animated ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, rgba(236,72,153,0.13) 0%, transparent 68%)",
            top: -140,
            right: -100,
          }}
          animate={{ x: [0, 28, 0], y: [0, 38, 0], scale: [1, 1.08, 1] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            background:
              "radial-gradient(circle, rgba(168,85,247,0.11) 0%, transparent 68%)",
            bottom: -80,
            left: -100,
          }}
          animate={{ x: [0, -22, 0], y: [0, -28, 0], scale: [1, 1.06, 1] }}
          transition={{
            duration: 19,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 280,
            height: 280,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 68%)",
            top: "38%",
            left: "58%",
          }}
          animate={{ x: [0, 20, 0], y: [0, -22, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-16 h-16 border-l-2 border-t-2 border-pink-300/40 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-r-2 border-b-2 border-purple-300/40 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-28 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Location badge */}
          <motion.div variants={fadeUp} className="mb-9">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pink-200 bg-white/70 text-pink-600 text-sm font-medium backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              Colombo, Sri Lanka
            </span>
          </motion.div>

          {/* Eyebrow label */}
          <motion.p
            variants={fadeUp}
            className="font-Jost text-gray-400 text-sm md:text-base tracking-[0.22em] uppercase mb-4"
          >
            Flutter · React · Full Stack
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-EB-Garamond text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.04] text-gray-900 mb-5"
          >
            Danushan{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Ravendran
            </span>
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-7 w-48"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-pink-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-purple-300" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 max-w-2xl leading-snug mb-5"
          >
            Building{" "}
            <span className="relative inline-block">
              <span className="relative z-10">impactful apps</span>
              <span className="absolute bottom-0.5 left-0 w-full h-2.5 bg-pink-200/70 -skew-x-2 rounded-sm" />
            </span>{" "}
            with code &amp; design.
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            I craft beautiful, high-performance mobile and web experiences.
            Specialized in Flutter for cross-platform mobile and React for the
            web — turning complex ideas into seamless products.
          </motion.p>

          {/* Tech badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {stacks.map((s) => (
              <span
                key={s.name}
                className={`px-3.5 py-1 text-xs sm:text-sm rounded-full border font-medium ${s.bg} ${s.text} ${s.border}`}
              >
                {s.name}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="mailto:Danuthasan008@gmail.com"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 20px 48px rgba(236,72,153,0.28)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-9 py-3.5 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/20 transition-shadow text-sm md:text-base"
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={navigateToUrl}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-9 py-3.5 font-semibold rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              Download CV
            </motion.button>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-Jost">
              Scroll
            </span>
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
