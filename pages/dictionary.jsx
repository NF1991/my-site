import React from "react";
import Image from "next/legacy/image";
import DictionaryImg from "../public/assets/projects/dictionary.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import Link from "next/link";

const dictionaryApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFill="contain"
          src={DictionaryImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] z-10 p-2">
          <h2 className="py-2">Dictionary App</h2>
          <h3>HTML, Tailwind CSS, Javascript, API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8">
        <div className="col-span-4">
          <h2 className="py-6">Project Overview</h2>
          <p className="pb-2">
            This is a simple dictionary app created using Tailwind CSS, and the
            Free Dictionary API.
          </p>
          <p className="pb-2">
            This project overall allowed me to pratice more Tailwind CSS, as
            well as Javascript and how to call an API.
          </p>
          <p>
            If and when I come back this project, I would like to make it
            responsive.
          </p>
          <Link
            href="https://wondrous-sopapillas-e09c07.netlify.app/"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2 mt-20 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/NF1991/dictionary-app"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2 mt-20">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-400 p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <AiOutlineCaretRight className="pr-1" /> API
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

export default dictionaryApp;
