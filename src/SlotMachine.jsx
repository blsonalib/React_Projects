import React from "react";
import "./index.css"
import Matching from "./Matching";
import NotMatching from "./NotMatching";
const SlotMachine = (props) => {
 
    let x = props.x;
    let y = props.y;
    let z = props.z;

    
      if ((x === y) && (y === z)) {
        return (
          <>
            <div className="slot-container">
              <h1>{x} {y} {z}</h1>
              <h1 className="hg-mid">This is Matching</h1>
              <hr/>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="slot-container">
              <h1>{x} {y} {z}</h1>
              <h1 className="hg-mid">This is not Matching</h1>
              <hr/>
            </div>
          </>
        ); 
      }
    }

export default SlotMachine;