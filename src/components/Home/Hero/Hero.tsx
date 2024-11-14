"use client";
import React from "react";
//images
import Image from "next/image";
import background from "../../../../public/images/kmlbg.jpg";
import bwsvg4 from "../../../../public/images/bwsvg4.svg";
//libraries
import { Fade } from "react-awesome-reveal";
//css
import "./Home.css";
//components
import NavLinks from "./NavLinks";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="relative h-[100vh] flex w-full items-center z-10"
    >
      {/* bg */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={background}
          fill
          style={{ objectFit: "cover" }}
          alt="rainbow background"
          priority
        />
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      {/* image */}

      <div className="relative flex justify-end items-center ml-[5rem] py-10 mb-4">
        <Fade triggerOnce>
          <Image
            src={bwsvg4}
            width={650}
            alt="Libin Web Development and image of Kelli"
            priority
          />
        </Fade>
        <div className="absolute -right-[52%] bottom-0 flex flex-col justify-end mb-2 py-10 text-gray-900 text-2xl leading-loose list-none">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Hero;
