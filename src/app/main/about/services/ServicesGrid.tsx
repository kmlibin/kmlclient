"use client";

import { useState } from "react";

import { services } from "./servicesContent";

import ServiceCard from "./ServicesCard";
import ServiceDrawer from "./ServiceDrawer";

export default function ServicesGrid() {
  const [active, setActive] = useState<string | null>(null);

  const activeService = services.find((service) => service.id === active);

  function toggle(id: string) {
    setActive((prev) => (prev === id ? null : id));
  }

  return (
    <div className="w-4/5 mx-auto z-[200]">
      <div className="grid grid-cols-4 gap-3">
        {/* //row 1 */}
        <ServiceCard
          service={services[0]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[0].id}
          onClick={() => toggle(services[0].id)}
        />

        <ServiceCard
          service={services[1]}
          size="col-span-2 md:col-span-1"
          isActive={active === services[1].id}
          onClick={() => toggle(services[1].id)}
        />

        <div
          className="col-span-2 md:col-span-1 rounded-2xl border
"
        >
          illustration
        </div>

        {/* row 2 */}
        <ServiceCard
          service={services[0]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[0].id}
          onClick={() => toggle(services[0].id)}
        />
        <ServiceCard
          service={services[0]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[0].id}
          onClick={() => toggle(services[0].id)}
        />

        {/* //row 3 */}
        <ServiceCard
          service={services[1]}
          size="col-span-2 md:col-span-1"
          isActive={active === services[1].id}
          onClick={() => toggle(services[1].id)}
        />

        <div
          className="col-span-2 md:col-span-1 rounded-2xl border
"
        >
          illustration
        </div>
        <ServiceCard
          service={services[0]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[0].id}
          onClick={() => toggle(services[0].id)}
        />
      </div>

      {activeService && (
        <ServiceDrawer
          service={activeService}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
