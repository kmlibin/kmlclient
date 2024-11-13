"use client";
import React, { ReactNode } from "react";
//libraries
import { Zoom } from "react-awesome-reveal";

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
  triggerOnce = true,
}) => {
  const HeadingTag = as;

  return (
    <Zoom direction="down" duration={1200} triggerOnce={triggerOnce}>
      <HeadingTag className={`${className}`}>{children}</HeadingTag>
    </Zoom>
  );
};

export default ZoomHeading;
