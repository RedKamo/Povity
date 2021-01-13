import React from 'react';
//Components in this layout
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';

//styles
import '../assets/styles/Projects.scss';

const Home_Layout =()=>{
  return(
    <div className="home__container">
      <Sidebar/>
      <Projects/>
    </div>
  )
}

export default Home_Layout;