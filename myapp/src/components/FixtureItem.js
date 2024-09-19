import React, { useState } from "react";
import Team from "./Team";

const FixtureItem = (props) => {
  const { data } = JSON.parse(localStorage.getItem("sessionLeaderboard"));
  const {
    team1_player1_index,
    team1_player2_index,
    team2_player1_index,
    team2_player2_index,
  } = props;
  const [team, setTeam] = useState({
    team1: {team:[
      data.filter(
        (player) =>
          player.seed === team1_player1_index ||
          player.seed === team1_player2_index
      ),
    ]},
    team2: {team:[
      data.filter(
        (player) =>
          player.seed === team2_player1_index ||
          player.seed === team2_player2_index
      ),
    ]},
  });
  return (
    <div className="col-12 lg:col-6">
      <div className="flex justify-content-between align-items-center surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <Team {...team.team1} />
        <span>VS</span>
        <Team {...team.team2} />
      </div>
    </div>
  );
};

export default FixtureItem;
