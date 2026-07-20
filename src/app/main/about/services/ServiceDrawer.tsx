"use client";

import { ibm, fredoka } from "@/app/utils/fonts";
import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { Service } from "@/types";

export default function ServiceDrawer({
  service,
  setActive,
}: {
  service: Service;
  setActive: (id: string | null) => void;
}) {
  //when user clicks on bento and drawer opens, it scrolls to the drawer
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    drawerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  //drawer closes and snaps back to original card that was clicked
  //requestanimationframe  runs that function right before the broswer paints the next frame..in react, it doesn't remove right away,
  //it schedules an update. so the browser might still see the drawer. so, close the drawer, let browser process the update, on next
  //frame, do the scroll
  const handleClose = () => {
    setActive(null);

    requestAnimationFrame(() => {
      document.getElementById(`service-${service.id}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };
  return (
    <div
      ref={drawerRef}
      className={`${ibm.className} drawer-in mt-3 rounded-2xl overflow-hidden bg-white border w-[100%] col-span-`}
    >
      <div
        className="h-1"
        style={{
          background: service.accent,
        }}
      />

      <div className="p-6">
        <div className="flex justify-between">
          <div>
            <p
              className={`uppercase text-xs tracking-widest`}
              style={{
                color: service.accent,
              }}
            >
              What's included
            </p>

            <h2
              className={`${fredoka.className} text-2xl text-blackTextFont tracking-wide`}
            >
              {service.title}
            </h2>
          </div>

          <button
            className="z-[5]"
            onClick={() => (setActive(null), handleClose())}
          >
            <IoMdClose
              className="hover:opacity-30 transition-opacity duration-200"
              color={service.accent}
            />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <p className={`text-blackTextFont text-sm`}>{service.body}</p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${ibm.className} px-3 py-1 rounded-full text-xs`}
                  style={{
                    background: `${service.accent}20`,
                    color: service.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Deliverables
            </p>

            <ul className="mt-3 space-y-2 text-md">
              {service.details.map((item) => (
                <li
                  className="flex justify-start items-center gap-2"
                  key={item}
                >
                  <GiCheckMark color={service.accent} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
