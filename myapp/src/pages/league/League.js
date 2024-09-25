import React, { useEffect, useState } from "react";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";

const League = () => {
  const [loaded, setLoaded] = useState(false);
  const [sessionItems, setSessionItems] = useState([]);
  const [leaderboards, setLeaderboards] = useState();
  const league = JSON.parse(localStorage.getItem("leagueToken"));

  const handleMount = async () => {
    try {
      const { leaderboardAPI } = await axiosAPI.post(
        `/exec?e=PARTICIPANTS&q=${league.id}&f=league`
      );
      var { data } = await axiosReq.get();
      setLeaderboards(data);
      const { sessionAPI } = await axiosAPI.post(
        `/exec?e=SESSIONS&q=${league.id}&f=league`
      );
      var { data } = await axiosReq.get();
      setSessionItems(data.data);
      setLoaded(true);
    } catch (error) {}
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="grid">
      <Leaderboard {...leaderboards}/>
      {sessionItems.map((session) => (
        <SessionItems key={session.id} {...session} />
      ))}
    </div>
  );
};

export default League;
