"use client";
import React from "react";
//fonts
import { ibm, fredoka } from "../../utils/fonts";
//images and content
import Image from "next/image";
import kelli from "../../../../public/images/bw8.jpg";
import { bio } from "./aboutContent";
//components
import NotHomeContactWrapper from "@/components/Wrapper/NotHomeContactWrapper";
import ZoomHeading from "@/components/ZoomHeading";
//libraries
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className=" bg-customWhite flex-col sm:flex-row flex w-full relative h-full items-start ">
      <div className="h-full w-[100vw] overflow-x-hidden absolute -mt-[7rem] sm:-mt-0">
        <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
      </div>
      {/* on smaller screens */}
      <div className="sm:w-1/2 w-full  sm:mt-[180px] sm:h-[100vh] flex flex-col items-center">
        <ZoomHeading
          as="h2"
          className={`${fredoka.className} sm:hidden text-5xl z-[50] mb-4`}
        >
          Nice to Meet You!
        </ZoomHeading>
        <Fade>
          <img
            src={kelli.src}
            alt="kelli"
            className="z-10 border-8 border-customIndigo w-2/3 sm:w-auto sm:h-[35%] mx-auto"
          />
        </Fade>
      </div>

      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-start sm:mt-[11rem] mt-[5rem] gap-10 tracking-wide pb-[8rem]">
        <ZoomHeading
          as="h2"
          className={`${fredoka.className} text-5xl z-[50] hidden sm:block`}
        >
          Nice to Meet You!
        </ZoomHeading>
        <p
          className={` w-[95%] sm:w-2/3 ${ibm.className} text-md z-[20] bg-customWhite bg-opacity-90 p-2 rounded-xl`}
        >
          {bio.mainText}
        </p>
      </div>
    </div>
  );
};

export default NotHomeContactWrapper(About);
