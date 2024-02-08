
import './App.css';
import { jwtDecode } from 'jwt-decode';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f0450db (fixed merge problems)
import { Routes, Route } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import ConfirmationPage from './components/ConfirmationPage';

<<<<<<< HEAD
=======
import GroupComponent from './components/GroupComponent'
import WelcomeBanner from './components/WelcomeBanner';
>>>>>>> ab87f3d (cambios esteticos)
=======
>>>>>>> f0450db (fixed merge problems)
function App() {
  console.log('Renderizando App');
  return (
    <div>
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
      /> */}
=======
      />
>>>>>>> f0450db (fixed merge problems)
=======
      /> */}
>>>>>>> d6a2d8e (route /configuration  secured)
      <Routes>
        <Route path="/" element={<SignUpComponent />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      
<<<<<<< HEAD


=======
      <div>
        <WelcomeBanner></WelcomeBanner>
      </div>
      <div>
        <GroupComponent></GroupComponent>
      </div>
>>>>>>> ab87f3d (cambios esteticos)
=======
  
>>>>>>> f0450db (fixed merge problems)
    </div>
    );
}

export default App;