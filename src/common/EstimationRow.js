import React from "react";

import TextInput from "./TextInput";

const EstimationRow = ({ title }) => (
  <div className="form-row">
    <div className="col-md-2">
      <TextInput
        value="hello"
        placeholder="best-case"
        validationMessage="incorrect"
        onChange={() => {}}
      />
    </div>
    <div className="col-md-2">
      <TextInput
        value="hello"
        placeholder="best-case"
        validationMessage="incorrect"
        onChange={() => {}}
      />
    </div>
    <div className="col-md-2">
      <TextInput
        value="hello"
        placeholder="best-case"
        validationMessage="incorrect"
        onChange={() => {}}
      />
    </div>
  </div>
);

export default EstimationRow;
