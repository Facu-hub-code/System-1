import React from 'react';
import SignUpForm from './SignUpForm';
import '../styles/SignUpPage.css';
//import registerButtonImage from '../images/RegisterButton.png';
//import background from '../images/background.png';
//import marvelLogo from '../images/MarvelLogo.png';

const SignUpPage = () => {
    return (
      <div className="signup-page">
        <div className="left-section">
          {/* Fondo */}
          <img className="background-image" src={require('../images/background.png')} alt="Background" />
  
          {/* Logo */}
          <img className="marvel-logo" src={require('../images/MarvelLogo.png')} alt="Marvel Logo" />
        </div>
  
        <div className="right-section">
          <h1 className="account-signup">Account Sign-up</h1>
          <p className="welcome-message">
            Welcome! You can sign-up using email and a password, or using Google.
          </p>
  
          {/* Componente del formulario */}
          <SignUpForm />
        </div>
      </div>
    );
  };
  
  export default SignUpPage;