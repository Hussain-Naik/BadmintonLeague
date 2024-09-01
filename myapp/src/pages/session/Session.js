import React from "react";
import { useSessionContext } from "../../context/SessionContext";
import MatchItem from "../../components/MatchItem";
import Leaderboard from "./Leaderboard";

const Session = () => {
  const { sessionContext, setSessionContext } = useSessionContext();
  return (
    <div>
      <div className="grid">
        <Leaderboard />
        <MatchItem />
      </div>
    </div>
  );
};

export default Session;
