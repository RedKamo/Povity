import React from 'react';

import '../assets/styles/Sidebar.scss';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';

import { Link, BrowserRouter, Route } from 'react-router-dom';
//import Today from '../components/Today';
import Today from '../components/TodayContainer/Today'

const Sidebar =()=>{
  return(
    <BrowserRouter>
     <div className="sidebar">
        <div className="sidebar__container">
          <div className="sidebar__container__menu">
            <ul>
              <li className="today"><Link to="/today"> Today Task </Link></li>
              <li>React Project</li>
              <li>Angular Project</li>
              <li>Github OpenSource Project</li>
              <li>Web Portfolio</li>
            </ul>
          </div>
          <div className="sidebar__container__footer">
            <ul>
              <li className="today">Add new project <FaPlus /></li>
              <li className="set">Settings <RiSettings5Fill /></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar__projects">
        <Route exact path="/today" component={Today} />
      </div>      
    </BrowserRouter>
  )
}

export default Sidebar;