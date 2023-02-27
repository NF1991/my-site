import React from "react";
import Image from "next/image";
import htmlImg from "/../../public/assets/skills/html-5.png";
import cssImg from "/../../public/assets/skills/css-3.png";
import jsImg from "/../../public/assets/skills/js.png";
import tailwindImg from "/../../public/assets/skills/tailwind-css-icon.png";
import reactImg from "/../../public/assets/skills/react.png";
import nextImg from "/../../public/assets/skills/nextjs-icon.png";
import bootstrapImg from "/../../public/assets/skills/bootstrap.png";
import figmaImg from "/../../public/assets/skills/figma.png";
import xdImg from "/../../public/assets/skills/xd.png";
import illustratorImg from "./../public/assets/skills/illustrator.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 flex justify-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">Skills</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={htmlImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={cssImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={jsImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={tailwindImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={reactImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={nextImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={bootstrapImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={figmaImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={xdImg} alt="/" width="200" height="200" />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image src={illustratorImg} alt="/" width="200" height="200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
