"use client";
import React, { useEffect, useState, useRef } from "react";

//images
import kelli2 from "../../../public/images/kelli2.png";
import message from "../../../public/images/mborder.png";
//libraries
import Image from "next/image";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Fade } from "react-awesome-reveal";
//components
import ParticleExplosion from "./Explosion";
//fonts
import { ibmBold } from "@/app/utils/fonts";
//paths
import paths from "@/app/paths";
import Link from "next/link";

const ContactImages = () => {
  const [isParticleVisible, setIsParticleVisible] = useState(false);
  const [initialAnimationPlayed, setInitialAnimationPlayed] = useState(false);
  const [flyBack, setFlyBack] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Store timeout reference
  const observerRef = useRef<NodeJS.Timeout | null>(null);

  gsap.registerPlugin(MotionPathPlugin);

  // Debounced state setter
  const debouncedSetFlyBack = () => {
    if (observerRef.current) {
      clearTimeout(observerRef.current);
    }
    observerRef.current = setTimeout(() => setFlyBack(true), 500);
  };

  useEffect(() => {
    const animateElement = document.querySelector("#kelli-image");
    if (!initialAnimationPlayed) {
      gsap.set(animateElement, { opacity: 0 });
      gsap.fromTo(
        animateElement,
        { autoAlpha: 0, x: "-10vw" },
        {
          autoAlpha: 1,
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
          ease: "power2.out",
          onComplete: () => {
            const shakeTimeline = gsap.timeline({
              repeat: -1,
              repeatDelay: 10,
            });
            shakeTimeline.to(animateElement, {
              x: "-=10",
              duration: 0.1,
              ease: "power1.inOut",
              yoyo: true,
              repeat: 5,
            });
            setInitialAnimationPlayed(true);
          },
        }
      );
    }
  }, [initialAnimationPlayed]);

  useEffect(() => {
    if (!initialAnimationPlayed) return; // avoid fly-back on initial load

    const handleSectionInView = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          debouncedSetFlyBack(); // debounced to avoid re-trigger
        }
      });
    };

    //set up and init observer
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver(
      handleSectionInView,
      observerOptions
    );
    const sections = [
      document.querySelector("#banner-section"),
      document.querySelector("#portfolio-section"),
      document.querySelector("#info-section"),
      document.querySelector("#hero-section"),
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [initialAnimationPlayed]);

  useEffect(() => {
    const animateElement = document.querySelector("#kelli-image");

    if (flyBack) {
      gsap.to(animateElement, {
        y: 0,
        x: "0",
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power1.inOut",
        onComplete: () => setFlyBack(false), // reset state on animation complete
      });
    }
  }, [flyBack]);

  const handleClick = () => {
    const animateElement = document.querySelector("#kelli-image");

    // clear any potential existing timeout to avoid stacking
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // trigger the particle explosion
    setIsParticleVisible(true);
    timeoutRef.current = setTimeout(() => {
      setIsParticleVisible(false);
    }, 2500);

    gsap.to(animateElement, {
      x: "-10",
      y: "-100vh",
      scale: 0.2,
      duration: 2,
      ease: "power4.inOut",
    });
  };

  return (
    <>
      {isParticleVisible && (
        <div className="w-full h-full !z-[900] absolute">
          <ParticleExplosion id="particles" />
        </div>
      )}

      <div className="hidden sm:flex fixed -bottom-[125%] my-9 right-6 -translate-y-1/2 flex-col min-h-[100vh] z-[950]">
        <div className="relative h-full w-[200px]">
          <Image
            src={kelli2}
            height={150}
            alt="kelli"
            id="kelli-image"
            className="absolute -top-12 z-10 cursor-pointer opacity-0"
            onClick={handleClick}
          />
          <Fade triggerOnce delay={3500}>
            <Link
              href={paths.contactPath()}
              className="absolute right-2 top-16 flex flex-col gap-2 items-center justify-center hover:cursor-pointer"
            >
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
            </Link>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default ContactImages;
