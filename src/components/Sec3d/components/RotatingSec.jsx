import React, { useEffect, useState } from 'react'
import { RSApp } from './RSApp'
import './RSstyles.css'

const useResize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();


      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return size;
};


export const RotatingSec = ({images, textSet, canvasVisible, isCanvasVisible}) => {

  const handleClick = () => {
       
    isCanvasVisible = isCanvasVisible
    canvasVisible(isCanvasVisible)

  }
  

  const { width, height } = useResize();

  var scrollDir = 'up/down'
  var buttonTopLeft = '46%'



  if (width < 600) {
    scrollDir = 'left';
    buttonTopLeft = '36%';

  }

  return (
    <>
    {isCanvasVisible && (
      <>
      <RSApp images= {images} textSet={textSet} />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', color:'white' }} href="#">
          scroll {scrollDir} ...
        </a>
        <button onClick={handleClick} style={{ background:'#808080', color:'black',fontWeight:'600', pointerEvents: 'auto', position:'fixed', left:buttonTopLeft ,top:'-8%', borderRadius:'50%',padding:'1rem 1.5rem', paddingTop:'3rem', borderColor:'white'}}>
          Back
        </button>
        {/* <button onClick={handleClick}  style={{ background:'#808080', color:'black',fontWeight:'600',  pointerEvents: 'auto', position:'fixed', left:buttonDownLeft ,bottom:buttonDownTop, padding:'1.5rem 0.75rem', borderRadius:'50%', paddingBottom:buttonDownPad, borderColor:'white'}}>
          Back to 2D
        </button> */}
      </div>
      </>
      )}
    </>
  )
}