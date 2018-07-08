import React from "react";

const StatCard = ({ stat, title }) => (
  <div className="col-sm-4">
    <div className="card text-right">
      <div className="card-body">
        <h1 className="display-4">{stat}</h1>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  </div>
);

export default StatCard;
