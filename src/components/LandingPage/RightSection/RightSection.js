import React from 'react';
import './RightSection.css';
import petals1 from '../../../assets/petals1.svg';
 import eye from '../../../assets/eye.svg';

export default function RightSection() {
  return (
    <div className="backgroundSection">
      <div className="row rightContainer">
        <div className="loginForm">
          <img className="petals" src={petals1} alt="petals" />
          <h1 className="heading">Welcome Back</h1>
          <p className="info-col">Glad to see you, Again</p>
        </div>
        <div className="col2">
          <form className="form">
             <div className="formInput ">
              <input  type="email" placeholder="Enter your email" required />
                </div>
               <div className="formInput">
              <input  type="password" placeholder="Enter your password" required />
              <img className="eye" src={eye} alt="eye"></img> 
              </div>
         </form>
          <p className="password">Forget Password</p>
          <button className="loginBtn">Log In</button>
        </div>
        <div col="col3" className="footerRight">
          <p>Don't have an account yet? Sign Up</p>
        </div>
      </div>
    </div>
  )
}
