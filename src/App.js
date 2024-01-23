import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function App() {
  return ( 
    <GoogleLogin
      onSuccess={credentialResponse => {
        const credentialResponseDecoded = jwtDecode(
          credentialResponse.credential
        );
        console.log(credentialResponseDecoded);
        console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}

export default App;
