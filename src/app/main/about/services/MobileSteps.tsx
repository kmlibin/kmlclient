"use client";

import { useState } from "react";
import { steps } from "./servicesContent";
import { fredoka, ibm, ibmBold } from "@/app/utils/fonts";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styles from "./services.module.css";

export default function MobileSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
 console.log(direction)
  const step = steps[currentStep];

  const nextStep = () => {
    setDirection("right");
    setCurrentStep((prev) => (prev === steps.length - 1 ? prev : prev + 1));
  };

  const previousStep = () => {
    setDirection("left");
    setCurrentStep((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center mb-16 mt-24 ">
        <div className="flex items-center gap-4">
          <span className="h-px w-16 bg-customBlue" />
          <span className="w-3 h-3 rounded-full bg-customGold" />
          <span className="h-px w-16 bg-customBlue" />
          <span className="w-3 h-3 rounded-full bg-customPink" />
          <span className="h-px w-16 bg-customBlue" />
          <span className="w-3 h-3 rounded-full bg-customIndigo" />
          <span className="h-px w-16 bg-customBlue" />
        </div>
      </div>
      {/* //header */}
      <div className="my-14 mx-4">
        <p
          className={`${ibm.className} text-xs uppercase tracking-widest mb-3 text-blackTextFont`}
        >
          The process
        </p>
        <h3 className={`${fredoka.className} text-4xl text-customIndigo`}>
          What to expect
        </h3>
        <p className={`mt-3 sm:text-[18px] ${ibm.className}`}>
          Six straightforward steps from first conversation to a live, optimized
          website.
        </p>
      </div>

      <div className="mx-2 z-[150]">
        {/* // card */}
        <div
          key={currentStep}
          className={`rounded-2xl bg-customWhite border border-gray-200 shadow-md p-6 min-h-[360px] ${
            direction === "right" ? styles.stepCardEnterRight : styles.stepCardEnterLeft
          }
  `}
          style={{
            borderTop: `5px solid ${step.color}`,
          }}
        >
          {/* number */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-customWhite font-bold mb-5"
            style={{
              background: step.color,
            }}
          >
            {step.n}
          </div>

          {/* title */}
          <div className="flex justify-between items-start gap-3">
            <h4 className={`${ibmBold.className} text-xl text-customIndigo`}>
              {step.title}
            </h4>

            <div
              className="text-2xl"
              style={{
                color: step.color,
                opacity: "50%"
              }}
            >
              {step.icon}
            </div>
          </div>

          {/* body */}
          <p
            className={`${ibm.className} mt-4 text-sm leading-relaxed text-blackTextFont`}
          >
            {step.body}
          </p>

          {/* duration */}
          <div
            className={`${ibm.className} mt-5 text-xs uppercase tracking-widest`}
            style={{
              color: step.color,
            }}
          >
            Estimated time: {step.duration}
          </div>
        </div>

        {/* // controls */}
        <div
          className={`${ibm.className} flex justify-between items-center mt-6`}
        >
          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 disabled:opacity-30 z-50"
          >
            <IoChevronBack />
            Previous
          </button>

          {/* dots */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className="h-2 w-2 rounded-full"
                style={{
                  background: index === currentStep ? step.color : "#ddd",
                }}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-2 disabled:opacity-30 z-[50]"
          >
            Next
            <IoChevronForward />
          </button>
        </div>
      </div>
    </div>
  );
}
