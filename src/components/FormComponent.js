import React, { useState } from 'react';
import '../styles/FormComponent.css'; 
const MyForm = () => {
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

    // Send form data to backend
    fetch('http://localhost:3002/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Backend reply:', data);
        
      })
      .catch(error => {
        console.error('Error while sending the data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input type="text" name="company_name" value={formData.company_name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );

};

export default MyForm;