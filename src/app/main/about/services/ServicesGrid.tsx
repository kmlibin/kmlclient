"use client";
import { useState } from "react";
//components
import ServiceRow from "./ServiceRow";
//content
import { services } from "./servicesContent";
import webapp from './images/webapp.svg'
import handshake from './images/handshake.svg'


export default function ServicesGrid() {
  const [active, setActive] = useState<string | null>(null);
  console.log("active", active)

  return (
    <div className="w-4/5 mx-auto space-y-3 bg-customWhite bg-opacity-95 rounded-md p-2 z-10 ">
      <ServiceRow
        active={active}
        setActive={setActive}
        items={[
          {
            type: "service",
            size: "hero",
            service: services[0],
            className: "col-start-1 col-end-3 row-start-1 row-end-3",
          },
          {
            type: "service",
            size: "medium",
            service: services[1],
            className: "col-start-3 row-start-1 row-end-3",
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
            className: "col-start-4 row-start-2",
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
            className: "col-start-1 row-start-1 col-end-2 row-end-1",
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
            className: "row-start-2 col-start-1 col-span-2",
          },
          {
            type: "service",
            size: "medium",
            service: services[5],
            className: "col-start-3 col-end-5 row-start-1 row-end-3",
          },
        ]}
      />
    </div>
  );
}
