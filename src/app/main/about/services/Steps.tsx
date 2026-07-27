import React from "react";
//fonts
import { fredoka, ibm, ibmBold } from "@/app/utils/fonts";
//content
import { steps } from "./servicesContent";

type Props = {};

const Steps = (props: Props) => {
  return (
     <section className="bg-customWhite tracking-wide border-2 border-customBlue mb-10 border-opacity-50 w-4/5 my-10 mx-auto">

      <div className="max-w-[75%] mx-auto px-4 md:px-6 pt-16 pb-20">

        {/* // header */}
        <div className="mb-14 md:mb-16">
          <p className={`${ibm.className} text-xs uppercase tracking-widest mb-3 text-blackTextFont`}>
            The process
          </p>
          <h3 className={`${fredoka.className} text-4xl text-customIndigo`}>
            What to expect
          </h3>
          <p className={`mt-3 text-[16px] sm:text-[18px] ${ibm.className}`}>
            Six straightforward steps from first conversation to a live, optimized website.
          </p>
        </div>

        {/* // steps */}
        <div className="relative">
          {/* vertical line — desktop only */}
          <div
            className="hidden md:block absolute"
            style={{
              left: 38,
              top: 12,
              bottom: 12,
              width: 1,
              background: 'linear-gradient(to bottom, #333 0%, #333 85%, transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1
              return (
                <div
                  key={step.n}
                  className="relative flex gap-5 md:gap-8 group"
                  style={{ paddingBottom: isLast ? 0 : 36 }}
                >
                  {/* marker*/}
                  <div className="flex flex-col items-center shrink-0" style={{ width: 76 }}>
                    {/* number */}
                    <div
                      className="relative border border-[#333] z-10 w-[52px] h-[52px] text-customWhite rounded-full flex items-center justify-center shrink-0 font-bold text-sm tracking-wide"
                      style={{
                        background: step.color,
                      }}
                    >
                      {step.n}
                    </div>
                  </div>

                  {/* content */}
                  <div className="flex-1 pt-3 pb-1">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <h4 className={`text-lg md:text-xl text-customIndigo ${ibmBold.className}`}>
                        {step.title}
                      </h4>
                      <span
                        className={`px-2.5 py-1 rounded-full shrink-0`}
                          style={{
                        color: step.color,
                        opacity: "50%",
                      }}
                      >
                       {step.icon}
                      </span>
                    </div>
                    <p className={`${ibm.className} text-blackTextFont text-sm leading-relaxed`}>
                      {step.body}
                    </p>

                    {/* divider between steps (mobile) */}
                    {!isLast && (
                      <div className="md:hidden mt-8 mb-1" style={{ height: 1, background: '#1e3a5f' }} />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        </div>
        </section>
  );
};

export default Steps;
