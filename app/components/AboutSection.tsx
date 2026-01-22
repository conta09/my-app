"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Code, GraduationCap, Award, Briefcase, ChevronRight } from "lucide-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="text-cyan-300 font-medium mb-2">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gray-800/30 text-gray-300 rounded-lg text-sm border border-gray-700/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-emerald-300 font-medium mb-2">Backend & Mobile</h4>
          <div className="flex flex-wrap gap-2">
            {["Python", "Node.js", "Firebase", "React Native", "MongoDB"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-gray-800/30 text-gray-300 rounded-lg text-sm border border-gray-700/30">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div className="p-4 bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-700/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">European University of Lefke</h4>
              <p className="text-gray-400 text-sm">Bachelor&apos;s Degree</p>
              <p className="text-gray-500 text-xs mt-1">Currently pursuing higher education in computer science</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-700/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Online Learning Platform</h4>
              <p className="text-gray-400 text-sm">Udemy & Self-Study</p>
              <p className="text-gray-500 text-xs mt-1">Continuous learning through online courses and personal projects</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        {[
          { title: "Full Stack Web Development", platform: "Udemy" },
          { title: "Python Bootcamp Certificate", platform: "Online Course" },
          { title: "Python for Data Science & ML", platform: "Online Course" },
        ].map((cert, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-gray-800/10 backdrop-blur-sm rounded-lg border border-gray-700/20">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-gray-300 text-sm">{cert.title}</p>
              <p className="text-gray-500 text-xs">{cert.platform}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            About <span className="text-cyan-300">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know my background, skills, and professional journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative group">
              {/* Rounded Image Container */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800/50">
                <Image
                  src="/images/projects/conta.jpg"
                  alt="Conta Mucyo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <div className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50">
                  <div className="text-center">
                    <div className="text-lg font-medium text-cyan-300">2+</div>
                    <div className="text-xs text-gray-400">Years Exp</div>
                  </div>
                </div>
                <div className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700/50">
                  <div className="text-center">
                    <div className="text-lg font-medium text-emerald-300">10+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="mt-12 lg:mt-16 max-w-md">
              <p className="text-gray-300 leading-relaxed">
                I&apos;m a passionate developer specializing in creating modern web and mobile applications. 
                With expertise in React, Next.js, and React Native, I build scalable solutions that 
                deliver exceptional user experiences across all platforms.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Constantly learning and adapting to new technologies, I focus on writing clean, 
                efficient code and creating intuitive interfaces that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-6">
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 p-2 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30">
              {TAB_DATA.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border border-cyan-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/20'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <div className="p-6 bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-gray-700/20">
                {TAB_DATA.find((tab) => tab.id === activeTab)?.content}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-r from-gray-800/20 to-gray-900/10 backdrop-blur-sm rounded-2xl border border-gray-700/30">
              <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                Currently Working On
              </h4>
              <p className="text-gray-300 text-sm">
                Building cross-platform mobile applications with React Native and expanding 
                my backend skills with Python and Node.js. Always open to new opportunities 
                and collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;