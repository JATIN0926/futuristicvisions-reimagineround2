import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Image,
  Environment,
  ScrollControls,
  useScroll,
  Scroll,
  Html,
} from "@react-three/drei";
import { easing } from "maath";
import "./RSutils";

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

export const RSApp = ({ images, textSet }) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    // console.log(jatin bahan ka loda ${images});
    if (!images || images.length === 0) {
      console.warn("No images provided to RSApp");
    }
  }, [images]);

  const { width, height } = useResize();

  var isHorizontal = false;
  var rigPositionX = -1;
  var rigPositionY = 0;

  if (width < 600) {
    isHorizontal = true;
    rigPositionX = 0;
    rigPositionY = 0.4;
  }

  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
      <fog attach="fog" args={["#a79", 8.5, 12]} />
      <ScrollControls pages={4} horizontal={isHorizontal} enabled={true}>
        <Html position={[1, 0, 0]} >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {textSet.map((text, index) => (
              <div key={index}>
                <h2
                  style={{
                    padding: "0 20px",
                    position: "fixed",
                    top: width > 600 ? `${index * 50 - 7}vh` : "30vh",
                    left: width > 600 ? "0rem" : `${index * 50 - 7}vw`,
                    display: "flex",
                    flexWrap: "wrap",
                    width: "27vw",
                  }}
                  className="font-semibold text-lg mbSmall:text-2xl  font-Raleway-SemiBold"
                >
                  {text.heading || "Default Heading"}
                </h2>
                <p
                  className="font-Raleway-Regular hidden mbSmall:flex"
                  style={{
                    padding: "0 20px",
                    position: "fixed",
                    top: width > 600 ? `${index * 50}vh` : "30vh",
                    left: width > 600 ? "0rem" : `${index * 50 - 7}vw`,
                    // display: "flex",
                    flexWrap: "wrap",
                    width: "27vw",
                  }}
                >
                  {text.para || "Default Paragraph"}
                </p>
                <button
                  style={{ 
                    position: "fixed",
                    top: width > 600 ? `${index * 50 + 14}vh` : "37vh",
                    left: width > 600 ? "1.3rem" : `${index * 50 -1}vw` }}
                  className=" p-1 mbSmall:p-2 w-[4.5rem] mbSmall:w-[6rem] text-white rounded-md border-white border-2 bg-black text-xs mbSmall:text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
                >
                  book now
                </button>
              </div>
            ))}
          </div>
        </Html>
        <Rig
          position={[rigPositionX, rigPositionY, 0]}
          rotation={[0, 0, 0.15]}
          hoveredImage={hoveredImage}
        >
          <Carousel setHoveredImage={setHoveredImage} images={images} />
        </Rig>
        <Scroll html>{/* Add any other scrollable content here */}</Scroll>
      </ScrollControls>
    </Canvas>
  );
};

function Rig({ hoveredImage, ...props }) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);

    if (hoveredImage) {
      // Logic to handle background carousel update based on hovered image
    }
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, setHoveredImage, images }) {
  if (!images || images.length === 0) {
    return null; // Return null if no images are provided
  }

  return images.map((image, i) => (
    <Card
      key={i}
      url={image.url}
      title={image.title}
      description={image.description}
      position={[
        Math.sin((i / images.length) * Math.PI * 2) * radius,
        0,
        Math.cos((i / images.length) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / images.length) * Math.PI * 2, 0]}
      setHoveredImage={setHoveredImage}
    />
  ));
}

function Card({ url, setHoveredImage, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => {
    e.stopPropagation();
    hover(true);
    setHoveredImage(url);
  };
  const pointerOut = () => {
    hover(false);
    setHoveredImage(null);
  };
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 0.9, 1, 20, 20]} />
    </Image>
  );
}
