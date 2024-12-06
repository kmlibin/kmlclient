import React from "react";
//components
import Button from "@/components/Button";
//utils
import { ibm, fredoka } from "@/app/utils/fonts";
//paths
import paths from "@/app/paths";

const CTA = () => {
  return (
    <div
      className={`flex flex-col mb-4 w-[93%] z-[50] bg-customWhite p-10 tracking-wider gap-8 justify-between items-end 3xl:w-2/3 border-2 border-opacity-50 rounded-lg border-customBlue `}
    >
      <div className="flex flex-col w-full gap-4  z-[50]">
        <h3 className={`${fredoka.className} text-4xl`}>
          Ready to create something amazing?
        </h3>
        <p className={`${ibm.className} text-[15px] w-full`}>
          You&apos;ve seen what a difference the right website can make. If
          you&apos;re ready to elevate your business with a customized site,
          reach out today, and let&apos;s start building something great
          together!
        </p>
      </div>
      <div className="sm:mt-0 mt-10">
        <Button path={paths.getStartedPath()} text="Get Started" />
      </div>
    </div>
  );
};

export default CTA;
