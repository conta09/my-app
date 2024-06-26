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
    title: "The Idea Hub",
    description: "An online suggestion box where users can submit their ideas anonymously, ensuring honest and unbiased input.",
    imgUrl: "/images/projects/thebox.png",
    linkPath: "https://github.com/conta09/chat-room.git",

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
    title: "Fast Food design",
    description: "Landing page design of a fast food reataurant in kigali,which showcases the menu and prices of the resto",
    imgUrl: "/images/projects/Group2.png",
    linkPath: "",

  },
  {
    id: 5,
    title: "Tigo site",
    description: "Hero section UI design of the current telecommunication network tigo",
    imgUrl: "/images/projects/Group66.png",
    linkPath: "",
  },
 

];

const ProjectSection = () => {
  return (
    <>
      <p className="lg:text-[2rem] lg:ml-20 text-center text-2xl font-medium text-[#ED9911] my-5  ">Featured Work</p>

    <section id="projects" className='flex justify-center '>
      <div className="flex flex-col  lg:flex-row md:flex-wrap  justify-center w-[90%]  ">


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
    
    </section>
    </>

  )
}

export default ProjectSection
