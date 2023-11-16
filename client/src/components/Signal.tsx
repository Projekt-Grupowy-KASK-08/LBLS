import React, { useState } from "react";
import { getMockData } from "../mocks/repository";
import "../styles/Signal.css"

function Signal() {

  let [signalData, setSignalData] = useState(getMockData());


  return (
     <div className="Signal">
      {signalData.map((e, _) => {
        return <p> {e} | </p>
      })}
     </div>
  )
}

export default Signal;
