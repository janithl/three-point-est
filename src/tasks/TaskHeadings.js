import React from "react";
import { taskRowFields } from "./templates";

const TaskHeadings = () => (
  <div className="form-row">
    {Object.keys(taskRowFields).map(field => (
      <div key={field} className={"col-md-" + taskRowFields[field].size}>
        <small>{taskRowFields[field].placeholder.toUpperCase()}</small>
      </div>
    ))}
    <div className="col-md-1">
      <small>ESTIMATE</small>
    </div>
  </div>
);

export default TaskHeadings;
