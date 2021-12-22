import React, { useState } from "react";
import * as THREE from "three";
import { useContextBridge, Loader } from "@react-three/drei";
import Scene from "../Scene";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import BoxContent from "../HtmlBS/BoxContent";
import { Button } from "@material-ui/core";
/*

So what you do is:
Import context bridge 
create a scene wrapper that holds a canvas and camera,s and wraps the scene with the bridge
and then within the scene we go ahead and consume both contexes.
make sure to wrap the scene wrapper with the first context.
*/


const DefaultText = {
    text: {enable: false, content: ""},
    setText: (state) => { }

};

export const TextContext = React.createContext(DefaultText);
export const CanvasContext = React.createContext(DefaultText);
function ContextBridger() {

    const ContextBridge = useContextBridge(TextContext)


    return (
        <>
        <div className="absolute h-screen w-screen">
                <Canvas shadows frameloop="demand">
                    {/* create the bridge inside the Canvas and forward the context */}
                    <ContextBridge>
                        <Scene />

                    </ContextBridge>
                </Canvas>
            

            <Loader />
            </div>
            <div className="fixed z-2">
          <Button variant="contained" >Change LED Color</Button>
          
        </div>
        </>

    )

}
export default function SceneWrapper() {
    const [text, setText] = useState(DefaultText.text);


    return (
        <>
            <TextContext.Provider value={{ text, setText }}>

                    <ContextBridger />
                <BoxContent/>

            </TextContext.Provider>

        </>

    )
}