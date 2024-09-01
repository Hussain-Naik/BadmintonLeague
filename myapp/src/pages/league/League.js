import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import CreateSession from "../session/CreateSession";
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
    <div>
      <div className="grid">
        <Leaderboard setVisible={setVisible}/>
        <SessionItems />
      </div>
      <CreateSession visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default League;
