import React from "react";

import TextInput from "./TextInput";

const EstimationRowFields = {
  id: { placeholder: "ID", size: "1" },
  taskName: { placeholder: "Task Name", size: "3" },
  bestCase: { placeholder: "Best Case", size: "1" },
  mostLikely: { placeholder: "Most Likely", size: "1" },
  worstCase: { placeholder: "Worst Case", size: "1" },
  estimate: { placeholder: "Estimate", size: "1", disabled: true }
};

const EstimationRow = ({ task }) => (
  <div className="form-row">
    {Object.keys(task).map(field => (
      <div className={"col-md-" + EstimationRowFields[field].size}>
        <TextInput
          value={task[field]}
          validationMessage=""
          onChange={() => {}}
          placeholder={EstimationRowFields[field].placeholder}
          disabled={EstimationRowFields[field].disabled}
        />
      </div>
    ))}
  </div>
);

export default EstimationRow;
