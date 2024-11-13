"use client";
import React, { useState } from "react";
//libraries
import { BiSolidSquareRounded } from "react-icons/bi";
//images
import logo from "../../../public/images/klbg.svg";
import Image from "next/image";
//fonts
import { ibm } from "@/app/utils/fonts";
//routing
import paths from "@/app/paths";
import Link from "next/link";
//components
import Links from "./Links";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [rotate, setRotate] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setRotate(true);
    setTimeout(() => setRotate(false), 500);
  };

  return (
    <div className="relative w-full">
      <div
        className={`absolute top-2 left-0 h-[100px] w-2/3 bg-customIndigo  text-customWhite p-4 rounded-tr-lg rounded-br-lg
              transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
              transition-transform duration-300 ease-in-out z-40 flex items-center`}
      >
        <ul
          className={`${ibm.className} flex-grow flex w-full gap-6 items-center justify-between text-customWhite`}
        >
          <Link href={paths.homePath()}>
            <Image
              src={logo}
              alt="logo"
              height={75}
              className="ml-4 rounded-full box-content border-4 border-customGold "
            />
          </Link>
          <div className="flex mr-10 gap-24 items-center">
            <Links path={paths.homePath()} linkName="Home" />
            <Links path={paths.portfolioPath()} linkName="Portfolio" />
            <Links path={paths.aboutPath()} linkName="About" />
            <Links path={paths.contactPath()} linkName="Contact" />
          </div>
        </ul>
      </div>

      <button
        onClick={toggleNavbar}
        className={`absolute top-[2.4rem] right-6 text-customGold w-10 h-10 rounded flex items-center justify-center
              transition-transform duration-300 ease-in-out z-50 ${
                rotate ? "rotate-color-360" : ""
              }`}
      >
        <BiSolidSquareRounded size={24} />
      </button>
    </div>
  );
};

export default Navbar;
