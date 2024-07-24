import Image from 'next/image'
import React from 'react'
import { InfiniteMovingCards } from './ExploreCards';
import TextRevealByWord from '../AboutUs/textreveal';
import Link from 'next/link';
const quotes = [
    { imageUrl: "/images/varanasi.png", name: "Person A"},
    { imageUrl: "/images/jammu.png", name: "Person B" },
    { imageUrl: "/images/footer2.png", name: "Person B" },
    { imageUrl: "/images/experienceFood.png", name: "Person B" },
    { imageUrl: "/images/footer5.png", name: "Person B" },
    { imageUrl: "/images/experiencePunjab.png", name: "Person B" },
  ];

const ExploreIndia = () => {
    return (
      
      <div className='flex flex-col items-center justify-center w-screen max-w-full h-auto flex-nowrap overflow-hidden py-10 pb-20'>
      <div className=' ml-[2rem] flex flex-row justify-center mt-[5rem] mb-0 items-center '>
          <div className=' w-[6rem] mbXSmall:w-[8rem] mbSmall:w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] mr-[-1.2rem] mbSmall:mr-[-1.2rem]'></div>
          <p className='text-[#003049] text-[0.5rem] mbXSmall:text-[0.9rem] mbSmall:text-xl !m-0 p-8  font-Raleway-Regular'>Explore India</p>
          <div className=' w-[6rem] mbXSmall:w-[8rem] mbSmall:w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] ml-[-1.2rem]'></div> 
      </div>
      <TextRevealByWord className='text-black text-[0.7rem] mbXSmall:text-base mbSmall:text-[1.55rem] mbMedium:text-[2.1rem] laptop:text-4xl tbPortrait:text-5xl text-center flex-nowrap pb-5 mbXSmall:pb-12 mbSmall:pb-16 mbMedium:pb-24 !m-0 font-PlayfairDisplay-Bold' text={" Experience India's Culture, Adventure, and Nature"}/>
     
      <InfiniteMovingCards  items={quotes} />
      <Link href="/page2">
      <button className=" px-3 py-2 mbXSmall:px-5  mbXSmall:py-3 rounded-[0.2rem] border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 mb-4">
        Explore in 3D
      </button>
      </Link>
       </div>
  )
}

export default ExploreIndia;

