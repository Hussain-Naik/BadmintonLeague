import React, { useEffect, useState } from "react";
import MatchItem from "../../components/MatchItem";
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
          index === 1 ? <MatchItem {...set} /> : null
        )}
      </div>
    </div>
  );
};

export default Session;
