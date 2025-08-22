import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Yara Technologies (Pvt) Ltd",
    location: "Nugegoda, Sri Lanka",
    period: "Dec 2024 - July 2025",
    description:
      "Spearheaded the development of YaraPay – a Flutter-based payments portal. Worked on full-stack development (Flutter, Firebase, FastAPI) and enhanced UI/UX in collaboration with design teams via Figma.",
  },
  {
    role: "Junior Software Engineer",
    company: "Yara Technologies (Pvt) Ltd",
    location: "Nugegoda, Sri Lanka",
    period: "July 2024 – Dec 2024",
    description:
      "Developed Eduloan platform connecting schools and banks. Integrated Firebase Auth, Google Cloud Functions, and real-time updates.",
  },
  {
    role: "Trainee Software Engineer",
    company: "EPIC Technology Group",
    location: "Battaramulla, Sri Lanka",
    period: "March 2022 – March 2023",
    description:
      "Delivered merchant portal for Bank of Ceylon (React + Node). Built and tested banking features on CDB mobile app (Flutter).",
  },
  {
    role: "Freelance Software Engineer",
    company: "Remote",
    location: "Sri Lanka",
    period: "April 2023 – Jan 2024",
    description:
      "Created multiple production-grade apps for SMEs. Delivered projects end-to-end using MERN Stack, Flutter, and Firebase.",
  },
];

const AnimatedExperience = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-EB-Garamond font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Work Experience
        </motion.h2>

        {/* Timeline */}
        <VerticalTimeline lineColor="#111">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#fff",
                color: "#111",
                borderRadius: "16px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                padding: "24px",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date={exp.period}
              dateClassName="text-gray-500 font-medium"
              iconStyle={{
                background: "#111",
                color: "#fff",
                boxShadow: "0 0 0 4px #e5e7eb", // subtle ring effect
              }}
              icon={<FaBriefcase />}
            >
              {/* Animated Card Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-md text-gray-700 mb-3">
                  {exp.company} — <span className="italic">{exp.location}</span>
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default AnimatedExperience;
