
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignUpComponent from './components/SignUpComponent';
import ConfirmationPage from './components/ConfirmationPage';

function App() {
  console.log('Renderizando App');
  return (
    <div>

      <Routes>
        <Route path="/" element={<SignUpComponent />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </div>
    );
}

export default App;