import AboutUs from "@/components/AboutUs/AboutUs";
import Hero from "@/components/Hero/Hero";
import OurHistory from "@/components/OurHistory/OurHistory";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col max-w-screen">
       <Hero />
       <AboutUs />
       <OurHistory />
    </main>
  );
}
