import React from 'react';
import RegisterButton from './RegisterButton'; // Import the RegisterButton component
import '../styles/SignUpForm.css'; // Import the missing CSS file

const SignUpForm = () => {
    return (
        <div className="signup-form">
            <label htmlFor="email">Email Address</label>
            <div className="email-input">
                <img className="email-image" src={require('../images/emailRectangle.png')} alt="Email Rectangle" />
                <input type="text" id="email" placeholder="Enter your email" />
            </div>

            <label htmlFor="password">Password</label>
            <div className="password-input">
                <img className="password-image" src={require('../images/PasswordRectangle.png')} alt="Password Rectangle" />
                <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <RegisterButton />
        </div>
    );
};

export default SignUpForm;
