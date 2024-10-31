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
  const [flyBack, setFlyBack] = useState(false);

  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    const animateElement = document.querySelector("#kelli-image");

    gsap.fromTo(
      animateElement,
      { opacity: 0, x: "-10vw" },
      {
        opacity: 1,
        duration: 5,
        motionPath: {
          path: [
            { x: -100, y: -150 }, // up
            { x: -50, y: 100 }, // down
            { x: 0, y: 0 }, // final position
          ],
          curviness: 2,
        },
        ease: "power1.in",
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

    // handles fly-back when any section is visible
    const handleSectionInView = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setFlyBack(true);
        }
      });
    };

    // set up options for Intersection Observer
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of section is in view
    };

    // Init
    const observer = new IntersectionObserver(
      handleSectionInView,
      observerOptions
    );

    //sections to be observed
    const sections = [
      document.querySelector("#banner-section"),
      document.querySelector("#portfolio-section"),
      document.querySelector("#info-section"),
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animateElement = document.querySelector("#kelli-image");

    if (flyBack) {
      gsap.to(animateElement, {
        y: 0, // Reset the vertical position
        x: "0", // Reset the horizontal position
        opacity: 1,
        scale: 1, // Reset the scale
        duration: 2,
        ease: "power4.out",
      });

      // resets state after animation completes
      setFlyBack(false);
    }
  }, [flyBack]);

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
      <div className="fixed -bottom-[122%] my-9 right-0  flex -translate-y-1/2 flex-col min-h-[100vh] z-[50]">
        <div className="relative h-full w-[200px]">
          <Image
            src={kelli2}
            height={150}
            alt="kelli"
            id="kelli-image"
            className="absolute -top-12 z-10 cursor-pointer"
            onClick={handleClick}
          />
          <div className="absolute right-2 top-16 flex flex-col gap-2 items-center justify-center hover:cursor-pointer">
            <Image
              src={message}
              height={75}
              width={75}
              alt="message"
              className="shadow-customIndigo rounded-full border-[1px] border-opacity-55 border-customIndigo hover:scale-110 hover:z-[11]  duration-200 cursor-pointer"
            />
            <p
              className={`${ibmBold.className} py-2 px-3 rounded-xl shadow-sm bg-lightGrey bg-opacity-70 text-md border-[1px] border-opacity-55 border-customIndigo`}
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
