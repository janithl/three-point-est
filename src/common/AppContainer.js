import React from "react";

import EstimationRow from "./EstimationRow";

const taskTemplate = id => ({
  id: id,
  taskName: "Task " + id,
  bestCase: 0,
  mostLikely: 0,
  worstCase: 0,
  estimate: 0
});

export default class AppContainer extends React.Component {
  state = {
    tasks: { "1": taskTemplate("1") }
  };

  render() {
    return (
      <div className="container">
        <form>
          {Object.values(this.state.tasks).map(task => (
            <EstimationRow task={task} />
          ))}
        </form>
      </div>
    );
  }
}
