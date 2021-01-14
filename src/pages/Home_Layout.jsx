import React from 'react';
//Components in this layout
import Sidebar from '../components/Sidebar';
import Projects from '../components/Projects';
import Timer from '../components/Timer';

//styles

import '../assets/styles/Home_Layout.scss';

const Home_Layout =()=>{
  return(
    <div className="home__container">
      <Sidebar/>
      <Projects/>
      <Timer/>
    </div>
  )
}

export default Home_Layout;