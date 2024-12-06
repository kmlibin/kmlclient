"use client";
import React, { useState, useEffect } from "react";
//images
import background from "../../../../public/images/kmlbg.jpg";
import bwsvg4 from "../../../../public/images/newlogo.png";
import smalllogo from "../../../../public/images/smalllogo.png";
import smallbg from "../../../../public/images/smallrainbowbg.jpg";
//libraries
import { Fade } from "react-awesome-reveal";
//css
import "./Home.css";
//components
import NavLinks from "./NavLinks";
import Navbar from "@/components/Navbar/Navbar";
import ContactImages from "@/components/Wrapper/ContactImages";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);
    // check if the screen width is below 640px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    // event listener for changes
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {!isMobile && <ContactImages />}
      {isMobile && <Navbar />}

      <div
        id="hero-section"
        className="relative min-h-[100vh] flex w-full items-end sm:items-center z-10"
      >
        {/* bg */}
        <div className="absolute inset-0 -z-10">
          {/* why isn't srcsetworking? */}
          {/* <img
            src={smallbg.src}
            srcSet={`${smallbg.src} 640w, ${background.src} 1024w`}
            sizes="(max-width: 640px) 640px, 1024px"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            alt="rainbow background"
          /> */}
          <img
            src={background.src}
            style={{ objectFit: "cover" }}
            alt="rainbow background"
            className="sm:block hidden h-full w-full"
          />
          {isMobile && (
            <img
              src={smallbg.src}
              style={{ objectFit: "cover" }}
              alt="rainbow background"
              className="sm:hidden h-full w-full "
            />
          )}

          <div className="absolute inset-0 sm:w-1/3 w-2/3 bg-gradient-to-r from-slate-500 sm:bg-gradient-to-r sm:from-gray-900 to-transparent "></div>
        </div>

        {/* image */}
        {/* also couldn't get srcset to work... */}
        <div className="relative flex justify-end sm:flex-row flex-col items-center sm:ml-[5rem] sm:py-10 sm:mb-4 z-[10]">
          <Fade triggerOnce>
            <img
              src={bwsvg4.src}
              width={650}
              alt="Libin Web Development and image of Kelli"
              className="hidden sm:block"
            />
          </Fade>

          {isMobile && (
            <Fade triggerOnce>
              <img
                src={smalllogo.src}
                alt="Libin Web Development and image of Kelli"
                className="xs:h-[530px] h-[450px] object-cover sm:hidden"
              />
            </Fade>
          )}
          <div className="sm:absolute sm:-right-[52%] sm:bottom-0 flex flex-col justify-end sm:mb-2 sm:py-10 text-gray-900 text-2xl leading-loose list-none">
            <NavLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
