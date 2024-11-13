import React from "react";
import Link from "next/link";
import { ibm, fredoka } from "../utils/fonts";
import paths from "../paths";
import ContactForm from "./ContactForm";
import ZoomHeading from "@/components/ZoomHeading";

const Contact = () => {
  return (
    <div className=" relative bg-customWhite flex w-full min-h-[100vh] overflow-hidden">
      {/* rainbows */}
      <div className="absolute -bottom-[20rem] -right-[15rem] rainbow-circle w-[1100px] rounded-full h-[1100px] "></div>
      <div className="flex justify-center items-start w-full mt-[180px] mb-10">
        <div className="w-1/3 flex items-center justify-center tracking-wide">
          <div className="z-10 w-full flex flex-col justify-center items-start">
            <ZoomHeading
              as="h2"
              className={`${fredoka.className} text-5xl mb-4`}
            >
              Ready to Connect?
            </ZoomHeading>
            <p className={`${ibm.className} text-lg mb-8`}>
              If you have any questions, see my{" "}
              <Link
                className="hover:cursor text-customBlue hover:text-customTurquoise"
                href={paths.faqPath()}
              >
                FAQ
              </Link>{" "}
              or use the form to send me a message!
            </p>
            <div className="flex flex-col w-full border-2 border-gray-200 shadow-lg p-8 bg-customWhite">
              <p className={`${ibm.className} text-lg mb-2`}>
                If you're ready to start chatting about a custom site:
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
          </div>
        </div>
        <div className="w-1/2 relative flex items-center justify-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
