import * as types from "./types";
import { taskTemplate, inputTypes } from "./templates";

const initialState = {
  nextID: 2,
  tasks: {
    "1": taskTemplate("1")
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [state.nextID.toString()]: taskTemplate(state.nextID.toString())
        },
        nextID: state.nextID + 1
      };

    case types.REMOVE_TASK:
      const { [action.id]: value, ...tasks } = state.tasks;
      return { ...state, tasks };

    case types.CLEAR_ALL_TASKS:
      return initialState;

    case types.EDIT_TASK_VALUE:
      const currentValue = state.tasks[action.id][action.key];
      const currentInputType = inputTypes[currentValue.type];
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.id]: {
            ...state.tasks[action.id],
            [action.key]: {
              ...currentValue,
              value: action.value,
              validationMessage: currentInputType.validation.test(action.value)
                ? ""
                : currentInputType.errorMessage
            }
          }
        }
      };

    default:
      return state;
  }
}

export default reducer;
