import React from "react";
import { connect } from "react-redux";

import { addTask } from "../tasks/actions";
import TaskRow from "../tasks/TaskRow";
/*
const field = (value, validation) => ({
  value,
  validation,
  validationMessage: ""
});

const taskTemplate = id => ({
  id: field(id, /^.+$/),
  taskName: field("Task " + id, /^.+$/),
  bestCase: field(0, /^\d+$/),
  mostLikely: field(0, /^\d+$/),
  worstCase: field(0, /^\d+$/),
  estimate: field(0, /^\d+$/)
});

export default class AppContainer extends React.Component {
  state = {
    tasks: { "1": taskTemplate("1") }
  };

  addRow = e => {
    this.setState((prevState, props) => {
      const nextID = (Object.keys(prevState.tasks).length + 1).toString();
      return {
        tasks: {
          ...prevState.tasks,
          [nextID]: taskTemplate(nextID)
        }
      };
    });
  };

  updateTask = (taskID, key, value) =>
    this.setState((prevState, props) => {
      return {
        tasks: {
          ...prevState.tasks,
          [taskID]: {
            ...prevState.tasks[taskID],
            [key]: this.updateField(prevState.tasks[taskID][key], value)
          }
        }
      };
    });

  updateField = (prevValue, value) => ({
    ...prevValue,
    value,
    validationMessage: prevValue.validation.test(value) ? "" : "Error"
  });

  render() {
    return (
      <div className="container">
        <form>
          {Object.keys(this.state.tasks).map(taskID => (
            <EstimationRow
              key={taskID}
              task={this.state.tasks[taskID]}
              updateTask={this.updateTask}
            />
          ))}
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.addRow}
          >
            Add New Task
          </button>
        </form>
      </div>
    );
  }
}
*/

export const AppContainer = ({ tasks, addTask }) => (
  <div className="container">
    <form>
      {Object.keys(tasks).map(taskID => (
        <TaskRow key={taskID} taskID={taskID} />
      ))}
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={addTask}
      >
        Add New Task
      </button>
    </form>
  </div>
);

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
