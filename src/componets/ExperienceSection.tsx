import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Innov8 Fusion",
    period: "Aug 2025 – Present",
    location: "Sri Lanka (Hybrid)",
    highlights:
      "Working as a full-time Software Engineer contributing to hybrid development cycles. Building scalable software solutions using modern technologies and collaborating with cross-functional teams.",
    current: true,
  },
  {
    role: "Software Engineer",
    company: "Yara Technologies (Pvt) Ltd",
    period: "Dec 2024 – July 2025",
    location: "Nugegoda, Sri Lanka",
    highlights:
      "Spearheaded YaraPay – a Flutter-based payments portal used by thousands. Full-stack development with Flutter, Firebase & FastAPI. Designed RESTful APIs, secured endpoints, and deployed on AWS/GCP.",
    current: false,
  },
  {
    role: "Junior Software Engineer",
    company: "Yara Technologies (Pvt) Ltd",
    period: "July 2024 – Dec 2024",
    location: "Nugegoda, Sri Lanka",
    highlights:
      "Developed Eduloan platform connecting schools and banks. Integrated Firebase Auth, Google Cloud Functions, and real-time updates in Agile/Scrum teams.",
    current: false,
  },
  {
    role: "Trainee Software Engineer",
    company: "EPIC Technology Group",
    period: "March 2022 – March 2023",
    location: "Battaramulla, Sri Lanka",
    highlights:
      "Delivered merchant portal for Bank of Ceylon (React + Node). Built and tested banking features on CDB mobile app (Flutter). Handled API documentation and Postman testing.",
    current: false,
  },
  {
    role: "Freelance Software Engineer",
    company: "Remote",
    period: "April 2023 – Jan 2024",
    location: "Remote",
    highlights:
      "Created multiple production-grade apps for SMEs using MERN Stack, Flutter, PHP, and Firebase. Delivered projects end-to-end from requirement gathering to deployment.",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <p className="font-Jost text-gray-400 text-xs tracking-[0.22em] uppercase">
            Career Path
          </p>
          <h2 className="font-EB-Garamond text-4xl md:text-5xl font-bold text-gray-900">
            Work{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-pink-300 via-fuchsia-300 to-purple-300 opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company + exp.period}
                className="relative pl-12 sm:pl-16"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[9px] sm:left-[15px] top-1.5 h-4 w-4 rounded-full border-2 border-white shadow-sm flex-shrink-0 ${
                    exp.current
                      ? "bg-gradient-to-br from-pink-500 to-purple-600 shadow-pink-300"
                      : "bg-gray-300"
                  }`}
                />
                {exp.current && (
                  <div className="absolute left-[9px] sm:left-[15px] top-1.5 h-4 w-4 rounded-full bg-pink-400 opacity-40 animate-ping" />
                )}

                {/* Card */}
                <div
                  className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                    exp.current ? "border-pink-200" : "border-gray-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900">
                          {exp.role}
                        </h4>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-gray-700 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-gray-500 font-medium">{exp.period}</span>
                      <p className="text-[11px] text-gray-400">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mt-2">
                    {exp.highlights}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
