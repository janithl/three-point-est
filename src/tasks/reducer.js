import * as types from "./types";
import { taskTemplate } from "./templates";

const initialState = {
  "1": taskTemplate("1")
};

function reducer(state = initialState, action = {}) {
  console.log(state);
  switch (action.type) {
    case types.ADD_TASK:
      const nextID = (Object.keys(state).length + 1).toString();
      return {
        ...state,
        [nextID]: taskTemplate(nextID)
      };

    case types.EDIT_TASK_VALUE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.key]: action.value
        }
      };

    default:
      return state;
  }
}

export default reducer;
