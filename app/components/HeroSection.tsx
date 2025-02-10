"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20 py-24">
      <div className="max-w-4xl space-y-8">
        <div className="flex items-center space-x-3 mb-6">
          <FaCircle className="text-[#83ef93] animate-pulse" />
          <span className="text-[#717171] font-medium">Available for work</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Hello, I&apos;m <span className="text-[#ED9911]">Conta</span>
          <br />
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED9911] to-[#ffbf69]"
            repeat={Infinity}
          />
        </h1>

        <p className="text-xl text-[#aeadad] max-w-2xl leading-relaxed">
          Specializing in crafting beautiful, functional web experiences with modern technologies.
          Passionate about turning ideas into interactive reality.
        </p>

        <div className="flex space-x-6 items-center mt-8">
          <a
            href="https://www.linkedin.com/in/mucyo-conta-54619a171/"
            className="p-3 rounded-full border border-[#3d3d3d] hover:border-[#ED9911] transition-all hover:bg-[#ED9911]/10"
          >
            <CiLinkedin className="text-2xl text-[#aeadad] hover:text-[#ED9911]" />
          </a>
          <a
            href="https://github.com/conta09"
            className="p-3 rounded-full border border-[#3d3d3d] hover:border-[#ED9911] transition-all hover:bg-[#ED9911]/10"
          >
            <IoLogoGithub className="text-2xl text-[#aeadad] hover:text-[#ED9911]" />
          </a>
          <a
            href="https://www.instagram.com/conta__m/"
            className="p-3 rounded-full border border-[#3d3d3d] hover:border-[#ED9911] transition-all hover:bg-[#ED9911]/10"
          >
            <IoLogoInstagram className="text-2xl text-[#aeadad] hover:text-[#ED9911]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
