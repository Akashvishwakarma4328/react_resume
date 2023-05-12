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
        <WorkCard ProjectName="Online Compiler" SRC="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0OTA4MzI1fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  Summary =" An online compiler project in React is a web-based platform that allows users to write, compile, and execute code in various programming languages in real-time through an intuitive user interface built using the React framework."/>
        <WorkCard ProjectName="Wheather Prediction" SRC="https://plus.unsplash.com/premium_photo-1678939631583-cc920a28ec64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Summary ="A weather prediction project in React is a web application that displays real-time weather information and forecasts for a particular location using API data and a user-friendly interface built using the React framework." />
        <WorkCard ProjectName="E-Comerce Website" SRC="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbWVyY2UlMjB3ZWJzaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" Summary ="An ecommerce website project in React is a web-based platform that allows users to browse, purchase, and manage products in an online store through an intuitive user interface built using the React framework." />
        <WorkCard ProjectName="House Price Prediction" SRC="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjBwcmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"  Summary ="A house price prediction project using machine learning is an application that utilizes historical data to generate predictions of the value of a residential property based on various features such as location, size, and amenities."/>
        <WorkCard ProjectName="To-Do-List" SRC="https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG8lMjBkbyUyMGxpc3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" Summary =" A to-do list project in React is a web-based application that enables users to create, manage, and prioritize their daily tasks and goals through an intuitive user interface built using the React framework." />
      </div>
      <Footer />
    </div>
  )
}

export default Project