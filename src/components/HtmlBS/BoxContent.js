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
        <div className={`h-screen bg-gray-800 bg-opacity-70 w-1/3 right-0 fixed z-50 ${context.text.enable ? "animate-fade-in" : "animate-fade-out"}`}>
          <div className=" flex relative items-center z-10 justify-center flex-col h-screen">
          <span className={`m-auto text-white`}>{context.text.title}</span>
            { context.text.content} 
            </div>
          </div>
        </div>

    </>
  );


}
