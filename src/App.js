import React from "react";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";
import Certificates from "./routes/Certificates";
import Internship from "./routes/Internship";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Route,Routes} from "react-router-dom"
import NavbarMenu from "./component/NavbarMenu";
import Footer from "./component/Footer";
function App() {
  return (
    <>
  
    <Routes>
      {/* <NavbarMenu/> */}
      <Route path="/" element ={<Home/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/Project" element ={<Project/>}/>
      <Route path="/Contact" element ={<Contact/>}/>      
      <Route path="/Certificates" element ={<Certificates/>}/>
      <Route path="/Internship" element ={<Internship/>}/>
      {/* <Footer/> */}
    </Routes>
    </>
  );
}

export default App;
