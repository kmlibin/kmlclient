import React from "react";
//images
import background from "../../../../public/images/kmlbg.jpg";
import bwsvg4 from "../../../../public/images/newlogo.webp";
import smalllogo from "../../../../public/images/smalllogo.webp";
import smallbg from "../../../../public/images/smallrainbowbg.jpg";
import Image from "next/image";

//components
import NavLinks from "./NavLinks";
import Navbar from "@/components/Navbar/Navbar";

const Hero = () => {
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 639px)");

  //   // screen size changes
  //   const handleResize = (event: MediaQueryListEvent) => {
  //     setIsMobile(event.matches);
  //   };

  //   // if the query is correct, set isSmall to true. if isSmall is false
  //   setIsMobile(mediaQuery.matches);

  //   //listen for changes
  //   mediaQuery.addEventListener("change", handleResize);

  //   // cleanup
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className="md:hidden block">
        <Navbar />
      </div>
      <div className="hidden md:block">{/* desktop content */}</div>

      <div
        id="hero-section"
        className="relative min-h-[100vh] flex w-full justify-center md:justify-start items-end sm:items-center z-10"
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
          <Image
            src={background}
            style={{ objectFit: "cover" }}
            priority
            fetchPriority="high"
            alt="rainbow background"
            className="sm:block hidden h-full w-full"
            placeholder="blur"
          />

          <Image
            src={smallbg}
            priority
            fetchPriority="high"
            style={{ objectFit: "cover" }}
            alt="rainbow background"
            className="sm:hidden h-full w-full "
            placeholder="blur"
          />

          <div className="absolute inset-0 sm:w-1/3 w-2/3 bg-gradient-to-r from-slate-500 sm:bg-gradient-to-r sm:from-gray-900 to-transparent "></div>
        </div>

        {/* image */}
        {/* also couldn't get srcset to work... */}
        <div className="relative flex justify-end lg:flex-row flex-col items-center lg:ml-[5rem] sm:py-10 sm:mb-4 z-[10]">
         
            <Image
              src={bwsvg4.src}
              height={600}
              width={650}
              priority
              fetchPriority="high"
              alt="Libin Web Development and image of Kelli"
              className="hidden md:block animate-fadeIn h-full max-w-auto"
            />
        

       
            <Image
              width={650}
              height={650}
              src={smalllogo.src}
              priority
              fetchPriority="high"
              alt="Libin Web Development and image of Kelli"
              className="xs:h-[550px] sm:h-[600px] h-[450px] object-cover md:hidden animate-fadeIn"
            />
       

          <div className="lg:absolute lg:-right-[52%] lg:bottom-0 flex flex-col justify-end sm:mb-2 sm:py-10 text-gray-900 text-2xl leading-loose list-none">
            <NavLinks />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
