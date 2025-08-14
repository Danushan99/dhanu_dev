import React from "react";
import { FaMobileAlt, FaLaptopCode, FaDatabase, FaPaintBrush, FaCloud, FaTools, FaRobot } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaMobileAlt className="w-10 h-10 text-white" />,
      title: "Mobile App Development",
      description:
        "Cross-platform apps using Flutter and React Native, delivering responsive and high-performance mobile experiences.",
      bg: "bg-blue-500",
    },
    {
      icon: <FaLaptopCode className="w-10 h-10 text-white" />,
      title: "Web Application Development",
      description:
        "Modern websites and web apps using React, Next.js, Tailwind CSS, with a focus on clean UI and performance.",
      bg: "bg-green-500",
    },
    {
      icon: <FaDatabase className="w-10 h-10 text-white" />,
      title: "Backend & API Development",
      description:
        "REST APIs, database integration, authentication, and scalable backend architecture with NodeJS, Python, .NET, or PHP.",
      bg: "bg-orange-500",
    },
    {
      icon: <FaPaintBrush className="w-10 h-10 text-white" />,
      title: "UI/UX Design",
      description:
        "Wireframing, prototyping, and designing user-friendly interfaces using Figma and Material UI.",
      bg: "bg-purple-500",
    },
    {
      icon: <FaCloud className="w-10 h-10 text-white" />,
      title: "Cloud & Database Integration",
      description:
        "Firebase, AWS, GCP, MySQL, MongoDB, PostgreSQL – building scalable and reliable cloud-integrated apps.",
      bg: "bg-teal-500",
    },
    {
      icon: <FaTools className="w-10 h-10 text-white" />,
      title: "Maintenance & Support",
      description:
        "Ongoing bug fixes, performance optimization, and feature updates to keep your apps running smoothly.",
      bg: "bg-red-500",
    },
    {
      icon: <FaRobot className="w-10 h-10 text-white" />,
      title: "AI & ML Integration",
      description:
        "Emotion recognition, predictive analytics, and AI-driven features for smarter applications.",
      bg: "bg-indigo-500",
    },
  ];

  return (
    <section className="bg-home py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-EB-Garamond font-bold mb-4">
          My Services
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          I provide a wide range of software development services to turn your ideas into scalable digital products.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-center ${service.bg}`}
          >
            <div className="p-4 rounded-full bg-black mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{service.title}</h2>
            <p className="text-white text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="mailto:Danuthasan008@gmail.com"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Services;
