import React from "react";
import Image from "next/image";
import info from "./info.svg";
import { fredoka, ibm, ibmBold } from "@/app/utils/fonts";

type Props = {};

const AdditionalInfo = (props: Props) => {
  return (
    <div className="flex w-3/4 items-start p-8 justify-center mt-20 mb-10 gap-4 bg-customWhite border-2 border-gray-200 shadow-lg  box-content">
      <div className="w-[200px] h-[200px] info-bg flex justify-center items-center rounded-full">
        <Image src={info} alt="an information logo" height={175} width={175} />
      </div>
      <div className="w-4/5 flex flex-col justify-start items-start tracking-wide">
        {" "}
        <h3 className={`${fredoka.className} text-4xl mb-6`}>
          Additional Services and Notes
        </h3>
        <ul
          className={`${ibm.className} w-full flex items-start flex-col list-disc list-outside pl-10 text-md space-y-4 text-md`}
        >
          <li>Extra pages: $50 per additional page, beyond the initial four</li>
          <li>
            Domain Registration: If you choose to host with me on Netlify, I can
            assist with domain registration. If you decide to host the site
            yourself, you'll be responsible for purchasing and setting up your
            own domain.
          </li>
          <li>
            My services are perfect for small business websites that focus on
            performance and ease of use, without requiring complex features like
            user logins or databases. If you do need those advanced
            functionalities, I can still help, but please note that they may
            increase the overall cost due to additional hosting and development.
          </li>
          <li>
            <span className={`text-lg ${ibmBold.className} underline`}>
              Note on Self-Hosting:
            </span>
            &nbsp; If you choose to host the site yourself, I do not provide
            support for self-hosting setup, including purchasing a domain,
            selecting a hosting provider, or connecting your domain to the
            hosting service. You will need to handle these tasks independently.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo;
