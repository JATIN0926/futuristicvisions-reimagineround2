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
          document.querySelector(".disappearing-image").style.display = "none";
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


//for removing scrollTrigger

// "use client";
// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Hero from "@/components/Hero/Hero";
// import "./ZoomingImage.css";
// import { useAnimationContext } from "../../context/AnimationContext.js";
// import Image from "next/image";
// gsap.registerPlugin(ScrollTrigger);

// const ZoomingImage = () => {
//   const { setZoomingAnimationComplete } = useAnimationContext();

//   useEffect(() => {
//     const wrapper = document.querySelector(".wrapper");

//     // Create the timeline and scroll trigger
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         id: "image-zoom",
//         trigger: wrapper,
//         start: "top top",
//         end: "+=70%",
//         pin: true,
//         scrub: true,
//         markers: true,
//         onUpdate: (self) => {
//           if (self.progress > 0.05) {
//             document.querySelectorAll(".disappearing-image").forEach((img) => {
//               gsap.to(img, { opacity: 0, duration: 1 });
//             });
//           }
//         },
//         onLeave: () => {
//           // Reset styles when ScrollTrigger is killed
//           resetStyles(wrapper);
//         },
//         onLeaveBack: () => {
//           // Reset styles when ScrollTrigger is killed
//           resetStyles(wrapper);
//         },
//       },
//     });

//     tl.to(".image-container img", {
//       scale: 2,
//       z: 350,
//       transformOrigin: "center center",
//       ease: "power1.inOut",
//     })
//       .to(
//         ".section.hero",
//         {
//           scale: 1,
//           transformOrigin: "center center",
//           ease: "power1.inOut",
//         },
//         "<"
//       )
//       .to(".image-container", {
//         opacity: 0,
//         ease: "power1.inOut",
//         onComplete: () => {
//           document.querySelector(".image-container").style.display = "none";
//           document.querySelector(".disappearing-image").style.display = "none";
//           setZoomingAnimationComplete(true); // Set the animation complete state

//           // Kill the ScrollTrigger and reset styles
//           const scrollTrigger = ScrollTrigger.getById("image-zoom");
//           if (scrollTrigger) {
//             scrollTrigger.kill(true); // Pass true to revert the pinned element to its original state
//           }

//           // Reset styles to remove any extra space
//           resetStyles(wrapper);

//           // Ensure the user remains at the correct scroll position
//           const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
//           window.scrollTo({
//             top: wrapperTop,
//             behavior: "smooth",
//           });
//         },
//       });

//     return () => {
//       // Clear ScrollTrigger instances on component unmount
//       ScrollTrigger.getById("image-zoom")?.kill();
//     };
//   }, [setZoomingAnimationComplete]);

//   const resetStyles = (element) => {
//     element.style.marginTop = "0";
//     element.style.transform = "none"; // Resetting transform property
//     element.style.position = "relative";
//     element.style.top = "auto";
//     element.style.left = "auto";
//     element.style.right = "auto";
//     element.style.bottom = "auto";
//     element.style.width = "auto";
//     element.style.height = "auto";
//     gsap.set(element, { y: 0 }); // Ensure transformY is reset
//   };

//   return (
//     <div className="wrapper mb-[35rem]">
//       <Image
//         src="/images/incredible.svg"
//         alt="img"
//         width={30}
//         height={30}
//         className="disappearing-image absolute left-[6%] w-[25rem] aspect-square z-[200]"
//       />
//       <Image
//         src="/images/india.svg"
//         alt="img"
//         width={30}
//         height={30}
//         className="disappearing-image absolute right-[14%] bottom-[10%] w-[17rem] aspect-square z-[200]"
//       />
//       <div className="content">
//         <section className="section hero">
//           <Hero />
//         </section>
//       </div>
//       <div className="image-container">
//         <img src="/images/StartingCircle.png" alt="Top Image" className="img" />
//       </div>
//     </div>
//   );
// };

// export default ZoomingImage;




//  for loader one 

// import React, { useEffect, forwardRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Hero from "@/components/Hero/Hero";
// import "./ZoomingImage.css";
// import { useAnimationContext } from "../../context/AnimationContext.js";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const ZoomingImage = forwardRef(({ setZoomingAnimationComplete }, refs) => {
//   useEffect(() => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         id: "image-zoom",
//         trigger: ".wrapper",
//         start: "top top",
//         end: "+=70%",
//         pin: true,
//         scrub: true,
//         onUpdate: (self) => {
//           if (self.progress > 0.05) {
//             document.querySelectorAll(".disappearing-image").forEach((img) => {
//               gsap.to(img, { opacity: 0, duration: 1 });
//             });
//           }
//         },
//       },
//     });

//     tl.to(".image-container img", {
//       scale: 2,
//       z: 350,
//       transformOrigin: "center center",
//       ease: "power1.inOut",
//     })
//       .to(
//         ".section.hero",
//         {
//           scale: 1,
//           transformOrigin: "center center",
//           ease: "power1.inOut",
//         },
//         "<"
//       )
//       .to(".image-container", {
//         opacity: 0,
//         ease: "power1.inOut",
//       });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   useEffect(() => {
//     setZoomingAnimationComplete(true);
//   }, [setZoomingAnimationComplete]);

//   return (
//     <div className="wrapper">
//       <div className="image-container">
//         <Image
//           src="/images/your-zooming-image.jpg"
//           alt="Zooming"
//           layout="fill"
//           objectFit="cover"
//           className="zooming-image"
//         />
//         <Image
//           ref={(el) => (refs.current.incredible = el)}
//           src="/images/incredible.svg"
//           alt="Incredible"
//           width={90}
//           height={120}
//           className="disappearing-image"
//         />
//         <Image
//           ref={(el) => (refs.current.india = el)}
//           src="/images/india.svg"
//           alt="India"
//           width={80}
//           height={80}
//           className="disappearing-image"
//         />
//       </div>
//     </div>
//   );
// });

// ZoomingImage.displayName = "ZoomingImage";

// export default ZoomingImage;
