import React from "react";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/Project" element ={<Project/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
