"use client";

import { Service } from "./servicesContent";
import { useState } from "react";


type Props = {
  service: Service;
  size?: string;
  isActive: boolean;
  onClick: () => void;
};


export default function ServiceCard({
  service,
  size = "",
  isActive,
  onClick,
}: Props) {

  const [hovered, setHovered] = useState(false);

  const active = hovered || isActive;


  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      className={`
        ${size}
        relative
        overflow-hidden
        rounded-2xl
        text-left
        transition-all
      `}

      style={{
        background: active 
          ? service.accent 
          : "white",

        border: isActive
          ? `2px solid ${service.accent}`
          : "1px solid #e5e7eb",

        boxShadow:
          isActive
            ? `0 0 0 4px ${service.accent}30`
            : undefined,
      }}
    >

      <div className="p-5 flex flex-col h-full justify-between">


        <div>

          <p
            className="text-xs uppercase tracking-widest"
            style={{
              color: active 
                ? "rgba(255,255,255,.6)"
                : "#9ca3af"
            }}
          >
            {service.tagline}
          </p>


          <h3
            className="font-bold mt-3"
            style={{
              color: active 
                ? "white"
                : "#111"
            }}
          >
            {service.title}
          </h3>


          <p
            className="text-sm mt-2"
            style={{
              color: active
                ? "rgba(255,255,255,.75)"
                : "#6b7280"
            }}
          >
            {service.short}
          </p>

        </div>


        <div className="mt-5 flex justify-between">

          <div className="flex gap-2">

            {service.tags.slice(0,2).map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  background: active
                    ? "rgba(255,255,255,.2)"
                    : `${service.accent}20`,
                  color: active
                    ? "white"
                    : service.accent
                }}
              >
                {tag}
              </span>
            ))}

          </div>


          <span
            style={{
              color: active ? "white":"#ddd"
            }}
          >
            →
          </span>


        </div>

      </div>

    </button>
  );
}