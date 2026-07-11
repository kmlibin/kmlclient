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

        <div className="col-span-2 md:col-span-1 rounded-2xl border">
          illustration
        </div>

        {/* ROW 1 DRAWER */}
        {activeService &&
          [services[0].id, services[1].id].includes(activeService.id) && (
            <ServiceDrawer
            
              service={activeService}
              onClose={() => setActive(null)}
            />
          )}
      </div>
      {/* row 2 */}
      <div className="grid grid-cols-4 gap-3">
        <ServiceCard
          service={services[2]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[2].id}
          onClick={() => toggle(services[2].id)}
        />
        <ServiceCard
          service={services[3]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[3].id}
          onClick={() => toggle(services[3].id)}
        />

        {activeService &&
          [services[2].id, services[3].id].includes(activeService.id) && (
            <ServiceDrawer
              service={activeService}
              onClose={() => setActive(null)}
            />
          )}
      </div>
      {/* //row 3 */}
      <div className="grid grid-cols-4 gap-3">
        <ServiceCard
          service={services[4]}
          size="col-span-2 md:col-span-1"
          isActive={active === services[4].id}
          onClick={() => toggle(services[4].id)}
        />

        <div className="col-span-2 md:col-span-1 rounded-2xl border">
          illustration
        </div>
        <ServiceCard
          service={services[5]}
          size="col-span-4 md:col-span-2"
          isActive={active === services[5].id}
          onClick={() => toggle(services[5].id)}
        />

        {/* ROW 3 DRAWER */}
        {activeService &&
          [services[4].id, services[5].id].includes(activeService.id) && (
            <ServiceDrawer
              service={activeService}
              onClose={() => setActive(null)}
            />
          )}
      </div>
    </div>
  );
}
