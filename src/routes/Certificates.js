import React from 'react'
import NavbarMenu from "../component/NavbarMenu";
import Footer from "../component/Footer";
import HeroimageProject from "../component/HeroimageProject";
import WorkCard from "../component/WorkCard";
import dataStructure from"../Assets/Data Structure Certificate.jpg";
import machine from"../Assets/Machine Learning.jpg";
import DBMS  from"../Assets/DBMS Certificate.jpg";
import java from"../Assets/JavaFundation Certifiacte.jpg";
const Certificates = () => {
  return (
    <div>
      <NavbarMenu/>
      <HeroimageProject  Heading = "Certificates" Text = "These are my Certificates"/>
      <div className='flexContainer'>
        <WorkCard ProjectName = "Java" SRC={java}/>
        <WorkCard ProjectName = "Data Dtructure" SRC={dataStructure}/>
        <WorkCard ProjectName = "Front-End Development" SRC={java}/>
        <WorkCard ProjectName = "Machine Learning" SRC={machine}/>
        <WorkCard ProjectName = "DBMS" SRC={DBMS}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Certificates