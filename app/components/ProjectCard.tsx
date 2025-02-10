import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  linkPath: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, linkPath, title, description }) => {
  return (
    <div className="group relative h-80 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
       <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
          {linkPath && (
            <a
              href={linkPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#FFBF58] text-gray-900 font-medium rounded-md hover:bg-[#ffaa58] transition-colors duration-200"
            >
              View Project
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ProjectCard;