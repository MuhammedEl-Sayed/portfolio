import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { CanvasContext, TextContext } from "../Helpers/SceneWrapper";
export default function BoxContent(props) {
  const context = React.useContext(TextContext);

  useEffect(() => {
    console.log(context)
  }, [context])

  return (
    <>
      {context.text.enable &&

        <div className=" flex relative w-screen items-center justify-center">
          <div className="">
            <span className=" m-auto">{context.text.content}</span>

          </div>
        </div>

      }
    </>
  );


}
