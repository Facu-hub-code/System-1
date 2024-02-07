
import './App.css';
import { jwtDecode } from 'jwt-decode';
import { Routes, Route } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  console.log('Renderizando App');
  return (
    <div>
      {/* Adds the oauth google button */}
      {/* <GoogleLogin
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
      /> */}
      <Routes>
        <Route path="/" element={<SignUpComponent />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      
  
    </div>
    );
}

export default App;