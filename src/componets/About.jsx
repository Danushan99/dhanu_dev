/* eslint-disable react/no-unescaped-entities */


import React from "react";




function AboutPage() {
  const skills = [
    "Flutter", "Dart", "React", "Firebase", "FastAPI", "NodeJS", "Python", "Tailwind CSS"
  ];

  const softSkills = [
    "Communication", "Teamwork", "Problem-solving", "Adaptability", "Time Management"
  ];

  const experienceHighlights = [
    "2+ years of experience in mobile and web app development",
    "Built scalable Flutter apps with Firebase backend",
    "Strong background in UI/UX design and API integrations",
    "Delivered production-grade apps for clients and internal projects"
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-EB-Garamond font-semibold mb-4 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hello! I'm <span className="font-semibold">Danushan Ravendran</span>, a passionate Software Engineer and Flutter Developer from Nugegoda, Sri Lanka. I focus on creating scalable, user-focused applications with an emphasis on modern UI/UX design.
          </p>
        </div>

        {/* Experience Highlights */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Experience Highlights</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {experienceHighlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Technical Skills */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center rounded-xl py-8 px-6">
          <h3 className="text-2xl font-semibold mb-4">Let's Build Something Amazing</h3>
          <p className="mb-6">I’m open to new opportunities and collaborations in web and mobile development. Feel free to reach out!</p>
          <a
            href="mailto:Danuthasan008@gmail.com"
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}




export default AboutPage;



