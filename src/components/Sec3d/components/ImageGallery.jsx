import "./IGstyles.css";
import { IGApp } from "./IGApp";
import React, { useEffect, useState } from "react";
import { CustomLink } from "@/components/CustomLink/CustomLink";

const useResize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      handleResize();

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return size;
};

export const ImageGallery = ({
  onSelectText,
  onSelectImages,
  canvasVisible,
  isCanvasVisible,
}) => {
  const images = [
    // Front
    {
      position: [0, 0, 1.5],
      rotation: [0, 0, 0],
      url: "/images/img1_.jpeg",
      title: "Fun & Adventures",
      imagesSet: [
        // Front
        {
          url: "https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // Back
        { url: "/images/WhatsApp Image 2024-07-25 at 22.31.13_b6036e01.jpg" },
        {
          url: "/images/WhatsApp Image 2024-07-25 at 22.35.00_0b0c46d4.jpg",
        },
        // Left
        { url: "/images/WhatsApp Image 2024-07-25 at 22.29.48_64416faf.jpg" },
        { url: "/images/img1_.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-25 at 23.57.16_33820443.jpg" },
        // Right
        { url: "/images/img1_.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-25 at 22.33.07_8c813795.jpg" },
        { url: "/images/img9_.jpeg" },
      ],
      textSet: [
        {
          heading: "Camping",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Mountain climbing",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "River Rafting",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Ladakh Biking",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Bunji jumping",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Trekking",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Skiing",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Ladakh Biking",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Fun & Adventures",
          para: "Book the most beautiful experince in RiverRafting and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    // Back
    {
      position: [-0.8, 0, -0.6],
      rotation: [0, 0, 0],
      url: "/images/img2_.jpeg",
      title: "Religious Experiences",
      imagesSet: [
        // Front
        {
          url: "https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg " },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" },
      ],
      textSet: [
        {
          heading: "Aarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "2dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "3dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "4dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "5dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "6dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "7dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "8dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "9dAarti",
          para: "Book the most beautiful experince in Aarti and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    {
      position: [0.8, 0, -0.6],
      rotation: [0, 0, 0],
      url: "/images/img3_.jpeg",
      title: "Forest & Wildlife",
      imagesSet: [
        // Front
        {
          url: "https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg " },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" },
      ],
      textSet: [
        {
          heading: "Forest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "2dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "3dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "4dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "5dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "6dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "7dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "8dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "9dForest",
          para: "Book the most beautiful experince in Forest and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/images/img4_.jpeg",
      title: "Art & Culture",
      imagesSet: [
        // Front
        { url: "/images/WhatsApp Image 2024-07-25 at 6.43.32 PM.jpeg" },
        // Back
        { url: "/images/WhatsApp Image 2024-07-25 at 6.30.52 PM.jpeg" },
        { url: "/images/Sarangi-Web-Thumbnail.jpg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/1664791127-zakir_hussain.jpg" },
        {
          url: "/images/Indian-Traditions39-Ceremony-506-Christopher-Brock-Photography.jpg",
        },
        // Right
        { url: "/images/WhatsApp Image 2024-07-25 at 6.30.52 PM.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-25 at 6.45.15 PM.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-25 at 6.44.18 PM.jpeg" },
      ],
      textSet: [
        {
          heading: "Bharatnatiyam",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Khattak",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Sitaar",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Mushaira",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Indian wedding",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Khattak",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Tabla Art ",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Art & Culture",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Sitaar",
          para: "Book the most beautiful experince in Festival and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    {
      position: [-2.15, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/images/img5_.jpeg",
      title: "Historic Monuments",
      imagesSet: [
        // Front
        { url: "/images/img5_.jpeg" },
        // Back
        { url: "/images/pexels-ankur-bagai-6440428.webp" },
        { url: "/images/103271b0baeb51ae662a315d922f6995.jpg" },
        // Left
        { url: "/images/golden-temple_1663763909577.jpg" },
        { url: "/images/93.jpg" },
        {
          url: "/images/konark-sun-temple-orissa-india-unesco-heritage-site.webp",
        },
        // Right
        { url: "/images/WhatsApp Image 2024-07-25 at 6.37.36 PM.jpeg " },
        { url: "/images/103271b0baeb51ae662a315d922f6995.jpg" },
        { url: "/images/93.jpg" },
      ],
      textSet: [
        {
          heading: "Tajmahal",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Hawa Mahal",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Red Fort",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Golden temple",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Ajanta & Ellora Caves",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Konark Sun Temple",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Lal Quila",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Historic Monuments",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Historic",
          para: "Book the most beautiful experince in Historic and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/images/WhatsApp Image 2024-07-24 at 3.45.36 PM.jpeg",
      title: "Wellness and Fitness",
      imagesSet: [
        // Front
        { url: "/images/WhatsApp Image 2024-07-25 at 6.26.55 PM.jpeg " },
        // Back
        { url: "/images/WhatsApp Image 2024-07-24 at 3.43.14 PM.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-24 at 3.45.36 PM.jpeg" },
        // Left
        { url: "/images/WhatsApp Image 2024-07-24 at 3.46.08 PM.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-25 at 11.17.24 AM.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-24 at 4.13.06 PM.jpeg" },
        // Right
        { url: "/images/WhatsApp Image 2024-07-25 at 6.26.55 PM.jpeg " },
        { url: "/images/WhatsApp Image 2024-07-24 at 3.45.36 PM.jpeg" },
        { url: "/images/WhatsApp Image 2024-07-25 at 11.17.24 AM.jpeg" },
      ],
      textSet: [
        {
          heading: "Yoga",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Vipassana meditation",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Yoga at Rishikesh",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Isha Meditation",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Solang Wellness",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Group Yoga",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Isha Meditation",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Meditation",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Group Yoga",
          para: "Book the most beautiful experince in Yoga and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/images/img7_.jpeg",
      title: "Shopping",
      imagesSet: [
        // Front
        {
          url: "/images/WhatsApp Image 2024-07-26 at 00.25.59_ba838521.jpg",
        },
        // Back
        { url: "/images/WhatsApp Image 2024-07-26 at 00.26.43_cabc3365.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.48.04_a9d63f43.jpg" },
        // Left
        { url: "/images/WhatsApp Image 2024-07-26 at 00.48.27_fca7760b.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.49.14_a7857188.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.49.50_5e6d6aa1.jpg" },
        // Right
        { url: "/images/img7_.jpeg " },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.48.27_fca7760b.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.26.43_cabc3365.jpg" },
      ],
      textSet: [
        {
          heading: "Market",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Retail",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Sales",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Cart",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Trends",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Sarees",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Discounts",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Markets",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Sarees",
          para: "Book the most beautiful experince in Market and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    {
      position: [2.15, 0, 1.5],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/images/img8_.jpeg",
      title: "Hotel & Luxury",
      imagesSet: [
        // Front
        {
          url: "https://images.unsplash.com/photo-1506345932350-caeeec3d8895?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // Back
        { url: "/images/img2_.jpeg" },
        { url: "/images/img3_.jpeg" },
        // Left
        { url: "/images/img4_.jpeg" },
        { url: "/images/img5_.jpeg" },
        { url: "/images/img6_.jpeg" },
        // Right
        { url: "/images/img7_.jpeg " },
        { url: "/images/img8_.jpeg" },
        { url: "/images/img9_.jpeg" },
      ],
      textSet: [
        {
          heading: "Mansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "2dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "3dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "4dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "5dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "6dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "7dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "8dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "9dMansion",
          para: "Book the most beautiful experince in Mansion and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/images/img9_.jpeg",
      title: "Indian cuisine",
      imagesSet: [
        // Front
        {
          url: "/images/WhatsApp Image 2024-07-26 at 00.11.41_842b8d29.jpg",
        },
        // Back
        { url: "/images/WhatsApp Image 2024-07-26 at 00.11.41_47d9381d.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.11.42_63198a40.jpg" },
        // Left
        { url: "/images/WhatsApp Image 2024-07-26 at 00.13.48_7f6a0b08.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.14.17_704185d2.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.15.03_fd4ae782.jpg" },
        // Right
        { url: "/images/img9_.jpeg " },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.14.17_704185d2.jpg" },
        { url: "/images/WhatsApp Image 2024-07-26 at 00.11.41_47d9381d.jpg" },
      ],
      textSet: [
        {
          heading: "Pani puri",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "South Indian",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Kerela cuisine",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Dhaba Style",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Maharashtrian Cuisine",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Hyderabadi Biryani",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Cuisine",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Indian cuisine",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
        {
          heading: "Dhaba Style",
          para: "Book the most beautiful experince in Cuisine and mediation for self peace. At the Rishikesh.",
        },
      ],
    },
  ];

  const { width, height } = useResize();

  var butttonLeft = "46%";

  if (width < 500) {
    butttonLeft = "36%";
  }

  return (
    <>
      <IGApp
        images={images}
        onSelectText={onSelectText}
        onSelectImages={onSelectImages}
        canvasVisible={canvasVisible}
        isCanvasVisible={isCanvasVisible}
      />
      <CustomLink
        href="/"
        style={{
          background: "#808080",
          color: "black",
          fontWeight: "600",
          pointerEvents: "auto",
          position: "fixed",
          left: butttonLeft,
          bottom: "-8%",
          padding: " 1.5rem 0.75rem",
          borderRadius: "50%",
          paddingBottom: "3rem",
          borderColor: "white",
        }}
      >
        Back to 2D
      </CustomLink>
    </>
  );
};
