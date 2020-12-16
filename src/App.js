  
import React from 'react';
import './App.css';
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
         
        </Switch>
      </Router>
    </>
  );
}

export default App;