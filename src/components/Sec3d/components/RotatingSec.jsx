import React from 'react'
import { RSApp } from './RSApp'
import './RSstyles.css'

export const RotatingSec = ({images, textSet, canvasVisible, isCanvasVisible}) => {

  const handleClick = () => {
       
    isCanvasVisible = isCanvasVisible
    canvasVisible(isCanvasVisible)
    // onSelectImages(images)  // Send selected images to parent
  }

  return (
    <>
    {isCanvasVisible && (
      <>
      <RSApp images= {images} textSet={textSet} />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        {/* <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          Incredible
          <br />
          India
        </a> */}
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', color:'white' }} href="#">
          scroll up/down ...
        </a>
        {/* <button onClick={handleClick} >Go back</button> */}
        <button onClick={handleClick} style={{ background:'white', color:'black',fontWeight:'600', pointerEvents: 'auto', position:'fixed', left:'50%',top:'-8%', borderRadius:'50%',padding:'1rem 1.5rem', paddingTop:'3rem', borderColor:'white'}}>
          Back
        </button>
        <button onClick={handleClick}  style={{ background:'white', color:'black',fontWeight:'600',  pointerEvents: 'auto', position:'fixed', left:'50%',bottom:'-8%', padding:' 1.5rem 0.75rem', borderRadius:'50%', paddingBottom:'3rem', borderColor:'white'}}>
          Back to 2D
        </button>
      </div>
      </>
      )}
    </>
  )
}