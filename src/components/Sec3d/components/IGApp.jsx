import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useCursor, MeshReflectorMaterial, Image, Text, Environment, Html } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import getUuid from 'uuid-by-string'

const GOLDENRATIO = 1.61803398875

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


export const IGApp = ({ images, onSelectText, onSelectImages, canvasVisible, isCanvasVisible }) => {

  const [selectedFrame, setSelectedFrame] = useState(null);

  

  return (
    <>
      {isCanvasVisible && (
        <Canvas id='image-gallery' className='image-gallery' dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
          <color attach="background" args={['#191920']} />
          <fog attach="fog" args={['#191920', 0, 15]} />
          <group position={[0, -0.5, 0]}>
            <Frames images={images}
             onSelectText={onSelectText}
              onSelectImages={onSelectImages}
               canvasVisible={canvasVisible}
                isCanvasVisible={isCanvasVisible}
                selectedFrame={selectedFrame}
                setSelectedFrame={setSelectedFrame} />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                blur={[300, 100]}
                resolution={2048}
                mixBlur={1}
                mixStrength={80}
                roughness={1}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#050505"
                metalness={0.5}
              />
            </mesh>
          </group>
          <Environment preset="city" />
        </Canvas>
      )}
    </>
  )
}

function Frames({  images, canvasVisible, isCanvasVisible, onSelectImages, onSelectText, selectedFrame, setSelectedFrame, q = new THREE.Quaternion(), p = new THREE.Vector3() }) {
  const ref = useRef()
  const clicked = useRef()
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id)
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true)
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
      clicked.current.parent.getWorldQuaternion(q)
    } else {
      p.set(0, 0, 5.5)
      q.identity()
    }
  })
  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt)
    easing.dampQ(state.camera.quaternion, q, 0.4, dt)
  })
  return (
    <group
      ref={ref}
      onClick={(e) => (e.stopPropagation(), setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name))}
      onPointerMissed={() => setLocation('/')}>
      {images.map((props) => (
        <Frame
          key={props.url}
          imagesSet={props.imagesSet}
          textSet={props.textSet}
          {...props}
       
          onSelectText={onSelectText}
          onSelectImages={onSelectImages}
          canvasVisible={canvasVisible}
          isCanvasVisible={isCanvasVisible}
          selectedFrame={selectedFrame}
          setSelectedFrame={setSelectedFrame}
        />
      ))}
    </group>
  )
}

function Frame({ onSelectImages, onSelectText, url, title, description, images, imagesSet, textSet, canvasVisible, isCanvasVisible,  selectedFrame, setSelectedFrame, ...props }) {
  const image = useRef()
  const frame = useRef()
  const [, params] = useRoute('/item/:id')
  const [hovered, hover] = useState(false)
  const [rnd] = useState(() => Math.random())
  const name = getUuid(url)
  // const isActive = params?.id === name
  const isActive = params?.id === name || selectedFrame === name;
  useCursor(hovered)
  useFrame((state, dt) => {
    image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })

  const Cimages = imagesSet
  const Ctext = textSet

  const handleClick = () => {
    images=Cimages
    textSet=Ctext
    // handleToggleCanvas()  
    isCanvasVisible = !isCanvasVisible
    canvasVisible(isCanvasVisible)
    onSelectImages(images)  // Send selected images to parent
    onSelectText(textSet)
    
  }

  const onFrameClick = ()=> {
    if (selectedFrame === name) {
      setSelectedFrame(null); // Deselect the frame if it's already active
    } else {
      setSelectedFrame(name); // Set the clicked frame as active
    }
  }

  const { width, height } = useResize();

  var frameHeight = 1;
  var frameWidth = GOLDENRATIO;
  var textHtmlPos = 0.55;

  if (width < 500) {
    frameHeight = 0.6;
    frameWidth = GOLDENRATIO-0.2;
    textHtmlPos = 0.32;
  }

  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => (e.stopPropagation(), hover(true))}
        onPointerOut={() => hover(false)}
        scale={[frameHeight, frameWidth, 0.05]}
        // scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
        onClick={onFrameClick}
        >
        <boxGeometry />
        <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
        <mesh ref={frame} raycast={() => null} scale={[0.9, 0.93, 0.9]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image raycast={() => null} ref={image} position={[0, 0, 0.7]} url={url} />
      </mesh>
      <Text maxWidth={0.3} anchorX="left" anchorY="top" position={[textHtmlPos, GOLDENRATIO, 0]} fontSize={0.05}>
        {title}
      </Text>
      {selectedFrame === name && (
      <Html maxWidth={0.1} anchorX="left" anchorY="top" position={[textHtmlPos, GOLDENRATIO-0.1, 0]} fontSize={0.025}>
        <br />
          <button
          onClick={handleClick}
            className="p-1 w-[4rem] text-white rounded-md border-white border-2 bg-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition duration-200"
          >
            Explore
          </button>
      </Html>
       )}
    </group>
  )
}