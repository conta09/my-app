import React from "react";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] border-t border-[#2a2a2a] py-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/mucyo-conta-54619a171/"
              className="text-[#aeacac] hover:text-[#ED9911] transition-colors duration-300"
            >
              <CiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/conta09"
              className="text-[#aeacac] hover:text-[#ED9911] transition-colors duration-300"
            >
              <IoLogoGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/conta__m/"
              className="text-[#aeacac] hover:text-[#ED9911] transition-colors duration-300"
            >
              <IoLogoInstagram className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Copyright Text */}
          <p className="text-[#aeacac] text-center lg:text-left">
            All rights reserved ©️ 2024{" "}
            <a
              href="https://www.linkedin.com/in/mucyo-conta-54619a171/"
              className="text-[#ED9911] hover:text-[#ffbf69] transition-colors duration-300"
            >
              Mucyo Conta
            </a>
          </p>
        </div>

        {/* Optional: Add a subtle gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#ED9911] to-transparent" />
      </div>
    </motion.footer>
  );
};

export default Footer;