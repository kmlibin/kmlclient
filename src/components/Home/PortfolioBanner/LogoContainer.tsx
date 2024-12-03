'use client'
import React from "react";
//libraries
import {Fade} from 'react-awesome-reveal'
import Image, { StaticImageData } from "next/image";

type LogoContainerProps = {
    fadeKey: number;
    currentLogo: StaticImageData;
};

const LogoContainer = ({fadeKey, currentLogo}: LogoContainerProps) => {
  return (
    <Fade key={fadeKey} duration={1500}>
    <Image
      loading="lazy"
      alt="Concierge Wellness Logo"
      className="object-cover"
      src={currentLogo}
    />
  </Fade>
  );
};

export default LogoContainer;
