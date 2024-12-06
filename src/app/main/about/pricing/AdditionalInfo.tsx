import React, { ReactNode } from "react";
//images
import Image from "next/image";
import info from "./images/info.svg";
//fonts and content
import { fredoka, ibm, ibmBold } from "@/app/utils/fonts";
import { additionalInfo } from "./pricingContent";

type listItem = {
  content: string | ReactNode;
  isNote2?: boolean;
};

const AdditionalInfo = () => {
  return (
    <div className=" z-[50] sm:flex-row flex-col flex w-3/4 sm:items-start items-center p-8 justify-center mt-12 mb-10 gap-8 bg-customWhite border-2 border-gray-200 shadow-lg  box-content">
      <div className=" w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] info-bg flex justify-center items-center rounded-full">
        <Image
          src={info}
          alt="an information logo"
          className="h-[125px] w-[125px] sm:h-[175px] sm:w-[175px]"
        />
      </div>
      <div className="w-full sm:w-4/5 flex flex-col justify-start items-start tracking-wide">
        {" "}
        <h3
          className={`${fredoka.className} text-4xl mb-6 w-full text-center sm:text-left `}
        >
          Additional Services and Notes
        </h3>
        <ul
          className={`${ibm.className} w-full flex items-start flex-col list-disc list-outside pl-10 text-md space-y-4 text-md`}
        >
          {additionalInfo.map((item: listItem, index) =>
            item.isNote2 ? (
              <p key={index}>
                <span
                  className={`text-lg ${ibmBold.className} border-b-2 border-blackTextFont`}
                >
                  Note on Self-Hosting:
                </span>
                &nbsp; If you choose to host the site yourself, I do not provide
                support for self-hosting setup, including purchasing a domain,
                selecting a hosting provider, or connecting your domain to the
                hosting service. You will need to handle these tasks
                independently.
              </p>
            ) : (
              <li key={index}>{item.content}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;
