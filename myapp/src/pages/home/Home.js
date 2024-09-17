import React, { useEffect, useState } from "react";
import LeagueItems from "../league/LeagueItems";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";

const Home = () => {
  const [loaded, setLoaded] = useState(false)
  const [leagueList, setLeagueList] = useState([])

  const handleMount = async () => {
    try {
      const { post } = await axiosAPI.post('/exec?e=LEAGUE')
      const { data } = await axiosReq.get();
      setLeagueList(data.data)
      setLoaded(true)
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
