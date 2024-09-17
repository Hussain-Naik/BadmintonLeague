import React, { useEffect, useState } from "react";
import MatchItem from "../../components/MatchItem";
import Leaderboard from "./Leaderboard";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";

const Session = () => {
  const session = JSON.parse(localStorage.getItem("leagueSessionToken"));
  const [fixtures, setFixtures] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [Leaderboards, setLeaderboards] = useState([]);

  const handleMount = async () => {
    console.log(session);
    try {
      const { fixtureAPI } = await axiosAPI.post(
        `/exec?e=FIXTURES&q=${session.title}${session.count}&f=fixture_api`
      );
      const { data } = await axiosReq.get();
      // const { leaderboardAPI } = await axiosAPI.post(
      //   `/exec?e=PLAYERS&q=${session.id}&f=session`
      // );
      // const { scoreboard } = await axiosReq.get();
      // setLeaderboards(scoreboard.data);
      // setFixtures(fixture.data);
      setLoaded(true);
      console.log(data.data);
      // console.log(scoreboard.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

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
