import React from 'react';
import '../styles/GroupComponent.css'; // Asegúrate de agregar el archivo de estilos
import FormComponent from './FormComponent'
import ImageFormComponent from './ImageFormComponent'; // Ajusta la importación del componente de imagen y formulario

const GroupComponent = () => {
  return (
    <div className="group-container">
      <div className="inner-container">
        <div className="left-section">
          {/* Componente de imagen */}
          <ImageFormComponent />
        </div>
        <div className="right-section">
          {/* Componente de formulario de registro */}
          <FormComponent
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
      </div>
    </div>
  );
};

export default GroupComponent;
