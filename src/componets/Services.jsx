import React from "react";
import { FaMobileAlt, FaLaptopCode, FaDatabase, FaPaintBrush, FaCloud, FaTools, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: <FaMobileAlt className="w-10 h-10 text-black" />,
      title: "Mobile App Development",
      description:
        "Cross-platform apps using Flutter and React Native, delivering responsive and high-performance mobile experiences.",
    },
    {
      icon: <FaLaptopCode className="w-10 h-10 text-black" />,
      title: "Web Application Development",
      description:
        "Modern websites and web apps using React, Next.js, Tailwind CSS, with a focus on clean UI and performance.",
    },
    {
      icon: <FaDatabase className="w-10 h-10 text-black" />,
      title: "Backend & API Development",
      description:
        "REST APIs, database integration, authentication, and scalable backend architecture with NodeJS, Python, .NET, or PHP.",
    },
    {
      icon: <FaPaintBrush className="w-10 h-10 text-black" />,
      title: "UI/UX Design",
      description:
        "Wireframing, prototyping, and designing user-friendly interfaces using Figma and Material UI.",
    },
    {
      icon: <FaCloud className="w-10 h-10 text-black" />,
      title: "Cloud & Database Integration",
      description:
        "Firebase, AWS, GCP, MySQL, MongoDB, PostgreSQL – building scalable and reliable cloud-integrated apps.",
    },
    {
      icon: <FaTools className="w-10 h-10 text-black" />,
      title: "Maintenance & Support",
      description:
        "Ongoing bug fixes, performance optimization, and feature updates to keep your apps running smoothly.",
    },
    {
      icon: <FaRobot className="w-10 h-10 text-black" />,
      title: "AI & ML Integration",
      description:
        "Emotion recognition, predictive analytics, and AI-driven features for smarter applications.",
    },
  ];

  return (
    <section className="bg-home py-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-EB-Garamond font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Services
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I provide a wide range of software development services to turn your ideas into scalable digital products.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-[#ECDDD3] hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="p-5 rounded-full bg-black mb-4 flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="text-xl font-bold text-black mb-2">{service.title}</h2>
            <p className="text-black text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <motion.a
          href="mailto:Danuthasan008@gmail.com"
          className="inline-block px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Hire Me
        </motion.a>
      </div>
    </section>
  );
}

export default Services;
