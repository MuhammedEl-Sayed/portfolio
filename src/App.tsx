/// <reference types="@welldone-software/why-did-you-render" />
import './wdyr'; // <--- first import
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "./App.css";

import Shelf from "./components/Models/Shelf.js";

import SceneWrapper from "./components/Helpers/SceneWrapper"

import { Loader, OrbitControls, PerspectiveCamera, Text, Preload } from "@react-three/drei";
import { useScrollDirection } from 'react-use-scroll-direction'
import { MathUtils } from "three";
import useScrollY from './hooks/useScrollY'
import { a } from "@react-spring/three"
import { Debug, Physics } from "@react-three/cannon"
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import BoxContent from './components/HtmlBS/BoxContent';




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



function App() {


  return (

      <div className=" m-0 p-0 bg-black relative">

        <SceneWrapper/>


      </div >

  );
}
export default App;
