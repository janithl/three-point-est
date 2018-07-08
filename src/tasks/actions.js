import * as types from "./types";

export function addTask() {
  return {
    type: types.ADD_TASK
  };
}

export function removeTask(id) {
  return {
    type: types.REMOVE_TASK,
    id
  };
}

export function editTaskValue(id, key, value) {
  return {
    type: types.EDIT_TASK_VALUE,
    id,
    key,
    value
  };
}

export function clearAllTasks() {
  if (window.confirm("Are you sure you want to Remove All Tasks?")) {
    return {
      type: types.CLEAR_ALL_TASKS
    };
  } else {
    return { type: "NOOP" };
  }
}
