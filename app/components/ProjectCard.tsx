import React from "react";
import Image from "next/image";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className=" lg:w-1/3 md:w-2/4 sm:w-[80%] py-3 px-3 ">
      <div className="h-60 md:h-72 rounded-md relative group" style={{ background: `url(${imageUrl})`, backgroundSize: "cover" }}>
        
      </div>
      <div className="text-white rounded-b-xl mt-3  py-6 px-4">
        <h5 className="text-xl  font-light hover:text-[#ED9911] mb-2">{title}</h5>
        <p className="text-[#807f7f] text-[1rem]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
