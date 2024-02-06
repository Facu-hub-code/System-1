
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
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
        <MyForm
          onSuccess={data => {
            console.log('Formulario enviado con éxito');
            console.log(data);
          }}
          onError={error => {
            console.log('Error al enviar el formulario');
            console.log(error);
          }}
        />
    </div>
    );
}

export default App;