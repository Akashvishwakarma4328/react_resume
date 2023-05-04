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
      <HeroimageProject Heading="PROJECTS" Text="Some of my recent works" />
      <div className='flexContainer'>
        <WorkCard ProjectName="Online Compiler" SRC="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0OTA4MzI1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <WorkCard ProjectName="Wheather Prediction" SRC="https://plus.unsplash.com/premium_photo-1678939631583-cc920a28ec64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <WorkCard ProjectName="E-Comerce Website" SRC="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbWVyY2UlMjB3ZWJzaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        <WorkCard ProjectName="House Price Prediction" SRC="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjBwcmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <WorkCard ProjectName="To-Do-List" SRC="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </div>
      <Footer />
    </div>
  )
}

export default Project