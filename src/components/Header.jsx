import React from 'react';
import logop from '../assets/images/bg_p.png';

//imports react-icons
import {FaUserNinja} from 'react-icons/fa';

import '../assets/styles/Header.scss';

const Header = ()=>{
  return(
    <div className="header">
      <div className="header__logo">
        <img src={logop} alt=""/>
      </div>
      <div className="header__user">
        <div className="header__user--name">
        <div className="react-icons">< FaUserNinja /></div>
          <span>CAMILO SUAREZ</span>
        </div>
      </div>
    </div>
  )
}

export default Header;