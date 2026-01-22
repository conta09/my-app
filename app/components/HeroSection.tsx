"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Instagram, Code, Smartphone, Globe, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Availability Badge - More subtle */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/20 backdrop-blur-sm rounded-lg border border-gray-700/30">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Available for work</span>
            </div>

            {/* Main Heading - Softer gradients */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Hello, I&apos;m <span className="text-cyan-300">Conta</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "Mobile App Developer",
                    1500,
                    "UI/UX Designer",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-2xl md:text-4xl font-medium text-gray-300"
                  repeat={Infinity}
                />
              </div>
            </div>

            {/* Description - More subtle text */}
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              I create modern web and mobile applications with clean, efficient code. 
              Focused on building intuitive user experiences that solve real problems.
            </p>

            {/* Social Links - More subtle */}
            <div className="flex space-x-3 items-center pt-2">
              <a
                href="https://www.linkedin.com/in/mucyo-conta-54619a171/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://github.com/conta09"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-gray-400/30 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/conta__m/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 hover:border-pink-500/30 transition-all duration-300 hover:scale-105"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - More subtle */}
          <div className="space-y-6">
            {/* Tech Stack Cards - Simpler */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-700/20 hover:border-cyan-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Web Development</h3>
                <p className="text-gray-500 text-sm">
                  React, Next.js, TypeScript
                </p>
              </div>

              <div className="p-5 bg-gray-800/10 backdrop-blur-sm rounded-xl border border-gray-700/20 hover:border-emerald-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Mobile Apps</h3>
                <p className="text-gray-500 text-sm">
                  React Native, Expo, Firebase
                </p>
              </div>
            </div>

            {/* Stats - More subtle */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-gray-800/10 rounded-xl border border-gray-700/20">
                <div className="text-xl font-medium text-cyan-300 mb-1">10+</div>
                <div className="text-xs text-gray-500">Projects</div>
              </div>
              <div className="text-center p-3 bg-gray-800/10 rounded-xl border border-gray-700/20">
                <div className="text-xl font-medium text-emerald-300 mb-1">2+</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center p-3 bg-gray-800/10 rounded-xl border border-gray-700/20">
                <div className="text-xl font-medium text-blue-300 mb-1">100%</div>
                <div className="text-xs text-gray-500">Quality</div>
              </div>
            </div>

            {/* CTA Button - More subtle */}
            <div className="pt-4">
              <a
                href="#mobile"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-800/20 hover:bg-gray-800/30 backdrop-blur-sm text-gray-300 font-medium rounded-xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                View My Projects
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - More subtle */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border border-gray-600/30 rounded-full flex justify-center">
            <ChevronDown className="w-3 h-3 text-gray-500 mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;