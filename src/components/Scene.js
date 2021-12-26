import * as Models from "./Helpers/GLBReroute";
import Hook from "./Models/Hook";
import { useGLTF, PerspectiveCamera, Html } from "@react-three/drei";
import React, {
  useRef,
  useContext,
  useEffect,
  useState,
  Suspense,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Debug, Physics } from "@react-three/cannon";
import useScrollY from "../hooks/useScrollY";
import { MathUtils } from "three";
import { useScrollDirection } from "react-use-scroll-direction";
import { a } from "@react-spring/three";
import { TextContext, CanvasContext } from "./Helpers/SceneWrapper";
import { DSText, FrogText, introText, ResearchText, SeaVentures, TrowelText, XRText } from "./HtmlBS/HoverText";
var cameraPositions = [];
cameraPositions = [0, -0.3, -0.6, -0.9];

//TODO Fix shelf button color changer
function ScrollingCamera(props) {
  const ref = useRef(null);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  let position = 0;
  let start = 0;
  let end = 0;
  let progress = 0;
  useFrame(() => {
    start = ref.current.position.y;
    progress += 0.001;
    if (progress > 1) {
      progress = 0;
    }
    if (isScrollingUp) {
      if (position === 0) {
        position = 3;
      } else {
        position--;
      }
    }
    if (isScrollingDown) {
      if (position === 3) {
        position = 0;
      } else {
        position++;
      }
    }
    end = cameraPositions[position];
    ref.current.position.y = MathUtils.lerp(start, end, progress);
  });

  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      fov={60}
      position={[0, 0, 20]}
      rotation={[0, 0, 0]}
    />
  );
}

/* 
State won't change no matter what I try. It is pretty annoying.
Using a function/const to handle the setText doesn't work.
I'm kinda tired of this. Props maybe? Shit will look pretty bad.
Problem is with context. Not being passed in. useSate by itself works.
*/
export default function Scene(props) {
  const [y] = useScrollY([-2400, 0], { domTarget: window });
  const [color, setstate] = useState({ color: "" });
  const changeState = () => {
    if (colors.includes(color.color)) {
      setstate({ color: colors[colors.indexOf(color.color) + 1] });
    } else {
      setstate({ color: colors[0] });
    }
  };
  const colors = ["#0400ff", "#FF0F0F", "#12F12F", "#ffffff"];

  const tcontext = useContext(TextContext);

  const handleEnableText = (s, t) => {
    if (!tcontext.text.beingDragged) {
      tcontext.setText({
        enable: true,
        content: s,
        title: t,
        ...tcontext.beingDragged,
      });
    }
  };

  const handleDisableText = () => {
    tcontext.setText({
      enable: false,
      ...tcontext.content,
      ...tcontext.title,
      ...tcontext.beingDragged,
    });
  };

  useEffect(() => {}, [tcontext]);

  return (
    <>
      <a.group position-y={y.to((y) => y)}>
        <ScrollingCamera />
      </a.group>

      <ambientLight />
      <spotLight
        color={"#ffffff"}
        position={[0, 0, 8]}
        angle={Math.PI}
        penumbra={1}
        rotation={[0, 0, 0]}
        power={6}
      />
      <Physics>
        <Suspense fallback={null}>
          <Models.Shelf color={color.color} />
          <Hook position={[-8, -11, -0.3]} />
          <Hook position={[0, -11, -0.3]} />
          <Hook position={[8, -11, -0.3]} />
 
          <Models.LanyardDS
            positionOfObj={[-8, -14, -1]}
            rotationOfObj={[0, -Math.PI / 2, 0]}
            onPointerOver={() => {
              handleEnableText(DSText(), "Digital Scholarship Developer");
            }}
            onPointerOut={() => {
              handleDisableText();
            }}
          />
                   <Models.Lanyard
            positionOfObj={[0, -14, -1]}
            rotationOfObj={[0, Math.PI / 2, 0]}
            onPointerOver={() => {
                            
                handleEnableText(DSText(),"Research/Technical Assisstant");

            }}
            onPointerOut={() => {
                
                handleDisableText();

            }}
          />
          <Models.Hologram positionOfObj={[0,-14,1]}/>
          <Models.LanyardXR
            positionOfObj={[8, -14, -1]}
            rotationOfObj={[0, -Math.PI / 2, 0]}
            onPointerOver={() => {
              handleEnableText(
                XRText(),
                "KARP LiBRARY FELLOW ‑ XR DEVELOPER AT STUDiO X"
              );
            }}
            onPointerOut={() => {
              handleDisableText();
            }}
          />
          <Models.Frog
            positionOfObj={[9, -30, 1]}
            onPointerOver={() => {
              handleEnableText(FrogText(), "Till You Die");
            }}
            onPointerOut={() => {
              handleDisableText();
            }}
          />

          <Models.GitIcon
            positionOfObj={[4, -45, 1]}
            rotationOfObj={[-Math.PI / 2, 0, 0]}
            onClick={()=>{
              window.open("https://www.linkedin.com/in/muhammedelsayed/")
            }}
          />
          <Models.LnIcon
            positionOfObj={[-4, -45, 1]}
            rotationOfObj={[Math.PI / 2, 0, 0]}
            onClick={()=>{
              window.open("https://github.com/MuhammedEl-Sayed/")
            }}
          />

          <Models.Placard
            positionOfObj={[0, 0, 1]}
            rotationOfObj={[Math.PI / 2.3, -Math.PI / 2, 0]}
            onPointerOver={() => {
              handleEnableText(introText(), "Welcome to my portfolio website!");
            }}
            onPointerOut={() => {
              handleDisableText();
            }}
          />
          <Models.Trowel
            positionOfObj={[0, -30, 1]}
            onPointerOver={() => {
              handleEnableText(TrowelText(), "Trowel");
            }}
            onPointerOut={() => {
              handleDisableText();
            }}
          />
          <Models.Ship
            positionOfObj={[-9, -30, 1]}
            onPointerOver={() => {
              handleEnableText(SeaVentures(), "Sea Ventures");
            }}
            onPointerOut={() => {
              handleDisableText();
            }}
          />
        </Suspense>
      </Physics>
    </>
  );
}
/* //            <Html >
<h1>sadasd</h1>
<a href="https://github.com/pmndrs/drei#html" > sadas</a>
</Html>
</Models.LnIcon> */