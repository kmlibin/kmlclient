"use client";
import React, { useState, useRef, useEffect } from "react";
//images
import Image, { StaticImageData } from "next/image";
//components
import Bubbles from "./Bubbles";
//libraries
import { IoStarSharp } from "react-icons/io5";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsCaretDownSquareFill, BsCaretUpSquareFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
//fonts
import { ibm, ibmBold } from "@/app/utils/fonts";
//css
import "./Portfolio.css";
//routing
import Link from "next/link";
//components
import ReviewSection from "./ReviewPopover";

type CubeProps = {
  frontImage?: StaticImageData | string;
  backImage?: StaticImageData | string;
  height?: string;
  complete?: boolean;
  review?: string;
  link?: string;
  bubbles?: boolean;
  cube?: boolean;
  logo?: StaticImageData | string;
  owner?: string;
  business?: string;
  isHome?: boolean;
};

const Cube = ({
  frontImage,
  backImage,
  height,
  complete,
  cube,
  review,
  link,
  isHome,
  bubbles,
  owner,
  business,
}: CubeProps) => {
  const [isFront, setIsFront] = useState(true);
  const [cubeDepth, setCubeDepth] = useState("175px");
  const [calcCubeHeight, setCalcCubeHeight] = useState("");

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 640px)");
    const mediaQueryMedium = window.matchMedia("(min-width: 641px) and (max-width: 1300px)");
    const mediaQueryLarge = window.matchMedia("(min-width: 901px)");
  
    const handleMediaChange = () => {
      if (mediaQuerySmall.matches) {
        setCalcCubeHeight("200px");
      } else if (mediaQueryMedium.matches) {
        setCalcCubeHeight("350px");
      } else if (mediaQueryLarge.matches) {
        setCalcCubeHeight("475px");
      }
    };
  
    // Initial check
    handleMediaChange();
  
    // Listen for media query changes
    mediaQuerySmall.addEventListener("change", handleMediaChange);
    mediaQueryMedium.addEventListener("change", handleMediaChange);
    mediaQueryLarge.addEventListener("change", handleMediaChange);
  
    return () => {
      mediaQuerySmall.removeEventListener("change", handleMediaChange);
      mediaQueryMedium.removeEventListener("change", handleMediaChange);
      mediaQueryLarge.removeEventListener("change", handleMediaChange);
    };
  }, []);
  const cubeRef = useRef<HTMLDivElement>(null);



  //check the height of the cube, which then calculates the height of the cube, divides by two and sends to css
  useEffect(() => {
    if (cubeRef.current) {
      const cubeHeight = cubeRef.current.offsetHeight;
      setCubeDepth(`${cubeHeight / 2}px`);
    }
  }, [cubeRef, calcCubeHeight]);

  const toggleFace = () => {
    setIsFront((prev) => !prev);
  };

  if (cube) {
    return (
 
        <div className="flex flex-col w-auto items-center justify-center">
          <div className="scene w-auto h-auto overflow-hidden z-[30] relative flex justify-center xs:justify-end xs:items-end flex-col items-center">
            {!isHome &&
              (complete ? (
                <Link
                  href={link || ""}
                  className={`${ibmBold.className} xs:w-[95%] w-3/4 flex justify-end text-right text-blackTextFont items-center xs:gap-4 text-sm xs:text-xl tracking-wide my-4 hover:text-customTurquoise duration-300`}
                >
                  {business}{" "}
                  <RiExternalLinkLine className="text-customIndigo sm:w-auto w-[10%]" />
                </Link>
              ) : (
                <p
                  className={`${ibmBold.className} w-full flex justify-end text-blackTextFont items-center gap-2 text-xl tracking-wide my-4 sm:mr-0 mr-4`}
                >
                  {business}
                </p>
              ))}
            <div
              ref={cubeRef}
              className={`cube ${
                isFront ? "show-front" : "show-bottom"
              } w-auto relative transition-transform duration-1000`}
              style={
                {
                  "--cube-depth": cubeDepth,
                  height: calcCubeHeight,
                } as React.CSSProperties
              }
            >
              <div
                className={`${
                  isHome
                    ? "cube__face cube__face--front"
                    : "cube__face cube__face--bottom"
                } absolute w-[100%] h-[100%]`}
              >
                <Image
                  className="absolute w-full h-full"
                  src={backImage ? backImage : ""}
                  alt="Back Image"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 bg-gray-900 bg-opacity-60 to-transparent z-10"></div>

                <div
                  className={`${ibm.className} absolute tracking-wide inset-0 z-20 flex flex-col items-center justify-center text-customWhite text-xl gap-2 md:gap-5`}
                >
                  <h3 className="text-xl xl:text-4xl">{owner}</h3>
                  <Link
                    href={link ? link : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:flex hidden text-xl cursor-pointer  items-center gap-4 hover:text-customTurquoise hover:underline transition duration-300 hover:underline-offset-4"
                  >
                    {business}
                    {complete && <RiExternalLinkLine />}
                  </Link>

                  {complete && (
                    <div
                      className={`flex w-full gap-4 justify-center mb-4 text-xl xl:text-3xl`}
                    >
                      {[...Array(5)].map((_, index) => (
                        <IoStarSharp key={index} color={"#fec246"} />
                      ))}
                    </div>
                  )}

                  <ReviewSection
                    complete={complete}
                    isHome={isHome}
                    review={review}
                  />
                </div>
                <div
                  className="absolute h-[50px] bottom-[2%] right-[2%] mt-2 flex justify-center items-center bg-transparent z-[50] cursor-pointer text-2xl text-gray-500 hover:text-gray-700"
                  onClick={toggleFace}
                >
                  {isFront ? (
                    <BsCaretDownSquareFill className="text-customGold" />
                  ) : (
                    <BsCaretUpSquareFill className="text-customGold" />
                  )}
                </div>
              </div>
              <div
                className={`${
                  isHome
                    ? "cube__face cube__face--bottom"
                    : "cube__face cube__face--front"
                } absolute w-[100%] h-[100%] border-2 border-gray-200`}
              >
                <Image
                  className="absolute w-full h-full"
                  src={frontImage ? frontImage : ""}
                  alt="Front Image"
                />

                <div
                  className="absolute h-[50px] bottom-[2%] right-[2%] mt-2 flex justify-center items-center bg-transparent z-[50] cursor-pointer text-2xl text-gray-500 hover:text-gray-700"
                  onClick={toggleFace}
                >
                  {isFront ? (
                    <BsCaretDownSquareFill className="text-customGold" />
                  ) : (
                    <BsCaretUpSquareFill className="text-customGold" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
  if (bubbles) {
    return (
      <div
        className="md:w-[58%] w-full"
        style={{
          height: height,
          cursor: "pointer",
          zIndex: "20",
        }}
      >
        <Bubbles id={review ? review : "string"} />
      </div>
    );
  }
};

export default Cube;
