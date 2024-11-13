import React from "react";

//images
import Image from "next/image";
//content and images
import myport from "./7.png";
import { portfolioItems } from "./portfolioItems";
//components
import RollImage from "@/components/RollImage";
import PortfolioCard from "./PortfolioCube";

const PortfolioPage = () => {
  return (
    <div className="flex w-full bg-customWhite relative ">
      {/* rainbows */}
      <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
      <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
      <div className="justify-start items-start flex mb-10">
        <div className="w-1/3 h-full flex flex-col items-end justify-start -mr-8 mt-[180px] ">
          <RollImage>
            <Image
              alt="portfolio"
              src={myport}
              height={350}
              className="sticky top-[168px] z-[50]"
            />
          </RollImage>
        </div>

        <div className=" w-2/3 flex flex-col justify-center gap-4 items-center overflow-hidden mx-auto mt-[180px]">
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
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
