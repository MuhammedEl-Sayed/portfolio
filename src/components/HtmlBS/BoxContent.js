import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { MyContext } from "../../App";
export default function BoxContent(props) {
  const { headerText, BodyText } = React.useContext(MyContext);
  var headertext = "";
  useEffect(() => {
    if(props.obj === 1){
        headertext = "wowowowow"
    }
  }, [props.obj]);
  return (
    <div className="flex absolute content-center col-auto">
      <div className="bg-gray-600 bg-transparent opacity-50 min-w-52 min-h-52 max-w-xl min-h-xl">
        <span>{headertext}</span>
        
      </div>
    </div>
  );
}
