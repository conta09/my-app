"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Smartphone, Globe, Code, Smartphone as Phone } from "lucide-react";

interface MobileApp {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imgUrl: string;
  featured: boolean;
}

const mobileApps: MobileApp[] = [
  {
    id: 1,
    title: "Finance Tracker Pro",
    description: "Advanced personal finance management with AI-powered insights and real-time expense tracking",
    techStack: ["React Native", "TypeScript", "Firebase", "Redux", "Charts"],
    imgUrl: "/images/projects/Group2.png",
    featured: true,
  },
  {
    id: 2,
    title: "Health Companion",
    description: "Complete health tracking with personalized workout plans and nutrition guidance",
    techStack: ["React Native", "Expo", "GraphQL", "Notifications", "Maps"],
    imgUrl: "/images/projects/Group2.png",
    featured: true,
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "Collaborative task management with real-time sync and team collaboration features",
    techStack: ["React Native", "Firebase", "Context API", "WebSockets"],
    imgUrl: "/images/projects/profile1.png",
    featured: false,
  },
  {
    id: 4,
    title: "Weather Pulse",
    description: "Hyperlocal weather forecasts with beautiful animations and severe weather alerts",
    techStack: ["React Native", "OpenWeather API", "Maps", "Geolocation"],
    imgUrl: "/images/projects/Group66.png",
    featured: false,
  },
  {
    id: 5,
    title: "EcoRoute",
    description: "Carbon footprint tracking for daily commutes with route optimization",
    techStack: ["React Native", "Google Maps API", "Firebase", "Data Viz"],
    imgUrl: "/images/projects/image 22.png",
    featured: false,
  },
];

const MobileSection: React.FC = () => {
  const [activeApp, setActiveApp] = useState<number | null>(1);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6">
            <div className="relative">
              <Phone className="w-10 h-10 text-cyan-400" />
              <Globe className="w-5 h-5 text-blue-400 absolute -top-1 -right-1" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
            React Native Applications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cross-platform mobile experiences built with React Native for iOS & Android
          </p>
        </div>

        {/* Featured App Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* App Preview */}
          <div className="relative">
            <div className="relative h-[500px] flex items-center justify-center">
              {/* iPhone Frame */}
              <div className="absolute left-0 w-56 h-[500px] bg-gray-800 rounded-[2.5rem] border-[10px] border-gray-900 overflow-hidden shadow-2xl z-20">
                <Image
                  src="/images/projects/idea.png"
                  alt="App Preview"
                  fill
                  className="object-cover"
                />
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-xl"></div>
              </div>
              
              {/* Android Frame */}
              <div className="absolute right-0 w-56 h-[500px] bg-gray-800 rounded-[2rem] border-8 border-gray-900 overflow-hidden shadow-2xl z-10">
                <Image
                  src="/images/projects/image 22.png"
                  alt="App Preview"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl"></div>
            </div>
          </div>

          {/* App Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex gap-2">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                  iOS
                </span>
                <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                  Android
                </span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white">Finance Tracker Pro</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Advanced personal finance management with AI-powered insights and real-time expense tracking. 
              Built with React Native for seamless performance on both platforms.
            </p>
            
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 font-medium">Technology Stack</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {mobileApps[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 text-cyan-300 rounded-lg font-medium border border-gray-700/50 hover:border-cyan-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileApps.slice(1).map((app) => (
            <div
              key={app.id}
              className="group relative bg-gradient-to-br from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-2xl border border-gray-700/30 overflow-hidden hover:border-cyan-500/30 transition-all duration-300"
              onMouseEnter={() => setActiveApp(app.id)}
              onMouseLeave={() => setActiveApp(null)}
            >
              <div className="p-6">
                {/* App Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                      iOS
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">
                      Android
                    </span>
                  </div>
                </div>
                
                {/* App Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">{app.description}</p>
                
                {/* Dual Phone Preview */}
                <div className="relative h-48 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center gap-8">
                    {/* iPhone */}
                    <div className={`relative w-28 h-56 bg-gray-800 rounded-2xl border-4 border-gray-700 overflow-hidden transform -rotate-6 transition-all duration-500 ${activeApp === app.id ? '-translate-y-2 -rotate-3' : ''}`}>
                      <Image
                        src={app.imgUrl}
                        alt={`${app.title} - iOS`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Android */}
                    <div className={`relative w-28 h-56 bg-gray-800 rounded-2xl border-4 border-gray-700 overflow-hidden transform rotate-6 transition-all duration-500 ${activeApp === app.id ? '-translate-y-2 rotate-3' : ''}`}>
                      <Image
                        src={app.imgUrl}
                        alt={`${app.title} - Android`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {app.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-gray-800/50 text-cyan-300 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {app.techStack.length > 3 && (
                    <span className="px-3 py-1.5 bg-gray-800/50 text-gray-400 rounded-lg text-xs font-medium">
                      +{app.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* React Native Badge */}
        <div className="mt-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Built with</div>
              <div className="text-lg font-semibold text-white">React Native & TypeScript</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;