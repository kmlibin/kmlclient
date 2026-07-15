"use client";

import { services } from "./servicesContent";
import { useState } from "react";
type CardSize = "hero" | "medium" | "smallCard";
type Props = {
  service: {
    id: string;
    title: string;
    tagline: string;
    accent: string;
    short: string;
    body: string;
    tags: string[];
    details: string[];
  };
  size: CardSize;
  isActive: boolean;
  onClick: () => void;
};

export default function ServiceCard({
  service,
  isActive,
  size,
  onClick,
}: Props) {
  const [hovered, setHovered] = useState(false);
  const active = hovered || isActive;
  console.log(size, "active", active, "isActive", isActive);

  const bgStyles = {
    hero: {
      background: service.accent,
      border: "1px solid #e5e7eb",
    },
    medium: {
      background: active ? `${service.accent}` : `${service.accent}10`,
      border: `1px solid ${service.accent}30`,
    },
    smallCard: {
      background: active ? `${service.accent}20` : `${service.accent}10`,
      border: isActive ? `2px solid ${service.accent}` : "1px solid #e5e7eb",
      borderLeft: isActive
        ? `2px solid ${service.accent}`
        : `4px solid ${service.accent}`,
    },
  };

  const cardStyle = bgStyles[size];

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full w-full overflow-hidden rounded-2xl text-left transition-all"
      style={{
        ...cardStyle,
        boxShadow: isActive ? `0 0 0 4px ${service.accent}20` : undefined,
      }}
    >
      <div className="p-5 flex flex-col h-full justify-between">
        <div>
          <p
            className="text-xs uppercase tracking-widest"
            style={{
              color:
                size === "hero" || (active && size === "medium")
                  ? "rgba(255,255,255,.6)"
                  : service.accent,
            }}
          >
            {service.tagline}
          </p>

          <h3
            className="font-bold mt-3"
            style={{
              color:
                (active && size === "medium") || size === "hero"
                  ? "#fefefe"
                  : "#333",
            }}
          >
            {service.title}
          </h3>

          <p
            className="text-sm mt-2"
            style={{
              color:
                size == "hero"
                  ? "#fefefe"
                  : active && size === "medium"
                    ? "rgba(51,51,51, .85)"
                    : "#333",
            }}
          >
            {service.short}
          </p>
        </div>

        <div className="mt-5 flex justify-between">
          <div className="flex gap-2">
            {service.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  background: active
                    ? "rgba(255,255,255,.2)"
                    : `${service.accent}20`,
                  color: active ? "white" : service.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            style={{
              color: active ? "white" : "#ddd",
            }}
          >
            →
          </span>
        </div>
      </div>
    </button>
  );
}
