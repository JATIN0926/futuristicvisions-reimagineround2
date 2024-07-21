// components/ExpandingCards.js
"use client"
import { useState } from 'react';

const panelsData = [
  {
    imageUrl: '/images/varanasi.png',
    title: 'Varanasi',
    content:'A sacred Hindu city in northern India. Located on the Ganges River in Uttar Pradesh, it is flanked by the Varuna River to the north and the Asi River to the south.'
  },
  {
    imageUrl: '/images/Mussorie.png',
    title: 'Mussorie',
    content:'A picturesque hill station in the Indian state of Uttarakhand, Mussoorie is known as the "Queen of the Hills." Located in the Garhwal Himalayan range, it offers stunning views of the Doon Valley and Shivalik ranges.'
  },
  {
    imageUrl: '/images/ooty.png',
    title: 'Ooty',
    content:'Officially known as Udhagamandalam, Ooty is a popular hill station in Tamil Nadu. Nestled in the Nilgiri Hills, it is renowned for its tea gardens, serene lakes, and the scenic Nilgiri Mountain Railway.'
  },
  {
    imageUrl: '/images/jammu.png',
    title: 'Jammu',
    content:'A major city in the northern Indian union territory of Jammu and Kashmir, Jammu is situated on the banks of the Tawi River. It is known for its temples, particularly the Vaishno Devi shrine, a significant Hindu pilgrimage site.'
  },
 
];

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-center z-[10] items-center h-auto mb-[10rem]">
    
    <div className='flex justify-between flex-row h-[auto] w-[90vw]  '> 
    <h1 className='text-black font-PlayfairDisplay-Bold text-5xl'>Book Popular Trips</h1>
    <div className="flex space-x-4 mr-5 mt-1">
    <button className=" shadow-[inset_0_0_0_2px_#616467] h-12 w-12 px-6 py-6 rounded-full tracking-widest bg-fit hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 bg-[url('/icons/arrowleft.svg')] hover:bg-[url('/icons/arrowleftWhite.svg')]">
    </button>
<button className="shadow-[inset_0_0_0_2px_#616467] text-black h-12 w-12 px-6 py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 bg-[url('/icons/arrowright.svg')]">
</button>
      
      </div>
    </div>
    <div>

    <div className="flex items-start justify-start flex-col w-[90vw] text-black p-4 ">
      <div className="flex space-x-4">
        <button className="pr-4 pb-2 mix-blend-difference rounded">Two Days</button>
        <button className="pr-4 pb-2 mix-blend-difference rounded">Road Trips</button>
        <button className="pr-4 pb-2 mix-blend-difference rounded">Pan India</button>
     
      </div>
      <div className='absolute h-3 w-10 rounded-full bg-white'></div>
    </div>

    </div>
      <div className="flex  w-[90vw]">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className={`bg-cover bg-center flex items-end justify-center flex-1 m-2 rounded-l relative h-[80vh] fiter-brightness-10 transition-all duration-700 cursor-pointer ${activeIndex === index ? 'flex-[3]' : 'flex-[0.7]'}`}
            style={{ backgroundImage: `url(${panel.imageUrl})` }}
            onClick={() => handlePanelClick(index)}
          > <div class="absolute inset-0 bg-black opacity-20"></div>
            <div className={` align-middle flex flex-col items-center z-[5] justify-center opacity-0 ${activeIndex === index ? 'opacity-100 transition-opacity duration-300 delay-400' : ''} `}> <h3 className={`flex align-middle text-white text-5xl font-PlayfairDisplay-Bold opacity-0 ${activeIndex === index ? 'opacity-100 transition-opacity duration-300 delay-400' : ''}`}>
              {panel.title}
            </h3>
            <p className={`flex p-[3rem] pt-[1rem] text-center text-white text-lg font-Raleway-Regular opacity-0 ${activeIndex === index ? 'opacity-100 transition-opacity duration-300 delay-600' : ''}`}>
              {panel.content}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
