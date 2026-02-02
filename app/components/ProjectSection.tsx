"use client";
import React from 'react';
import ProjectCard from './ProjectCard';


const projectData =[
 
  {
    id: 1,
    title: "KglSites",
    description: "A prototype web app where users can find web templates that are arleady developed",
    imgUrl: "/images/projects/Group17.png",
    linkPath: "https://github.com/conta09/kigali-sites.git",
   
  },
  {
    id: 2,
    title: "Omega app",
    description: "A full-stack web application, Omega App, using Next.js and Tailwind CSS, featuring an interactive dashboard for user account management",
    imgUrl: "/images/projects/proj1.png",
    linkPath: "https://github.com/conta09/omega-prototype.git/",

  },
  
  {
    id: 3,
    title: "Easy Lend",
    description: "A web page where users can apply for a loan when they meet the requirements",
    imgUrl: "/images/projects/profile1.png",
    linkPath: "https://main--easy-lend.netlify.app",

  },
  {
    id: 4,
    title: "Destiny Guided",  
    description: "A responsive web app showcasing a company that offers services",
    imgUrl: "/images/projects/destiny.png",
    linkPath: "https://www.destinyguided.com/",
  },
  {
    id: 5,
    title: "Tigo site",
    description: "Hero section UI design of the current telecommunication network tigo",
    imgUrl: "/images/projects/Group66.png",
    linkPath: "",
  },
 
  {
    id: 6,
    title: "Chat Room",
    description: "Built a real-time anonymous chatroom where users can send messages without revealing their identities, similar to a suggestion box with continuous chat flow",
    imgUrl: "/images/projects/idea.png",
    linkPath: "",

  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-gray-900
">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Featured Work
          <span className="block w-16 h-1 bg-[#FFBF58] mt-2 mx-auto"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imgUrl}
              linkPath={project.linkPath}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;