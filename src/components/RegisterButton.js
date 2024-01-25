import React from 'react';
import "../styles/RegisterButton.css";

const RegisterButton = () => {
  const handleRegister = () => {
    // Agrega aquí la lógica para manejar el registro
    console.log('Register button clicked!');
  };

  return (
    <button className="register-button" onClick={handleRegister}>
      <img className="register-button-image" src={require('../images/RegisterButton.png')} alt="Register Button" />
    </button>
  );
};

export default RegisterButton;