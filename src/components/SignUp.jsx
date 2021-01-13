import React from 'react';

import '../assets/styles/SignUp.scss';
//import login_image from '../assets/images/login_image.png'
import test2 from '../assets/images/test2.png';
//import sgm from '../assets/images/sgm.png';
//import rlogo from '../assets/images/rlogo.png';
import bg_py from '../assets/images/bg_py.png';

const SignUp =()=>{

  return(
    <React.Fragment>
      <div className="login">
        <div className="login__image">
          <img src={test2} alt=""/>
          <h1>Sorry! I need you to sign up first.</h1>
        </div>
        <div className="login__form">
          <form className="login__form--wrapper" action="">
          <img src={bg_py} alt=""/>
            <h3>Create Your Free Account</h3>
            <p>Already have an account?</p>
            <div className="login__form--wrapper__label">
              <input 
                id="name"
                type="text" 
                name="name"
                placeholder="Your Name" 
                required 
                />
            </div>
            <div className="login__form--wrapper__label">
              <input
                id="email"  
                type="email" 
                name="email"
                placeholder="Email Andress"
                required
              />
            </div>
            <div className="login__form--wrapper__label">
              <input
                id="password" 
                type="password" 
                name="password"
                placeholder="Your Password"
              />
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
  </React.Fragment>
  )
}
export default SignUp;