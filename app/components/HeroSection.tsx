"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="h-[80vh]  flex flex-col justify-center lg:ml-20 mx-5">
      <h1 className="lg:w-[70%]   text-white text-7xl sm:4xl lg:leading-snug my-auto">
        <span className="font-normal text-5xl text-white text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-500">
          Hello, I&apos;m {"Conta "}
        </span>
        <br></br>
        <TypeAnimation
          className='font-medium tracking-tight text-[#ED9911]'
          sequence={[
            "Web Developer",
            1000,
            "UI/UX Designer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <span className='flex'>
        <FaCircle size={10} className='text-[#83ef93] mt-2 mx-2 hover:text-[#93f9a3]' />
        <p className='text-[#717171]'>Available for work</p>
      </span>
      <div className="flex text-[#aeadad] border-[#908d8d] my-auto">
        <a href="https://www.linkedin.com/in/mucyo-conta-54619a171/"><CiLinkedin size={30} /></a>
        <a href="https://github.com/conta09"> <IoLogoGithub size={20} className="mt-1 mx-2" /></a>
        <a href="https://www.instagram.com/conta__m/"><IoLogoInstagram size={20} className="mt-1 mx-2" /></a>
      </div>
      <p className='font-light text-[#aeadad] lg:w-1/3'>
        In the last 1 year, I&apos;ve specialized in web development,UI/UX design and everything in between
      </p>
    </div>
  
    
  )
}

export default HeroSection;
