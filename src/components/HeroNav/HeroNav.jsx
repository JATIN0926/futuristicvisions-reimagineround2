import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const HeroNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRefs = useRef([]);
  const tl = useRef(null);

  useEffect(() => {
    // Initialize timeline
    tl.current = gsap.timeline({ paused: true })
      .to(buttonRefs.current, {
        y: 0,
        opacity: 1,
        display: 'block',
        stagger: 0.2,
        duration: 0.5,
        ease: 'power2.out'
      });

    // Initially hide buttons behind the MENU button
    gsap.set(buttonRefs.current, { y: -50, opacity: 0, display: 'none' });
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(prevState => !prevState);
    if (!menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  };

  return (
    <div className='w-full absolute top-3.5 mbXSmall:top-6 bg-none px-3 mbSmall:px-6 z-[300]'>
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <button 
            className='rounded-full bg-[#003049] text-white  p-2 mbXSmall:p-3 text-[0.65rem] mbXSmall:text-sm mbSmall:text-base w-[5rem] mbXSmall:w-[6rem] mbSmall:w-[8rem] mbMedium:w-[10rem] cursor-pointer'
            onClick={handleMenuClick}
          >
            MENU
          </button>
          <button ref={el => buttonRefs.current[0] = el} className='rounded-full bg-[#003049] text-white  p-2 mbXSmall:p-3  text-[0.65rem] mbXSmall:text-sm mbSmall:text-base w-[5rem] mbXSmall:w-[6rem] mbSmall:w-[8rem] mbMedium:w-[10rem] uppercase cursor-pointer'>Discover</button>
          <button ref={el => buttonRefs.current[1] = el} className='rounded-full bg-[#003049] text-white  p-2 mbXSmall:p-3  text-[0.65rem] mbXSmall:text-sm mbSmall:text-base w-[5rem] mbXSmall:w-[6rem] mbSmall:w-[8rem] mbMedium:w-[10rem] uppercase cursor-pointer'>History</button>
          <button ref={el => buttonRefs.current[2] = el} className='rounded-full bg-[#003049] text-white  p-2 mbXSmall:p-3  text-[0.65rem] mbXSmall:text-sm mbSmall:text-base w-[5rem] mbXSmall:w-[6rem] mbSmall:w-[8rem] mbMedium:w-[10rem] uppercase cursor-pointer'>Plan Trip</button>
          <button ref={el => buttonRefs.current[3] = el} className='rounded-full bg-[#003049] text-white  p-2 mbXSmall:p-3  text-[0.65rem] mbXSmall:text-sm mbSmall:text-base w-[5rem] mbXSmall:w-[6rem] mbSmall:w-[8rem] mbMedium:w-[10rem] uppercase cursor-pointer'>3D mode</button>
        </div>
        <div className=" w-[6rem] mbXSmall:w-[8rem] mbSmall:w-[10rem] mbMedium:w-[12rem] h-[3rem] relative">
          <Image src="/images/logo.svg" alt='img' fill />
        </div>
      </div>
    </div>
  );
}

export default HeroNav;
