import React, { ReactNode } from "react";

//utils and content
import { pricingCards } from "./pricingContent";
import { ibm, fredoka } from "@/app/utils/fonts";
//images
import { StaticImageData } from "next/image";
import pricing from "./images/pricing.svg";
import Image from "next/image";
//paths
import paths from "@/app/paths";
//components
import Button from "@/components/Button";
import TableComparison from "./TableComparison";
import AdditionalInfo from "./AdditionalInfo";
import Navbar from "@/components/Navbar/Navbar";
import PricingCards from "./PricingCards";

type PricingData = {
  title: ReactNode | string;
  text: ReactNode | string;
  src: StaticImageData;
  alt: string;
  isList: boolean;
};

//fix the what's included, it's no longer tracking with the screen. change to fixed and remove top, it works, but then scrolls all the way to the bottom
//of the screen, irregardless of container.
const page = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex h-full flex-col bg-customWhite items-center">
        <div className="w-full  relative flex justify-evenly items-start mt-[180px] pb-16">
          {/* rainbows */}
          <div className="absolute -top-[16%] -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
          <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
          <div className="w-1/3 flex flex-col items-end justify-start relative h-[300vh] 3xl:h-[230vh]">
            <div className="sticky top-[4vh] -mt-[3rem]">
              <Image
                src={pricing}
                alt="faq image"
                height={400}
                className="z-10"
              />
            </div>
          </div>

          <div
            className={`${ibm.className} tracking-wide  w-1/2 relative  flex flex-col items-center justify-start gap-16`}
          >
            <div className="w-full flex flex-col items-center justify-start ">
              <h2 className={`${fredoka.className} text-5xl text-center mb-2`}>
                Everything You Need <br></br> in a Website
              </h2>
              <h4 className={`${ibm.className} text-xl text-left mb-4 `}>
                Starting at $350
              </h4>
            </div>

            {pricingCards.map((item: PricingData) => (
              <PricingCards
                key={item.alt}
                title={item.title}
                text={item.text}
                alt={item.alt}
                src={item.src}
                isList={item.isList}
              />
            ))}
          </div>
        </div>

        <AdditionalInfo />
        <div className="h-[150px] bg-customBlue bg-opacity-20 w-full flex items-center justify-center mb-10">
          <Button path={paths.contactPath()} text="Get Started" />
        </div>
        <TableComparison />
      </div>
    </>
  );
};

export default page;
