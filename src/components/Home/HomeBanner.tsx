import React from "react";
import Image from "next/image";
import nowOnline from "../../../public/images/nowonline.svg";
import { ibm, fredoka } from "@/app/utils/fonts";
import Link from "next/link";
import background from "../../../public/images/kmlbg.jpg";
type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <div className="w-full bg-customWhite py-[6rem]  h-full flex flex-col justify-center items-center border-t-customIndigo border-t-2">
      <div className="flex w-5/6 justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-end item-end">
          <h1 className={`text-4xl mb-4 w-full ${fredoka.className}`}>
            Say Goodbye to DIY Website Hassles!
          </h1>
          <p className={`text-md w-full ${ibm.className}`}>
            Running a small business but struggling to find time for a website?
            I get it — there’s a lot to juggle, and creating a professional
            online presence can be overwhelming. That’s where I come in. I build
            custom, user-friendly sites that help small businesses stand out
            without the hassle of DIY platforms. No templates or cookie-cutter
            designs — just a website tailored to your needs, so you can focus on
            what you do best. From SEO optimization to sites that look great on
            every screen size, I’m here to help your business shine online!
          </p>
          <div className="w-full flex items-end justify-end mt-9">
            <Link
              href={"/getStarted"}
              className={`${ibm.className} bg-customIndigo w-1/4 text-customWhite flex justify-center items-center py-4`}
            >
              Get Started!
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image
            src={nowOnline}
            alt="small business with sign saying Our Business is Now Online!"
          />
        </div>
      </div>
      <div className="w-full h-[30px] rainbow mt-[4rem] border-t-customIndigo border-b-customIndigo border-t-2 border-b-2">
      </div>
    </div>
  );
};

export default HomeBanner;
