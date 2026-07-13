"use client";
import { useState } from "react";

import { services } from "./servicesContent";

import ServiceRow from "./ServiceRow";

//if size small
//left hand border
//bg is accent 10 (or customWhite?)

//hover is dropshadow
//hover is bg accent20

// active is boxshadow accent20
// active is bg accent20
//active is full border accent

//if medium
//border accent 40
// bg accent30

//hover is bg accent
//active is full bg color
//active is box shadow accent 20

export default function ServicesGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-4/5 mx-auto space-y-3">
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
            children: "Illustration",
          },
          {
            type: "service",
            size: "small",
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
            size: "small",
            service: services[3],
            className: "col-start-1 row-start-1 col-end-2 row-end-1",
          },
          {
            type: "illustration",

            className: "col-start-2 row-start-1 col-end-2 row-end-1",
            children: "Illustration",
          },
          {
            type: "service",
            size: "small",
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
