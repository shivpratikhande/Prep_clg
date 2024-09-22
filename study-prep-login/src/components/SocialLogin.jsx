import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import './SocialLogin.css';
import google from '../assets/google.png';

function SocialLogin() {
  return (
    <div className="social-login">
      <p>Continue With</p>
      <div className="social-buttons">
        {/* <FontAwesomeIcon icon={faGoogle} size="2x" className="icon" /> */}
        <button><img src={google} alt="Google" /></button>
        {/* <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
        <FontAwesomeIcon icon={faApple} size="2x" className="icon" /> */}
      </div>
    </div>
  );
}

export default SocialLogin;
