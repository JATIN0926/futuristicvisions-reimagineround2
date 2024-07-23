"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero/Hero";
import "./ZoomingImage.css";
import { useAnimationContext } from "../../context/AnimationContext.js";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const ZoomingImage = () => {
  const { setZoomingAnimationComplete } = useAnimationContext();

  useEffect(() => {
    // Clear any previous ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "image-zoom",
        trigger: ".wrapper",
        start: "top top",
        end: "+=70%",
        pin: true,
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          if (self.progress > 0.05) {
            document.querySelectorAll(".disappearing-image").forEach((img) => {
              gsap.to(img, { opacity: 0, duration: 1 });
            });
          }
        },
      },
    });

    tl.to(".image-container img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
      .to(
        ".section.hero",
        {
          scale: 1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      )
      .to(".image-container", {
        opacity: 0,
        ease: "power1.inOut",
        onComplete: () => {
          document.querySelector(".image-container").style.display = "none";
          setZoomingAnimationComplete(true); // Set the animation complete state
        },
      });

    return () => {
      // Clear ScrollTrigger instances on component unmount
      ScrollTrigger.getById("image-zoom")?.kill();
    };
  }, [setZoomingAnimationComplete]);

  return (
    <div className="wrapper mb-[35rem]">
      <Image
        src="/images/incredible.svg"
        alt="img"
        width={30}
        height={30}
        className="disappearing-image absolute left-[6%] w-[25rem] aspect-square z-[200]"
      />
      <Image
        src="/images/india.svg"
        alt="img"
        width={30}
        height={30}
        className="disappearing-image absolute right-[14%] bottom-[10%] w-[17rem] aspect-square z-[200]"
      />
      <div className="content">
        <section className="section hero">
          <Hero />
        </section>
      </div>
      <div className="image-container">
        <img src="/images/StartingCircle.png" alt="Top Image" className="img" />
      </div>
    </div>
  );
};

export default ZoomingImage;
