"use client";
import React, { useEffect, useState, useMemo } from "react";

//images

import kelli2 from "../../public/images/kelli2.png";
import message from "../../public/images/mborder.png";
//libraries
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { gsap } from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { loadSlim } from "tsparticles-slim";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
  Engine,
} from "@tsparticles/engine";

type ParticleProps = {
  id: string;
  position: { x: string; y: string };
};

const ParticleExplosion = ({ id }: ParticleProps) => {
  const [init, setInit] = useState(false);

  // Initialize tsParticles only once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      //@ts-ignore
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(0,0,0, .5)", // Set background color to black
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1, // Set zIndex so that the particles appear behind other content
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
        }
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

const ContactImages = () => {
  const [isParticleVisible, setIsParticleVisible] = useState(false);

  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    const animateElement = document.querySelector("#kelli-image");

    gsap.fromTo(
      animateElement,
      { opacity: 0, x: "-10vw" },
      {
        opacity: 1,
        duration: 6,
        motionPath: {
          path: [
            { x: -100, y: -150 }, // up
            { x: -50, y: 100 }, // down
            { x: 0, y: 0 }, // final position
          ],
          curviness: 2,
        },
        ease: "power1.inOut",
      }
    );
  }, []);

  const handleClick = () => {
    const animateElement = document.querySelector("#kelli-image");

    // Show particles for explosion
    setIsParticleVisible(true);

    // Hide particles after 1 second
    setTimeout(() => {
      setIsParticleVisible(false);
    }, 1500);

    // Animate the clicked image
    gsap.to(animateElement, {
      x: "-10", // Move to the far right of the screen
      y: "-100vh", // Move up
      scale: 0.2, // Shrink the image to simulate zooming out
      duration: 2,
      ease: "power4.inOut",
    });
  };

  return (
    <>
      {isParticleVisible && (
        // @ts-ignore
        <ParticleExplosion id="particles" />
      )}
      <div className="fixed -bottom-[125%] my-9 right-0 z-10 flex -translate-y-1/2 flex-col min-h-[100vh]">
        <div className="relative h-full w-[200px]">
          <Image
            src={kelli2}
            height={150}
            alt="kelli"
            id="kelli-image"
            className="absolute -top-10 z-10"
            onClick={handleClick}
          />
          <div className="absolute right-5 top-16 flex flex-col gap-2 items-center justify-center hover:scale-110 hover:z-[11] cursor:pointer">
            <Image
              src={message}
              height={75}
              width={75}
              alt="message"
              className="shadow-customGray rounded-full border-[1px] border-opacity-55 border-customIndigo"
            />
            <p className="p-2 rounded-xl bg-lightGrey bg-opacity-70">
              Got Questions?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactImages;
