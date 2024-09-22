import React from 'react';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';
import RegisterButton from './components/RegisterButton';
import GuestButton from './components/GuestButton';
import Illustration from './components/Illustration';
import './App.css';
import Logo from './components/Logo';
import HomeButton from './components/HomeButton';

function App() {
  return (
    <>
    <div className='header'>
      <Logo/>
      <HomeButton/>
    </div>
    <div className="app">
      <div className="illustration-container">
        <Illustration />
      </div>
      <div className="login-container">
        <LoginForm />
        <SocialLogin />
        <RegisterButton />
        <GuestButton />
      </div>
    </div>
    </>
  );
}

export default App;
