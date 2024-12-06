"use client";
import React, { useState, useEffect } from "react";
//images
import Image from "next/image";
import background from "../../../../public/images/kmlbg.jpg";
import bwsvg4 from "../../../../public/images/newlogo.png";
import smalllogo from "./smalllogo.svg";
import smallbg from "./smallrainbowbg.jpg";
//libraries
import { Fade } from "react-awesome-reveal";
//css
import "./Home.css";
//components
import NavLinks from "./NavLinks";
import Navbar from "@/components/Navbar/Navbar";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // check if the screen width is below 640px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize();

    // event listener for changes
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile && <Navbar />}
      <div
        id="hero-section"
        className="relative h-[100vh] flex w-full items-end sm:items-center z-10"
      >
        {/* bg */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={background}
            fill
            style={{ objectFit: "cover" }}
            alt="rainbow background"
            priority
            className="sm:block hidden"
          />
          <Image
            src={smallbg}
            fill
            style={{ objectFit: "cover" }}
            alt="rainbow background"
            priority
            className="sm:hidden"
          />
          <div className="absolute inset-0 sm:w-1/3 w-2/3 bg-gradient-to-r from-slate-500 sm:bg-gradient-to-r sm:from-gray-900 to-transparent "></div>
        </div>

        {/* image */}

        <div className="relative flex justify-end sm:flex-row flex-col items-center sm:ml-[5rem] sm:py-10 sm:mb-4 z-[10]">
          <Fade triggerOnce>
            <Image
              src={bwsvg4}
              width={650}
              alt="Libin Web Development and image of Kelli"
              className="hidden sm:block"
              priority
            />
          </Fade>

          <Fade triggerOnce>
            <Image
              src={smalllogo}
              width={650}
              alt="Libin Web Development and image of Kelli"
              className="h-[530px] object-cover sm:hidden"
              priority
            />
          </Fade>

          <div className="sm:absolute sm:-right-[52%] sm:bottom-0 flex flex-col justify-end sm:mb-2 sm:py-10 text-gray-900 text-2xl leading-loose list-none">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
