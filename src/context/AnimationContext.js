"use client"
import { createContext, useContext, useState } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isZoomingAnimationComplete, setZoomingAnimationComplete] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true); // Track initial load state

  return (
    <AnimationContext.Provider
      value={{ isZoomingAnimationComplete, setZoomingAnimationComplete, isInitialLoad, setIsInitialLoad }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);
