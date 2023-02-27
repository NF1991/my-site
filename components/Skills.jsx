import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 flex justify-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">Skills</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/html-5.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/css-3.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/js.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/tailwind-css-icon.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/react.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/nextjs-icon.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/bootstrap.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/figma.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/xd.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>

          <div className="shadow-md p-6 hover:scale-105 ease-in duration-300">
            <div className="m-auto">
              <Image
                src="/../public/assets/skills/illustrator.png"
                alt="/"
                width="200"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
