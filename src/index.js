import React from 'react';
import App from './App';
import SignUpPage from './components/SignUpPage';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MyForm from './MyForm';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <>
        <App />
      </>
    </GoogleOAuthProvider>
  </BrowserRouter>
);

reportWebVitals();
