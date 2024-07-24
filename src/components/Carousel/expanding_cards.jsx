"use client";
import { useEffect, useState } from "react";
import { Trip_Slider } from "./Trip_Slider";

const panelsData = [
  {
    imageUrl: "/images/varanasi.png",
    title: "Varanasi",
    content:
      "A sacred Hindu city in northern India. Located on the Ganges River in Uttar Pradesh, it is flanked by the Varuna River to the north and the Asi River to the south.",
  },
  {
    imageUrl: "/images/Mussorie.png",
    title: "Mussorie",
    content:
      'A picturesque hill station in the Indian state of Uttarakhand, Mussoorie is known as the "Queen of the Hills." Located in the Garhwal Himalayan range, it offers stunning views of the Doon Valley and Shivalik ranges.',
  },
  {
    imageUrl: "/images/ooty.png",
    title: "Ooty",
    content:
      "Officially known as Udhagamandalam, Ooty is a popular hill station in Tamil Nadu. Nestled in the Nilgiri Hills, it is renowned for its tea gardens, serene lakes, and the scenic Nilgiri Mountain Railway.",
  },
  {
    imageUrl: "/images/jammu.png",
    title: "Jammu",
    content:
      "A major city in the northern Indian union territory of Jammu and Kashmir, Jammu is situated on the banks of the Tawi River. It is known for its temples, particularly the Vaishno Devi shrine, a significant Hindu pilgrimage site.",
  },
];

const MobilePanelsData = [
  {
    imageUrl: "/images/varanasi.png",
    title: "Varanasi",
    content:
      "A sacred Hindu city in northern India. Located on the Ganges River in Uttar Pradesh, it is flanked by the Varuna River to the north and the Asi River to the south.",
  },
  {
    imageUrl: "/images/Mussorie.png",
    title: "Mussorie",
    content:
      'A picturesque hill station in the Indian state of Uttarakhand, Mussoorie is known as the "Queen of the Hills." Located in the Garhwal Himalayan range, it offers stunning views of the Doon Valley and Shivalik ranges.',
  },
  {
    imageUrl: "/images/ooty.png",
    title: "Ooty",
    content:
      "Officially known as Udhagamandalam, Ooty is a popular hill station in Tamil Nadu. Nestled in the Nilgiri Hills, it is renowned for its tea gardens, serene lakes, and the scenic Nilgiri Mountain Railway.",
  },
];

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState(window.innerWidth < 600 ? MobilePanelsData : panelsData);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setData(MobilePanelsData);
      } else {
        setData(panelsData);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" w-screen max-w-full flex flex-col justify-center z-[10] items-center h-auto py-[10rem] px-5 mbSmall:px-10 ">
      <div className="flex justify-between flex-row h-[auto] w-screen max-w-full">
        <h1 className="text-black font-PlayfairDisplay-Bold text-[1.35rem] mbXSmall:text-2xl mbSmall:text-3xl mbMedium:text-4xl laptop:text-5xl">
          Book Popular Trips
        </h1>
        {/* <div className="flex space-x-4 mr-5 mt-1">
          <button className=" shadow-[inset_0_0_0_2px_#616467] h-5 w-5 mbSmall:h-12 mbSmall:w-12 px-4 py-4 rounded-full tracking-widest bg-fit hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 bg-[url('/icons/arrowleft.svg')] hover:bg-[url('/icons/arrowleftWhite.svg')]"></button>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-black h-8 w-8 mbSmall:h-12 mbSmall:w-12 px-6 py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 bg-[url('/icons/arrowright.svg')]"></button>
        </div> */}
      </div>
      <div>
        <div className="relative flex items-start justify-start w-screen max-w-full text-black py-[0] mbMedium:py-1 pl-5">
          <Trip_Slider />
        </div>
      </div>
      <div className="flex w-full">
        {data.map((panel, index) => (
          <div
            key={index}
            className={`bg-cover bg-center flex items-center mbSmall:items-end justify-center flex-1 m-1 mbXSmall:m-2 rounded-l relative h-[31rem] fiter-brightness-10 transition-all duration-1000 cursor-pointer ${
              activeIndex === index ? "flex-[3]" : " flex-[0] mbXSmall:flex-[0.2] mbMedium:flex-[0.4]"
            }`}
            style={{ backgroundImage: `url(${panel.imageUrl})` }}
            onClick={() => handlePanelClick(index)}
          >
            {" "}
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div
  className={`align-middle flex flex-col items-center z-[5] justify-center ${
    activeIndex === index
      ? "opacity-100 transition-opacity duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] delay-200"
      : "opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)]"
  }`}
>
  <h3
    className={`flex align-middle text-white text-lg mbXSmall:text-xl mbSmall:text-2xl mbMedium:text-3xl laptop:text-4xl tbPortrait:text-5xl font-PlayfairDisplay-Bold ${
      activeIndex === index
        ? "opacity-100 transition-opacity duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] delay-200"
        : "opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)]"
    }`}
  >
    {panel.title}
  </h3>
  <p
    className={`flex p-[0.1rem] mbXSmall:p-[0.5rem] mbSmall:p-[1rem] mbMedium:p-[2rem] laptop:p-[3rem] pt-[1rem] text-center text-white text-[0.45rem] mbXSmall:text-[0.6rem] mbSmall:text-[0.65rem] mbMedium:text-xs laptop:text-sm tbPortrait:text-lg font-Raleway-Regular ${
      activeIndex === index
        ? "opacity-100 transition-opacity duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] delay-500"
        : "opacity-0 transition-opacity duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)]"
    }`}
  >
    {panel.content}
  </p>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
