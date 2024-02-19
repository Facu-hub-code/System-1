// WelcomeBanner.js
import React from 'react';
import '../styles/WelcomeBanner.css'; // Crea este archivo para los estilos

const WelcomeBanner = ({ username }) => {
  return (
    <div className="welcome-banner">
      <h1>Welcome to the Vendor Security Assessment Questionnaire!</h1>
      <img className="marvel-logo" src={require('../images/MarvelLogo.png')} alt="Marvel Logo" />
    </div>
  );
};

export default WelcomeBanner;
