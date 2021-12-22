import * as Models from "./Helpers/GLBReroute"
import Hook from "./Models/Hook";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useContext, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Debug, Physics } from "@react-three/cannon"
import useScrollY from '../hooks/useScrollY'
import { MathUtils } from "three";
import { useScrollDirection } from 'react-use-scroll-direction'
import { a } from "@react-spring/three"
import { TextContext, CanvasContext } from "./Helpers/SceneWrapper";

var cameraPositions = [];
cameraPositions = [0, -.3, -.6, -.9]



//TODO Fix shelf button color changer
function ScrollingCamera(props) {
    const ref = useRef(null);
    const { isScrollingUp, isScrollingDown } = useScrollDirection()
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
        ref.current.position.y = MathUtils.lerp(start, end, progress);
    })

    return (
        <PerspectiveCamera ref={ref} makeDefault fov={60} position={[0, 0, 20]} rotation={[0, 0, 0]} />
    )
}

/* 
State won't change no matter what I try. It is pretty annoying.
Using a function/const to handle the setText doesn't work.
I'm kinda tired of this. Props maybe? Shit will look pretty bad.
Problem is with context. Not being passed in. useSate by itself works.
*/
export default function Scene(props) {
    const [y] = useScrollY([-2400, 0], { domTarget: window })
    const [color, setstate] = useState({ color: "" })
    const changeState = () => {

        if (colors.includes(color.color)) {
            setstate({ color: colors[colors.indexOf(color.color) + 1] })
        }
        else {
            setstate({ color: colors[0] })
        }


    };
    const colors = ["#0400ff", "#FF0F0F", "#12F12F", "#ffffff"]


    const tcontext = useContext(TextContext)

    const handleEnableText=( s) => { 
           tcontext.setText({enable: true, content: s})
    }

    const handleDisableText = () => {
        tcontext.setText({enable: false, ...tcontext.content})
    }


    useEffect(() => {
        
    }, [tcontext])

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
                    <Models.Lanyard
                        positionOfObj={[0, -14, -1]}
                        rotationOfObj={[0, -Math.PI / 2, 0]}
                    />
                    <Models.LanyardDS
                        positionOfObj={[-8, -14, -1]}
                        rotationOfObj={[0, -Math.PI / 2, 0]}
                    />
                    <Models.LanyardXR
                        positionOfObj={[8, -14, -1]}
                        rotationOfObj={[0, -Math.PI / 2, 0]}
                    />
                    <Models.Frog positionOfObj={[9, -30, 1]} />

                    <Models.GitIcon
                        positionOfObj={[4, -45, 1]}
                        rotationOfObj={[-Math.PI / 2, 0, 0]}
                    />
                    <Models.LnIcon
                        positionOfObj={[-4, -45, 1]}
                        rotationOfObj={[Math.PI / 2, 0, 0]}
                    />
                    <Models.Placard
                        positionOfObj={[0, 0, 1]}
                        rotationOfObj={[Math.PI / 2.3, -Math.PI / 2, 0]}
                        onPointerOver={() => {
                            
                            handleEnableText("Holder ");

                        }}
                        onPointerOut={() => {
                            
                            handleDisableText();

                        }}
                    />
                    <Models.Trowel positionOfObj={[0, -30, 1]} />
                    <Models.Ship positionOfObj={[-9, -30, 1]} />
                </Suspense>
            </Physics>

        </>
    );
}
