import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import CreateLeague from "../league/CreateLeague";
import { useLeagueContext } from "../../context/LeagueContext";
import { useNavigate } from "react-router-dom";
import { removeLeagueToken } from "../../utils/utils";
import LeagueItems from "../league/LeagueItems";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const { leagueContext, setLeagueContext } = useLeagueContext();
  const navigate = useNavigate();

  const handleMount = () => {
    setLeagueContext(null);
    removeLeagueToken();
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div>
      <Button
        label="League"
        size="small"
        icon="pi pi-plus"
        onClick={() => {
          setVisible(true);
        }}
      />
      <div className="grid m-2">
        <LeagueItems />
      </div>
      <CreateLeague visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Home;
