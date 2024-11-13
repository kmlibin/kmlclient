import React from "react";
import { ibm, fredoka } from "../utils/fonts";
import Image from "next/image";
import kelli from "./bw8.jpg";
import NotHomeContactWrapper from "@/components/Wrapper/NotHomeContactWrapper";
import { bio } from "./aboutContent";
import ZoomHeading from "@/components/ZoomHeading";

const About = () => {
  return (
    <div className=" bg-customWhite flex w-full">
      <div className="w-1/2 relative  h-[100vh] flex flex-col items-center justify-center">
        <div className="absolute -top-1/4 -left-1/4 rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <Image
          src={kelli}
          alt="kelli"
          height={450}
          className="z-10 border-8 border-customIndigo"
        />
      </div>

      <div className="relative w-1/2 flex flex-col items-start justify-start mt-[11rem] gap-10 tracking-wide pb-[8rem]">
        <div className="absolute -bottom-20 -right-[20%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
        <ZoomHeading as="h2" className={`${fredoka.className} text-5xl`}>
          Nice to Meet You!
        </ZoomHeading>
        <p className={`w-2/3 ${ibm.className} text-md z-[20]`}>
          {bio.mainText}
        </p>
      </div>
    </div>
  );
};

export default NotHomeContactWrapper(About);
