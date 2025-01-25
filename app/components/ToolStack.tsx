"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

const tools = [
  {
    name: 'VS Code',
    category: 'CODE',
    image: '/images/projects/vscode.png',
    color: '#007ACC',
  },
  {
    name: 'Figma',
    category: 'DESIGN',
    image: '/images/projects/figma.png',
    color: '#A259FF',
  },
  {
    name: 'Notion',
    category: 'DOCUMENTATION',
    image: '/images/projects/Notion.png',
    color: '#FFFFFF',
  },
  {
    name: 'Conda',
    category: 'Analysis',
    image: '/images/projects/conda.png',
    color: '#A259FF',
  },
];

const ToolStack = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-[#121212] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold bg-gradient-to-r from-[#ED9911] to-[#ffbf69] bg-clip-text text-transparent mb-12"
        >
          Tool Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2a2a2a] hover:bg-[#333333] transition-all duration-300 p-6 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ED9911]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-110">
                  <Image 
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="object-contain"
                    style={{ filter: tool.color === '#FFFFFF' ? 'invert(1)' : 'none' }}
                  />
                </div>
                
                <span 
                  className="text-sm font-medium tracking-wider"
                  style={{ color: tool.color }}
                >
                  {tool.category}
                </span>
                
                <h3 className="text-xl font-semibold text-white group-hover:text-[#ED9911] transition-colors duration-300">
                  {tool.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolStack