import React, { useState } from "react";
import "./CSS/Apps.css"





let count = 1;

const App = () => {
  const state = useState();
  const [count,stateFun] = useState(0);
  const IncNumber = () => {
    stateFun(count + 1);
  }
  return (
    <>
      <div className="container">
        <h1 className="heading">{ count}</h1>
      <button type="button" onClick = {IncNumber} className="btn">Click Me!</button>
      </div>
     
    </>
    
  )
}
export default App;
