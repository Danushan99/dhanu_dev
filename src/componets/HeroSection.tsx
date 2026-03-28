"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<
    "mobile" | "backend" | "devops" | null
  >(null);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden py-24 md:py-0 bg-gradient-to-br from-white via-pink-50/10 to-purple-50/20">
      {particlesReady && (
        <Particles
          id="hero-particles"
          className="absolute inset-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              color: { value: ["#3b82f6", "#8b5cf6", "#06b6d4"] },
              links: {
                enable: true,
                color: "#94a3b8",
                opacity: 0.25,
                distance: 120,
              },
              move: {
                enable: true,
                speed: 0.8,
                outModes: { default: "bounce" },
              },
              number: { value: 55, density: { enable: true } },
              opacity: { value: 0.4 },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        > */}
        {/* <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-600">
							Danushan Ravindran
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-gray-900 min-h-[2.5rem]">
							<TypeAnimation
								sequence={[
									'Full Stack Mobile Developer', 2500,
									'Flutter Specialist', 2000,
									'React Developer', 2000,
									'Firebase & Cloud Engineer', 2000,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
							/>
						</h2>
						<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
							Flutter specialist and mobile-first engineer based in Sri Lanka. I craft beautiful, high-performance mobile applications with robust backend systems.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">Flutter & Dart</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-100 rounded-full text-cyan-600 text-xs md:text-sm">Firebase</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full text-purple-600 text-xs md:text-sm">Node.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 rounded-full text-blue-600 text-xs md:text-sm">REST APIs</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-100 rounded-full text-cyan-600 text-xs md:text-sm">Cloud Services</span>
					</div> */}
        {/* </motion.div> */}

        {/* Interactive Mobile Development Stack */}
        <div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 p-4 md:p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Mobile Development Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "mobile"
                    ? "bg-blue-50 border-blue-200"
                    : "bg-gray-50 hover:bg-gray-100 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("mobile")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600">
                  Mobile Development
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Cross-Platform Flutter Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    State Management (Bloc, Riverpod)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Custom UI Components & Animations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Native Platform Integration
                  </li>
                </ul>
              </div>

              {/* Backend & APIs Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "backend"
                    ? "bg-cyan-50 border-cyan-200"
                    : "bg-gray-50 hover:bg-gray-100 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("backend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-cyan-600">
                  Backend & APIs
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    RESTful API Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    Firebase & Cloud Firestore
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    Real-time Data Synchronization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    Authentication & Security
                  </li>
                </ul>
              </div>

              {/* DevOps & Deployment Layer */}
              <div
                className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                  selectedStack === "devops"
                    ? "bg-teal-50 border-teal-200"
                    : "bg-gray-50 hover:bg-gray-100 border-transparent"
                }`}
                onMouseEnter={() => setSelectedStack("devops")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-600">
                  DevOps & Deployment
                </h3>
                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    App Store & Play Store Deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    CI/CD Pipelines (Codemagic, GitHub Actions)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Cloud Infrastructure Management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                    Performance Monitoring & Analytics
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
