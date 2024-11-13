"use client";
import React, { useEffect, useState, useMemo } from "react";

// libraries
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

// types
import { type Container, type ISourceOptions } from "@tsparticles/engine";

type BubblesProps = {
  id: string;
};

const Bubbles = ({ id }: BubblesProps) => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const bubblesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Options that control the particles
  //@ts-ignore
  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#faf9f7",
        },
      },
      fullScreen: false,
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            size: 10,
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        number: {
          value: 3, 
          density: {
            enable: false,
          },
        },
        size: {
            value: {
              min: 20, 
              max: 30, 
            },
            animation: {
              count: 0,
              enable: true,
              speed:20,
              decay: 0,
              delay: 0,
              sync: false,
              mode: "auto",
              startValue: "random",
              destroy: "none",
            },
          },
        move: {
          enable: true,
          speed: 2,
          direction: "top",
          random: false,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: "circle", 
        },
        color: {
          value: ["#e15c3a", "#111167", "#fec246", "#62d3e4", "#c6375c"],
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#000000",
          opacity: 0.4,
          width: 1,
        },
      },
      responsive: [],
      style: {
        height: "100px",
        width: "100%"
      }
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id={id}
        particlesLoaded={bubblesLoaded}
        options={particlesOptions}
        style={{minHeight: "100%"}}
      />
    );
  }

  return null;
};

export default Bubbles;