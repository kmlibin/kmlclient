'use client'
import React from "react";
//fonts and utils
import { fredoka, ibm } from "@/app/utils/fonts";
import paths from "@/app/paths";

//libraries
import { FcCompactCamera } from "react-icons/fc";
//components

import Button from "@/components/Button";
import ZoomHeading from "@/components/ZoomHeading";
//next dynamic
import dynamic from "next/dynamic";


const LazySlider = dynamic(() => import("./Slider"), { ssr: false });

const Portfolio2Banner = () => {
  return (
    <div
      id="portfolio-section"
      className="relative flex flex-col justify-center items-center w-full pb-[4rem]"
    >
      {/* rainbow */}
      <div className=" absolute -bottom-[10vh] -right-[50vw] sm:-right-[10vw] rainbow-circle sm:w-[500px] w-[400px] rounded-full sm:h-[500px] h-[400px] -z-1"></div>

      <ZoomHeading
        as="h3"
        className={`${fredoka.className} text-4xl sm:text-5xl w-full text-center tracking-wide flex items-center justify-center gap-3 sm:pt-10  mb-5 z-10`}
      >
        Our Work In Action <FcCompactCamera className="hidden sm:block" />
      </ZoomHeading>
      <p
        className={`${ibm.className} w-[95%] text-lg md:w-1/2 text-center md:mb-5 mb-[5rem]`}
      >
        Every project is a partnership—see how we collaborate with clients to
        craft impactful, results-driven solutions.
      </p>
      <div className="flex justify-center items-center  sm:-mt-[10rem] lg:mt-[5rem]">
        <LazySlider />
      </div>
      <div className="h-[150px] bg-customBlue bg-opacity-20 w-full flex items-center justify-center mt-5 sm:mt-[5rem] md:mt-5" >
        <Button path={paths.portfolioPath()} text="See More" label="View Portfolio" />
      </div>
    </div>
  );
};

export default Portfolio2Banner;
