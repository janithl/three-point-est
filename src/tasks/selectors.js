import { createSelector } from "reselect";

const getTask = (state, props) => state.tasks.tasks[props.taskID];

export const makeGetTask = () => {
  return createSelector([getTask], task => task);
};
