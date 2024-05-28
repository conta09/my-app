import React from "react";

// Define an interface for the component props
interface ProjectTagProps {
  name: string;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 border rounded ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
