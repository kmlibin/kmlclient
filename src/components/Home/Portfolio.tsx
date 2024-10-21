'use client';
import React, { useState } from "react";
import { useSpring, a } from '@react-spring/web';
import "./Portfolio.css"

//@ts-ignore
const PortfolioCard = ({ frontImage, backImage, height }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className="container" onClick={() => set(state => !state)} style={{ height: height }}>
      <a.div
        className={`c back`}
        style={{ opacity: opacity.to(o => 1 - o), transform, backgroundImage: `url(${backImage})` }}
      />
      <a.div
        className={`c front`}
        style={{
          opacity,
          transform,
          backgroundImage: `url(${frontImage})`,
          rotateX: '180deg',
        }}
      />
    </div>
  );
};

export default PortfolioCard;