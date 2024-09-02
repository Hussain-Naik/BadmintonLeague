import React, { useEffect, useState } from "react";
import LeagueItems from "../league/LeagueItems";

const Home = () => {

  const handleMount = () => {};

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="grid">
      <LeagueItems />
    </div>
  );
};

export default Home;
