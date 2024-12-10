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
  const isOpen = openId === item.id;

  return (
    <div
      id={`accordion-${item.id}`}
      className="border-b border-gray-300 w-full py-4 flex flex-col items-start gap-2"
      role="region"
      aria-labelledby={`accordion-header-${item.id}`}
    >
      {/* Accordion Button */}
      <button
        onClick={() => toggleItem(item.id)}
        id={`accordion-header-${item.id}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        className="w-full flex items-center justify-between px-4 py-2"
      >
        <div className="flex items-center gap-6">
          <HiOutlineComputerDesktop className="text-customPink" />
          <span className={`${fredoka.className} text-2xl flex text-left`}>
            {item.question}
          </span>
        </div>
        <div>
          {isOpen ? (
            <FaMinus className="text-customTurquoise" aria-hidden="true" />
          ) : (
            <FaPlus className="text-customPink" aria-hidden="true" />
          )}
        </div>
      </button>

      {/* Accordion Content */}
      <div
        id={`accordion-content-${item.id}`}
        className={`transition-all duration-300 overflow-hidden w-full ${
          isOpen ? "opacity-100 max-h-screen" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
        aria-hidden={!isOpen}
      >
        <div className="px-8 py-4 bg-lightIndigo w-4/5 ml-[3rem] text-[1rem] flex justify-start items-start">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;