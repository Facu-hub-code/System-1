// ConfirmationPage.js

import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.company_name || !state.email) {
    // Si los datos requeridos no están presentes, redirigir al usuario a la página de sign-up
    return <Navigate to="/" />;
  }


  return (
    <div>
      <h2>Tus datos han sido correctamente ingresados</h2>
      <p>Puedes revisar tu email donde te enviamos el link a la página del formulario.</p>
    </div>
  );
}

export default ConfirmationPage;