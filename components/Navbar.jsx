import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f5f5f5");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src=".//../public/assets/logo.png"
            alt="/"
            width="80"
            height="50"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li
                className="ml-10  text-sm uppercase
                     hover:text-[#887BB0]"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                className="ml-10  text-sm uppercase
                     hover:text-[#887BB0]"
              >
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className="ml-10  text-sm uppercase
                     hover:text-[#887BB0]"
              >
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className="ml-10  text-sm uppercase
                     hover:text-[#887BB0]"
              >
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li
                className="ml-10  text-sm uppercase
                     hover:text-[#887BB0]"
              >
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f5f5f5] p-6 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-500"
          }
        >
          <div>
            <div className="flex jw-full items-center justify-between">
              <Link href="/">
                <Image
                  src=".//../public/assets/logo.png"
                  alt="/"
                  width="87"
                  height="35"
                />
              </Link>
              <div onClick={handleNav} p-3 cursor-pointer>
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="width-[85%] md:w-[90%] py-4">
                Work together with me.
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#519D9E]">
                Get in Touch
              </p>
              <div className="flex items center justify-between my-4 w-full sm:1-[80%]">
                <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaEnvelope />
                </div>
                <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
