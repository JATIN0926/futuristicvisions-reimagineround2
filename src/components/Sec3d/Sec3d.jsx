


import { useState } from 'react'
import { ImageGallery } from './components/ImageGallery'
import { RotatingSec } from './components/RotatingSec'

function App() {
  const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: "/images/img1_.jpeg", acti: "rafting" },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img2_.jpeg", acti: "rafting" },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img3_.jpeg", acti: "rafting" },
    // Left
    { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: "/images/img4_.jpeg", acti: "rafting" },
    { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: "/images/img5_.jpeg", acti: "rafting" },
    { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: "/images/img6_.jpeg", acti: "rafting" },
    // Right
    { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img7_.jpeg", acti: "rafting" },
    { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img8_.jpeg", acti: "rafting" },
    { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img9_.jpeg", acti: "rafting" }
  ]

  const texts = [
    {
      heading: 'Heading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '2dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '3dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '4dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '5dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '6dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '7dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '8dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    },
    {
      heading: '9dHeading',
      para: 'Book the most beautiful experince in Heading and mediation for self peace. At the Rishikesh.'
    }
  ]

  const [selectedImages, setSelectedImages] = useState(images)

  const handleSelectImages = (images) => {
    setSelectedImages(images)
  }

  const [selectedText, setSelectedText] = useState(texts)

  const handleSelectText = (texts) => {
    setSelectedText(texts)
  }


  const [isCanvasVisible, setIsCanvasVisible] = useState(true)

  const handleToggleCanvas = (isCanvasVisible) => {
    setIsCanvasVisible(isCanvasVisible)
  }

  return (
    <>
      <ImageGallery onSelectText={handleSelectText} onSelectImages={handleSelectImages} canvasVisible={handleToggleCanvas} isCanvasVisible={isCanvasVisible} />
      <RotatingSec textSet={selectedText} images={selectedImages} canvasVisible={handleToggleCanvas} isCanvasVisible={!isCanvasVisible} />
    </>
  )
}

export default App