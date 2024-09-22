import React, { useState } from "react";
import Team from "./Team";

const FixtureItem = ({ props, gameInc, setGames }) => {
  const { data } = JSON.parse(localStorage.getItem("sessionLeaderboard"));
  const session = JSON.parse(localStorage.getItem("leagueSessionToken"));
  const {
    team1_player1_index,
    team1_player2_index,
    team2_player1_index,
    team2_player2_index,
  } = props;
  const [sheetData, setSheetData] = useState([
    {
      session: session.id,
      name: gameInc,
      team: 1,
      player: data.filter((player) => player.seed === team1_player1_index)[0]
        .player,
      win: 0,
    },
    {
      session: session.id,
      name: gameInc,
      team: 1,
      player: data.filter((player) => player.seed === team1_player2_index)[0]
        .player,
      win: 0,
    },
    {
      session: session.id,
      name: gameInc,
      team: 2,
      player: data.filter((player) => player.seed === team2_player1_index)[0]
        .player,
      win: 0,
    },
    {
      session: session.id,
      name: gameInc,
      team: 2,
      player: data.filter((player) => player.seed === team2_player2_index)[0]
        .player,
      win: 0,
    },
  ]);

  const [team, setTeam] = useState({
    team1: {
      team: [
        data.filter(
          (player) =>
            player.seed === team1_player1_index ||
            player.seed === team1_player2_index
        ),
      ],
    },
    team2: {
      team: [
        data.filter(
          (player) =>
            player.seed === team2_player1_index ||
            player.seed === team2_player2_index
        ),
      ],
    },
  });

  const handleClick = (arg) => {
    const team1 = sheetData.filter((player) => player.team === 1);
    const team2 = sheetData.filter((player) => player.team === 2);
    if (arg === 1) {
      team1.map((player) => (player.win = 1));
      team2.map((player) => (player.win = 0));
    } else {
      team2.map((player) => (player.win = 1));
      team1.map((player) => (player.win = 0));
    }
    setGames((prevState) => [...prevState, sheetData]);
  };

  return (
    <div className="col-12 lg:col-6">
      <div className="flex justify-content-between align-items-center surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="flex-grow-1" onClick={() => handleClick(1)}>
          <Team {...team.team1} />
        </div>
        <span>VS</span>
        <div className="flex-grow-1" onClick={() => handleClick(2)}>
          <Team {...team.team2} />
        </div>
      </div>
    </div>
  );
};

export default FixtureItem;
