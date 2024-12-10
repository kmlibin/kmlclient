"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 850px)");

    // screen size changes
    const handleResize = (event: MediaQueryListEvent) => {
      setIsSmall(event.matches);
      setNavIsOpen(!event.matches);
    };

    // if the query is correct, set isSmall to true. if isSmall is false, is Open needs to be set to true.
    //if isSmall is true, set isopen to false
    setIsSmall(mediaQuery.matches);
    setNavIsOpen(!mediaQuery.matches);

    //listen for changes
    mediaQuery.addEventListener("change", handleResize);

    // cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  //checks if the screen is small size on every url change
  useEffect(() => {
    if (isSmall) setNavIsOpen(false);
  }, [pathname]);

  //for responsive screens, checks if the screen is small it will set nav to false
  const linkClickToggle = () => {
    if (isSmall) {
      setNavIsOpen(false);
    } else {
      setNavIsOpen(true);
    }
  };

  //for the button to toggle navbar
  const toggleNavbar = () => {
    setNavIsOpen(!isOpen);
    setRotate(true);
    setTimeout(() => setRotate(false), 500);
  };

  return (
    <div className="relative w-full">
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-50  transition-opacity duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleNavbar}
        aria-hidden={!isOpen}
      ></div>
      <div
        className={`absolute top-2 left-0 md:h-[100px] h-[100vh]  w-5/6 xl:w-2/3 bg-customIndigo z-[200] text-customWhite p-4 rounded-tr-lg rounded-br-lg
              transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
              transition-transform duration-300 ease-in-out z-40 flex items-center`}
        aria-labelledby="navbar"
        role="navigation"
      >
        <ul
          className={`${ibm.className} md:flex-row flex-col flex-grow flex w-full gap-6 md:items-center md:justify-between justify-start items-end h-full text-customWhite`}
        >
          <Link
            href={paths.homePath()}
            className="md:mb-0 mb-10"
            onClick={linkClickToggle}
            aria-label="Navigate to home"
          >
            <Image
              src={logo}
              alt="logo"
              role="img"
              className="ml-4 h-[75px] w-[75px] rounded-full box-content border-4 border-customGold"
            />
          </Link>
          <div className="md:flex-row flex-col flex md:mr-10 gap-10 lg:gap-24 w-full md:w-auto items-end ">
            <Links
              path={paths.homePath()}
              linkName="Home"
              linkClickToggle={linkClickToggle}
              aria-label="Navigate to home"
            />
            <Links
              path={paths.portfolioPath()}
              linkName="Portfolio"
              linkClickToggle={linkClickToggle}
              aria-label="View portfolio"
            />
            <Links
              path={paths.aboutPath()}
              linkName="About"
              linkClickToggle={linkClickToggle}
              aria-label="Learn more about us"
            />
            <Links
              path={paths.contactPath()}
              linkName="Contact"
              linkClickToggle={linkClickToggle}
              aria-label="Contact us"
            />
          </div>
        </ul>
      </div>

      <button
        onClick={toggleNavbar}
        className={`absolute top-2 sm:top-[1rem] md:top-[2.4rem] right-2 sm:right-6  text-blackTextFont  bg-customGold w-10 h-10 rounded flex items-center justify-center
              transition-transform duration-300 ease-in-out z-[200] ${
                rotate ? "rotate-color-360" : ""
              }`}
        aria-expanded={isOpen}
      >
        <RiMenu5Line size={24} className="" />
      </button>
    </div>
  );
};

export default Navbar;
