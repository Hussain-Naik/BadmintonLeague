import React, { useEffect, useState } from "react";
import { useLeagueContext } from "../../context/LeagueContext";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";

const League = () => {
  const [visible, setVisible] = useState(false);
  const { leagueContext, setLeagueContext } = useLeagueContext();

  const handleMount = () => {};

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="grid">
      <Leaderboard setVisible={setVisible} />
      <SessionItems />
    </div>
  );
};

export default League;
