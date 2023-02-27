import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, tools, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto shadow-md shadow-gray-400 p-4 group hover:bg-[#fff]">
      <Image className="group-hover:opacity-10" src={backgroundImg} alt="/" />
      <div
        className="hidden group-hover:block absolute
             top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h3 className="text-2xl tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-center">{tools}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 font-bold text-lg cursor-pointer bg-[#887BB0] text-[#fff]">
            View Details
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
