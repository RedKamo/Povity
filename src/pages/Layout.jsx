import React from 'react';
import Header from '../components/Header';
//import Sidebar from '../components/Sidebar';
import Home_Layout from '../pages/Home_Layout';

const Layout = ()=>{
  return(
    <div className="layout_container">
      <React.Fragment>
        <Header/>
        <Home_Layout/>
      </React.Fragment>
     
    </div>
  )
}

export default Layout;