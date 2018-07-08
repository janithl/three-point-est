import React from "react";
import { connect } from "react-redux";

import { calculateEstimate } from "./templates";
import StatCard from "../common/StatCard";

const TaskStats = ({ taskCount, totalEstimate }) => (
  <div className="row">
    <StatCard stat={"0 / " + taskCount} title={"Tasks Completed"} />
    <StatCard stat={totalEstimate.toFixed(2)} title={"Total Estimate"} />
  </div>
);

const mapStateToProps = state => ({
  taskCount: Object.keys(state.tasks.tasks).length,
  totalEstimate: Object.values(state.tasks.tasks).reduce(
    (prev, cur) => prev + calculateEstimate(cur),
    0.0
  )
});

export default connect(mapStateToProps)(TaskStats);
