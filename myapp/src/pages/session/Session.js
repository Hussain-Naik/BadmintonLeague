import React, { useEffect, useState } from "react";
import MatchItem from "../../components/MatchItem";
import Leaderboard from "./Leaderboard";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";

const Session = () => {
  const session = JSON.parse(localStorage.getItem("leagueSessionToken"));
  const [fixtures, setFixtures] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [leaderboards, setLeaderboards] = useState([]);

  const handleMountFixture = async () => {
    try {
      const { fixtureAPI } = await axiosAPI.post(
        `/exec?e=FIXTURES&q=${session.title}${session.count}&f=fixture_api`
      );
      var { data } = await axiosReq.get();
      
      setFixtures(data.data);
      console.log(data.data);
      const { leaderboardAPI } = await axiosAPI.post(
        `/exec?e=PLAYERS&q=${session.id}&f=session`
      );
      var {data} = await axiosReq.get();
      setLeaderboards(data);
      console.log(data);
      setLoaded(true);
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMountFixture();
  }, []);

  return (
    <div>
      <div className="grid">
        <Leaderboard {...leaderboards}/>
        <MatchItem />
      </div>
    </div>
  );
};

export default Session;
