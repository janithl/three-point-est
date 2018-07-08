import React from "react";
import { connect } from "react-redux";

import { editTaskValue, removeTask } from "./actions";
import { makeGetTask } from "./selectors";
import TextInput from "../common/TextInput";

const TaskRowFields = {
  id: { placeholder: "ID", size: "1", disabled: true },
  taskName: { placeholder: "Task Name", size: "3" },
  bestCase: { placeholder: "Best Case", size: "1", type: "number" },
  mostLikely: { placeholder: "Most Likely", size: "1", type: "number" },
  worstCase: { placeholder: "Worst Case", size: "1", type: "number" }
};

const calculateEstimate = task =>
  (parseFloat(task.bestCase.value) +
    parseFloat(task.mostLikely.value) * 4 +
    parseFloat(task.worstCase.value)) /
  6.0;

const TaskRow = ({ task, editTask, removeTask }) => (
  <div className="form-row">
    {Object.keys(task).map(field => (
      <div key={field} className={"col-md-" + TaskRowFields[field].size}>
        <TextInput
          value={task[field].value}
          validationMessage={task[field].validationMessage}
          onChange={e => editTask(field, e.target.value)}
          placeholder={TaskRowFields[field].placeholder}
          disabled={TaskRowFields[field].disabled}
          type={TaskRowFields[field].type}
        />
      </div>
    ))}
    <div className="col-md-1">
      <TextInput
        value={calculateEstimate(task)}
        validationMessage=""
        onChange={e => {}}
        disabled
      />
    </div>
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={removeTask}
    >
      &times;
    </button>
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
  editTask: (key, value) => dispatch(editTaskValue(props.taskID, key, value)),
  removeTask: () => dispatch(removeTask(props.taskID))
});

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(TaskRow);
