/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { skillFolders, proficiencyBars } from "../data/skills";

const levelDot = {
  Expert: "bg-emerald-400",
  Advanced: "bg-blue-400",
  Intermediate: "bg-gray-300",
};

const badgeColors = {
  pink: "bg-pink-100 text-pink-600",
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  gray: "bg-gray-100 text-gray-600",
};

function SkillFolderExplorer() {
  const [activeFolder, setActiveFolder] = useState("mobile");
  const current = skillFolders.find((f) => f.id === activeFolder);

  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400 font-mono">skills/</span>
      </div>

      <div className="flex flex-col sm:flex-row min-h-[320px]">
        {/* Sidebar — folder list */}
        <div className="sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-100 bg-gray-50/50 flex sm:flex-col flex-row overflow-x-auto sm:overflow-visible">
          {skillFolders.map((folder) => {
            const isActive = folder.id === activeFolder;
            return (
              <button
                key={folder.id}
                onClick={() => setActiveFolder(folder.id)}
                className={`flex items-center gap-2.5 px-4 py-3 text-left text-sm font-medium transition-all duration-150 whitespace-nowrap sm:whitespace-normal w-full ${
                  isActive
                    ? "bg-white border-r-2 border-pink-500 text-gray-900"
                    : "text-gray-500 hover:bg-white/70 hover:text-gray-700"
                }`}
              >
                <span className="text-base leading-none">{folder.emoji}</span>
                <span className="hidden sm:block flex-1">{folder.label}</span>
                <span
                  className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full hidden sm:block ${
                    isActive ? folder.color.tagBg + " " + folder.color.tagText : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {folder.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main panel — skills in selected folder */}
        <div className="flex-1 p-5 sm:p-6">
          <AnimatePresence mode="wait">
            {current && (
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Folder header */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{current.emoji}</span>
                  <span className="font-semibold text-gray-900">{current.label}</span>
                  <span className={`ml-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${current.color.tagBg} ${current.color.tagText}`}>
                    {current.skills.length} skills
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {current.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${current.color.dot}`} />
                        <span className="text-sm text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                          skill.level === "Expert"
                            ? "bg-emerald-50 text-emerald-600"
                            : skill.level === "Advanced"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${levelDot[skill.level]}`} />
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-100">
        <span className="text-[10px] text-gray-400 font-mono">{current?.label.toLowerCase()}.json</span>
        <div className="flex items-center gap-3 text-[10px] text-gray-400">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Expert</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Advanced</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Intermediate</span>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const barsRef = useRef(null);
  const barsInView = useInView(barsRef, { once: true, amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* Header */}
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
            I build mobile &amp; web apps that are{" "}
            <span className="font-semibold text-gray-900">fast, scalable, and user-centric</span>{" "}
            — combining clean UI/UX with strong backend integration across AWS, GCP, and Firebase.
          </p>
        </motion.div>

        {/* Skills Folder Explorer */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
            <span className="text-xs text-gray-400 font-Jost tracking-[0.15em] uppercase px-3">Skills Explorer</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
          </div>
          <SkillFolderExplorer />
        </motion.div>

        {/* Proficiency Bars */}
        <div className="space-y-6" ref={barsRef}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
            <span className="text-xs text-gray-400 font-Jost tracking-[0.15em] uppercase px-3">Proficiency</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {proficiencyBars.map((skill, i) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${badgeColors[skill.color]}`}>
                      {skill.badge}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs tabular-nums">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: barsInView ? skill.level / 100 : 0 }}
                    transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;
