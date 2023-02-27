import React from "react";
import Image from "next/legacy/image";
import WhiteNoiseImg from "../public/assets/projects/whitenoise.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import Link from "next/link";

const whiteNoiseApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFill="contain"
          src={WhiteNoiseImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] z-10 p-2">
          <h2 className="py-2">White Noise App</h2>
          <h3>HTML, CSS, Javascript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8">
        <div className="col-span-4">
          <h2 className="py-6">Project Overview</h2>
          <p className="pb-2">
            White noise app with four different sounds to choose from, and three
            different durations. The image changes depending on the sound
            chosen.
          </p>
          <p className="pb-2">
            This was a fun project, the most challenging part being having the
            image change along with the sound on a button click.
          </p>
          <Link
            href="https://github.com/NF1991/white-noise-app"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://heroic-sunflower-572af3.netlify.app/"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default whiteNoiseApp;
