// WelcomeBanner.js
import React from 'react';
import '../styles/WelcomeBanner.css'; // Crea este archivo para los estilos

const WelcomeBanner = ({ username }) => {
  return (
    <div className="welcome-banner">
      <h1>Welcome to Marvel Advisors Secure Form!</h1>
      <p>Thank you for for choosing us.</p>
    </div>
  );
};

export default WelcomeBanner;
