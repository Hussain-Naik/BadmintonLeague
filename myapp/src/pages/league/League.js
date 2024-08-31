import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import CreateSession from "../session/CreateSession";
import { useLeagueContext } from "../../context/LeagueContext";
import { useSessionContext } from "../../context/SessionContext";
import { removeSessionToken } from "../../utils/utils";

const League = () => {
  const [visible, setVisible] = useState(false);
  const { leagueContext, setLeagueContext } = useLeagueContext();
  const { sessionContext, setSessionContext } = useSessionContext();
  console.log(leagueContext);

  const handleMount = () => {
    setSessionContext(null);
    removeSessionToken();
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div>
      <p>League Leaderboard {leagueContext}</p>
      <Button
        label="Session"
        icon="pi pi-plus"
        onClick={() => {
          setVisible(true);
        }}
      />
      <CreateSession visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default League;
