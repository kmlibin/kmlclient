"use client";
import React, { ReactNode } from "react";
//libraries

interface ZoomHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
  id?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  triggerOnce?: boolean;
}

const ZoomHeading: React.FC<ZoomHeadingProps> = ({
  as = "h1",
  children,
  className = "",
  id,
}) => {
  const HeadingTag = as;

  return (
    <HeadingTag id={id} className={`${className}`}>
      {children}
    </HeadingTag>
  );
};

export default ZoomHeading;
