"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import "./hero.css"; // Import the CSS file
import { useAnimationContext } from "../../context/AnimationContext.js";
import HeroNav from "../HeroNav/HeroNav";

const Hero = () => {
  const { isZoomingAnimationComplete } = useAnimationContext();
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
    let interval;
    if (isZoomingAnimationComplete) {
      interval = setInterval(() => {
        handleSelect((currentIndex + 1) % videos.length);
      }, timeAutoNext);
    }

    return () => clearInterval(interval);
  }, [currentIndex, isZoomingAnimationComplete]); // Reset interval when currentIndex or isZoomingAnimationComplete changes

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

  useEffect(() => {
    // Set initial opacity of content to 0
    gsap.set(".carousel .list .content", { opacity: 0 });

    // Pause all videos initially
    const videoElements = document.querySelectorAll(".carousel video");
    videoElements.forEach(video => {
      video.pause();
      video.currentTime = 0; // Ensure video is at the first frame
    });

    if (isZoomingAnimationComplete) {
      // Animate text in the center of each slide
      gsap.fromTo(
        ".carousel .content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
      );

      // Play the current video after the animation completes
      videoElements[currentIndex].play();
    }
  }, [isZoomingAnimationComplete, currentIndex]);

  useEffect(() => {
    if (!isZoomingAnimationComplete) return;

    const videoElements = document.querySelectorAll(".carousel video");
    const currentVideo = videoElements[currentIndex];

    if (currentIndex === 0) {
      currentVideo.play();
    } else {
      currentVideo.play();
      setTimeout(() => {
        currentVideo.play();
      }, 100); // Adding a slight delay to ensure smooth playback transition
    }
  }, [currentIndex, isZoomingAnimationComplete]);
  return (
    <div className="carousel">
      <HeroNav />
      <div className="list relative">
        {videos.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? "active" : ""} ${index === nextIndex ? "entering" : ""}`}
            ref={(el) => (itemsRef.current[index] = el)}
          >
            <div className={`overlay ${index === nextIndex ? "entering" : ""}`}></div>
            <video
              src={item.src}
              width="100%"
              height="100%"
              className="object-cover"
              muted
              autoPlay={false}
              playsInline
            ></video>
            <div className="content z-[3]">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="flex items-center justify-center gap-2">
                  <hr className=" w-[1.6rem] mbXSmall:w-[3rem] mbSmall:w-[4rem] mbMedium:w-[5rem] border-[1px] border-solid border-white" />
                  <p className=" text-xs mbXSmall:text-sm mbSmall:text-lg laptop:text-xl font-Raleway-Regular">Experience Diversity of India</p>
                  <hr className="w-[1.6rem] mbXSmall:w-[3rem] mbSmall:w-[4rem] mbMedium:w-[5rem] border-[1px] border-solid border-white" />
                </div>
                <h1 className=" text-3xl mbXSmall:text-4xl mbSmall:text-5xl mbMedium:text-6xl laptop:text-7xl font-semibold font-PlayfairDisplay-Bold">{item.title}</h1>
                <div className="relative w-[50%] mbXSmall:w-[40%] mbMedium:w-[30%] h-[3rem] mbSmall:h-[6rem]">
                  <Image src="/images/Flourish.svg" alt="img" fill className="object-contain" />
                </div>
              </div>
              <p className="font-Raleway-Medium absolute hidden mbSmall:block -bottom-[65%] -left-[8%]">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail  flex-row mbSmall:flex-col bottom-[10px] right-[-63%]  mbXSmall:right-[-30%] mbSmall:-right-[7%] mbMedium:-right-[5%] gap-[10px] mbXSmall:gap-[15px] laptop:gap-[20px]">
        {videos.map((item, index) => (
          <div
            key={index}
            className={`item w-[13%] mbXSmall:w-[15%] mbSmall:w-[47%] mbMedium:w-1/2 h-[4rem] mbSmall:h-[5rem] mbMedium:h-[6rem] ${index === currentIndex ? "active border-2 border-[#DAC374] rounded-[20px] scale-110" : ""}`}
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
