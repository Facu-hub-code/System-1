<<<<<<< HEAD
<<<<<<< HEAD
// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormComponent from '../components/FormComponent';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

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
};

export default SignUpPage;
=======
import React from 'react';
=======
// SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> d6a2d8e (route /configuration  secured)
import FormComponent from '../components/FormComponent';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };
<<<<<<< HEAD
  
  export default SignUpPage;
>>>>>>> ab87f3d (cambios esteticos)
=======

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
};

export default SignUpPage;
>>>>>>> d6a2d8e (route /configuration  secured)
