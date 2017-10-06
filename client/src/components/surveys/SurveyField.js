import React from 'react';

// Logic to render a single field

export default ({input, label, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} /> 
    </div>
  );
};