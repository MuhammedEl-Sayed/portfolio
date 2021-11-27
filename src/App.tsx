/// <reference types="@welldone-software/why-did-you-render" />
import './wdyr'; // <--- first import
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./App.css";

import Shelf from "./components/Models/Shelf.js";

import Model from "./components/Models/SmallerLogo";

import { Loader, OrbitControls, PerspectiveCamera, Text, Preload } from "@react-three/drei";
import { useScrollDirection } from 'react-use-scroll-direction'
import { MathUtils } from "three";
import useScrollY from './hooks/useScrollY'
import { a } from "@react-spring/three"
import { Debug, Physics } from "@react-three/cannon"
import { Button, Hidden } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import BoxContent from './components/HtmlBS/BoxContent';
import GeneralModel from './components/GeneralModel';
import { LIcon } from './components/settings/Boxes';
import ReturnModel from './components/Helpers/GLBReroute';

var cameraPositions = [] as any;
cameraPositions = [0, -.3, -.6, -.9]

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
    textAlign: 'center'
  },
});

function HiddenImage(props: any) {
  return (
    <img src={props.image} alt={"wow"} />
  )


}

function ScrollingCamera(props: any) {
  const ref = useRef<THREE.Camera>(null);
  const { isScrollingUp, isScrollingDown } = useScrollDirection()
  let position = 0;
  let start = 0;
  let end = 0;
  let progress = 0;
  useFrame(() => {

    start = ref!.current!.position.y;
    progress += 0.001;
    if (progress > 1) {
      progress = 0;
    }
    if (isScrollingUp) {
      if (position === 0) {

        position = 3;
      }
      else {
        position--;
      }

    }
    if (isScrollingDown) {
      if (position === 3) {
        position = 0;
      }
      else {
        position++;
      }

    }
    end = cameraPositions[position];
    ref!.current!.position.y = MathUtils.lerp(start, end, progress);
  })





  return (
    <PerspectiveCamera ref={ref} makeDefault fov={60} position={[0, 0, 20]} rotation={[0, 0, 0]} />
  )
}
interface IMyContext {
  headerText: object,
  bodyText: object
}
const defaultContext: IMyContext = {
  headerText: Object,
  bodyText: Object
};
//@ts-ignore
//export const MyContext = React.createContext<{ headerText: (string | React.Dispatch<React.SetStateAction<string>>)[]; bodyText: (string | React.Dispatch<React.SetStateAction<string>>)[]; }>(["poo", {} as any], ["oop", {} as any]);
export const MyContext = React.createContext<MyContext>({} as MyContext);


function App() {
  const classes = useStyles();
  const [y]: any = useScrollY([-2400, 0], { domTarget: window })
  const [headerText, setHeaderText] = useState("w");
  const [bodyText, setBodyText] = useState("g");
  useEffect(() => {
    setHeaderText("wpw");
    setBodyText("213")
  }, [])


  /* 
   
  <a.group position-y={y.to((y: any) => y)}>
    <ScrollingCamera />
  </a.group>   <Shelf color={state.color} />
   */

  const [state, setstate] = useState({ color: "" })
  const changeState = () => {

    if (colors.includes(state.color)) {
      setstate({ color: colors[colors.indexOf(state.color) + 1] })
    }
    else {
      setstate({ color: colors[0] })
    }


  };
  const colors: any = ["#0400ff", "#FF0F0F", "#12F12F", "#ffffff"]
  return (
    <MyContext.Provider value={{ headerText: [headerText, setHeaderText], bodyText: [bodyText, setBodyText] }}>
      <div className=" m-0 p-0 bg-black relative">
        <div className="absolute bg-green-100 h-screen w-screen">
          <Canvas shadows frameloop="demand">
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
                <Shelf color={state.color} />
                <Preload all />
              </Suspense>
            </Physics>
            <OrbitControls />
          </Canvas>
          <Loader />
        </div>
        <div className="fixed z-2">
          <Button variant="contained" onClick={changeState}>Change LED Color</Button>

        </div>
        <div>
          <BoxContent />
        </div>
      </div >
    </MyContext.Provider>
  );
}
export default App;
