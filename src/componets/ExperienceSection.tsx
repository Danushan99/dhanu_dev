// const ExperienceSection = () => {
//   const experiences = [
//     {
//       role: "Software Engineer",
//       company: "Yara Technologies (Pvt) Ltd",
//       period: "Dec 2024 - July 2025",
//       highlights:
//         "Spearheaded the development of YaraPay – a Flutter-based payments portal. Worked on full-stack development (Flutter, Firebase, FastAPI) and enhanced UI/UX in collaboration with design teams via Figma.",
//     },
//     {
//       role: "Junior Software Engineer",
//       company: "Yara Technologies (Pvt) Ltd",
//       period: "July 2024 – Dec 2024",
//       highlights:
//         "Developed Eduloan platform connecting schools and banks. Integrated Firebase Auth, Google Cloud Functions, and real-time updates.",
//     },
//     {
//       role: "Trainee Software Engineer",
//       company: "EPIC Technology Group",
//       period: "March 2022 – March 2023",
//       highlights:
//         "Delivered merchant portal for Bank of Ceylon (React + Node). Built and tested banking features on CDB mobile app (Flutter).",
//     },
//     {
//       role: "Freelance Software Engineer",
//       company: "Remote, Sri Lanka",
//       period: "April 2023 – Jan 2024",
//       highlights:
//         "Created multiple production-grade apps for SMEs. Delivered projects end-to-end using MERN Stack, Flutter, and Firebase.",
//     },
//   ];

//   return (
//     <div className="py-6 bg-white px-6">
//       <div className="space-y-4 max-w-2xl mx-auto">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
//             Experience
//           </h3>
//           <div className="h-px w-full bg-gray-200 mt-2" />
//         </div>

//         <div className="space-y-5">
//           {experiences.map((exp) => (
//             <div key={exp.company + exp.period} className="relative">
//               <div className="relative pl-4 border-l-2 border-gray-300">
//                 <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

//                 <div className="space-y-1">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//                     <h4 className="text-md font-medium text-gray-900">
//                       {exp.role}
//                     </h4>
//                     <span className="text-sm text-gray-500">{exp.period}</span>
//                   </div>
//                   <p className="text-sm font-medium text-gray-900">
//                     {exp.company}
//                   </p>
//                   <p className="text-sm text-gray-600 leading-relaxed">
//                     {exp.highlights}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceSection;


import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Yara Technologies (Pvt) Ltd",
    period: "Dec 2024 - July 2025",
    highlights:
      "Spearheaded the development of YaraPay – a Flutter-based payments portal. Worked on full-stack development (Flutter, Firebase, FastAPI) and enhanced UI/UX in collaboration with design teams via Figma.",
  },
  {
    role: "Junior Software Engineer",
    company: "Yara Technologies (Pvt) Ltd",
    period: "July 2024 – Dec 2024",
    highlights:
      "Developed Eduloan platform connecting schools and banks. Integrated Firebase Auth, Google Cloud Functions, and real-time updates.",
  },
  {
    role: "Trainee Software Engineer",
    company: "EPIC Technology Group",
    period: "March 2022 – March 2023",
    highlights:
      "Delivered merchant portal for Bank of Ceylon (React + Node). Built and tested banking features on CDB mobile app (Flutter).",
  },
  {
    role: "Freelance Software Engineer",
    company: "Remote, Sri Lanka",
    period: "April 2023 – Jan 2024",
    highlights:
      "Created multiple production-grade apps for SMEs. Delivered projects end-to-end using MERN Stack, Flutter, and Firebase.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-12 sm:py-20 px-4 bg-white scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-900">
          Experience
        </h2>

        <div className="relative border-l-2 border-gray-300 ml-4 sm:ml-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.period}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Timeline circle */}
              <div className="absolute -left-[10px] top-2 h-5 w-5 rounded-full bg-blue-500 border-2 border-white" />

              <div className="ml-6 sm:ml-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {exp.role}
                  </h4>
                  <span className="text-sm sm:text-base text-gray-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-900 mt-1">
                  {exp.company}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
                  {exp.highlights}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
