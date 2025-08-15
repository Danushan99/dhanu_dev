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
    { name: "Flutter", icon: <SiFlutter size={24} /> },
    { name: "Dart", icon: <SiDart size={24} /> },
    { name: "React", icon: <FaReact size={24} /> },
    { name: "Firebase", icon: <SiFirebase size={24} /> },
    { name: "FastAPI", icon: <SiFastapi size={24} /> },
    { name: "NodeJS", icon: <FaNodeJs size={24} /> },
    { name: "Python", icon: <FaPython size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
    { name: "MongoDB", icon: <SiMongodb size={24} /> },
    { name: "AWS", icon: <FaAws size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
  ];

  const experienceHighlights = [
    "2+ years of experience in mobile and web app development",
    "Spearheaded YaraPay – Flutter-based payments portal",
    "Full-stack development with Flutter, Firebase, FastAPI",
    "Worked with AWS, GCP, REST APIs, and UI/UX improvements",
    "Delivered production-grade apps for SMEs and large clients",
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid gap-12">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hello! I'm{" "}
            <span className="font-semibold text-blue-600">
              Danushan Ravendran
            </span>
            , a passionate Software Engineer and Flutter Developer from
            Nugegoda, Sri Lanka. I specialize in creating scalable,
            user-focused mobile and web applications with an emphasis on modern
            UI/UX design, backend integration, and cloud deployment.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Experience Highlights
          </h3>
          <ul className="space-y-3 text-gray-700">
            {experienceHighlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <span className="text-blue-500">{skill.icon}</span>
                <span className="font-medium text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center rounded-xl py-10 px-6 shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="mb-6 max-w-xl mx-auto">
            I’m open to new opportunities and collaborations in web and mobile
            development. Whether it's building a startup MVP or enhancing an
            enterprise solution, let's make it happen!
          </p>
          <a
            href="mailto:danuthasan08@gmail.com"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
