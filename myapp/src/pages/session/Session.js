import React from "react";
import MatchItem from "../../components/MatchItem";
import Leaderboard from "./Leaderboard";

const Session = () => {

  return (
    <div>
      <div className="grid">
        <Leaderboard />
        <MatchItem />
      </div>
    </div>
  );
};

export default Session;
