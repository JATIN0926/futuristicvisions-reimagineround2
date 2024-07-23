'use client';
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-cover bg-center">
     <Image
        src="/images/footerbg.png"
        alt="Footer background image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      <div className="absolute inset-0 z-[5]">
        <div className="flex flex-col items-center justify-center p-[2rem] h-max space-y-4">
        <Image 
            src="/icons/Incredible_India_Logo.png"
            alt="Incredible India Logo"
            height={300}
            width={300}
            objectFit="contain"
        />
          </div>
      </div>
      <div id="outer"
      className="relative w-[100vw] flex flex-row justify-between items-start pb-[20rem]">
      <div id="inner-left" className="flex flex-col gap-12 items-start justify-start pl-[4rem] pt-[rem]">
      
        <p className="text-xl font-Raleway-Regular underline underline-offset-8 text-white">Explore Union Territory
        </p>
        <p className="text-xl font-Raleway-Regular underline underline-offset-8 text-white"> Explore all States</p>
        <p className="text-xl font-Raleway-Regular underline underline-offset-8 text-white"> Contact Guide</p>
      
      

      </div> 
      <div id="inner-right" className="pr-[8rem] flex flex-col gap-12 "> 
      <div id="left-top " className="pb-[2rem]"> 
      <h1 className="font-bold text-3xl text-white"> Have Queries?</h1>
      <p className=" font-light text-[14px] text-[#888888]"> We will get back to you quickly. </p></div>
      <div id="left-bottom">
      <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-white py-2 z-[25]">
    <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter your Email Address" aria-label="Email Address" />
   
    <button class="flex-shrink-0 border-transparent border-4 text-white hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
      Submit
    </button>
  </div>
</form>

      </div>
      </div>
      
      </div>
      <footer className="absolute flex justify-center w-full object-center align-bottom pt-[35rem] mt-[10rem] text-white font-Raleway-Regular text-xl"> Copyright 2023 Incredible India | All rights reserved</footer>
      <Cards />
      
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/images/footer1.png"
            alt="Example image"
        rotate="-6deg"
        top="70%"
        left="5%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="/images/footer2.png"
            alt="Example image"
        rotate="12deg"
        top="50%"
        left="15%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/images/footer3.png"
            alt="Example image"
        rotate="-6deg"
        top="60%"
        left="26%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/images/footer4.png"
            alt="Example image"
        rotate="16deg"
        top="70%"
        left="45%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="/images/footer5.png"
            alt="Example image"
        rotate="10deg"
        top="50%"
        left="55%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/images/footer6.png"
            alt="Example image"
        rotate="-3deg"
        top="72%"
        left="70%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/images/footer7.png"
            alt="Example image"
        rotate="-3deg"
        top="60%"
        left="80%"
        className="w-40 md:w-64"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
export default Footer;