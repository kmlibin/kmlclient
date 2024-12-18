"use client";
import React, { ReactNode, useEffect } from "react";
//libraries
import { Roll } from "react-awesome-reveal";

interface ZoomHeadingProps {
  children: ReactNode;
  delay?: number;
}
const RollImage: React.FC<ZoomHeadingProps> = ({ delay, children }) => {
  return (
    <Roll duration={1200} delay={delay ? delay : 0} triggerOnce={true}>
      {children}
    </Roll>
  );
};

export default RollImage;
