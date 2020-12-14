import React from "react";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
         <div>
          <Menu />
          <Switch>
          <Route path="/" exact>
            <Home />
            </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
            </Route>
            </Switch>
         </div>
      </Router>
     
      
  </>
  )
 
}
export default App;