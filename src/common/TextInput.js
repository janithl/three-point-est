import React from "react";

const TextInput = ({ value, placeholder, validationMessage, onChange }) => (
  <React.Fragment>
    <input
      type="text"
      className={
        validationMessage !== "" ? "form-control is-invalid" : "form-control"
      }
      placeholder={placeholder}
      value={value}
    />
    {validationMessage !== "" && (
      <div class="invalid-feedback">{validationMessage}</div>
    )}
  </React.Fragment>
);

export default TextInput;
