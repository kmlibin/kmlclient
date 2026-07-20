"use client";

import ServicesCard from "./ServicesCard";
import ServiceDrawer from "./ServiceDrawer";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Service, CardSize } from "@/types";


type RowItem =
  | {
      type: "service";
      size: CardSize;
      service: Service;
      className: string;
    }
  | {
      type: "illustration";
      className: string;
      element: StaticImageData;
    };

type Props = {
  items: RowItem[];
  selectedService: string | null;
  setSelectedService: (id: string | null) => void;
};

export default function ServiceRow({ items, selectedService, setSelectedService }: Props) {
  const activeService = items.find(
    (item) => item.type === "service" && item.service.id === selectedService,
  );

  return (
    <>
      <div
        className="md:grid gap-3 flex flex-col"
        style={{
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateRows: "repeat(2,200px)",
        }}
      >
        {/* if item is image */}
        {items.map((item, index) => {
          if (item.type === "illustration") {
            return (
              <div
                key={index}
                className={`${item.className} hidden md:block rounded-2xl border relative`}
              >
                <Image
                  src={item.element}
                  alt=""
                  className="h-full w-full object-contain p-6"
                />
              </div>
            );
          }

          return (
            <div key={item.service.id} className={item.className}>
              <ServicesCard
                service={item.service}
                size={item.size}
                isActive={selectedService === item.service.id}
                onClick={() =>
                  setSelectedService(selectedService === item.service.id ? null : item.service.id)
                }
              />
            </div>
          );
        })}
      </div>

      {activeService?.type === "service" && (
        <div className="mt-3">
          <ServiceDrawer
            service={activeService.service}
            setActive={setSelectedService}
            key={activeService.service.id}
          />
        </div>
      )}
    </>
  );
}
