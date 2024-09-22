import React from 'react';
import './Illustration.css';
import illustration from '../assets/image.png';

function Illustration() {
  return (
    <div className="illustration">
      <img src={illustration} alt="Study Illustration" />
    </div>
  );
}

export default Illustration;
