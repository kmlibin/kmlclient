"use client";
import React, { useEffect, useState } from "react";

//images

import kelli2 from "../../public/images/kelli2.png";
import message from "../../public/images/mborder.png";
//libraries
import Image from "next/image";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const ContactImages = () => {
  const [isOrbiting, setIsOrbiting] = useState(false);
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

  // Click handler for orbit animation
  const handleOrbitClick = () => {
    const animateElement = document.querySelector("#kelli-image");
    if (isOrbiting) {
      // stop animation if it's already orbiting
      gsap.killTweensOf(animateElement);
      setIsOrbiting(false);
      gsap.to(animateElement, {
        duration: 0,
        //resets to resting position
        motionPath: {
          path: [{ x: 0, y: 0 }], // Reset position to final resting position
          curviness: 0,
        },
      });
    } else {
      //start orbit
      gsap.to(animateElement, {
        duration: 3,
        motionPath: {
          path: [
            { x: 5, y: 5 }, // bottom right
            { x: -3, y: 3 }, // bottom left

            { x: 0, y: 0 }, // rest position
          ],
          curviness: 2,
        },
        ease: "power1.inOut",
        autoRotate: true,
        repeat: -1, //perpetual motion
      });
      setIsOrbiting(true);
    }
  };

  //   const handleClick = () => {
  //     const animateElement = document.querySelector("#kelli-image");

  //     gsap.to(animateElement, {
  //       x: "100vw", // Move to the far right of the screen
  //       y: "-50vh", // Move up
  //       scale: 0.5, // Shrink the image to simulate zooming out
  //       rotation: 360, // Rotate as it moves
  //       duration: 2,
  //       ease: "power4.inOut",
  //     //   onComplete: () => {
  //     //     // Optional: After the animation completes, you could bring the image back
  //     //     gsap.to(animateElement, { x: "0", y: "0", scale: 1, duration: 1 });
  //     //   },
  //     });
  //   };
  return (
    <div className="fixed -bottom-[125%] my-9 right-0 z-10 flex -translate-y-1/2 flex-col min-h-[100vh]">
      <div className="relative h-full w-[200px]">
        <Image
          src={kelli2}
          height={150}
          alt="kelli"
          id="kelli-image"
          className="absolute -top-10 z-10 "
          onClick={handleOrbitClick} //
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
  );
};

export default ContactImages;
