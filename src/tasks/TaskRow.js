import React from "react";
import { connect } from "react-redux";

import { editTaskValue } from "./actions";
import { makeGetTask } from "./selectors";
import TextInput from "../common/TextInput";

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

const TaskRow = ({ task, editTask }) => (
  <div className="form-row">
    {Object.keys(task).map(field => (
      <div key={field} className={"col-md-" + EstimationRowFields[field].size}>
        <TextInput
          value={
            field === "estimate" ? calculateEstimate(task) : task[field].value
          }
          validationMessage={task[field].validationMessage}
          onChange={e => editTask(field, e.target.value)}
          placeholder={EstimationRowFields[field].placeholder}
          disabled={EstimationRowFields[field].disabled}
          type={EstimationRowFields[field].type}
        />
      </div>
    ))}
  </div>
);

const makeMapStateToProps = () => {
  const getTask = makeGetTask();
  const mapStateToProps = (state, props) => ({
    task: getTask(state, props)
  });

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, props) => ({
  editTask: (key, value) => dispatch(editTaskValue(props.taskID, key, value))
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(TaskRow);
