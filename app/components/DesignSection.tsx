"use client";
import React from "react";
import Image from "next/image";

interface DesignItem {
  id: number;
  title: string;
  category: string;
  imgUrl: string;
}

const designData: DesignItem[] = [
  {
    id: 1,
    title: "UI App Design",
    category: "UI/UX",
    imgUrl: "/images/projects/profile1.png",
  },
  {
    id: 2,
    title: "Homepage Concept",
    category: "Web",
    imgUrl: "/images/projects/Group66.png",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "Graphic",
    imgUrl: "/images/projects/Group2.png",
  },
  {
    id: 4,
    title: "Visualization",
    category: "Prototyping",
    imgUrl: "/images/projects/image 22.png",
  },
];

const DesignSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Design Showcase
          <span className="block w-16 h-1 bg-[#FFBF58] mt-2 mx-auto"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 h-[800px] md:h-[600px]">
          {/* Large left card */}
          <div className="relative group row-span-2 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[0.98]">
            <Image
              src={designData[0].imgUrl}
              alt={designData[0].title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-[#FFBF58] text-sm font-medium mb-2">
                {designData[0].category}
              </span>
              <h3 className="text-2xl font-bold text-white">{designData[0].title}</h3>
            </div>
          </div>

          {/* Right top card */}
          <div className="relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[0.98]">
            <Image
              src={designData[1].imgUrl}
              alt={designData[1].title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-[#FFBF58] text-sm font-medium mb-2">
                {designData[1].category}
              </span>
              <h3 className="text-xl font-bold text-white">{designData[1].title}</h3>
            </div>
          </div>

          {/* Right bottom grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {designData.slice(2).map((design) => (
              <div
                key={design.id}
                className="relative group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[0.98]"
              >
                <Image
                  src={design.imgUrl}
                  alt={design.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[#FFBF58] text-xs font-medium mb-1">
                    {design.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">{design.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
