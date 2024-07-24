// const images = [
//   // Front
//   {
//     position: [0, 0, 1.5], rotation: [0, 0, 0], url: "/images/img1_.jpeg", title: "River rafting",
//     imagesSet: [
//       // Front
//       { url: "https://images.unsplash.com/photo-1637095222991-eadc948b6f29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   // Back
//   {
//     position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img2_.jpeg", title: "Ganga Aarti",
//     imagesSet: [
//       // Front
//       { url: "https://images.unsplash.com/photo-1665413793087-d58c23e3a177?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   {
//     position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img3_.jpeg", title: "The Forest",
//     imagesSet: [
//       // Front
//       { url: "https://plus.unsplash.com/premium_photo-1661963748474-56c522a0921a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   // Left
//   {
//     position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: "/images/img4_.jpeg", title: "Cultural festival",
//     imagesSet: [
//       // Front
//       { url: "https://images.unsplash.com/photo-1468234847176-28606331216a?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   {
//     position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: "/images/img5_.jpeg", title: "Historic Monuments",
//     imagesSet: [
//       // Front
//       { url: "https://images.unsplash.com/photo-1608723195410-f1c8ca340b1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   {
//     position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: "/images/img6_.jpeg", title: "Wellness and Fitness",
//     imagesSet: [
//       // Front
//       { url: "https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   // Right
//   {
//     position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img7_.jpeg", title: "Market",
//     imagesSet: [
//       // Front
//       { url: "https://images.unsplash.com/photo-1508589066756-c5dfb2cb7587?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   },
//   {
//     position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img8_.jpeg", title: "Mansion",
    // imagesSet: [
    //   // Front
    //   { url: "https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    //   // Back
    //   { url: "/images/img2_.jpeg" },
    //   { url: "/images/img3_.jpeg" },
    //   // Left
    //   { url: "/images/img4_.jpeg" },
    //   { url: "/images/img5_.jpeg" },
    //   { url: "/images/img6_.jpeg" },
    //   // Right
    //   { url: "/images/img7_.jpeg "},
    //   { url: "/images/img8_.jpeg" },
    //   { url: "/images/img9_.jpeg" }
    // ]
//   },
//   {
//     position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img9_.jpeg", title: "Indian cuisine",
//     imagesSet: [
//       // Front
//       { url: "https://images.unsplash.com/photo-1610432589024-5f02f76549cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       // Back
//       { url: "/images/img2_.jpeg" },
//       { url: "/images/img3_.jpeg" },
//       // Left
//       { url: "/images/img4_.jpeg" },
//       { url: "/images/img5_.jpeg" },
//       { url: "/images/img6_.jpeg" },
//       // Right
//       { url: "/images/img7_.jpeg" },
//       { url: "/images/img8_.jpeg" },
//       { url: "/images/img9_.jpeg" }
//     ]
//   }
// ]

import './IGstyles.css'
import { IGApp } from './IGApp'
import React from 'react'

export const ImageGallery = ({ onSelectText, onSelectImages, canvasVisible, isCanvasVisible}) => {

  const images = [
    // Front
    {
      position: [0, 0, 1.5], rotation: [0, 0, 0], url: "/images/img1_.jpeg", title: "Adventures",
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
    ],
      textSet : [
        {heading: 'RiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dRiverRafting', 
          para: 'Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    // Back
    {
      position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img2_.jpeg", title: "Ganga Aarti",
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
      ],
      textSet : [
        {heading: 'Aarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dAarti', 
          para: 'Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    {
      position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: "/images/img3_.jpeg", title: "The Forest",
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
      ],
      textSet : [
        {heading: 'Forest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dForest', 
          para: 'Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    // Left
    {
      position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: "/images/img4_.jpeg", title: "Cultural festival",
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
      ],
      textSet : [
        {heading: 'Festival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dFestival', 
          para: 'Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    {
      position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: "/images/img5_.jpeg", title: "Historic Monuments",
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
      ],
      textSet : [
        {heading: 'Historic', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dHistoric', 
          para: 'Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    {
      position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: "/images/img6_.jpeg", title: "Wellness and Fitness",
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
      ],
      textSet : [
        {heading: 'Yoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dYoga', 
          para: 'Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    // Right
    {
      position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img7_.jpeg", title: "Market",
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
      ],
      textSet : [
        {heading: 'Market', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dMarket', 
          para: 'Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.'
        }
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
      ],
      textSet : [
        {heading: 'Mansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dMansion', 
          para: 'Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.'
        }
      ]
    },
    {
      position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: "/images/img9_.jpeg", title: "Indian cuisine",
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
      ],
      textSet : [
        {heading: 'Cuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '2dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '3dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '4dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '5dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '6dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '7dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '8dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        },
        {
          heading: '9dCuisine', 
          para: 'Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.'
        }
      ]
    }
  ]

  return (
  
    <IGApp images={images} onSelectText={onSelectText} onSelectImages={onSelectImages} canvasVisible={canvasVisible} isCanvasVisible={isCanvasVisible}/>
  
  )
}