import React from "react";
import "./index.css";
import SlotMachine from "./SlotMachine";
const App = () => {

  return (
    <>
      
      <h1 className="main-heading">🎰 Welcome to <span style={{ fontWeight: 500}}> Slot Machine game</span>🎰</h1>
      <div className="slot-box">
      <SlotMachine x="😄" y="😄" z="😄"/>
      <SlotMachine x="😄" y="😄" z="🎅" />
      <SlotMachine x="🍎" y="🍌" z="😄"/>
      </div>
      
      </>
    );
}
export default App;