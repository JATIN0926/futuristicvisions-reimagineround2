// components/ExpandingCards.js
"use client"
import { useState } from 'react';

const panelsData = [
  {
    imageUrl: '/images/varanasi.png',
    title: 'Explore The World'
  },
  {
    imageUrl: '/images/Mussorie.png',
    title: 'Wild Forest'
  },
  {
    imageUrl: '/images/ooty.png',
    title: 'Sunny Beach'
  },
  {
    imageUrl: '/images/jammu.png',
    title: 'City on Winter'
  },
 
];

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col justify-center z-[10] items-center h-auto">
    
    <div className='flex justify-between flex-row h-[auto] w-[90vw]  '> 
    <h1 className='text-black font-PlayfairDisplay-Bold text-5xl'>Popular Destinations</h1>
    <div className="flex space-x-4 mr-5 mt-1">
    <button className="shadow-[inset_0_0_0_2px_#616467] text-black h-12 w-12 px-6 py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
</button>
<button className="shadow-[inset_0_0_0_2px_#616467] text-black h-12 w-12 px-6 py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
</button>
      
      </div>
    </div>
    <div>

    <div className="flex items-start justify-start flex-col w-[90vw] text-black p-4">
      <div className="flex space-x-4">
        <button className="pr-4 pb-2 mix-blend-difference rounded">Cities</button>
        <button className="pr-4 pb-2 mix-blend-difference rounded">Beaches</button>
        <button className="pr-4 pb-2 mix-blend-difference rounded">Mountains</button>
        <button className="pr-4 pb-2 mix-blend-difference rounded">Islands</button>
        <button className="pr-4 pb-2 mix-blend-difference rounded">Deserts</button>
      </div>
      <div className='absolute h-3 w-10 rounded-full bg-white'></div>
    </div>

    </div>
      <div className="flex w-[90vw]">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className={`bg-cover bg-center flex-1 m-2 rounded-l relative h-[80vh] transition-all duration-700 cursor-pointer ${activeIndex === index ? 'flex-[3]' : 'flex-[0.7]'}`}
            style={{ backgroundImage: `url(${panel.imageUrl})` }}
            onClick={() => handlePanelClick(index)}
          >
            <h3 className={`absolute bottom-5 left-5 text-black text-xl opacity-0 ${activeIndex === index ? 'opacity-100 transition-opacity duration-300 delay-400' : ''}`}>
              {panel.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;
