"use client";
import React from "react";
//content
import { infoCards } from "../homeContent";
//components
import InfoCard from "./InfoCard";
//icons
import { FcApproval } from "react-icons/fc";
//fonts
import { fredoka } from "@/app/utils/fonts";
//paths
import paths from "@/app/paths";
//components
import Button from "@/components/Button";
import ZoomHeading from "@/components/ZoomHeading";
//libraries
import { Fade } from "react-awesome-reveal";

const Info = () => {
  return (
    <section
      id="info-section"
      role="region"
      aria-labelledby="info-section-heading"
      className="relative flex w-full flex-col justify-center items-center gap-2 bg-customWhite pb-[7rem]"
    >
      {/* rainbow */}
      <div
        aria-hidden="true"
        className="absolute bottom-[10vh] sm:-bottom-[0vh] sm:-left-[10%] -left-[40%] rotate-90 rainbow-circle w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] 3xl:w-[900px] rounded-full 3xl:h-[900px] -z-1"
      ></div>

      {/* Headings */}
      <div className="z-10 w-full flex gap-4 items-center justify-center flex-col md:flex-row">
        <ZoomHeading
          as="h2"
          id="info-section-heading"
          className={`${fredoka.className} text-5xl mt-5 md:my-10 text-center hidden sm:block`}
        >
          Don’t Settle for Less — Get a Site That Works
        </ZoomHeading>
        <FcApproval aria-hidden="true" className="text-5xl hidden sm:block" />
      </div>

      <div className="z-10 flex-col items-center justify-center gap-4">
        <ZoomHeading
          as="h3"
          className={`${fredoka.className} w-full text-4xl mt-10 text-center sm:hidden flex`}
        >
          Get a Site That Works as Hard as You Do
        </ZoomHeading>
        <FcApproval aria-hidden="true" className="text-5xl w-full sm:hidden" />
      </div>

      {/* Info Cards */}
      <div
        className="flex-col w-full md:w-5/6 justify-center items-center gap-14 h-full z-[40]"
        aria-label="Information Cards"
      >
        <Fade direction="up" cascade damping={0.1} triggerOnce>
          {infoCards.map((card, index) => (
            <InfoCard
              alt={card.alt}
              key={index}
              src={card.src}
              text={card.text}
              title={card.title}
              className={card.className}
            />
          ))}
        </Fade>
      </div>

      {/* Button Section */}
      <div className="h-[150px] bg-customPink bg-opacity-20 w-full flex items-center justify-center mt-8">
        <Button
          path={paths.tablePath()}
          text="Learn More"
          aria-label="Learn more about our services"
        />
      </div>
    </section>
  );
};

export default Info;
