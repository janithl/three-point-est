import * as types from "./types";
import { taskTemplate } from "./templates";

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

    case types.EDIT_TASK_VALUE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.id]: {
            ...state[action.id],
            [action.key]: {
              ...state[action.id][action.key],
              value: action.value
            }
          }
        }
      };

    default:
      return state;
  }
}

export default reducer;
