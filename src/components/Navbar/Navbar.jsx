"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Nav.css"; // Import the custom CSS
import { Link } from "react-scroll";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { CustomLink } from "../CustomLink/CustomLink";

export const Navbar = ({ isVisible }) => {
  return (
    <div
      className={`fixed ${
        isVisible ? "top-0" : "top-12"
      } left-0 w-full p-4 z-[100] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
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
      className="relative mx-auto flex w-fit rounded-full border-2 border-black p-1 glassmorphic-bg"
    >
      <Tab setPosition={setPosition} to="about" offset={150}>
        Discover India
      </Tab>
      <Tab setPosition={setPosition} to="history" offset={-150}>
        History of India
      </Tab>
      <Tab setPosition={setPosition} to="trips" offset={150}>
        Plan Your Trip
      </Tab>
      <Tab setPosition={setPosition} to="/page2" isExternal>
        3D View
      </Tab>
      <Tab setPosition={setPosition} to="footer" offset={150}>
        Contact
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, to, isExternal = false }) => {
  const ref = useRef(null);
  const router = useRouter();

  if (isExternal) {
    return (
      <CustomLink href="/page2">
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
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
      </CustomLink>
    );
  }

  return (
    <Link to={to} spy={true} smooth={true} duration={500} offset={-150}>
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
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white md:px-5 md:py-3 md:text-base"
      >
        {children}
      </li>
    </Link>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-[#003049] md:h-12"
    />
  );
};
