"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Trip_Slider = () => {
  return (
    <div className={` w-full z-[100] transition-opacity duration-500`}>
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-full rounded-full border-none p-1"
    >
      <Tab setPosition={setPosition}>Two days</Tab>
      <Tab setPosition={setPosition}>Road Trips</Tab>
      <Tab setPosition={setPosition}>Pan India</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative focus:font-semibold focus:text-[#2C2C2C] transition-all z-10 block cursor-pointer px-3 py-1.5 text-[0.65rem] uppercase text-[#888888] laptop:px-5 laptop:py-3 mbSmall:text-base"
      tabIndex={0}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-[0.15rem] bg-[#D62828] mbSmall:h-1 bottom-2"
    />
  );
};
