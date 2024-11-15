"use client";
import React from "react";
//content
import { infoCards } from "../homeContent";
//components
import InfoCard from "./InfoCard";
//fonts
import { fredoka } from "@/app/utils/fonts";
//paths
import paths from "@/app/paths";
//components
import Button from "@/components/Button";
import ZoomHeading from "@/components/ZoomHeading";


const Info = () => {
  return (
    <div
      id="info-section"
      className="relative flex w-full flex-col justify-center items-center gap-2 bg-customWhite py-[10rem]"
    >
            <div className="absolute -bottom-[0vh] -left-[10%] rotate-90 rainbow-circle w-[700px] h-[700px] 3xl:w-[900px] rounded-full 3xl:h-[900px] z-10"></div>

      <div className="mb-[5rem]">
        <ZoomHeading as="h2" className={`${fredoka.className} text-5xl`}>
          Don’t Settle for Less — Get a Site That Works
        </ZoomHeading>
      </div>
      <div className="flex w-5/6 justify-evenly items-start gap-14 h-full ">
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
      </div>
      <div className="flex justify-center mt-[3rem] items-center w-5/6">
        <Button path={paths.tablePath()} text="Learn More" />
      </div>
    </div>
  );
};

export default Info;
