"use client";

import React, { useState, useEffect } from "react";
//images
import faq from "./faq.svg";
import Image from "next/image";

//fonts and content
import { ibm } from "@/app/utils/fonts";
import { faqCards } from "./faqContent";
//components
import Accordion from "./Accordion";
import RollImage from "@/components/RollImage";

//libraries
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  // check to see if an id is in the browser string, then open that question
  useEffect(() => {
    const hash = window.location.hash.substring(1); // get hash without '#'
    if (hash && faqCards.some((item) => item.id === hash)) {
      setOpenId(hash);
    }
  }, []);

  //  toggle the accordion item and update URL hash
  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <div
      className="w-full h-full flex bg-customWhite pb-8 relative"
      role="main"
      aria-labelledby="faq-heading"
    >
      {/* rainbows */}
      <div
        className="h-full min-w-[100vw] md:min-w-[99vw] md:max-w-[99vw] overflow-hidden absolute"
        aria-hidden="true"
      >
        <div className="absolute -top-[12vh] -left-[12%] rainbow-circle w-[900px] h-[900px] 3xl:w-[1100px] rounded-full 3xl:h-[1100px]"></div>
        <div className="absolute -bottom-[10vh] -right-[10vw] rainbow-circle w-[500px] rounded-full h-[500px]"></div>
      </div>


      <div className="w-full relative md:h-full md:flex-row flex-col flex justify-evenly items-center md:items-start md:mt-[180px] mt-[5rem]">
  
        <div
          className="md:w-1/3 md:sticky top-4 w-full md:h-24 z-10 flex flex-col -mt-[3.75rem] md:items-end md:justify-start items-center"
          aria-hidden="true"
        >
          <RollImage>
            <Image
              src={faq}
              alt="FAQ Illustration"
              height={400}
              className="z-10"
            />
          </RollImage>
        </div>

  
        <div
          id="faq-section"
          className={`${ibm.className} bg-customWhite rounded-xl bg-opacity-80 tracking-wide text-lg w-[95%] md:w-1/2 relative flex flex-col items-center justify-start`}
          aria-labelledby="faq-heading"
        >
  
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            {faqCards.map((item) => (
              <Accordion
                toggleItem={toggleItem}
                item={item}
                openId={openId}
                key={item.id}
              />
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
