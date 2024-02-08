import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormComponent.css'; 

const FormComponent = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',


  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('Backend reply:', data, data.redirectURL);
    
      if (data.redirectURL) {
        console.log(data.redirectURL);
        // Realiza la redirección pasando el estado como propiedad de state
        navigate('/confirmation', { state: formData });
      } else {
        console.log('No redirect URL');
      }
    } catch (error) {
      console.error('Error while sending the data:', error);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>

        company_name:


        <input type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

<<<<<<< HEAD
export default FormComponent;

=======
export default FormComponent;
>>>>>>> d6a2d8e (route /configuration  secured)
