import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { CanvasContext, TextContext } from "../Helpers/SceneWrapper";
export default function BoxContent(props) {
  const context = React.useContext(TextContext);
  let text;
  useEffect(() => {
    console.log(context);
  }, [context]);

  return (
    <>
      <div className={`pointer-events-none overflow-hidden `}>
        <div
          className={`h-screen bg-gray-800 bg-opacity-70 w-1/3 right-0 fixed z-50  ${context.text.enable ? "animate-fade-in" : "animate-fade-out"}`}
        >
          <div className=" flex relative items-center z-10 justify-evenly flex-col h-screen">
            <span className={`m-auto mt-24 text-white h-1/3 font-bold text-2xl mr-10 ml-10 text-center`}>{context.text.title}</span>

            {context.text.content}
          </div>
        </div>
      </div>
    </>
  );
}
/*


        <div className={`h-screen bg-gray-800 bg-opacity-70 w-1/3 right-0 fixed z-50 ${context.text.enable ? "animate-fade-in" : "animate-fade-out"}`}>
          <div className=" flex relative items-center z-10 justify-start flex-col h-screen">
          <span className={`m-auto text-white`}>{context.text.title}</span>
*/
