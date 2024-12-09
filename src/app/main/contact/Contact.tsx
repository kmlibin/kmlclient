"use client";
import React from "react";
//routing and paths
import Link from "next/link";
import paths from "../../paths";
//libraries
import { Fade } from "react-awesome-reveal";
//fonts
import { ibm, fredoka } from "../../utils/fonts";
//components
import ContactForm from "./ContactForm";
import ZoomHeading from "@/components/ZoomHeading";
import undrawcomm from "./undrawcomm.svg";
import Image from "next/image";
import RollImage from "@/components/RollImage";

const Contact = () => {
  return (
    <div className=" relative bg-customWhite flex w-full min-h-[100vh] overflow-hidden">
      {/* rainbows */}
      <div className="absolute sm:-bottom-[20rem] -bottom-[10rem] sm:-right-[15rem] -right-[8rem] rainbow-circle w-[400px] h-[400px] sm:w-[1100px] rounded-full sm:h-[1100px] "></div>
      <div className="sm:hidden absolute -top-[12vh] -right-[12%] rainbow-circle w-[900px] h-[900px] rounded-full "></div>

      <div className="flex sm:flex-row flex-col justify-center items-center sm:items-start w-full sm:mt-[180px] mt-[5rem] mb-10">
        <div className="w-full sm:w-1/3 flex items-center justify-center tracking-wide">
          <div className="z-10 w-full flex flex-col justify-center items-center sm:items-start">
            <ZoomHeading
              as="h2"
              className={`${fredoka.className} text-5xl mb-4  sm:text-left text-center`}
            >
              Ready to Connect?
            </ZoomHeading>
            <p
              className={`${ibm.className} hidden sm:block text-lg mb-8 px-4 sm:px-0`}
            >
              If you have any questions, see my{" "}
              <Link
                className="hover:cursor text-customBlue hover:text-customTurquoise"
                href={paths.faqPath()}
              >
                FAQ
              </Link>{" "}
              or use the form to send me a message!
            </p>

            <div className="flex flex-col w-full border-2 border-gray-200 shadow-customSmallGrey sm:shadow-lg p-8 bg-customWhite my-2 sm:my-0">
              <p className={`${ibm.className} text-lg mb-2`}>
                If you&apos;re ready to start chatting about a custom site:
              </p>

              <ul className={`list-disc pl-8 ${ibm.className} text-lg`}>
                <li>
                  Please make sure you look at{" "}
                  <Link
                    href={paths.getStartedPath()}
                    className="hover:cursor text-customBlue hover:text-customTurquoise"
                  >
                    Getting Started
                  </Link>{" "}
                  in my FAQ
                </li>
              </ul>
            </div>
            <div className="sm:hidden bg-customWhite bg-opacity-60 p-5 my-4">
              <RollImage delay={500}>
                <Image
                  src={undrawcomm}
                  alt="people sending messages"
                  height={400}
                  className="z-10"
                />
              </RollImage>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 relative flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
          <Fade direction="up" triggerOnce>
            <ContactForm />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
