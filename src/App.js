// App.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import {  Route, Routes } from 'react-router-dom';


import SignUpPage from './components/SignUpPage';
import ConfirmationPage from './components/ConfirmationPage';
import MyForm from './MyForm';

function App() {
  console.log('Renderizando App');
  return (
    <div>
      {/* Adds the oauth google button */}
      <GoogleLogin
        className="google-login-button"
        onSuccess={credentialResponse => {
          const credentialResponseDecoded = jwtDecode(
            credentialResponse.credential
          );
          console.log(credentialResponseDecoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
}

export default App;
