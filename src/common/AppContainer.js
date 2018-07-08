import React from "react";
import { connect } from "react-redux";

import { addTask } from "../tasks/actions";

import TaskStats from "../tasks/TaskStats";
import TaskHeadings from "../tasks/TaskHeadings";
import TaskRow from "../tasks/TaskRow";

export const AppContainer = ({ tasks, addTask }) => (
  <div className="container">
    <TaskStats />
    <div className="p-3" />
    <form>
      <TaskHeadings />
      {Object.keys(tasks).map(taskID => (
        <TaskRow key={taskID} taskID={taskID} />
      ))}
      <div className="p-3" />
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
