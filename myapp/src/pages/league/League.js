import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import CreateSession from "../session/CreateSession";
import { useLeagueContext } from "../../context/LeagueContext";
import { useSessionContext } from "../../context/SessionContext";
import { removeSessionToken } from "../../utils/utils";
import SessionItems from "../session/SessionItems";

const League = () => {
  const [visible, setVisible] = useState(false);
  const { leagueContext, setLeagueContext } = useLeagueContext();
  const { sessionContext, setSessionContext } = useSessionContext();

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
      <div className="flex flex-row justify-content-between py-2">
        <Button
          label="Session"
          icon="pi pi-plus"
          onClick={() => {
            setVisible(true);
          }}
        />
      </div>
      <div className="grid">
        <SessionItems />
      </div>
      <CreateSession visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default League;
