import { createSelector } from "reselect";

const getTask = (state, props) => state.tasks[props.taskID];

export const makeGetTask = () => {
  return createSelector([getTask], tasks => tasks);
};
