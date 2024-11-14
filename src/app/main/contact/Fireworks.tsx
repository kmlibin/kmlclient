"use client";
import React, { useState, useMemo, useEffect } from "react";

// libraries
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
// types
import { Container, ISourceOptions } from "@tsparticles/engine";


type FireworksProps = {
  id: string;
};

const Fireworks = ({ id }: FireworksProps) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };


  const particlesConfig: ISourceOptions = useMemo(
    () => ({
      preset: "fireworks",
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: "rgba(0,0,0, .5)",
        },
      },
      emitters: {
        life: {
          count: 0,
          duration: 20,
          delay: 0.3,
        },
        rate: {
          delay: 0.08,
          quantity: 1,
        },
        size: {
          width: 100,
          height: 0,
        },
        position: {
          y: 100,
          x: 50,
        },
      },
      particles: {
        // properties of the main firework particle
        number: {
          value: 0, // Randomize the number of particles
        },
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: { value: 1 / 3 },
            rate: {
              value: 100,
            },
            particles: {
              color: {
                value: ["rgb(198, 55, 92)", "#057ee6", "#fec246", "#e15c3a", "#c3c3d9"],
              },
              stroke: {
                width: 0,
              },
              number: {
                value: 0,
              },
              collisions: {
                enable: false,
              },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 0.6,
                  minimumValue: 0.1,
                  sync: false,
                  startValue: "max",
                  destroy: "min",
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 3 },
                animation: {
                  enable: false,
                },
              },
            },
          },
        },
        life: {
          count: 10,
          duration: 20,
        },
        shape: {
          type: "line", // Linear path for the initial explosion
        },
        size: {
          value: { min: 1, max: 100 },
          animation: {
            enable: true,
            sync: true,
            speed: 50,
            destroy: "min",
          },
        },
        stroke: {
          color: {
            value: "#303030",
          },
          width: 3,
        },
        rotate: {
          path: true, // Single path for smoother particle rotation
        },
        move: {
          enable: true,
          gravity: {
            acceleration: 5, // Stronger gravity acceleration for downward movement
            enable: true,
            inverse: true, // Keep the particles on the same path for fireworks effect
            maxSpeed: 20,
          },
          speed: { min: 5, max: 10 }, // Faster particle movement for a more explosive effect
          outModes: {
            default: "destroy",
            top: "none",
          },
          trail: {
            fillColor: "#000",
            length: 20,
          },
        },
      },
    }),
    []
  );


  if (init) {
    return (
      <Particles
        id={id}
        particlesLoaded={particlesLoaded}
        options={particlesConfig}
      />
    );
  }

  return null;
};

export default Fireworks;
