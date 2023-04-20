import React from 'react'
import NavbarMenu from "../component/NavbarMenu";
import Footer from "../component/Footer";
import HeroimageProject from "../component/HeroimageProject";
import WorkCard from "../component/WorkCard";
// import WorkCard from "../component/WorkCard";
const Certificates = () => {
  return (
    <div>
      <NavbarMenu/>
      <HeroimageProject  Heading = "Certificates" Text = "These are my Certificates"/>
      <WorkCard ProjectName = "java"/>
      <Footer/>
    </div>
  )
}

export default Certificates