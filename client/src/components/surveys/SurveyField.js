import React from "react";

// Logic for rendering a single form field

export default ({ input, label, placeholder, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <p className="error">{touched && error}</p>
      <input {...input} placeholder={placeholder} />
    </div>
  );
};
