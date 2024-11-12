import React from "react";
//components
import PortfolioCard from "./PortfolioCube";
//images
import Image from "next/image";
//content
import myport from "./7.png";
import {portfolioItems} from  './portfolioItems'

const PortfolioPage = () => {
  return (
    <div className="flex  w-full bg-customWhite">
      <div className=" relative justify-start items-start flex mb-10">
        {/* rainbows */}
        <div className="absolute -top-[11rem] -left-[15rem] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px] z-[25]"></div>
        <div className="absolute -bottom-[11rem] -right-[15rem] rainbow-circle w-[500px] h-[500px] rounded-full "></div>

        <div className="sticky top-[168px] z-[35]">
          <Image alt="portfolio" src={myport} className="w-[450px]" />
        </div>

        <div className="flex flex-col justify-center gap-4 items-center overflow-hidden mx-auto mt-[180px]">
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
