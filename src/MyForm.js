import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/MyForm.css'; 

const MyForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
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
        // Realiza la redirección utilizando useHistory
        navigate(data.redirectURL);
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

export default MyForm;
