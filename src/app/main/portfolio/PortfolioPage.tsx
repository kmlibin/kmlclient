import React from "react";

//images
import Image from "next/image";
//content and images
import myport from "./7.png";
import { portfolioItems } from "./portfolioItems";
//components
import RollImage from "@/components/RollImage";
import PortfolioCard from "./PortfolioCube";
import CTA from "./CTA";

const PortfolioPage = () => {
  return (
    <div className="flex md:flex-row flex-col bg-customWhite h-full relative ">
      {/* rainbows */}
      <div className="h-full max-w-[100vw]  min-w-[105vw] xs:min-w-[100vw] overflow-x-hidden absolute">
        <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <div className="hidden md:block md:absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
      </div>

      <div className="flex md:w-1/3 w-full flex-col h-full items-center md:items-end md:justify-start relative md:h-[300vh] 3xl:h-[230vh] md:mt-[170px] mt-[5rem]">
        <div className="md:sticky top-[4vh]">
          <RollImage>
            <Image
              alt="portfolio"
              src={myport}
              className="z-10 h-[350px] w-auto"
            />
          </RollImage>
        </div>
      </div>

      <div
        id="popup-container"
        className="w-full md:w-2/3 flex z-[50] bg-customWhite  md:bg-transparent flex-col justify-center gap-4 items-center mx-auto md:mt-[180px]"
      >
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            cube={item.cube}
            business={item.business}
            owner={item.owner}
            height={item.height}
            complete={item.complete}
            review={item.review}
            link={item.link}
            bubbles={item.bubbles}
            frontImage={item.frontImage}
            backImage={item.backImage}
          />
        ))}
        <CTA />
      </div>
    </div>
  );
};

export default PortfolioPage;
