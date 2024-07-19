"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import "./hero.css"; // Import the CSS file

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const itemsRef = useRef([]);
  const thumbnailsRef = useRef([]);
  const timeAutoNext = 5000; // 5 seconds

  const videos = [
    { src: "/videos/mountain.mp4", title: "Mountains", location: "Nanda Devi, Karnataka" },
    { src: "/videos/wildLife.mp4", title: "Wildlife", location: "Jim Corbett, Uttrakhand" },
    { src: "/videos/yoga.mp4", title: "Yoga and Culture", location: "Rishikesh, Haridwar" },
    { src: "/videos/cuisine.mp4", title: "Diverse cuisine", location: "New Delhi, Delhi" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleSelect((currentIndex + 1) % videos.length);
    }, timeAutoNext);

    return () => clearInterval(interval);
  }, [currentIndex]); // Reset interval when currentIndex changes

  const handleSelect = (index) => {
    if (index === currentIndex) return;

    itemsRef.current[index].classList.add("fade-in");
    itemsRef.current[currentIndex].classList.add("fade-out");
    setNextIndex(index);
    setTimeout(() => {
      setCurrentIndex(index);
      setNextIndex(null);
      itemsRef.current[index].classList.remove("fade-in");
      itemsRef.current[currentIndex].classList.remove("fade-out");
    }, 1000); // Match this duration with the CSS animation duration
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, videos.length);
    thumbnailsRef.current = thumbnailsRef.current.slice(0, videos.length);
  }, [videos]);

  return (
    <div className="carousel">
      <div className="list relative">
        {videos.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""} ${index === nextIndex ? "entering" : ""}`}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className={`overlay ${index === nextIndex ? "entering" : ""}`}></div>
            <video src={item.src} width="100%" height="100%" className="object-cover" autoPlay muted></video>
            <div className="content z-[3]">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="flex items-center justify-center gap-2">
                  <hr />
                  <p className="text-xl font-Raleway-Regular">Experience Diversity of India</p>
                  <hr />
                </div>
                <h1 className="text-7xl font-semibold font-PlayfairDisplay-Bold">{item.title}</h1>
                <div className="relative w-[30%] h-[6rem]">
                  <Image src="/images/Flourish.svg" alt="img" fill className="object-contain" />
                </div>
              </div>
              <p className="font-Raleway-Medium absolute -bottom-[65%] -left-[8%]">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {videos.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active border-2 border-[#DAC374] rounded-[20px] scale-110" : ""}`}
            ref={(el) => (thumbnailsRef.current[index] = el)}
            onClick={() => handleSelect(index)}
          >
            <video src={item.src} width="100%" height="100%" className="object-cover" muted></video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
