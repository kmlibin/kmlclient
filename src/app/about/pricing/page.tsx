import React, { ReactNode } from "react";
import Image from "next/image";
import pricing from "./pricing.svg";
import { ibm, fredoka } from "@/app/utils/fonts";
import Navbar from "@/components/Navbar";
import { pricingCards } from "./pricingContent";
import PricingCards from "./PricingCards";
import { StaticImageData } from "next/image";
import table from "./table.svg";

type Props = {};

type PricingData = {
  title: ReactNode | string;
  text: ReactNode | string;
  src: StaticImageData;
  alt: string;
  isList: boolean;
};

//fix the what's included, it's no longer tracking with the screen. change to fixed and remove top, it works, but then scrolls all the way to the bottom
//of the screen, irregardless of container.
const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-full flex h-full flex-col bg-customWhite">
        <div className="w-full min-h-[100vh] relative flex justify-evenly items-start mt-[180px] pb-16">
          {/* rainbows */}
          <div className="absolute -top-[16%] -left-[15%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
          <div className="absolute -bottom-20 -right-[10%] rainbow-circle w-[500px] rounded-full h-[500px]"></div>

          <div className="w-1/3 h-full flex flex-col items-end justify-start ">
            <Image
              src={pricing}
              alt="faq image"
              height={400}
              className="z-10 sticky top-1/4  -mt-[3.75rem]"
            />
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
        <div className="w-full flex flex-col">
          <h3 className={`${fredoka.className} text-3xl`}>
            Additional Services
          </h3>
          <ul>
            <li>
              Extra pages: $50 per additional page, beyond the initial four
            </li>
            <li>
              Domain Registration: If you choose to host with me on Netlify, I
              can assist with domain registration. If you decide to host the
              site yourself, you'll be responsible for purchasing and setting up
              your own domain.
            </li>
          </ul>
          <h4>Note on Self-Hosting</h4>
          <p>
            While I offer hosting on Netlify as part of the package, if you
            choose to host the site yourself, I do not provide support for
            self-hosting setup, including purchasing a domain, selecting a
            hosting provider, or connecting your domain to the hosting service.
            You will need to handle these tasks independently.
          </p>
        </div>
        <div className="w-full">
          <Image src={table} alt="table" />
        </div>
        <p className="w-5/6 text-xs">
          * My services are perfect for small business websites that focus on
          performance and ease of use, without requiring complex features like
          user logins or databases. If you do need those advanced
          functionalities, I can still help, but please note that they may
          increase the overall cost due to additional hosting and development.
        </p>
      </div>
    </>
  );
};

export default page;
