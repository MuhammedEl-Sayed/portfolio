/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import model from "./shelf.gltf";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  useBox,
  Debug,
  useTrimesh,
  useCompoundBody,
  useConvexPolyhedron,
} from "@react-three/cannon";
import Hook from "./Hook";

import bl from "./blanklanyard.glb"
import dsl from "./DSlanyard.glb"
import xrl from "./XRLanyard.glb"
import linkicon from "./linkicon.glb"
import githubicon from "./gitIcon.glb"
import ship from "./ship.glb"
import frog from "./frog.glb"
import trowel from "./trowel.glb"
import placard from "./placard.glb"
import GeneralModel from "../GeneralModel";
import * as Boxes from "../settings/Boxes";

import Lanyard from "./Blanklanyard"
export default function Shelf(props) {
  const { viewport } = useThree();
  const boxSize = [5, 1.2, 25];
  const { nodes, materials } = useGLTF(model);
/*   const { headerText, bodyText } = React.useContext(MyContext);
  const [stateValue, setStateValue] = headerText;
  const [stateValue2, setStateValue2] = bodyText; */
  
  const [ref] = useCompoundBody(() => ({
    mass: 0,
    ...props,
    position: [0, -22, 0],
    rotation: [0, -Math.PI / 2, 0],
    shapes: [
      {
        type: "Box",
        position: [0, 0.2, 0],
        rotation: [0, 0, 0],
        args: boxSize,
      },
      {
        type: "Box",
        position: [0, -13.7, 0],
        rotation: [0, 0, 0],
        args: boxSize,
      },
      {
        type: "Box",
        position: [0, -29.5, 0],
        rotation: [0, 0, 0],
        args: boxSize,
      },
      {
        type: "Box",
        position: [0, 14.4, 0],
        rotation: [0, 0, 0],
        args: boxSize,
      },
      {
        type: "Box",
        position: [-2, 0, 0],
        rotation: [0, 0, 0],
        args: [1, 60, 30],
      },
      {
        type: "Box",
        position: [-2, 0, 13],
        rotation: [0, 0, 0],
        args: [30, 60, 1],
      },
      {
        type: "Box",
        position: [-2, 0, -13],
        rotation: [0, 0, 0],
        args: [30, 60, 1],
      },
    ],
  }));
  /*   <Lanyard2  position={[8,-15,-1.2]} />
  <Lanyard3 position={[0,-15,-1.2]} />
  <Lanyard position={[-8,-15,-1.2]} /> */
  return (
    <>
      <group
        ref={ref}
        position={[0, -30, 0]}
        scale={[3, viewport.height * 4, viewport.width]}
        rotation={[0, Math.PI, 0]}
      >
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials.Exterior}
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Shelf}
          receiveShadow
        />

        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.004"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.001"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube001_4.geometry}
          material={materials["Material.005"]}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.Cube001_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Cube001_6.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube001_7.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Cube001_8.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Cube001_9.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Cube001_10.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Cube001_11.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          geometry={nodes.Cube001_12.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          geometry={nodes.Cube001_13.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Cube001_14.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Cube001_15.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          geometry={nodes.Cube001_16.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          geometry={nodes.Cube001_17.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          geometry={nodes.Cube001_18.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          geometry={nodes.Cube001_19.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          geometry={nodes.Cube001_20.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          geometry={nodes.Cube001_21.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          geometry={nodes.Cube001_22.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          geometry={nodes.Cube001_23.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          geometry={nodes.Cube001_24.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          geometry={nodes.Cube001_25.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          geometry={nodes.Cube001_26.geometry}
          material={materials["Material.028"]}
        />
      </group>

      <rectAreaLight
        color={props.color}
        intensity={0.5}
        width={55}
        height={30}
        position={[0, 6, 0]}
        rotation={[0, 0, -Math.PI/2]}
      />
      <rectAreaLight
        color={props.color}
        intensity={0.5}
        width={55}
        height={30}
        position={[0, -9, 2.5]}
        rotation={[0, 0, -Math.PI/2]}
      />
      <rectAreaLight
        color={props.color}
        intensity={0.5}
        width={55}
        height={30}
        position={[0, -24, 0]}
        rotation={[0, 0, -Math.PI/2]}
      />
      <rectAreaLight
        color={props.color}
        intensity={0.5}
        width={55}
        height={30}
        position={[0, -38, 0]}
        rotation={[0, 0, -Math.PI/2]}
      />
      <Hook position={[-8, -11, -0.3]} />
      <Hook position={[0, -11, -0.3]} />
      <Hook position={[8, -11, -0.3]} />
      <GeneralModel model={bl} boxes={Boxes.LanyardBoxes} positionOfObj={[-8, -15, -1.2]} rotationOfObj={[0, -Math.PI/2, 0]}>
      
        </GeneralModel>

    </>
  );
}

useGLTF.preload(model);
