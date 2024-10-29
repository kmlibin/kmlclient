import React from "react";
import { fredoka, ibm } from "@/app/utils/fonts";
import Image, { StaticImageData } from "next/image";
import bank from "../../../public/images/bank.svg";

type Props = {
  title: string;
  text: string;
  src: StaticImageData | string;
  alt: string;
};

const InfoCard = ({ title, text, src, alt }: Props) => {
  return (
    <div
      className={` w-[275px]  min-h-[680px] info-card flex flex-col justify-start items-center gap-4 shadow-customIndigo border-2 border-customIndigo py-10 px-12 rounded-xl box-content`}
    >
      <h3
        className={`${fredoka.className} text-2xl tracking-wide text-center h-[75px] w-4/5`}
      >
        {title}
      </h3>
      <div className="w-[200px] h-[200px] mb-10 flex justify-center items-center">
        {src !== "bank" ? (
          <Image src={src} alt={alt} />
        ) : (
          <video loop playsInline muted autoPlay className="w-full">
            <source src="bankvid.mp4" type="video/mp4" />
            <Image src={bank} alt="putting money in a piggy bank" />
          </video>
        )}
      </div>
      <div className="flex justify-start items-start">
        <p
          className={`${ibm.className} text-md text-center flex justify-start items-start`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;