import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { CanvasContext, TextContext } from "../Helpers/SceneWrapper";
export default function BoxContent(props) {
  const context = React.useContext(TextContext);
  let text;
  useEffect(() => {
    console.log(context)
    
  }, [context])



  return (
    <>
 
      <div className="pointer-events-none">

  
        <div className=" flex relative h-screen items-center justify-center">
          <div className={`bg-auto bg-green-700 bg-content h-screen  ${context.text.enable ? "animate-fade-in" : "animate-fade-out"}`}>

            <span className={`m-auto  ${context.text.enable ? "animate-fade-in" : "animate-fade-out"}`}>sadasd</span>
    
            

          </div>
        </div>
        <div className="flex absolute h-screen bg-cover bg-center z-10 bg-indigo-800 w-1/3 right-0"><span>asdas</span></div>
        </div>
   
    </>
  );


}
