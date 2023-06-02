import React from 'react';
import './LeftSection.css';
import rectangle15 from '../../../assets/rectangle15.svg';
import footer from '../../../assets/footer.svg';
import rectangle3 from '../../../assets/rectangle3.svg';
import rectangle2 from '../../../assets/rectangle2.svg';
import Linkedin from '../../../assets/Linkedin.svg';
import Facebook from '../../../assets/Facebook.svg';
import insta from '../../../assets/insta.svg';


export default function LeftSection() {
  return (
    <div className="leftBackground">
        <div className="row leftContainer">
        <div className="col1">
          <div className="header">
            <h2 className="textWhite">exo</h2>
          </div>
        </div>

        <div className="col2">
          <div className="info textWhite">
            <h2 className="infoHeader">100% Uptime😎</h2>
            <p className="infoText">Zero Infrastructure Managment</p>
            <div>
              <img  class="rectangle3" src={rectangle3} alt="rectangle"></img>
              <img  class="rectangle2" src={rectangle2} alt="rectangle"></img>
              <img  class="rectangle1" src={rectangle2} alt="rectangle"></img>
            </div>
          </div>
        </div>

        <div className="col3">
          <div className="footer">
            <img className="footerleft" src={footer} alt="footerleft"></img>
            <div className="socialIcons">
              <img className="linkedin" src={Linkedin} alt="Linkedin"></img>
              <img className="facebook" src={Facebook} alt="facebook"></img>
              <img className="insta" src={insta} alt="insta"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
