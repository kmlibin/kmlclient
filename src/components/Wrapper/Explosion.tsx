"use client";
import React, { useEffect, useState, useMemo } from "react";

//libraries
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

//types
import { type Container, type ISourceOptions } from "@tsparticles/engine";

type ParticleProps = {
  id: string;
};

const ParticleExplosion = ({ id }: ParticleProps) => {
  const [init, setInit] = useState(false);

  // init ts particles
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

  //options that control the particles
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(0,0,0, .5)",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
      },
      emitters: {
        position: {
          x: 93, // Emitter position (right side) move to 50 for centered
          y: 75, // Emitter position (near bottom) move to 95 to be more at bottom, moved up so under space ship
        },
        rate: {
          quantity: 800, // Emit amount of particles at a time
          delay: 1000, //delay between emissions
        },
      },
      particles: {
        color: {
          value: ["#e15c3a", "#fec246", "rgb(98, 211, 228)", "#057ee6"], // Set particle colors
        },
        move: {
          decay: 0.05, // Slow down particle speed over time
          direction: "bottom", // Particles move downwards. switch to "top" to move up
          enable: true, // Enable particle movement
          gravity: {
            enable: true, // Enable gravity effect on particles
            acceleration: 0.3,
          },
          outModes: {
            top: "none", // Particles don't disappear at the top
            default: "destroy", // Particles are destroyed when they move out of bounds
          },
          speed: { min: 0, max: 65 },
        },
        number: {
          value: 50, // Initial particle number
        },
        opacity: {
          value: 1, // Full opacity for particles
        },
        rotate: {
          value: { min: 0, max: 360 }, // Rotation range
          direction: "random", // Random rotation direction
          animation: {
            enable: true,
            speed: 30, // Rotation speed
          },
        },
        tilt: {
          direction: "random", // Random tilt direction
          enable: true, // Enable tilt
          value: { min: 0, max: 360 }, // Tilt value range
          animation: {
            enable: true,
            speed: 30, // Tilt speed
          },
        },
        size: {
          value: 3, // Set particle size
        },
        roll: {
          darken: {
            enable: true,
            value: 25, // Darken effect intensity
          },
          enable: true, // Enable roll effect
          speed: { min: 5, max: 15 }, // Roll speed range
        },
        wobble: {
          distance: 30, // Wobble distance
          enable: true, // Enable wobble
          speed: { min: -7, max: 7 }, // Wobble speed range
        },
        shape: {
          type: ["star", "circle"], // Use circular shape for particles
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <Particles id={id} particlesLoaded={particlesLoaded} options={options} />
    );
  }

  return null;
};

export default ParticleExplosion;
