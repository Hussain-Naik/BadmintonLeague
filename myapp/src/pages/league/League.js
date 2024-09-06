import React, { useEffect, useState } from "react";
import SessionItems from "../session/SessionItems";
import Leaderboard from "./Leaderboard";
import { axiosReq } from "../../api/axiosDefaults";

const League = () => {
  const [loaded, setLoaded] = useState(false)
  const [sessionItems, setSessionItems] = useState([])

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get();
      setSessionItems(data.data)
      setLoaded(true)
      console.log(data.data)
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
