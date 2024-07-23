import Image from 'next/image'
import React from 'react'
import { InfiniteMovingCards } from './ExploreCards';
import TextRevealByWord from '../AboutUs/textreveal';
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
      
      <div className='flex flex-col items-center justify-center w-auto h-auto flex-nowrap overflow-hidden'>
      <div className=' ml-[2rem] flex flex-row justify-center mt-[5rem] mb-0 items-center '>
          <div className=' w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] mr-[-1.2rem]'></div>
          <p className='text-[#003049] text-xl !m-0 p-8  font-Raleway-Regular'>Explore India</p>
          <div className=' w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] ml-[-1.2rem]'></div> 
      </div>
      <TextRevealByWord className='text-black text-5xl text-center flex-nowrap  pb-24 !m-0 font-PlayfairDisplay-Bold' text={" Experience India's Culture, Adventure, and Nature"}/>
     
      <InfiniteMovingCards  items={quotes} />
      <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200 mb-4">
        Explore in 3D
      </button>
       </div>
  )
}

export default ExploreIndia;

