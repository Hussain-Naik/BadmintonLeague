import React, { useState } from "react";
import Team from "./Team";

const MatchItem = (props) => {
  const { data } = Object.values(props);
  console.log(Object.values(props))
  const [team, setTeam] = useState({
    team1: {
      team: [
        Object.values(props).filter(
          (game) =>
            game.team === 1
        ),
      ],
    },
    team2: {
      team: [
        Object.values(props).filter(
          (game) =>
            game.team === 2
        ),
      ],
    },
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
export default MatchItem;
