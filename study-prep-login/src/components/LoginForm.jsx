import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="login-button">Login</button>
    </div>
  );
}

export default LoginForm;
