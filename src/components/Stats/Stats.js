import React from "react";
import "./styles.scss";

const Stats = ({ stats }) => {
  if (!stats) {
    return <span className="stats">Loading...</span>;
  }
  return (
    <span className="stats">
      {stats.error && "Error!"}
      {stats.isLoading && "Loading..."}
      {stats.views !== null && `${stats.views}`}
    </span>
  );
};

export default Stats;
