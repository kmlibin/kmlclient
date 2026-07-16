"use client";
import { useState } from "react";
//libraries
import { MdOutlineReadMore } from "react-icons/md";

type CardSize = "hero" | "medium" | "smallCard";
type Props = {
  service: {
    id: string;
    title: string;
    tagline: string;
    accent: string;
    lightAccent: string | undefined;
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
      border: isActive ? "4px solid #fefefe" : "1px solid #fefefe",
      boxShadow: `
      inset 0 1px 2px rgba(255,255,255,0.15),
      inset 0 -6px 12px rgba(0,0,0,0.1),
      ${isActive ? `0 0 0 2px ${service.accent}` : "0 4px 12px rgba(0,0,0,0.2)"}
    `,
    },
    medium: {
      background: active ? `${service.accent}` : `${service.accent}10`,
      border: `1px solid ${service.accent}30`,
      boxShadow: isActive ? `0 0 0 4px ${service.accent}20` : undefined,
    },
    smallCard: {
      background: active
        ? `${service.lightAccent}20`
        : `${service.lightAccent}`,
      border: isActive ? `2px solid ${service.accent}` : "1px solid #e5e7eb",
      borderLeft: isActive
        ? `2px solid ${service.accent}`
        : `4px solid ${service.accent}`,
      boxShadow: isActive ? `0 0 0 4px ${service.accent}20` : undefined,
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
            className="font-bold mt-3 tracking-wide"
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
            className="text-sm mt-2 tracking-wide"
            style={{
              color: size == "hero" ? "#fefefe" : "rgba(51,51,51, .85)",
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
                  background:
                    (active && size !== "smallCard") || size === "hero"
                      ? "rgba(255,255,255,.2)"
                      : `${service.accent}20`,
                  color:
                    (active && size !== "smallCard") || size === "hero"
                      ? "white"
                      : service.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            className="text-2xl"
            style={{
              color:
                (active && size !== "smallCard") || size === "hero"
                  ? "#fefefe"
                  : active && size === "smallCard"
                    ? `${service.accent}70`
                    : service.accent,
            }}
          >
            <MdOutlineReadMore />
          </span>
        </div>
      </div>
    </button>
  );
}
