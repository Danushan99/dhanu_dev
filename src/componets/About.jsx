/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaDocker, FaSwift } from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiKotlin,
} from "react-icons/si";

function AboutPage() {
  const skills = [
    { name: "Flutter", icon: <SiFlutter size={26} /> },
    { name: "Dart", icon: <SiDart size={26} /> },
    { name: "React", icon: <FaReact size={26} /> },
    { name: "TypeScript", icon: <SiTypescript size={26} /> },
    { name: "Firebase", icon: <SiFirebase size={26} /> },
    { name: "FastAPI", icon: <SiFastapi size={26} /> },
    { name: "Node.js", icon: <FaNodeJs size={26} /> },
    { name: "Python", icon: <FaPython size={26} /> },
    { name: "Kotlin", icon: <SiKotlin size={26} /> },
    { name: "Swift", icon: <FaSwift size={26} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={26} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={26} /> },
    { name: "MongoDB", icon: <SiMongodb size={26} /> },
    { name: "Docker", icon: <FaDocker size={26} /> },
    { name: "AWS", icon: <FaAws size={26} /> },
    { name: "GitHub", icon: <FaGithub size={26} /> },
  ];

  const progressSkills = [
    { name: "Flutter & Dart", level: 90, badge: "Primary", color: "pink" },
    { name: "Firebase / Cloud", level: 85, badge: "Backend", color: "orange" },
    { name: "React / TypeScript", level: 80, badge: "Web", color: "blue" },
    { name: "Node.js / FastAPI", level: 75, badge: "API", color: "green" },
    { name: "PostgreSQL / MongoDB", level: 70, badge: "DB", color: "purple" },
    { name: "Docker / AWS / GCP", level: 65, badge: "DevOps", color: "gray" },
  ];

  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  const badgeColors = {
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600",
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-4"
        >
          <p className="font-Jost text-gray-400 text-xs tracking-[0.22em] uppercase">
            About Me
          </p>
          <h2 className="font-EB-Garamond text-4xl md:text-5xl font-bold text-gray-900">
            Technical{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Software Engineer and Flutter Developer currently at{" "}
            <span className="font-semibold text-gray-900">Innov8 Fusion</span>, Sri Lanka.
            I design and build modern mobile &amp; web applications that are{" "}
            <span className="font-semibold text-gray-900">fast, scalable, and user-centric</span>.
            My work combines clean UI/UX with strong backend integration and cloud deployment across AWS, GCP, and Firebase.
          </p>
        </motion.div>

        {/* Skills Icon Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.15, rotate: 2 }}
                className="flex flex-col items-center text-gray-400 hover:text-pink-500 transition-colors cursor-default"
              >
                {skill.icon}
                <span className="text-[10px] mt-2 font-medium text-gray-500">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proficiency Bars */}
        <div className="space-y-8" ref={barsRef}>
          <h3 className="text-2xl font-bold text-gray-900 text-center font-EB-Garamond">
            Proficiency
          </h3>
          <div className="space-y-5 max-w-2xl mx-auto">
            {progressSkills.map((skill, i) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColors[skill.color]}`}>
                      {skill.badge}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: barsInView ? skill.level / 100 : 0 }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-6 bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 p-10 rounded-2xl"
        >
          <h3 className="font-EB-Garamond text-4xl font-bold text-gray-900">
            Let's Build Something Great
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Open to new opportunities in web and mobile development. Whether
            it's building products from scratch or scaling existing systems, I
            love solving problems with clean code and thoughtful design.
          </p>
          <motion.a
            whileHover={{ scale: 1.04, boxShadow: "0 20px 48px rgba(236,72,153,0.28)" }}
            whileTap={{ scale: 0.97 }}
            href="mailto:danuthasan08@gmail.com"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/20 transition-shadow text-sm"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
