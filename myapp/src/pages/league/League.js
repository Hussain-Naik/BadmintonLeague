import React, { useEffect, useState } from "react";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";

const League = () => {

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
