"use client";
import React, { ReactNode } from "react";
//libraries


interface ZoomHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  triggerOnce?: boolean;
}

const ZoomHeading: React.FC<ZoomHeadingProps> = ({
  as = "h1",
  children,
  className = "",

}) => {
  const HeadingTag = as;

  return (

      <HeadingTag className={`${className}`}>{children}</HeadingTag>

  );
};

export default ZoomHeading;
