
import './App.css';
import { jwtDecode } from 'jwt-decode';
import {  Route, Routes } from 'react-router-dom';


import SignUpPage from './components/SignUpPage';
import ConfirmationPage from './components/ConfirmationPage';
import MyForm from './MyForm';

function App() {
  console.log('Renderizando App');
  return (
    <div>
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