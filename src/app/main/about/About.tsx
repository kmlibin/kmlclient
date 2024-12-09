"use client";
import React from "react";
//fonts
import { ibm, fredoka } from "../../utils/fonts";
//images and content
import kelli from "../../../../public/images/bw8.jpg";
import { bio } from "./aboutContent";
//components
import ZoomHeading from "@/components/ZoomHeading";
//libraries
import { Fade } from "react-awesome-reveal";
import Icons from "@/components/Icons";

const About = () => {
  return (
    <div className=" bg-customWhite flex-col md:flex-row flex w-full relative h-full items-start overflow-hidden">
      <Icons />
      <div className="h-full w-[100vw]  absolute -mt-[7rem] md:-mt-0">
        <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
      </div>
      {/* on smaller screens */}
      <div className="md:w-1/2 w-full  md:mt-[180px] md:h-[100vh] flex flex-col items-center">
        <ZoomHeading
          as="h2"
          className={`${fredoka.className} md:hidden text-center text-5xl z-[50] mb-4`}
        >
          Nice to Meet You!
        </ZoomHeading>
        <Fade delay={0.5}>
          <img
            src={kelli.src}
            alt="kelli"
            className="z-10 border-8 border-customIndigo w-2/3 sm:w-1/3 lg:w-auto lg:h-[35%] mx-auto"
          />
        </Fade>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start md:mt-[11rem] mt-[5rem] gap-10 tracking-wide pb-[8rem]">
        <ZoomHeading
          as="h2"
          className={`${fredoka.className} text-5xl z-[50] hidden md:block`}
        >
          Nice to Meet You!
        </ZoomHeading>
        <Fade direction="up" triggerOnce>
          <div className="w-full h-full flex items-center justify-center md:items-start md:justify-start ">
            <p
              className={` w-[95%] lg:w-2/3 ${ibm.className} text-md z-[20] bg-customWhite bg-opacity-90 p-2 rounded-xl`}
            >
              {bio.mainText}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
