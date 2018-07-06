import React from "react";

import TextInput from "./TextInput";

const EstimationRowFields = {
  id: { placeholder: "ID", size: "1", disabled: true },
  taskName: { placeholder: "Task Name", size: "3" },
  bestCase: { placeholder: "Best Case", size: "1", type: "number" },
  mostLikely: { placeholder: "Most Likely", size: "1", type: "number" },
  worstCase: { placeholder: "Worst Case", size: "1", type: "number" },
  estimate: {
    placeholder: "Estimate",
    size: "1",
    type: "number",
    disabled: true
  }
};

const calculateEstimate = task =>
  (parseFloat(task.bestCase.value) +
    parseFloat(task.mostLikely.value) * 4 +
    parseFloat(task.worstCase.value)) /
  6.0;

const EstimationRow = ({ task, updateTask }) => (
  <div className="form-row">
    {Object.keys(task).map(field => (
      <div key={field} className={"col-md-" + EstimationRowFields[field].size}>
        <TextInput
          value={
            field === "estimate" ? calculateEstimate(task) : task[field].value
          }
          validationMessage={task[field].validationMessage}
          onChange={e => updateTask(task.id.value, field, e.target.value)}
          placeholder={EstimationRowFields[field].placeholder}
          disabled={EstimationRowFields[field].disabled}
          type={EstimationRowFields[field].type}
        />
      </div>
    ))}
  </div>
);

export default EstimationRow;
