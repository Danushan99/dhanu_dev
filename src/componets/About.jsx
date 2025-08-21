/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
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

  const highlights = [
    "2+ years of professional experience in software development",
    "Led development of YaraPay, a Flutter-based payments platform",
    "Built full-stack apps using Flutter, Firebase, and FastAPI",
    "Worked extensively with AWS, GCP, REST APIs, and CI/CD pipelines",
    "Delivered scalable, production-ready apps for startups and enterprises",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Intro */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-6"
        >
          <h2 className="text-5xl font-extrabold text-gray-900">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-600">
              Danushan Ravendran
            </span>
            , a Software Engineer and Flutter Developer based in Sri Lanka.  
            I design and build modern mobile & web applications that are{" "}
            <span className="text-gray-900 font-medium">fast, scalable, and user-centric</span>.  
            My work combines clean UI/UX design with strong backend integration 
            and cloud deployment practices.
          </p>
        </motion.div>


        {/* Skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-gray-900">Technical Skills</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition"
              >
                {skill.icon}
                <span className="text-sm mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center space-y-6"
        >
          <h3 className="text-4xl font-bold text-gray-900">
            Let's Build Something Great
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            I'm open to new opportunities in web and mobile development.  
            Whether it's building products from scratch or scaling existing systems,  
            I love solving problems with clean code and thoughtful design.
          </p>
          <a
            href="mailto:danuthasan08@gmail.com"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
