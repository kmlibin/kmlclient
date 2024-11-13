"use client";
import React, { ReactNode } from "react";
//fonts
import { fredoka } from "@/app/utils/fonts";
//react icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

type Props = {
  toggleItem: (id: string) => void;
  item: {
    id: string;
    question: string;
    answer: string | ReactNode;
  };
  openId: string | null;
};

const Accordion = ({ toggleItem, item, openId }: Props) => {
  return (
    <div
      id={item.id}
      className="border-b border-gray-300 w-full py-4 flex flex-col items-start gap-2 "
    >
      <button
        onClick={() => toggleItem(item.id)}
        className="w-full flex items-center justify-between px-4 py-2"
      >
        <div className="flex items-center gap-6">
          <HiOutlineComputerDesktop className="text-customPink" />
          {/* <FaQuestion className="text-customPink" /> */}
          <span className={`${fredoka.className} text-2xl flex  text-left`}>
            {item.question}
          </span>
        </div>
        <div>
          {openId === item.id ? (
            <FaMinus className="text-customTurquoise" />
          ) : (
            <FaPlus className="text-customPink" />
          )}
        </div>
      </button>
      
      <div
        className={`transition-all duration-300 overflow-hidden w-full ${
          openId === item.id ? " opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        <div className="px-8 py-4 bg-lightIndigo w-4/5 ml-[3rem] text-[1rem] flex justify-start items-start">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
