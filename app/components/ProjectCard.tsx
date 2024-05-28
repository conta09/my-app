import React from "react";

// Define an interface for the component props
interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="lg:w-1/3 md:w-2/4 sm:w-[80%] py-3 px-3">
      <div
        className="h-60 md:h-72 rounded-md relative group"
        style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
