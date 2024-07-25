// "use client"
// import { useState, useEffect } from "react";
// import Loader from "@/components/Loader/Loader";
// import AboutUs from "@/components/AboutUs/AboutUs";
// import ExpandingCards from "@/components/Carousel/expanding_cards";
// import ExploreIndia from "@/components/ExploreIndia/exploreIndia";
// import Footer from "@/components/Footer/footer";
// import OurHistory from "@/components/OurHistory/OurHistory";
// import ZoomingImage from "@/components/ZoomingImage/ZoomingImage";

// export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(()=>{
//     window.scrollTo(0,0);
//   },[])

//   return (
//     <main className="flex flex-col max-w-screen">
//       {loading ? (
//         <Loader onLoaded={() => setLoading(false)} />
//       ) : (
//         <>
//           <ZoomingImage /> 
//          <AboutUs />  
//           <OurHistory />
//           <ExpandingCards />
//           <ExploreIndia />
//           <Footer />
//         </>
//       )}
//     </main>
//   );
// }




// for loading one

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <main className="flex flex-col max-w-screen">
      {loading ? (
        <Loader onLoaded={handleLoaderComplete} />
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
