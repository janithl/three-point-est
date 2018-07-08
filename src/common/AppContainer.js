import React from "react";
import { connect } from "react-redux";

import { addTask, clearAllTasks } from "../tasks/actions";

import TaskStats from "../tasks/TaskStats";
import TaskHeadings from "../tasks/TaskHeadings";
import TaskRow from "../tasks/TaskRow";

export const AppContainer = ({ tasks, addTask, clearAllTasks }) => (
  <div className="container">
    <TaskStats />
    <div className="p-3" />
    <form>
      <TaskHeadings />
      {Object.keys(tasks).map(taskID => (
        <TaskRow key={taskID} taskID={taskID} />
      ))}
      <div className="p-3" />
      <div className="form-row">
        <div className="col-md-8" />
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-outline-secondary btn-block"
            onClick={addTask}
          >
            Add New Task
          </button>
        </div>
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={clearAllTasks}
          >
            Clear All
          </button>
        </div>
      </div>
    </form>
  </div>
);

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

const mapDispatchToProps = dispatch => ({
  addTask: () => dispatch(addTask()),
  clearAllTasks: () => dispatch(clearAllTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
