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
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center space-y-6"
        >
                    <h3 className="text-3xl font-bold text-gray-900 text-center">
            Technical Skills
          </h3>
          {/* <h2 className="text-5xl font-extrabold text-gray-900">About Me</h2> */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {/* I'm{" "} */}
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

        {/* Skills */}
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
/* eslint-disable react/no-unescaped-entities */


// import { motion } from "framer-motion";
// import { FaReact, FaNodeJs, FaPython, FaAws, FaGithub, FaMobile } from "react-icons/fa";
// import {
//   SiFlutter,
//   SiDart,
//   SiFirebase,
//   SiFastapi,
//   SiTailwindcss,
//   SiPostgresql,
//   SiMongodb,
//   SiAndroid,
//   SiIos,
//   SiSwift,
// } from "react-icons/si";

// function AboutPage() {
//   const mobileSkills = [
//     { name: "Flutter", icon: <SiFlutter size={26} />, category: "primary" },
//     { name: "Dart", icon: <SiDart size={26} />, category: "primary" },
//     { name: "Android", icon: <SiAndroid size={26} />, category: "primary" },
//     { name: "iOS", icon: <SiIos size={26} />, category: "primary" },
//     { name: "Swift", icon: <SiSwift size={26} />, category: "secondary" },
//     { name: "React Native", icon: <FaReact size={26} />, category: "secondary" },
//   ];

//   const backendSkills = [
//     { name: "Firebase", icon: <SiFirebase size={26} />, category: "primary" },
//     { name: "FastAPI", icon: <SiFastapi size={26} />, category: "primary" },
//     { name: "Node.js", icon: <FaNodeJs size={26} />, category: "secondary" },
//     { name: "Python", icon: <FaPython size={26} />, category: "secondary" },
//     { name: "PostgreSQL", icon: <SiPostgresql size={26} />, category: "secondary" },
//     { name: "MongoDB", icon: <SiMongodb size={26} />, category: "secondary" },
//   ];

//   const achievements = [
//     {
//       title: "YaraPay Mobile App",
//       description: "Leading Flutter developer for payment portal serving thousands of users",
//       tech: "Flutter, Firebase, FastAPI, AWS"
//     },
//     {
//       title: "Cross-Platform Expertise",
//       description: "2+ years delivering scalable mobile apps for iOS and Android from single codebase",
//       tech: "Flutter, Dart, Native Integrations"
//     },
//     {
//       title: "Banking & Fintech",
//       description: "Developed secure banking features and payment systems with real-time updates",
//       tech: "Flutter, Firebase Auth, Cloud Functions"
//     }
//   ];

//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   return (
//     <section className="bg-white py-20 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto space-y-24">
//         {/* Mobile Development Focus Intro */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center space-y-6"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <FaMobile className="text-4xl text-blue-600" />
//             <h2 className="text-5xl font-extrabold text-gray-900">Mobile Development Expertise</h2>
//           </div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             I'm{" "}
//             <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//               Danushan Ravendran
//             </span>
//             , a Flutter specialist with{" "}
//             <span className="font-semibold text-blue-600">2+ years</span>
//             {" "}of experience building{" "}
//             <span className="font-semibold text-gray-900">
//               production-grade mobile applications
//             </span>
//             . From payment platforms serving thousands of users to banking solutions, 
//             I create cross-platform mobile experiences that are fast, secure, and intuitive.
//           </p>
//         </motion.div>

//         {/* Key Achievements */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="space-y-8"
//         >
//           <h3 className="text-3xl font-bold text-gray-900 text-center">Key Mobile Projects</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             {achievements.map((achievement, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 variants={fadeUp}
//                 whileHover={{ y: -5 }}
//                 className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
//               >
//                 <h4 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h4>
//                 <p className="text-gray-600 mb-4 leading-relaxed">{achievement.description}</p>
//                 <div className="text-sm text-blue-600 font-medium">{achievement.tech}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Mobile Development Skills */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-12"
//         >
//           <h3 className="text-3xl font-bold text-gray-900 text-center">Mobile Technology Stack</h3>
          
//           {/* Primary Mobile Skills */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-gray-800 text-center">Cross-Platform Development</h4>
//             <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 max-w-2xl mx-auto">
//               {mobileSkills.map((skill, i) => (
//                 <motion.div
//                   key={i}
//                   custom={i}
//                   variants={fadeUp}
//                   whileHover={{ scale: 1.15, rotate: 2 }}
//                   className={`flex flex-col items-center transition-all duration-300 ${
//                     skill.category === 'primary' 
//                       ? 'text-blue-600 hover:text-blue-700' 
//                       : 'text-gray-600 hover:text-blue-600'
//                   }`}
//                 >
//                   <div className={`p-3 rounded-lg ${
//                     skill.category === 'primary' ? 'bg-blue-100' : 'bg-gray-100'
//                   }`}>
//                     {skill.icon}
//                   </div>
//                   <span className="text-sm mt-2 font-medium">{skill.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Backend & Cloud Skills */}
//           <div className="space-y-6">
//             <h4 className="text-xl font-semibold text-gray-800 text-center">Backend & Cloud Integration</h4>
//             <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 max-w-2xl mx-auto">
//               {backendSkills.map((skill, i) => (
//                 <motion.div
//                   key={i}
//                   custom={i}
//                   variants={fadeUp}
//                   whileHover={{ scale: 1.15, rotate: 2 }}
//                   className={`flex flex-col items-center transition-all duration-300 ${
//                     skill.category === 'primary' 
//                       ? 'text-purple-600 hover:text-purple-700' 
//                       : 'text-gray-600 hover:text-purple-600'
//                   }`}
//                 >
//                   <div className={`p-3 rounded-lg ${
//                     skill.category === 'primary' ? 'bg-purple-100' : 'bg-gray-100'
//                   }`}>
//                     {skill.icon}
//                   </div>
//                   <span className="text-sm mt-2 font-medium">{skill.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Mobile Development Approach */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 p-8 md:p-12 rounded-2xl"
//         >
//           <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">My Mobile Development Philosophy</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">📱</span>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Cross-Platform Excellence</h4>
//               <p className="text-gray-600">Single codebase, native performance. Flutter enables me to deliver consistent experiences across iOS and Android.</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">⚡</span>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance-First</h4>
//               <p className="text-gray-600">Optimized state management, efficient API calls, and smooth animations that users love.</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🔒</span>
//               </div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-2">Security & Scale</h4>
//               <p className="text-gray-600">Enterprise-grade security with Firebase Auth, secure API integration, and cloud-native architecture.</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center space-y-6 bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl text-white"
//         >
//           <h3 className="text-4xl font-bold">Ready to Build Your Mobile App?</h3>
//           <p className="max-w-xl mx-auto text-blue-100">
//             Whether you need a consumer app, enterprise solution, or fintech platform, 
//             I bring the expertise to turn your mobile vision into reality.
//           </p>
//           <motion.a
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 8px 20px rgba(255,255,255,0.2)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             href="mailto:danuthasan08@gmail.com"
//             className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
//           >
//             Let's Discuss Your Project
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default AboutPage;