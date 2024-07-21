"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative h-auto w-max z-0 ${className}`}>
      <div className="relative mx-auto flex max-w-4xl items-center bg-transparent px-[1rem]">
        <p className="flex flex-wrap p-0 text-white/20 dark:text-black/20 text-7xl font-PlayfairDisplay-Medium">
          {words.map((word, i) => {
            const start = (i) / words.length;
            const end =  start+1  / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [1, 0]);
  const backgroundOpacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span
        style={{ opacity: backgroundOpacity }}
        className="absolute left-0 text-black"
      >
        {children}
      </motion.span>
      <motion.span style={{ opacity }} className="text-white-200">
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
