import React from 'react'
import { RSApp } from './RSApp'
import './RSstyles.css'

export const RotatingSec = ({images, canvasVisible, isCanvasVisible}) => {

  const handleClick = () => {
    
    // handleToggleCanvas()    
    isCanvasVisible = isCanvasVisible
    canvasVisible(isCanvasVisible)
    // onSelectImages(images)  // Send selected images to parent
  }

  return (
    <>
    {isCanvasVisible && (
      <>
      
      <RSApp images= {images} />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          Incredible
          <br />
          India
        </a>
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', color:'white' }} href="#">
          scroll up/down ...
        </a>
        {/* <button onClick={handleClick} >Go back</button> */}
        <button onClick={handleClick} style={{ pointerEvents: 'auto', position:'fixed', left:'50%',top:'-7%', borderRadius:'50%',padding:'2rem', paddingTop:'2.5rem'}}>
          Back
        </button>
        {/* <p style={{ position: 'absolute', top: '25%', left: '70%', color:'white',display: 'flex', flexWrap:'wrap', width:'27vw' }} >
          Book the most beautiful experince in Yoga and 
          mediation for self peace. At the Rishikesh near Ram Jhula and  Lakshan Jhula.
        </p>
        <p style={{ position: 'absolute', top: '50%', left: '70%', color:'white',display: 'flex', flexWrap:'wrap', width:'27vw' }} >
          Book the most beautiful experince in Yoga and 
          mediation for self peace. At the Rishikesh near Ram Jhula and  Lakshan Jhula.
        </p>
        <p style={{ position: 'absolute', top: '75%', left: '70%', color:'white',display: 'flex', flexWrap:'wrap', width:'27vw' }} >
          Book the most beautiful experince in Yoga and 
          mediation for self peace. At the Rishikesh near Ram Jhula and  Lakshan Jhula.
        </p> */}
      </div>
      
      </>
      )}
    </>
  )
}