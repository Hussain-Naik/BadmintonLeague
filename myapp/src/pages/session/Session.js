import React, { useEffect, useState } from "react";
import FixtureItem from "../../components/FixtureItem";
import Leaderboard from "./Leaderboard";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";
import { setSessionLeaderboard } from "../../utils/utils";

const Session = () => {
  const session = JSON.parse(localStorage.getItem("leagueSessionToken"));
  const [fixtures, setFixtures] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [leaderboards, setLeaderboards] = useState(
    JSON.parse(localStorage.getItem("sessionLeaderboard"))
  );
  const [games ,setGames] = useState([])

  const handleMount = async () => {
    console.log(leaderboards);
    try {
      const { fixtureAPI } = await axiosAPI.post(
        `/exec?e=FIXTURES&q=${session.title}${session.count}&f=fixture_api`
      );
      var { data } = await axiosReq.get();

      setFixtures(data.data);
      const { leaderboardAPI } = await axiosAPI.post(
        `/exec?e=PLAYERS&q=${session.id}&f=session`
      );
      var { data } = await axiosReq.get();
      setLeaderboards(data);
      setSessionLeaderboard(data);
      const { matchAPI } = await axiosAPI.post(
        `/exec?e=MATCH&q=${session.id}&f=session`
      );
      var { data } = await axiosReq.get();
      console.log(data.data)
      setGames(data.data)
      setLoaded(true);
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
        <Leaderboard {...leaderboards} />
        {fixtures.map((set, index) =>
          index === 1 ? <FixtureItem {...set} key={set.id}/> : null
        )}
        {loaded ?? games.map()}
      </div>
    </div>
  );
};

export default Session;
