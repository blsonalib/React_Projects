import React, { useState } from "react";

const App = () => {
  const bgColor = "#86465c"
  const [bg, sBg] = useState(bgColor);

  //for text
  const text = "click me !"
  const[Ctext, sText] = useState(text)
  const BgChange = () => {
    const bgNewColor = "#054d57";
    sBg(bgNewColor);
    sText("yo!! 😄")
  }
  const BgBack = () => {
    sBg( bgColor);
    sText("yo ho!! 😠")
  }
  return (
    <>
      <div style={{background : bg}}>
        <button onClick={BgChange} onDoubleClick= {BgBack}>{ Ctext }</button>
      </div>
    </>
  )
}
export default App;