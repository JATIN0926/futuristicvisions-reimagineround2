import Image from 'next/image'
import React from 'react'
import TextRevealByWord from './textreveal'
import TextGenerateEffect from './text-generate'

const AboutUs = () => {
  return (
    
    <div>
   
      <div className='flex flex-col w-100%  bg-white h-auto mb-[20rem] '>
      <div className=' ml-[2rem] flex flex-row justify-center mt-[5rem] mb-0 items-center '>
          <div className=' w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] mr-[-1.2rem]'></div>
          <p className='text-[#003049] text-xl !m-0 p-8  font-Raleway-Regular'>Diversity in India</p>
          <div className=' w-[10rem] h-[1rem] border-[#003049] border-t-2 mt-[1rem] ml-[-1.2rem]'></div> 
      </div>
      <div className=' flex flex-col justify-center items-center mt-0 '>
      <div className='flex items-end justify-center pl-[5rem] pb-[1rem]'>
      <TextRevealByWord className='text-black text-8xl !m-0 font-PlayfairDisplay-Medium' text={"Discover India,"}/>
      
      <span className= "flex h-[5rem] w-[5rem]"> <Image
       src="/images/aboutCircle1.png"
                  width={120}
                  height={60}
                  className='rounded-full object-cover' /> </span>
     

      </div>
      <TextRevealByWord className='text-black text-8xl font-PlayfairDisplay-Medium pb-[1rem] ' text={"a country of vibrant"}/>
                   <div className='flex items-end justify-center pb-[1rem]'>
                   <span className= "flex h-[5rem] w-[5rem] mr-[1rem]"> <Image
       src="/images/aboutCircle2.png"
                  width={120}
                  height={60}
                  className='rounded-full object-cover' /> </span>
                  <TextRevealByWord className='text-black text-8xl !m-0  font-PlayfairDisplay-Medium ' text={"diversity."} />
                  
      </div>
      </div>
      <div className='flex items-center mt-[2rem] ml-[2rem] justify-center'>
      <Image  src="/images/Aboutdesign.png"
                  width={240}
                  height={120} /> </div>
      <div className='flex flex-col w-[40vw] text-2xl mt-[10vmin] items-start ml-[15vmin] mb-[10vmin]'>
      <TextGenerateEffect className=' font-Raleway-Regular text-[gray]' words={"Welcome to Incredible India, a land where diversity meets harmony. From the golden sands of the Thar Desert to the snow-capped peaks of the Himalayas, India's landscapes are as varied as its rich cultural tapestry. Our journey will take you through lush forests, serene beaches, and historic wonders, each telling its own unique story. Embrace the colors, sounds, and traditions that make India truly incredible."} />
        {/* <p className=' font-Raleway-Regular text-[gray]'> Welcome to Incredible India, a land where diversity meets harmony. From the golden sands of the Thar Desert to the snow-capped peaks of the Himalayas, India's landscapes are as varied as its rich cultural tapestry. Our journey will take you through lush forests, serene beaches, and historic wonders, each telling its own unique story. Embrace the colors, sounds, and traditions that make India truly incredible.</p> */}

      </div>
      </div>
    </div>
  )
}

export default AboutUs