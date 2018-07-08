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
