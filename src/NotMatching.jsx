import React from "react";

const NotMatching = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
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
export default NotMatching;