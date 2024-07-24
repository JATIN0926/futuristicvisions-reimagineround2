"use client"
import { useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";
import AboutUs from "@/components/AboutUs/AboutUs";
import ExpandingCards from "@/components/Carousel/expanding_cards";
import ExploreIndia from "@/components/ExploreIndia/exploreIndia";
import Footer from "@/components/Footer/footer";
import OurHistory from "@/components/OurHistory/OurHistory";
import ZoomingImage from "@/components/ZoomingImage/ZoomingImage";
import Sec3d from "@/components/Sec3d/Sec3d";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  return (
    <main className="flex flex-col max-w-screen">
      {loading ? (
        <Loader onLoaded={() => setLoading(false)} />
      ) : (
        <>
          <ZoomingImage /> 
         <AboutUs />  
          <OurHistory />
          <ExpandingCards />
          <ExploreIndia />
          <Footer />
        </>
      )}
    </main>
  );
}




// for loading one

// "use client";
// import { useState, useEffect, useRef } from "react";
// import Loader from "@/components/Loader/Loader";
// import AboutUs from "@/components/AboutUs/AboutUs";
// import ExpandingCards from "@/components/Carousel/expanding_cards";
// import { InfiniteMovingCards } from "@/components/ExploreIndia/ExploreCards";
// import ExploreIndia from "@/components/ExploreIndia/exploreIndia";
// import Footer from "@/components/Footer/footer";
// import Hero from "@/components/Hero/Hero";
// import { Navbar } from "@/components/Navbar/Navbar";
// import OurHistory from "@/components/OurHistory/OurHistory";
// import { Rotating3d } from "@/components/Rotating3d/Rotating3d";
// import ZoomingImage from "@/components/ZoomingImage/ZoomingImage";

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [zoomingAnimationComplete, setZoomingAnimationComplete] = useState(false);
//   const refs = useRef({ incredible: null, india: null });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleLoaded = () => {
//     setLoading(false);
//     setTimeout(() => {
//       setZoomingAnimationComplete(true);
//     }, 2000); // Ensure the opacity transition occurs after animations are complete
//   };

//   return (
//     <main className="flex flex-col max-w-screen">
//       {loading ? (
//         <Loader onLoaded={handleLoaded} refs={refs} />
//       ) : (
//         <>
//           <ZoomingImage ref={refs} setZoomingAnimationComplete={setZoomingAnimationComplete} />
//           {zoomingAnimationComplete && (
//             <>
//               <Navbar />
//               <AboutUs />
//               <OurHistory />
//               <ExpandingCards />
//               <ExploreIndia />
//               <Rotating3d />
//               <Footer />
//             </>
//           )}
//         </>
//       )}
//     </main>
//   );
// }
