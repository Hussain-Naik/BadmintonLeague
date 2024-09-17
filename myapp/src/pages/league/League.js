import React, { useEffect, useState } from "react";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";

const League = () => {
  const [loaded, setLoaded] = useState(false)
  const [sessionItems, setSessionItems] = useState([])
  const league = JSON.parse(localStorage.getItem("leagueToken"));

  const handleMount = async () => {
    try {
      const { post } = await axiosAPI.post(`/exec?e=SESSIONS&q=${league.id}&f=league`);
      const { data } = await axiosReq.get();
      setSessionItems(data.data)
      setLoaded(true)
    } catch (error) {}
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="grid">
      <Leaderboard />
      {sessionItems.map((session) => (<SessionItems key={session.id} {...session}/>))}
    </div>
  );
};

export default League;
