import React from "react";
import Image from "next/legacy/image";
import EcommerceImg from "../public/assets/projects/ecommercepreview.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import Link from "next/link";

const ecommerceApp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFill="contain"
          src={EcommerceImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#fff] z-10 p-2">
          <h2 className="py-2">Ecommerce - Clothing Store</h2>
          <h3>HTML, CSS, Javascript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8">
        <div className="col-span-4">
          <h2 className="py-6">Project Overview</h2>
          <p className="pb-2">
            An ecommerce project to practice using JS arrays and functions, as
            well as tinker around with CSS grids and flexbox.
          </p>
          <p className="pb-2">
            The cart is functional using local storage, which was my main aim --
            featured products can be added to the cart, and you can get to the
            cart page by clicking on the cart icon in the top right.
          </p>
          <p className="pb-2">
            The site is partially responsive, and I would like to come back at
            some point to make it fully responsive. I also tried to implement an
            Added to Cart popup which would appear on the bottom left every time
            a product is added to the cart, but I haven't quite figured out how
            to make it fully functional. I have left the code in there commented
            out so I can come back to it later.
          </p>
          <p>
            Overall I really enjoyed this project -- especially the feeling of
            satisfaction when I got the cart working, which for me the trickiest
            part. If I were to build the project again I would be more
            consistent in my use of flexbox and CSS grids.
          </p>
          <Link
            href="https://nf1991.github.io/ecommerce/"
            passHref={true}
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/NF1991/ecommerce"
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

export default ecommerceApp;
