"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initialState: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animateState: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exitState: {
    opacity: 0,
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

const PageTransition = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={variants}
        className=" relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
