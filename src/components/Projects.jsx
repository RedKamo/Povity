import React from 'react';

//import react icons
import { FaPlus, FaTrash } from 'react-icons/fa';
//import { RiArrowDropUpLine , RiArrowDropDownLine  } from "react-icons/ri";
import { AiOutlineMore } from 'react-icons/ai';

//import styles
import '../assets/styles/Projects.scss';


const Projects =()=>{
  return(
    <div className="projects">
      <div className="projects__add">
        <input type="text" placeholder="Add your task here... " />
        <button><FaPlus /> Add</button>
      </div>
      <h3  className="project__title">TODAY TODO LIST</h3>
      <div className="projects__activities">
        <p className="projects__activities--title">Create login and register wireframes</p>        
        <span className="projects__activities--drop">04</span> 
        <div className="projects__activities--icons">
          <FaTrash/>
          <AiOutlineMore/>
        </div>
          
      </div>     
    </div>
  )
}
export default Projects;