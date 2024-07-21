import AboutUs from "@/components/AboutUs/AboutUs";
import ExpandingCards from "@/components/Carousel/expanding_cards";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import OurHistory from "@/components/OurHistory/OurHistory";
import {Rotating3d} from "@/components/Rotating3d/Rotating3d";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen">
       <Hero />
       {/* <Navbar /> */}
       <AboutUs />
       <OurHistory />
       <Rotating3d />
       <ExpandingCards />
       <Footer />
    </main>
  );
}
