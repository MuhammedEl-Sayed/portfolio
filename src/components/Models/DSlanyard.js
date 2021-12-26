/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useEffect, useState, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import model from "./DSlanyard.glb";

import { useBox, Debug, useCompoundBody } from "@react-three/cannon";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGesture, useDrag } from "react-use-gesture";
import { meshBounds } from "@react-three/drei";
import {SimpleGeometry} from './SimpleBox';
import {LanyardBoxes} from "../settings/Boxes"

export default function LanyardDS(props){
  const { nodes, materials } = useGLTF(model);
  const box = useRef();
  const position = useRef([0, 0, 0]);
  const rot = useRef([0, 0, 0]);
  var boxes = LanyardBoxes;
  const [ref, api] = useCompoundBody(() => ({
    mass: 1,
    position: props.positionOfObj,
    rotation: props.rotationOfObj,
    shapes: boxes,
  }));
  useEffect(() => {
    const unsubscribe = api.position.subscribe((v) => (position.current = v));
    return unsubscribe;
  }, []);
  useEffect(() => {
    const unsubscribe = api.rotation.subscribe((v) => (rot.current = v));
    return unsubscribe;
  }, []);
  const [dragging, setDrag] = useState(false);
  const [lastPos, setLastPos] = useState([0,0])
  
  useFrame(() => {
    
    if (dragging === false) {
      
      box.current.position.set(
        position.current[0],
        position.current[1],
        position.current[2]
      ); //this isnt the problem
      box.current.rotation.set(rot.current[0], rot.current[1], rot.current[2]); 
      setLastPos([position.current[0], position.current[1]])
      api.wakeUp();
    }  if(dragging === true) {
      
      api.sleep();
      api.position.copy(box.current.position);
      api.rotation.copy(box.current.rotation);

    }
  });
  function handleChange(newValue) {
    setDrag(newValue);
  }
  return (
    <>
    <SimpleGeometry
    ref={box}
    colliders={boxes}
    positionCol={props.positionOfObj}
    rotationCol={props.positionOfObj}
    setDrag={handleChange}
    lastPos={lastPos}
  />
      <group ref={ref} {...props}  dispose={null} scale={1}>
      <mesh
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
        scale={[0.15, 4.3, 2.9]}
        castShadow
        receiveShadow
        raycast={meshBounds}
      />
    </group>

    </>
  );
  }

useGLTF.preload(model);
