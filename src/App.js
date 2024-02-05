
import './App.css';
import { jwtDecode } from 'jwt-decode';
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
