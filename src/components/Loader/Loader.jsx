import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";

const textStages = [
  "Namaste",
  "Welcome to",
  { type: "image", src: "/images/logo.svg" },
];

const Loader = ({ onLoaded }) => {
  const [stage, setStage] = useState(0);
  const loadingLogoRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        // Start the text animation sequence after the timeline completes
        setStage(1);
        setTimeout(() => setStage(2), 1000);
        setTimeout(() => setStage(3), 2000);
        setTimeout(() => onLoaded(), 3000);
      },
    });

    // Animate left and right hands
    timeline.fromTo(
      "#left-hand",
      { x: "-100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
    timeline.fromTo(
      "#right-hand",
      { x: "100%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=1" // Start this animation at the same time as the left-hand animation
    );

    // Animate sparkle
    timeline.fromTo(
      "#sparkle",
      { y: "-100%", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    return () => timeline.kill();
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <motion.div className="flex flex-col items-center justify-center relative">
        <div className="relative flex flex-col items-center justify-center">
          <Image
            id="sparkle"
            src="/images/sparkle.svg"
            alt="sparkle"
            width={80}
            height={80}
            className="absolute -top-10"
          />
          <div className="flex items-center justify-center">
            <Image
              id="left-hand"
              src="/images/left_hand.svg"
              alt="left hand"
              width={80}
              height={80}
            />
            <Image
              id="right-hand"
              src="/images/right_hand.svg"
              alt="right hand"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className={`relative w-44 text-center ${stage===2?"h-[6rem]":" h-[2rem]"} overflow-hidden transition-all duration-500 origin-bottom`}>
          {textStages.map((item, index) => (
            <motion.div
              key={index}
              className="absolute w-full text-2xl font-sodo-sans flex justify-center items-center"
              initial={{ y: "100%", opacity: 1 }}
              animate={{
                y: stage === index ? 0 : stage > index ? "-100%" : "100%",
                opacity:
                  stage === index ? 1 : stage === 3 && index === 2 ? 0 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {typeof item === "string" ? (
                <h1 className="text-white font-bold">{item}</h1>
              ) : (
                stage === index && (
                  <div className="flex items-center justify-center gap-3">
                    <Image
                      src="/images/incredible.svg"
                      alt="img"
                      width={90}
                      height={120}
                      className=" aspect-square w-[7rem]"
                    />
                    <Image
                      src="/images/india.svg"
                      alt="img"
                      width={80}
                      height={80}
                       className=" aspect-square w-[4rem]"
                    />
                  </div>
                )
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;

// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import gsap from "gsap";

// const textStages = [
//   "Namaste",
//   "Welcome to",
//   { type: "image", src: "/images/logo.svg" },
// ];

// const Loader = ({ onLoaded, refs }) => {
//   const [stage, setStage] = useState(0);

//   useEffect(() => {
//     const timeline = gsap.timeline({
//       onComplete: () => {
//         setStage(1);
//         setTimeout(() => setStage(2), 1000);
//         setTimeout(() => setStage(3), 2000);
//         setTimeout(() => {
//           const incrediblePos = refs.current.incredible.getBoundingClientRect();
//           const indiaPos = refs.current.india.getBoundingClientRect();

//           gsap.to("#incredible-image", {
//             x: incrediblePos.left - window.innerWidth * 0.06,
//             y: incrediblePos.top - window.innerHeight * 0.1,
//             width: incrediblePos.width,
//             height: incrediblePos.height,
//             duration: 2,
//             ease: "power2.out",
//             onComplete: () => {
//               gsap.set("#incredible-image", { display: "none" });
//             },
//           });
//           gsap.to("#india-image", {
//             x: indiaPos.left - window.innerWidth * 0.14,
//             y: indiaPos.top - window.innerHeight * 0.1,
//             width: indiaPos.width,
//             height: indiaPos.height,
//             duration: 2,
//             ease: "power2.out",
//             onComplete: () => {
//               gsap.set("#india-image", { display: "none" });
//               setTimeout(() => onLoaded(), 1000);
//             },
//           });
//         }, 3000);
//       },
//     });

//     timeline.fromTo(
//       "#left-hand",
//       { x: "-100%", opacity: 0 },
//       { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
//     );
//     timeline.fromTo(
//       "#right-hand",
//       { x: "100%", opacity: 0 },
//       { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
//       "-=1"
//     );
//     timeline.fromTo(
//       "#sparkle",
//       { y: "-100%", opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
//     );

//     return () => timeline.kill();
//   }, [onLoaded, refs]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black">
//       <motion.div className="flex flex-col items-center justify-center relative">
//         <div className="relative flex flex-col items-center justify-center">
//           <Image
//             id="sparkle"
//             src="/images/sparkle.svg"
//             alt="sparkle"
//             width={80}
//             height={80}
//             className="absolute -top-10"
//           />
//           <div className="flex items-center justify-center">
//             <Image
//               id="left-hand"
//               src="/images/left_hand.svg"
//               alt="left hand"
//               width={80}
//               height={80}
//             />
//             <Image
//               id="right-hand"
//               src="/images/right_hand.svg"
//               alt="right hand"
//               width={80}
//               height={80}
//             />
//           </div>
//         </div>
//         <div
//           className={`relative w-44 text-center ${
//             stage === 2 ? "h-[6rem]" : " h-[2rem]"
//           } overflow-hidden transition-all duration-500 origin-bottom`}
//         >
//           {textStages.map((item, index) => (
//             <motion.div
//               key={index}
//               className="absolute w-full text-2xl font-sodo-sans flex justify-center items-center"
//               initial={{ y: "100%", opacity: 1 }}
//               animate={{
//                 y: stage === index ? 0 : stage > index ? "-100%" : "100%",
//                 opacity: stage === index ? 1 : 1, // Ensure the images stay visible
//               }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//             >
//               {typeof item === "string" ? (
//                 <h1 className="text-white font-bold">{item}</h1>
//               ) : (
//                 stage >= 2 && ( // Ensure images appear from stage 2 onwards
//                   <div className="flex items-center justify-center gap-3">
//                     <Image
//                       id="incredible-image"
//                       src="/images/incredible.svg"
//                       alt="img"
//                       width={90}
//                       height={120}
//                       className=" aspect-square w-[7rem]"
//                     />
//                     <Image
//                       id="india-image"
//                       src="/images/india.svg"
//                       alt="img"
//                       width={80}
//                       height={80}
//                       className=" aspect-square w-[4rem]"
//                     />
//                   </div>
//                 )
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Loader;
