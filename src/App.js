import React, { useState } from "react";

import "./CSS/Apps.css"

const App = () => { 
  let time = new Date().toLocaleTimeString();
  const [cTime, sCTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    sCTime(time)
  }

  setInterval(updateTime,1000)
  return (
    <>
      <h1 className="container">{ cTime}</h1>
    </>
  )
}
export default App;