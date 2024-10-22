"use client";
import React, { useState } from "react";
import BreakoutGame from "../Breakout";
import Image from "next/image";

import "./Portfolio.css";

type CubeProps = {
  frontImage?: any;
  backImage?: any;
  height: string;
  complete?: boolean;
  review?: string;
  link?: string;
};
//@ts-ignore
const Cube = ({
  frontImage,
  backImage,
  height,
  complete,
  review,
  link,
}: CubeProps) => {
  const [currentSide, setCurrentSide] = useState("show-front");
  const isCube = height === "250px";

  const handleMouseEnter = () => {
    setCurrentSide("show-bottom");
  };

  const handleMouseLeave = () => {
    setCurrentSide("show-front");
  };

  if (isCube) {
    // Render the cube template
    return (
      <div className="scene w-[100%] h-auto overflow-hidden ">
        <div
          className={`cube ${currentSide} w-[100%] h-[250px] relative transition-transform duration-1000`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            className="cube__face cube__face--front cursor-pointer absolute w-[100%] h-[100%] border-2 border-black text-3xl text-center text-white"
            src={frontImage}
            alt="CW"
          />
   
   <div className="cube__face cube__face--bottom cursor-pointer absolute w-[100%] h-[100%]">
        <Image
          className="absolute w-full h-full"
          src={backImage}
          alt="Back Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-xl">
          Add review text, stars, links
        </div>
        </div>

        </div>
      </div>
    );
  } else {
    //template for non-cubes
    return (
      <div
        style={{
          width: "100%",
          height: height,
          backgroundColor: "lightgray",
        }}
      >
        {/* <div>front</div> */}
        <BreakoutGame />
      </div>
    );
  }
};

export default Cube;
