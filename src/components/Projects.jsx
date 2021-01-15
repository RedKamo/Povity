import React from 'react';

//import react icons
import { FaPlus } from 'react-icons/fa';
import { RiArrowDropUpLine , RiArrowDropDownLine  } from "react-icons/ri";


//import styles
import '../assets/styles/Projects.scss';


const Projects =()=>{
  return(
    <div className="projects">
      <div className="projects__add">
        <input type="text" placeholder="Add your task here... " />
        <button><FaPlus /> Add</button>
      </div>
      <h1  className="project__title">TODAY TODO LIST</h1>
      <div className="projects__activities">
        <p className="projects__activities--title">Create login and register wireframes</p>
        <div className="projects__activities--drop">
          <span>04</span>
          <div className="projects__activities--arrows">
          <RiArrowDropUpLine/><RiArrowDropDownLine/> 
          </div>
          
        </div>
      </div>     
    </div>
  )
}
export default Projects;