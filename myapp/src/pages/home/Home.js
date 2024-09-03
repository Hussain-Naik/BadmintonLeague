import React, { useEffect, useState } from "react";
import LeagueItems from "../league/LeagueItems";
import { axiosReq, sLeague } from "../../api/axiosDefaults";

const Home = () => {
  const [loaded, setLoaded] = useState(false)
  const [leagueList, setLeagueList] = useState([])

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get(sLeague);
      setLeagueList(data.data)
      setLoaded(true)
      console.log(data.data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    loaded ? 
    <div className="grid">
      {leagueList.map((league) => (<LeagueItems key={league.id} {...league}/>))}
      
    </div>
    : null
  );
};

export default Home;
