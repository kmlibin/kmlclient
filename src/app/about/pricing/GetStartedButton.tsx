import React from "react";
import Link from "next/link";
import { ibm } from "@/app/utils/fonts";

type Props = {};

const GetStartedButton = (props: Props) => {
  return (
    <div className="h-[150px] bg-customBlue bg-opacity-20 w-full flex items-center justify-center mb-10">
      <Link
        className={` ${ibm.className}  bg-customIndigo relative overflow-hidden z-10 btn p-4 text-lightGrey flex items-center gap-3 justify-center`}
        href="/contact"
      >
        Get Started!
      </Link>
    </div>
  );
};

export default GetStartedButton;
