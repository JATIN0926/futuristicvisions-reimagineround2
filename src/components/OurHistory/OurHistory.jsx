"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion, useInView } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const OurHistory = () => {
  const svgRefs = useRef([]);
  svgRefs.current = [];

  useEffect(() => {
    svgRefs.current.forEach((svg) => {
      const paths = svg.querySelectorAll("path");
      gsap.set(paths, { stroke: "#fff" });

      paths.forEach((path, i) => {
        gsap.to(path, {
          stroke: "#000",
          duration: 1,
          ease: "power4.in",
          scrollTrigger: {
            trigger: svg,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const dashIndex = Math.floor(progress * paths.length);
              paths.forEach((dash, index) => {
                gsap.set(dash, {
                  stroke: index <= dashIndex ? "#000" : "#fff",
                });
              });
            },
          },
        });
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !svgRefs.current.includes(el)) {
      svgRefs.current.push(el);
    }
  };

  const RotateImage = ({
    src,
    alt,
    initialRotate,
    finalRotate,
    className,
    style,
    Translates,
  }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true , amount:0.8 });

    return (
      <motion.div
        ref={ref}
        initial={{ rotate: initialRotate, ...Translates }}
        animate={inView ? { rotate: finalRotate, ...Translates } : {}}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`${className}`}
        style={style}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 780px) calc(20vw - 10px), calc(30vw - 16px)"/>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#EAE2B7] relative flex flex-col w-screen max-w-full items-center justify-center gap-8 p-6">
      <div className=" w-[65%]  absolute top-[10%] right-0 aspect-square">
        <Image src="/images/chakra.png" alt="img" fill sizes="65vw" />
      </div>
      <div className=" w-[65%]  absolute top-[43%] left-0 aspect-square">
        <Image src="/images/chakra_left.png" alt="img" fill sizes="65vw" />
      </div>
      <div className=" w-[65%]  absolute bottom-[10%] right-0 aspect-square">
        <Image src="/images/chakra.png" alt="img" fill sizes="65vw" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start gap-16 w-full px-4 md:px-10">
        <div className="w-full md:w-[40%] mb-8 md:mb-0 self-start">
          <h1 className="text-[#2C2C2C] text-start font-PlayfairDisplay-Medium text-xl font-medium md:text-5xl mt-2 w-full">
            India has a recorded history of more than{" "}
            <span className="block text-center">5,000 years</span>
          </h1>
        </div>
        <motion.div
          initial={{ rotate: -15, y: "-18rem" }}
          whileInView={{ rotate: 0, y: "-18rem" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full md:w-[40%] aspect-[3/4] -translate-y-[18rem]"
        >
          <Image src="/images/hist1.png" alt="" fill className="object-cover" sizes="(min-width: 780px) calc(40vw - 51px), calc(100vw - 80px)" />
        </motion.div>
      </div>
      <div className="relative flex items-center justify-around w-full">
        <svg
          className="absolute top-[77%] right-[5%] rotate-45 w-full h-full"
          ref={addToRefs}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          {[...Array(50)].map((_, i) => (
            <path
              key={i}
              d={`M${i * 2} 45 H${i * 2 + 1}`}
              fill="transparent"
              stroke="#fff"
              strokeWidth="0.5"
            />
          ))}
        </svg>
        <div className="relative flex flex-col items-start justify-center w-1/2 md:w-[30%]">
          <div className="absolute translate-x-[54%] -rotate-6 top-0 translate-y-[80%] z-50">
            <h1 className="text-3xl font-Raleway-Bold font-semibold text-[#2C2C2C]">
              <span className="text-white">Ancient Yog</span>a & Vedas
            </h1>
          </div>
          <RotateImage
            src="/images/hist2.png"
            alt=""
            initialRotate={0}
            finalRotate={-2}
            Translates={{ x: 0, y: 0 }}
            className="relative aspect-[1/1] w-full z-10"
          />
          {/* <motion.div initial={{ rotate:-7 }} whileInView={{rotate:0}} className="relative aspect-[1/1] w-full z-10">
            <Image src="/images/hist2.png" alt="" fill />
          </motion.div> */}
          <h1 className="text-[#888888] text-xl font-PlayfairDisplay-Regular -rotate-[7deg] translate-x-[18%] -translate-y-[45.5%]">
            1000BCE - 500BCE
          </h1>
        </div>
        <p className="font-Raleway-Regular text-lg text-[#2C2C2C] basis-[25%] pb-10 self-end">
          Ancient Indian scientists, including Gautama Buddha, revolutionized
          mathematics, astronomy, and medicine, leaving a lasting impact on
          global knowledge.
        </p>
      </div>
      <div className="relative w-full py-32 flex items-center justify-end">
        <svg
          className="absolute w-[60%] top-[90%] left-[30%] rotate-[130deg] h-full"
          ref={addToRefs}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          {[...Array(50)].map((_, i) => (
            <path
              key={i}
              d={`M${i * 2} 95 H${i * 2 + 1}`}
              fill="transparent"
              stroke="#fff"
              strokeWidth="0.5"
            />
          ))}
        </svg>
        <div className="relative w-[60%] md:w-[40%] flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-start justify-center w-1/2 md:w-[50%]">
            <h1 className="text-[#888888] font-PlayfairDisplay-Regular -rotate-[2deg] z-30">
              St. Gautam Buddha
            </h1>
            <RotateImage
              src="/images/hist3.png"
              alt=""
              initialRotate={2}
              finalRotate={-1}
              Translates={{ x: 0, y: 0 }}
              className="relative aspect-[3/4] w-full z-10"
            />
            {/* <div className="relative aspect-[3/4] w-full z-10">
              <Image src="/images/hist3.png" alt="" fill />
            </div> */}
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 md:w-[50%]">
            <RotateImage
              src="/images/hist4.png"
              alt=""
              initialRotate={-2}
              finalRotate={0}
              Translates={{ x: "-25%", y: "25%" }}
              className="relative aspect-[3/4] w-full z-20 -translate-x-1/4 translate-y-1/4"
            />
            {/* <div className="relative aspect-[3/4] w-full z-20 -translate-x-1/4 translate-y-1/4">
              <Image src="/images/hist4.png" alt="" fill />
            </div> */}
            <h1 className="text-[#888888] font-PlayfairDisplay-Regular rotate-6 translate-x-[2.5rem] translate-y-[4.5rem] z-30">
              Sh. Aryabhata
            </h1>
          </div>
        </div>
      </div>
      <div className="relative w-full py-32 pl-1 flex items-center justify-start">
        <svg
          className="absolute w-full h-full top-[80%] right-[10%] rotate-45 "
          ref={addToRefs}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          {[...Array(40)].map((_, i) => (
            <path
              key={i}
              d={`M${i * 2} 45 H${i * 2 + 1}`}
              fill="transparent"
              stroke="#fff"
              strokeWidth="0.5"
            />
          ))}
        </svg>
        <div className="relative w-[60%] md:w-[40%] flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-start justify-center w-1/2 md:w-[50%]">
            <h1 className="text-[#888888] font-PlayfairDisplay-Regular rotate-[4deg] z-30 self-center">
              Chhatrapati Shivaji Maharaj
            </h1>
            <RotateImage
              src="/images/hist5.png"
              alt=""
              initialRotate={-7}
              finalRotate={0}
              Translates={{ x: 0, y: 0 }}
              className="relative aspect-[3/4] w-full z-10"
            />
            {/* <div className="relative aspect-[3/4] w-full z-10">
              <Image src="/images/hist5.png" alt="" fill />
            </div> */}
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 md:w-[50%]">
            <RotateImage
              src="/images/hist6.png"
              alt=""
              initialRotate={3}
              finalRotate={0}
              Translates={{ x: "-25%", y: "25%" }}
              className="relative aspect-[3/4] w-full z-20 -translate-x-1/4 translate-y-1/4"
            />
            {/* <div className="relative aspect-[3/4] w-full z-20 -translate-x-1/4 translate-y-1/4">
              <Image src="/images/hist6.png" alt="" fill />
            </div> */}
            <h1 className="text-[#888888] font-PlayfairDisplay-Regular -rotate-[5deg] translate-y-[4rem] z-30 self-center">
              Emperor Akbar
            </h1>
          </div>
        </div>
      </div>
      <div className="relative w-full py-[11rem] pr-10 flex items-center justify-end">
        <div className="relative w-[60%] md:w-[45%] flex flex-wrap md:flex-nowrap">
          <div className="absolute translate-x-[2%] -rotate-6 left-0 bottom-0 translate-y-[150%] z-50">
            <h1 className="text-2xl md:text-3xl font-Raleway-Bold font-semibold text-white">
              <span className="text-[#2C2C2C]">Great leaders </span>in 20th
              century
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 md:w-[50%]">
            <RotateImage
              src="/images/hist7.png"
              alt=""
              initialRotate={3}
              finalRotate={0}
              Translates={{ x: 0, y: 0 }}
              className="relative aspect-[3/4] w-full z-10"
            />
            {/* <div className="relative aspect-[3/4] w-full z-10">
              <Image src="/images/hist7.png" alt="" fill />
            </div> */}
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 md:w-[50%]">
            <RotateImage
              src="/images/hist8.png"
              alt=""
              initialRotate={-3}
              finalRotate={0}
              Translates={{ x: "-25%", y: "25%" }}
              className="relative aspect-[3/4] w-full z-20 -translate-x-1/4 translate-y-1/4"
            />
            {/* <div className="relative aspect-[3/4] w-full z-20 -translate-x-1/4 translate-y-1/4">
              <Image src="/images/hist8.png" alt="" fill />
            </div> */}
          </div>
        </div>
        <svg
          className="absolute w-[50%] h-full top-[70%] left-[35%] rotate-[130deg]"
          ref={addToRefs}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          {[...Array(40)].map((_, i) => (
            <path
              key={i}
              d={`M${i * 2} 45 H${i * 2 + 1}`}
              fill="transparent"
              stroke="#fff"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>
      <div className="w-full flex items-center max-h-[100vh] h-[90vh] justify-center">
        <div className=" bg-white h-[15rem] w-[17rem] border-8 border-gray-300 flex items-center justify-center p-4 translate-y-[35%] ">
          <h1 className="text-4xl text-center font-medium text-[#F77F00] font-PlayfairDisplay-Medium">
            and this doesn’t End
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;