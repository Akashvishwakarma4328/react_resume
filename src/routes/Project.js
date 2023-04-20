import React from 'react'
import NavbarMenu from "../component/NavbarMenu";
import Footer from "../component/Footer";
import HeroimageProject from "../component/HeroimageProject";
import WorkCard from "../component/WorkCard";
import "./Project.css";
const Project = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroimageProject  Heading = "PROJECTS" Text = "Some of my recent works"/>
      <div className='flexContainer'>
        <WorkCard ProjectName = "Online Compiler"/>
        <WorkCard ProjectName = "Wheather Prediction"/>
        <WorkCard ProjectName = "E-Comerce Website"/>
        <WorkCard ProjectName = "House Price Prediction"/>
        <WorkCard ProjectName = "House Price Prediction"/>
      </div>
      <Footer />
    </div>
  )
}

export default Project