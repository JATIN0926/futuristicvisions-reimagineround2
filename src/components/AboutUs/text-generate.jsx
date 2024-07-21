"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView, useScroll, useTransform } from "framer-motion";

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const TextGenerateEffect = ({ words, className }) => {
  const scopeRef = useRef(null);
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  const { scrollYProgress } = useScroll({
    target: scopeRef,
    offset: ["start end", "end start"]
  });

  const inView = useInView(scopeRef, { once: true, margin: "0px 0px -50% 0px" });
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  useEffect(() => {
    if (inView) {
      animate(
        scopeRef.current.querySelectorAll('span'),
        { opacity: 1 },
        { duration: 0.3, delay: stagger(0.1) }
      );
    }
  }, [inView, animate]);

  const renderWords = () => (
    <motion.div ref={scopeRef} style={{ opacity }}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="dark:text-black text-white opacity-0"
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-black text-white text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
