import React from "react";
//fonts
import { fredoka, ibm } from "@/app/utils/fonts";
//images
import Image, { StaticImageData } from "next/image";
import bank from "../../../../public/images/bank.svg";
//css
import './InfoCard.css'


type Props = {
  title: string;
  text: string;
  src: StaticImageData | string;
  alt: string;
  className: string;
};

const InfoCard = ({ title, text, src, alt, className }: Props) => {
  return (
    <div
      className={`3xl:w-2/3 w-3/4 mx-auto bg-customWhite ${className} flex justify-between sm:flex-row flex-col items-between gap-6 border-2 border-gray-300 p-4 rounded-xl box-content z-[40] my-10`}
      role="region"
      aria-labelledby={`card-title-${title}`}
    >
      <div className="sm:w-1/4 w-full p-4 flex justify-center items-center">
        {src !== "bank" ? (
          <Image
            src={src}
            alt={alt}
            loading="lazy"
            className="w-1/2 sm:w-full"
          />
        ) : (
          <video
            loop
            playsInline
            muted
            autoPlay
            className="w-1/2 sm:w-full"
            aria-label="Video of putting money in a piggy bank"
          >
            <source src="/videos/bankvid.mp4" type="video/mp4" />
            {/* Fallback Image */}
            <Image
              src={bank}
              loading="lazy"
              alt="Putting money in a piggy bank"
            />
          </video>
        )}
      </div>

      <div className="flex flex-col items-center sm:items-start justify-evenly w-full sm:w-2/3 gap-4 sm:pr-10 text-center sm:text-left">
        <h3
          id={`card-title-${title}`}
          className={`${fredoka.className} text-2xl sm:text-3xl tracking-wide text-center sm:text-left`}
        >
          {title}
        </h3>
        {/* text content */}
        <div className="flex justify-start items-start">
          <p
            className={`${ibm.className} text-[1rem] sm:text-lg flex justify-start items-start`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
