"use client";
import { useState } from "react";
//components
import ServiceRow from "./ServiceRow";
//content
import { services } from "./servicesContent";
import webapp from "./images/webapp.svg";
import handshake from "./images/handshake.svg";
//libraries
import { Fade } from "react-awesome-reveal";

export default function ServicesGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Fade direction="up" triggerOnce>
      <div className="md:w-4/5 mx-auto md:space-y-3 bg-customWhite bg-opacity-95 rounded-md p-2 z-10 ">
        <ServiceRow
          active={active}
          setActive={setActive}
          items={[
            {
              type: "service",
              size: "hero",
              service: services[0],
              className: "md:col-start-1 md:col-end-3 row-start-1 row-end-3",
            },
            {
              type: "service",
              size: "medium",
              service: services[1],
              className: "md:col-start-3 row-start-1 row-end-3",
            },
            {
              type: "illustration",

              className: "col-start-4 row-start-1",
              element: handshake,
            },
            {
              type: "service",
              size: "smallCard",
              service: services[2],
              className: "md:col-start-4 row-start-2 mb-2 md:mb-0",
            },
          ]}
        />

        <ServiceRow
          active={active}
          setActive={setActive}
          items={[
            {
              type: "service",
              size: "smallCard",
              service: services[3],
              className: "md:col-start-1 row-start-1 md:col-end-2 row-end-1",
            },
            {
              type: "illustration",

              className: "col-start-2 row-start-1 col-end-2 row-end-1",
              element: webapp,
            },
            {
              type: "service",
              size: "smallCard",
              service: services[4],
              className: "row-start-2 md:col-start-1 md:col-span-2",
            },
            {
              type: "service",
              size: "medium",
              service: services[5],
              className: "md:col-start-3 md:col-end-5 row-start-1 row-end-3",
            },
          ]}
        />
      </div>
    </Fade>
  );
}
