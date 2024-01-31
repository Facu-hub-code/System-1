import React from 'react';
import '../styles/SignUpPage.css';


const SignUpPage = () => {
    return (
      <div className="signup-page">
        <div className="left-section">
          {/* Background */}
          <img className="background-image" src={require('../images/background.png')} alt="Background" />
  
          {/* Logo */}
          <img className="marvel-logo" src={require('../images/MarvelLogo.png')} alt="Marvel Logo" />
        </div>
  
        <div className="right-section">
          <h1 className="account-signup">Account Sign-up</h1>
          <p className="welcome-message">
            Welcome! You can sign-up using email and a company name. Or using Google!
          </p>
        
        </div>
      </div>
    );
  };
  
  export default SignUpPage;