import React, { useEffect, useState } from "react";
import { useLeagueContext } from "../../context/LeagueContext";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";

const League = () => {
  const { leagueContext, setLeagueContext } = useLeagueContext();

  const handleMount = () => {};

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="grid">
      <Leaderboard />
      <SessionItems />
    </div>
  );
};

export default League;
