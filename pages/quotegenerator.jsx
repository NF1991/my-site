import React from "react";
import Image from "next/legacy/image";
import QuoteImg from "../public/assets/projects/quotegeneratorpreview.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import Link from "next/link";

const quotegenerator = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFill="contain"
          src={QuoteImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] z-10 p-2">
          <h2 className="py-2">Random Quote Generator</h2>
          <h3>HTML, CSS, Javascript, API</h3>
        </div>
      </div>

      <div className="max-w-[1240px]mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="py-2">Project Overview</h2>
          <p>
            This is a quote generator I made using HTML, CSS, Javascript, and an
            API. When you click "new quote" it will display a randomly generated
            quote, and there's also a button to share the quote to Twitter. Find
            the links to the code, and live preview below.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
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

export default quotegenerator;
