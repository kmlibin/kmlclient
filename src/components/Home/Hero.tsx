"use client";
import React from "react";
import Image from "next/image";
import Trail from "./Trail";
import background from "../../../public/images/kmlbg.jpg";
import { Fade } from "react-awesome-reveal";

import fulllogo from "../../../public/images/largerlogo.svg";
import bwsvg1 from "../../../public/images/bwsvg1.svg";
import bwsvg2 from "../../../public/images/bwsvg2.svg";
import bwsvg3 from "../../../public/images/bwsvg3.svg";
import bwsvg4 from "../../../public/images/bwsvg4.svg";
import bwsvg5 from "../../../public/images/bwsvg5.svg";
import bwsvg6 from "../../../public/images/bwsvg6.svg";
import bwsvg7 from "../../../public/images/bwsvg7.svg";
import bwsvg8 from "../../../public/images/bwsvg8.svg";

import { ibm } from "../../app/utils/fonts";
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
          priority
          fill
          style={{ objectFit: "cover" }}
          alt="CanvaBG"
        />
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      {/* image */}

      <div className="relative flex justify-end items-center ml-[5rem] py-10 mb-4">
        <Fade triggerOnce>
          <Image src={bwsvg4} width={650} alt="logo" />
        </Fade>
        <div className="absolute -right-[52%] bottom-0 flex flex-col justify-end mb-2 py-10 text-gray-900 text-2xl leading-loose list-none">
          {/* <ul className={` ${ibm.className} mb-5`}>
            <Trail open= {true} >
            <li>/ About</li>
            <li>/ View Client Portfolio</li>
            <li>/ Getting Started</li>
            <li>/ FAQ</li>
            </Trail>
          </ul> */}
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Hero;
