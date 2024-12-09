import React from "react";
//types
import { IconType } from "react-icons";

type SMIconsProps = {
  href: string;
  icon: IconType;
};

const SMIcons = ({ href, icon: Icon }: SMIconsProps) => {
  return (
    <div className="border-customIndigo cursor  m-1 flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-opacity-90 bg-lightGrey bg-opacity-25 shadow-md duration-300 hover:bg-opacity-100">
      <a
        className="text-customIndigo h-[20px] w-[20px] hover:text-brightOrange duration-200"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={20} />
      </a>
    </div>
  );
};

export default SMIcons;