"use client";

import { createContext, useContext, useState } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isZoomingAnimationComplete, setZoomingAnimationComplete] =
    useState(false);

  return (
    <AnimationContext.Provider
      value={{ isZoomingAnimationComplete, setZoomingAnimationComplete }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);
