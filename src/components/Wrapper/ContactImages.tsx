"use client";
import React, { useEffect, useState } from "react";

//images
import kelli2 from "../../../public/images/kelli2.png";
import message from "../../../public/images/mborder.png";
//libraries
import Image from "next/image";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//components
import ParticleExplosion from "./Explosion";
//fonts
import { ibm, ibmBold } from "@/app/utils/fonts";

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
        onComplete: () => {
          // timeline for the shaking
          const shakeTimeline = gsap.timeline({ repeat: -1, repeatDelay: 10 });
          // shake animation: left and right for 1.2 seconds
          shakeTimeline.to(animateElement, {
            x: "-=10",
            duration: 0.1,
            ease: "power1.inOut",
            yoyo: true,
            repeat: 5, // Repeat back and forth 5 times (0.1s * 6 = 1.2s)
          });
        },
      }
    );
  }, []);

  const handleClick = () => {
    const animateElement = document.querySelector("#kelli-image");

    // show particles for explosion
    setIsParticleVisible(true);

    // hide particles after 1 second
    setTimeout(() => {
      setIsParticleVisible(false);
    }, 2500);

    // animate the clicked image
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
       <div className="w-full h-full !z-[40] absolute">
        <ParticleExplosion id="particles" />
        </div>
      )}
      <div className="fixed -bottom-[125%] my-9 right-0  flex -translate-y-1/2 flex-col min-h-[100vh] z-[50]">
        <div className="relative h-full w-[200px]">
          <Image
            src={kelli2}
            height={150}
            alt="kelli"
            id="kelli-image"
            className="absolute -top-12 z-10 cursor-pointer"
            onClick={handleClick}
          />
          <div className="absolute right-2 top-16 flex flex-col gap-2 items-center justify-center">
            <Image
              src={message}
              height={75}
              width={75}
              alt="message"
              className="shadow-customGray rounded-full border-[1px] border-opacity-55 border-customIndigo hover:scale-110 hover:z-[11] cursor-pointer"
            />
            <p
              className={`${ibmBold.className} p-2 rounded-xl shadow-sm bg-lightGrey bg-opacity-70 text-md border-[1px] border-opacity-55 border-customIndigo`}
            >
              Got Questions?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactImages;
