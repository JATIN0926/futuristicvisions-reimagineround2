"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";
import AboutUs from "@/components/AboutUs/AboutUs";
import ExpandingCards from "@/components/Carousel/expanding_cards";
import ExploreIndia from "@/components/ExploreIndia/exploreIndia";
import Footer from "@/components/Footer/footer";
import OurHistory from "@/components/OurHistory/OurHistory";
import ZoomingImage from "@/components/ZoomingImage/ZoomingImage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
    setTimeout(() => setIsLoaded(true), 500); // Delay to allow opacity transition
  };

  
  return (
    <main className="flex flex-col max-w-screen">
      {loading ? (
        <Loader onLoaded={handleLoaderComplete} />
      ) : (
        <div
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <ZoomingImage />
          <AboutUs />
          <OurHistory />
          <ExpandingCards />
          <ExploreIndia />
          <Footer />
        </div>
      )}
    </main>
  );
}
