"use client";

import ServicesCard from "./ServicesCard";
import ServiceDrawer from "./ServiceDrawer";

export type Service = {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  short: string;
  body: string;
  tags: string[];
  details: string[];
};

type CardSize = "hero" | "medium" | "smallCard";

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
      children?: React.ReactNode;
    };

type Props = {
  items: RowItem[];
  active: string | null;
  setActive: (id: string | null) => void;
};

export default function ServiceRow({ items, active, setActive }: Props) {
  const activeService = items.find(
    (item) => item.type === "service" && item.service.id === active,
  );

  return (
    <>
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "repeat(4,1fr)",
          gridTemplateRows: "repeat(2,180px)",
        }}
      >
        {/* if item is image */}
        {items.map((item, index) => {
          if (item.type === "illustration") {
            return (
              <div
                key={index}
                className={`${item.className} rounded-2xl border`}
              >
                {item.children}
              </div>
            );
          }

          return (
            <div key={item.service.id} className={item.className}>
              <ServicesCard
                service={item.service}
                size={item.size}
                isActive={active === item.service.id}
                onClick={() =>
                  setActive(active === item.service.id ? null : item.service.id)
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
            setActive={setActive}
          />
        </div>
      )}
    </>
  );
}
