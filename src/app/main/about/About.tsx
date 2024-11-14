"use client";
import React from "react";
//fonts
import { ibm, fredoka } from "../../utils/fonts";
//images and content
import Image from "next/image";
import kelli from "./bw8.jpg";
import { bio } from "./aboutContent";
//components
import NotHomeContactWrapper from "@/components/Wrapper/NotHomeContactWrapper";
import ZoomHeading from "@/components/ZoomHeading";
//libraries
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className=" bg-customWhite flex w-full h-full  relative">
      <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
      <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
      <div className="w-1/2   h-[100vh] flex flex-col items-center justify-center">
        <Fade>
          <Image
            src={kelli}
            alt="kelli"
            height={450}
            className="z-10 border-8 border-customIndigo"
            priority
          />
        </Fade>
      </div>

      <div className="w-1/2 flex flex-col items-start justify-start mt-[11rem] gap-10 tracking-wide pb-[8rem]">
        <ZoomHeading as="h2" className={`${fredoka.className} text-5xl`}>
          Nice to Meet You!
        </ZoomHeading>
        <p className={`w-2/3 ${ibm.className} text-md z-[20] bg-customWhite`}>
          {bio.mainText}
        </p>
      </div>
    </div>
  );
};

export default NotHomeContactWrapper(About);
