import React from "react";
import Image from "next/legacy/image";
import SunReadingImg from "../public/assets/projects/sunreadingpreview.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import Link from "next/link";
import SunReadingPreview from "../public/assets/projects/sunreading.png";

const sunReading = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectfill="contain"
          src={SunReadingPreview}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] z-10 p-2">
          <h2 className="py-2">Clow Card Sun Reading</h2>
          <h3>HTML, CSS, Javascript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="py-2">Project Overview</h2>
          <p className="pb-2">
            I wanted to practice creating a deck of cards with Javascript, and
            thought Tarot cards might mix it up a little bit. Then I decided to
            add a little bit of nostalgia once I found out that a Clow Card
            fortune telling book exists. It's a simple project that allows you
            to draw nine cards, complete with meanings and descriptions. The
            instructions are on the right, which tell you what each card says
            about you.
          </p>
          <p>
            The "draw" button is disabled once you've drawn nine cards, and the
            reset button allows you start again. Also, each card picked is
            listed so you don't forget what you got. This was a fun project,
            made all the more fun for the nostalgia factor. I definitely got the
            most satisfaction from being able to make it so drawn cards are
            listed. If I were to come back to this project, I'd focus on making
            it responsive.
          </p>
          <Link
            href="https://serene-dango-662f51.netlify.app/"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/NF1991/clow-card-sun-reading"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
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

export default sunReading;
