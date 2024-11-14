import React, { ReactNode } from "react";
//fonts
import { fredoka } from "@/app/utils/fonts";
//image
import Image, { StaticImageData } from "next/image";
import { ibm, ibmBold } from "@/app/utils/fonts";
import Link from "next/link";
import paths from "@/app/paths";

type Props = {
  title: string | ReactNode;
  text: ReactNode | string | null;
  src: StaticImageData;
  alt: string;
  isList: boolean;
  isNote1?: boolean;
};

const PricingCards = ({ title, text, src, alt, isList, isNote1 }: Props) => {
  return (
    <div className="flex w-full flex-col border-2 border-gray-200 shadow-lg  box-content z-[50] bg-customWhite">
      <div className="flex w-full gap-6 items-start p-8">
        <div className="w-1/5 flex items-center justify-center">
          <Image src={src} alt={alt} height={150} />
        </div>
        <div className="w-4/5 flex flex-col items-start justify-start gap-4">
          {isList || isNote1 ? (
            title
          ) : (
            <p className={`${fredoka.className} text-2xl`}>{title}</p>
          
          )}

          {isList ? text : <p className="text-md">{text}</p>}
          {isNote1 ? (
            <>
              <p className={`${ibm.className} text-md -mt-4`}>
                Set up a custom contact form for client inquiries and
                engagement.
              </p>
              <small>
                <span className={`${ibmBold.className} border-b border-b-blackTextFont`}>Note:</span>
                <span>
                 &nbsp; Clients will need an EmailJS account (using the free tier).{" "}
                  <Link
                    href={paths.emailjsPath()}
                    className="cursor:hover text-customBlue hover:underline hover:text-customIndigo duration-300 transition-all"
                  >
                    See FAQ for details.
                  </Link>
                </span>
              </small>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
