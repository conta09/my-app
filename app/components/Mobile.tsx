"use client";
import React from "react";
import Image from "next/image";
import { Smartphone, Code, Navigation, Clock, MapPin, Users, Bus, Github } from "lucide-react";

interface MobileApp {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imgUrl: string;
  githubUrl: string;
}

const mobileApps: MobileApp[] = [
  {
    id: 1,
    title: "Campus Bus Tracker",
    description: "Real-time bus tracking for university campuses with predictive arrival times and route visualization",
    techStack: ["React Native", "Firebase", "Google Maps API", "WebSocket", "Geolocation"],
    imgUrl: "/images/projects/fit.png",
    githubUrl: "https://github.com/conta09/maps-app"
  },

  
];

const MobileSection: React.FC = () => {
  return (
    <section id="mobile" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6">
            <div className="relative">
              <Smartphone className="w-10 h-10 text-blue-400" />
              <Navigation className="w-5 h-5 text-emerald-400 absolute -top-1 -right-1" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Mobile Applications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cross-platform mobile apps built with React Native for seamless iOS & Android experience
          </p>
        </div>

        {/* Featured Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* App Preview */}
          <div className="relative">
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative w-full max-w-md h-full flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl rounded-full"></div>
                
                {/* Mockup Image */}
                <div className="relative w-[280px] h-[560px] z-10">
                  <Image
                    src={mobileApps[0].imgUrl}
                    alt={`${mobileApps[0].title} App Mockup`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* App Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                  iOS
                </span>
                <span className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                  Android
                </span>
              </div>
              <a
                href={mobileApps[0].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg font-medium transition-colors border border-gray-700/50"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
            
            <h3 className="text-3xl font-bold text-white">{mobileApps[0].title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real-time bus tracking application for university campuses. Students can track bus locations, 
              view estimated arrival times, and receive notifications when their bus is approaching.
            </p>
            
            {/* Key Features */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 font-medium">Technology Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {mobileApps[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-800/50 text-blue-300 rounded-lg text-sm font-medium border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        

        {/* React Native Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Code className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Built with React Native</h4>
                <p className="text-gray-400 text-sm">
                  All applications are cross-platform with native performance
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/conta09?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
              <a
                href="https://reactnative.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg font-medium transition-colors border border-blue-500/30"
              >
                <Smartphone className="w-5 h-5" />
                React Native Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;