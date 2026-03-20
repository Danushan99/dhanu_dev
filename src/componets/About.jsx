/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub } from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

function AboutPage() {
  const skills = [
    { name: "Flutter", icon: <SiFlutter size={26} /> },
    { name: "Dart", icon: <SiDart size={26} /> },
    { name: "React", icon: <FaReact size={26} /> },
    { name: "Firebase", icon: <SiFirebase size={26} /> },
    { name: "FastAPI", icon: <SiFastapi size={26} /> },
    { name: "Node.js", icon: <FaNodeJs size={26} /> },
    { name: "Python", icon: <FaPython size={26} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={26} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={26} /> },
    { name: "MongoDB", icon: <SiMongodb size={26} /> },
    { name: "AWS", icon: <FaAws size={26} /> },
    { name: "GitHub", icon: <FaGithub size={26} /> },
  ];

  const progressSkills = [
    { name: "Flutter & Dart", level: 90, badge: "Primary", color: "blue" },
    { name: "Firebase", level: 85, badge: "Backend", color: "orange" },
    { name: "React / React Native", level: 80, badge: "Web", color: "cyan" },
    { name: "Node.js / FastAPI", level: 75, badge: "API", color: "green" },
    { name: "PostgreSQL / MongoDB", level: 70, badge: "DB", color: "purple" },
    { name: "AWS / Cloud", level: 65, badge: "DevOps", color: "gray" },
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
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-600",
    cyan: "bg-cyan-100 text-cyan-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-6"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center">
            Technical Skills
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">

            </span>
            Software Engineer and Flutter Developer based in Sri Lanka. I
            design and build modern mobile & web applications that are{" "}
            <span className="font-semibold text-gray-900">
              fast, scalable, and user-centric
            </span>
            . My work combines clean UI/UX design with strong backend
            integration and cloud deployment practices.
          </p>
        </motion.div>

        {/* Skills Icon Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.15, rotate: 2 }}
                className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition"
              >
                {skill.icon}
                <span className="text-sm mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proficiency Bars */}
        <div className="space-y-8" ref={barsRef}>
          <h3 className="text-2xl font-bold text-gray-900 text-center">Proficiency</h3>
          <div className="space-y-5 max-w-2xl mx-auto">
            {progressSkills.map((skill, i) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColors[skill.color]}`}>
                      {skill.badge}
                    </span>
                  </div>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
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

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-6 bg-blue-100 p-10 rounded-2xl"
        >
          <h3 className="text-4xl font-bold text-gray-900">
            Let's Build Something Great
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            I'm open to new opportunities in web and mobile development. Whether
            it's building products from scratch or scaling existing systems, I
            love solving problems with clean code and thoughtful design.
          </p>
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            href="mailto:danuthasan08@gmail.com"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
