import React from "react";

const TextInput = ({ value, validationMessage, onChange, ...props }) => (
  <React.Fragment>
    <input
      type="text"
      className={
        "form-control form-control-sm" +
        (validationMessage !== "" ? " is-invalid" : "")
      }
      value={value}
      onChange={onChange}
      {...props}
    />
    {validationMessage !== "" && (
      <div className="invalid-feedback">{validationMessage}</div>
    )}
  </React.Fragment>
);

export default TextInput;
