"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [isZoomingAnimationComplete, setZoomingAnimationComplete] = useState(false);
  const [isLoaderShown, setLoaderShown] = useState(true);

  useEffect(() => {
    // Ensure loader is shown on the first visit or refresh on the homepage
    if (window.location.pathname !== "/") {
      setLoaderShown(false);
    }
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        isZoomingAnimationComplete,
        setZoomingAnimationComplete,
        isLoaderShown,
        setLoaderShown,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => useContext(AnimationContext);
