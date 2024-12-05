"use client";
import React, { useEffect, useState } from "react";
//libraries
import { RiMenu5Line } from "react-icons/ri";
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
  const [isOpen, setNavIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  //checking for screen width - less than 640px, isopen is set to false.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setNavIsOpen(false); // close the navbar by default on smaller screens
        setIsSmall(true);
      } else {
        setNavIsOpen(true); // keep it open for larger screens
        setIsSmall(false);
      }
    };

    handleResize();

    // listen for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setNavIsOpen(!isOpen);
    setRotate(true);
    setTimeout(() => setRotate(false), 500);
  };

  return (
    <div className="relative w-full">
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[90] transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleNavbar}
      ></div>
      <div
        className={`absolute top-2 left-0 sm:h-[100px] h-[100vh] z-[100] w-5/6 sm:w-2/3 bg-customIndigo  text-customWhite p-4 rounded-tr-lg rounded-br-lg
              transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
              transition-transform duration-300 ease-in-out z-40 flex items-center`}
      >
        <ul
          className={`${ibm.className} sm:flex-row flex-col flex-grow flex w-full gap-6 sm:items-center sm:justify-between justify-start items-end h-full text-customWhite`}
        >
          <Link
            href={paths.homePath()}
            className="sm:mb-0 mb-10"
            onClick={() => {
              if (isSmall) {
                setNavIsOpen(false);
              }
            }}
          >
            <Image
              src={logo}
              alt="logo"
              height={75}
              className="ml-4 rounded-full box-content border-4 border-customGold"
            />
          </Link>
          <div className="sm:flex-row flex-col flex sm:mr-10 gap-20 sm:gap-24 w-full sm:w-auto items-end ">
            <Links
              path={paths.homePath()}
              linkName="Home"
              setNavIsOpen={setNavIsOpen}
              isSmall={isSmall}
            />
            <Links
              path={paths.portfolioPath()}
              linkName="Portfolio"
              setNavIsOpen={setNavIsOpen}
              isSmall={isSmall}
            />
            <Links
              path={paths.aboutPath()}
              linkName="About"
              setNavIsOpen={setNavIsOpen}
              isSmall={isSmall}
            />
            <Links
              path={paths.contactPath()}
              linkName="Contact"
              setNavIsOpen={setNavIsOpen}
              isSmall={isSmall}
            />
          </div>
        </ul>
      </div>

      <button
        onClick={toggleNavbar}
        className={`absolute top-2 sm:top-[2.4rem] right-2 sm:right-6 text-blackTextFont  bg-customGold w-10 h-10 rounded flex items-center justify-center
              transition-transform duration-300 ease-in-out z-[95] ${
                rotate ? "rotate-color-360" : ""
              }`}
      >
        {/* <BiSolidSquareRounded size={24} className="hidden sm:block"/> */}
        <RiMenu5Line size={24} className="" />
      </button>
    </div>
  );
};

export default Navbar;
