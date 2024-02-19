
// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WelcomeBanner from './WelcomeBanner';
import FormComponent from '../components/FormComponent';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return(
    <div>
      <div>
        <WelcomeBanner />
      </div>      
      <div>
      <FormComponent onSubmit={handleFormSubmit} />
        <Link
          to={{
            pathname: '/confirmation',
            state: formData,
          }}
        >

        </Link>
      </div>
    </div>
  );
  /*
  return (
    <div className="signup-page">
      <div className="left-section">
        <img className="background-image" src={require('../images/background.png')} alt="Background" />
        <img className="marvel-logo" src={require('../images/MarvelLogo.png')} alt="Marvel Logo" />
      </div>

      <div className="right-section">
        <h1 className="account-signup">Account Sign-up</h1>
        <p className="welcome-message">
          Welcome! You can sign-up using email and a company name.
        </p>
        <FormComponent onSubmit={handleFormSubmit} />
        <Link
          to={{
            pathname: '/confirmation',
            state: formData,
          }}
        >

        </Link>
      </div>
    </div>
  );
  */
};

export default SignUpPage;

