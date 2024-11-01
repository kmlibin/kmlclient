"use client";
import React, { useState, useRef, useEffect } from "react";
import BreakoutGame from "../Breakout";
import Image from "next/image";
import Bubbles from "./Bubbles";
import { IoStarSharp } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import { ibm } from "@/app/utils/fonts";

import "./Portfolio.css";
import Link from "next/link";

type CubeProps = {
  frontImage?: any;
  backImage?: any;
  height?: string;
  complete?: boolean;
  review?: string;
  link?: string;
  bubbles?: boolean;
  cube?: boolean;
  logo?: any;
  owner?: string;
  business?: string;
};
//@ts-ignore
const Cube = ({
  frontImage,
  backImage,
  height,
  complete,
  cube,
  review,
  link,
  logo,
  bubbles,
  owner,
  business,
}: CubeProps) => {
  const [currentSide, setCurrentSide] = useState("show-front");

  const [cubeDepth, setCubeDepth] = useState("175px");
  //change value from height to "isCube"

  const cubeRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setCurrentSide("show-bottom");
  };

  const handleMouseLeave = () => {
    setCurrentSide("show-front");
  };

  //check the height of the cube, which then calculates the height of the cube, divides by two and sends to css
  useEffect(() => {
    if (cubeRef.current) {
      const cubeHeight = cubeRef.current.offsetHeight;
      setCubeDepth(`${cubeHeight / 2}px`);
    }
  }, [cubeRef]);

  if (cube) {
    return (
      <div className="scene w-auto h-auto overflow-hidden z-[20] ">
        <div
          ref={cubeRef}
          className={`cube ${currentSide} w-auto relative transition-transform duration-1000`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={
            { "--cube-depth": cubeDepth, height: height } as React.CSSProperties
          }
        >
          <Image
            className="cube__face cube__face--front cursor-pointer absolute w-[100%] h-[100%] border-2 border-black text-3xl text-center text-white"
            src={frontImage}
            alt="CW"
          />

          <div className="cube__face cube__face--bottom absolute w-[100%] h-[100%]">
            <Image
              className="absolute w-full h-full"
              src={backImage}
              alt="Back Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 bg-gray-900 bg-opacity-60 to-transparent z-10"></div>

            <div
              className={`${ibm.className} absolute tracking-wide inset-0 z-20 flex flex-col items-center justify-center text-white text-xl gap-5`}
            >
              <h3 className="text-4xl">{owner}</h3>
              <Link
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl cursor-pointer flex items-center gap-4 hover:text-customTurquoise hover:underline transition duration-300 hover:underline-offset-4"
              >
                {business}
                <RiExternalLinkLine />
              </Link>
              <div className="flex w-full gap-4 justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <IoStarSharp key={index} size={35} color={"#fec246"} />
                ))}
              </div>
              <p
                className={`w-2/3 text-sm bg-customWhite text-black p-7`}
              >
                {review}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (bubbles) {
    return (
      <div
        style={{
          width: "100%",
          height: height,
          cursor: "pointer",
          zIndex: "20",
        }}
      >
        <Bubbles id={review ? review : "string"} />
      </div>
    );
  } else {
    //template for non-cube and non-bubble
    return (
      <div
        style={{
          width: "100%",
          height: height,
          backgroundColor: "pink",
        }}
      ></div>
    );
  }
};

export default Cube;
