import React, { ReactNode } from "react";
import { ibm, fredoka } from "@/app/utils/fonts";
import Image, { StaticImageData } from "next/image";

type Props = {
  title: string | ReactNode;
  text: ReactNode | string;
  src: StaticImageData;
  alt: string;
  isList: boolean;
};

const PricingCards = ({ title, text, src, alt, isList }: Props) => {
  return (
    <div className="flex w-full flex-col border-2 border-gray-200 shadow-lg  box-content z-[50] bg-customWhite">
      <div className="flex w-full gap-6 items-start p-8">
        <div className="w-1/5 flex">
          <Image src={src} alt={alt} height={150} />
        </div>
        <div className="w-4/5 flex flex-col items-start justify-start gap-4">
          {isList ? (
            title
          ) : (
            <p className={`${fredoka.className} text-2xl`}>{title}</p>
          )}

          {isList ? text : <p className="text-md">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
