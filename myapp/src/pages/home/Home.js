import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import CreateLeague from "../league/CreateLeague";
import { useNavigate } from "react-router-dom";
import LeagueItems from "../league/LeagueItems";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleMount = () => {
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div>
      <div className='flex flex-row justify-content-between py-2'>
      <Button
        label="League"
        size="small"
        icon="pi pi-plus"
        onClick={() => {
          setVisible(true);
        }}
      />
      <Button
        label="League"
        size="small"
        icon="pi pi-plus"
        onClick={() => {
          setVisible(true);
        }}
      />
      </div>
      <div className="grid">
        <LeagueItems />
      </div>
      <CreateLeague visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Home;
