import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className=" py-4 text-[#121212]">Nicole Forbes</h1>
          <h1 className="py-2 text-[#519D9E]">Front-End Developer</h1>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/nicole-forbes-5328b3215/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/NF1991" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="mailto:nforbes.dev@gmail.com">
                <FaEnvelope />
              </Link>
            </div>
            <div className="p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="./downloads/Nicole_Forbes_CV.pdf" download>
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
