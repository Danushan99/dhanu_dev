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
    { name: "Flutter", icon: <SiFlutter size={28} /> },
    { name: "Dart", icon: <SiDart size={28} /> },
    { name: "React", icon: <FaReact size={28} /> },
    { name: "Firebase", icon: <SiFirebase size={28} /> },
    { name: "FastAPI", icon: <SiFastapi size={28} /> },
    { name: "NodeJS", icon: <FaNodeJs size={28} /> },
    { name: "Python", icon: <FaPython size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "AWS", icon: <FaAws size={28} /> },
    { name: "GitHub", icon: <FaGithub size={28} /> },
  ];

  const experienceHighlights = [
    "2+ years of experience in mobile and web app development",
    "Spearheaded YaraPay – Flutter-based payments portal",
    "Full-stack development with Flutter, Firebase, FastAPI",
    "Worked with AWS, GCP, REST APIs, and UI/UX improvements",
    "Delivered production-grade apps for SMEs and large clients",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-3xl p-10 text-center border border-gray-100"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-600">
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

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-6">
            Experience Highlights
          </h3>
          <ul className="space-y-4 text-gray-700">
            {experienceHighlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 hover:text-blue-500 transition"
              >
                <span className="text-blue-500 mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-blue-600 mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition"
              >
                <span className="text-blue-600">{skill.icon}</span>
                <span className="text-gray-800 font-medium text-sm">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 px-8 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-xl text-white"
        >
          <h3 className="text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h3>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Open to new opportunities and collaborations in web and mobile
            development. Let's create something impactful together!
          </p>
          <a
            href="mailto:danuthasan08@gmail.com"
            className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPage;
