import React, { ReactNode } from "react";
//metadata
import { Metadata } from "next";
//utils and content
import { pricingCards } from "./pricingContent";
import { ibm, fredoka } from "@/app/utils/fonts";
//images
import { StaticImageData } from "next/image";
import pricing from "./images/pricing.svg";
import Image from "next/image";
import undraw3 from "./images/undraw3.svg";
//paths
import paths from "@/app/paths";
//components
import Button from "@/components/Button";
import TableComparison from "./TableComparison";
import AdditionalInfo from "./AdditionalInfo";
import RollImage from "@/components/RollImage";
import PricingCards from "./PricingCards";
import ZoomHeading from "@/components/ZoomHeading";

type PricingData = {
  title: ReactNode | string;
  text: ReactNode | string;
  src: StaticImageData;
  alt: string;
  isList: boolean;
  isNote1?: boolean;
};

export const metadata: Metadata = {
  title: "Web Development Packages | Libin Web Development",
  description:
    "Discover affordable web development packages starting at $350. Each package includes a custom Next.js website, SEO optimization, responsive design, hosting options, and more to help your business shine online.",
  openGraph: {
    type: "website",
    url: "https://libinwebdevelopment.com/main/about/pricing",
    title: "Web Development Packages | Libin Web Development",
    description:
      "Learn about our affordable website packages designed for small businesses. Starting at $350, get a custom-built Next.js site with responsive design, SEO, hosting options, and up to four pages included. Add extra pages or services to suit your needs.",
    siteName: "Libin Web Development",
    images: "https://libinwebdevelopment.com/images/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  referrer: "origin-when-cross-origin",
  authors: {
    name: "Libin Web Development",
    url: "https://kellidoesdev.com",
  },
  keywords:
    "web development pricing, small business websites, affordable website packages, custom website design, Next.js websites, SEO-friendly websites, mobile-optimized websites, responsive design, hosting services, freelance web developer, additional web development services, domain registration support, custom contact forms",
};

const page = () => {
  return (
    <div className="w-full flex  flex-col bg-customWhite items-center relative">
      <div className="w-full flex sm:flex-row flex-col justify-evenly items-start sm:mt-[180px] mt-[5rem] pb-16 relative">
        {/* rainbows */}
        <div className="absolute bottom-[0vh] -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
        <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>

        <div className=" hidden sm:flex sm:w-1/3 w-full flex-col items-end justify-start relative sm:h-[300vh] 3xl:h-[230vh]">
          <div className="sticky top-[4vh] -mt-[3rem]">
            <RollImage delay={1000}>
              <Image
                src={pricing}
                alt="faq image"
                height={400}
                className="z-10"
              />
            </RollImage>
          </div>
        </div>

        <div
          className={`${ibm.className} tracking-wide  sm:w-1/2 relative  flex flex-col items-center justify-start gap-4 sm:gap-16`}
        >
          <div className="w-full flex flex-col items-center justify-start  ">
            <ZoomHeading
              as="h2"
              className={`${fredoka.className} text-5xl text-center mb-5 sm:mb-2`}
            >
              Everything You Need <br></br> in a Website
            </ZoomHeading>
            <ZoomHeading
              as="h4"
              className={`${ibm.className} text-2xl sm:text-xl text-center mb-4 `}
            >
              Starting at $350
            </ZoomHeading>
            <div className="sm:hidden bg-customWhite bg-opacity-60 p-5">
              <RollImage delay={500}>
                <Image
                  src={undraw3}
                  alt="people building a website"
                  height={400}
                  className="z-10"
                />
              </RollImage>
            </div>
          </div>

          {pricingCards.map((item: PricingData) => (
            <PricingCards
              key={item.alt}
              title={item.title}
              text={item.text}
              alt={item.alt}
              src={item.src}
              isList={item.isList}
              isNote1={item.isNote1}
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
  );
};

export default page;
