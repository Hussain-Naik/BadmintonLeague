import React, { useEffect, useState } from "react";
import FixtureItem from "../../components/FixtureItem";
import Leaderboard from "./Leaderboard";
import { axiosReq } from "../../api/axiosDefaults";
import { setSessionLeaderboard } from "../../utils/utils";
import MatchItem from "../../components/MatchItem";

const Session = () => {
  const session = JSON.parse(localStorage.getItem("leagueSessionToken"));
  const [fixtures, setFixtures] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [ready, setReady] = useState(false);
  const [leaderboards, setLeaderboards] = useState(
    JSON.parse(localStorage.getItem("sessionLeaderboard"))
  );
  const [games, setGames] = useState([]);

  const handleMount = async () => {
    try {
      var { data } = await axiosReq.get(`/exec?sheetname=FIXTURES&q=${session.title}${session.count}&f=fixture_api`);
      setFixtures(data.data);
      var { data } = await axiosReq.get(`/exec?sheetname=PLAYERS&q=${session.id}&f=session`);
      setLeaderboards(data);
      setSessionLeaderboard(data);
      var { data } = await axiosReq.get(`/exec?sheetname=MATCH&q=${session.id}&f=session`);
      data.data.map((match, index) => {
        if (index % 4 === 0) {
          const matches = data.data.filter((item) => item.name === match.name);
          setGames((prevState) => [...prevState, matches]);
        }
      });
      setLoaded(true);
      setReady(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  useEffect(() => {
    if (loaded) {
      const score = [...leaderboards?.data];
      const newgList = [...games];
      score.map((item) => {
        const count = newgList
          .flat()
          .filter(
            (gameF) => gameF.player === item.player && gameF.win === 1
          ).length;
        item.leaderboard = count;
      });
      setLeaderboards({ ...leaderboards, data: score });
    }
  }, [games]);

  return (
    <div>
      <div className="grid">
        {ready ? <Leaderboard {...leaderboards} />:<Leaderboard />}
        
        {ready
          ? fixtures.map((set, index) =>
              index === games.length % fixtures.length ? (
                <FixtureItem
                  props={set}
                  setGames={setGames}
                  loaded={loaded}
                  setLoaded={setLoaded}
                  games={games}
                  key={set.id}
                />
              ) : null
            )
          : null}

        {games.map((game, index) => (
          <MatchItem {...game} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Session;
