"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import TextRevealByWord from "./textreveal";
import TextGenerateEffect from "./text-generate";
import { Navbar } from "../Navbar/Navbar";

const AboutUs = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const aboutUsRef = useRef(null);

  const handleScroll = () => {
    if (aboutUsRef.current) {
      const { top, height } = aboutUsRef.current.getBoundingClientRect();
      const halfwayPoint = top + height / 2;
      setIsNavbarVisible(halfwayPoint < window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={aboutUsRef} className=" w-screen max-w-full ">
      <Navbar isVisible={isNavbarVisible} />
      <div className="flex flex-col w-screen max-w-full  bg-white h-auto mb-[20rem] ">
        <div className=" ml-[2rem] flex flex-row justify-center mt-[5rem] mb-0 items-center ">
          <div className=" w-[3.5rem] mbXSmall:w-[6rem] mbSmall:w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] mr-[-1.2rem]"></div>
          <p className="text-[#003049] text-base mbXSmall:text-lg mbSmall:text-xl !m-0 p-8  font-Raleway-Regular">
            Diversity in India
          </p>
          <div className=" w-[3.5rem] mbXSmall:w-[6rem] mbSmall:w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] ml-[-1.2rem]"></div>
        </div>
        <div className=" flex flex-col justify-center items-center mt-0 ">
          <div className="flex items-center mbMedium:items-end justify-center pl-[0.5rem] mbSmall:pl-[5rem] pb-[0.5rem] mbMedium:pb-[1rem] w-full">
            <TextRevealByWord
              className="text-black text-2xl mbXSmall:text-[2rem] mbSmall:text-[3rem] mbMedium:text-7xl laptop:text-8xl !m-0 font-PlayfairDisplay-Medium"
              text={"Discover India,"}
            />

            <span className="flex h-[2rem] w-[2rem] mbXSmall:h-[3rem]  mbXSmall:w-[3rem] mbSmall:h-[5rem] mbSmall:w-[5rem] mr-0 mbSmall:mr-20">
              {" "}
              <Image
                src="/images/aboutCircle1.png"
                width={120}
                height={60}
                className="rounded-full object-cover"
              />{" "}
            </span>
          </div>
          <TextRevealByWord
            className="text-black text-2xl mbXSmall:text-[2rem] mbSmall:text-[3rem] mbMedium:text-7xl laptop:text-8xl font-PlayfairDisplay-Medium   pb-[0.5rem] mbMedium:pb-[1rem] "
            text={"a country of vibrant"}
          />
          <div className="flex items-center mbMedium:items-end justify-center pb-[0.5rem] mbMedium:pb-[1rem]">
            <span className="flex h-[2rem] w-[2rem]  mbXSmall:h-[3rem]  mbXSmall:w-[3rem] mbSmall:h-[5rem] mbSmall:w-[5rem] mr-0 mbMedium:mr-[1rem]">
              {" "}
              <Image
                src="/images/aboutCircle2.png"
                width={120}
                height={60}
                className="rounded-full object-cover"
              />{" "}
            </span>
            <TextRevealByWord
              className="text-black text-2xl mbXSmall:text-[2rem] mbSmall:text-[3rem] mbMedium:text-7xl laptop:text-8xl !m-0  font-PlayfairDisplay-Medium "
              text={"diversity."}
            />
          </div>
        </div>
        <div className="flex items-center mt-0 mbSmall:mt-[1rem] mbMedium:mt-[2rem] ml-[1.5rem] mbXSmall:ml-[3rem] mbMedium:ml-[2rem] justify-center">
          <Image
            src="/images/Aboutdesign.png"
            width={240}
            height={120}
            className=" w-[6rem] h-[2rem] mbXSmall:w-[8rem] mbXSmall:h-[3rem] mbSmall:w-[10rem] mbSmall:h-[3.6rem] mbMedium:w-[15rem] mbMedium:h-[4.3rem]"
            alt="img"
          />{" "}
        </div>
        <div className="flex flex-col w-[65vw] mbXSmall:w-[55vw] mbMedium:w-[50vw] laptop:w-[40vw] text-2xl mt-[10vmin] items-center mbSmall:items-start ml-[15vmin] mb-[10vmin]">
          <TextGenerateEffect
            className=" font-Raleway-Regular text-[gray]"
            words={
              "Welcome to Incredible India, a land where diversity meets harmony. From the golden sands of the Thar Desert to the snow-capped peaks of the Himalayas, India's landscapes are as varied as its rich cultural tapestry. Our journey will take you through lush forests, serene beaches, and historic wonders, each telling its own unique story. Embrace the colors, sounds, and traditions that make India truly incredible."
            }
          />
          {/* <p className=' font-Raleway-Regular text-[gray]'> Welcome to Incredible India, a land where diversity meets harmony. From the golden sands of the Thar Desert to the snow-capped peaks of the Himalayas, India's landscapes are as varied as its rich cultural tapestry. Our journey will take you through lush forests, serene beaches, and historic wonders, each telling its own unique story. Embrace the colors, sounds, and traditions that make India truly incredible.</p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
