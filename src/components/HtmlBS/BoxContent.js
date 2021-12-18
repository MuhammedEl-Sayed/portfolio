import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { MyContext } from "../Models/Shelf";
export default function BoxContent(props) {
  const text = React.useContext(MyContext);
 
  useEffect(() => {
    console.log(text);
  }, [text.state]);

  return (
    <>
    { text.state &&
    <div className="flex absolute content-center col-auto">
      <div className="bg-gray-600 bg-transparent opacity-50 min-w-52 min-h-52 max-w-xl min-h-xl">
        <span></span>
        
      </div>
    </div>
}
</>
  );


}
