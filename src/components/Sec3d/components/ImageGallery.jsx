import './IGstyles.css'
import { IGApp } from './IGApp'
import React from 'react'

export const ImageGallery = ({ onSelectImages, canvasVisible, isCanvasVisible}) => {

  const images = [
    // Front
    {
      position: [0, 0, 1.5], rotation: [0, 0, 0], url: "/images/img1_.jpeg", title: "River rafting",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1637095222991-eadc948b6f29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    // Back
    {
      position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img2_.jpeg", title: "Ganga Aarti",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1665413793087-d58c23e3a177?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    {
      position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img3_.jpeg", title: "The Forest",
      imagesSet: [
        // Front
        { url: "https://plus.unsplash.com/premium_photo-1661963748474-56c522a0921a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    // Left
    {
      position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: "/images/img4_.jpeg", title: "Cultural festival",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1468234847176-28606331216a?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    {
      position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: "/images/img5_.jpeg", title: "Historic Monuments",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1608723195410-f1c8ca340b1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    {
      position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: "/images/img6_.jpeg", title: "Wellness and Fitness",
      imagesSet: [
        // Front
        { url: "https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    // Right
    {
      position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img7_.jpeg", title: "Market",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1508589066756-c5dfb2cb7587?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    {
      position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img8_.jpeg", title: "Mansion",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg "},
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    },
    {
      position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img9_.jpeg", title: "Indian cuisine",
      imagesSet: [
        // Front
        { url: "https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg" },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" }
      ]
    }
  ]

  return (
  
    <IGApp images={images} onSelectImages={onSelectImages} canvasVisible={canvasVisible} isCanvasVisible={isCanvasVisible}/>
  
  )
}