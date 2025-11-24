import React, { useEffect, useState } from "react";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";
import { axiosReq } from "../../api/axiosDefaults";

const League = () => {
  const [loaded, setLoaded] = useState(false);
  const [sessionItems, setSessionItems] = useState([]);
  const [leaderboards, setLeaderboards] = useState();
  const league = JSON.parse(localStorage.getItem("leagueToken"));

  const handleMount = async () => {
    try {
      var { data } = await axiosReq.get(`/exec?sheetname=PARTICIPANTS&q=${league.id}&f=league`);
      setLeaderboards(data);
      var { data } = await axiosReq.get(`/exec?sheetname=SESSIONS&q=${league.id}&f=league`);
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
