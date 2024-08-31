import React from "react";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import { useLeagueContext } from "../../context/LeagueContext";

const LeagueItems = () => {
  // const { id, name, count } = props
  const navigate = useNavigate();
  const leagueObject = { title: "League", name: "League1", count: 4 };
  const { leagueContext, setLeagueContext } = useLeagueContext();

  const handleClick = () => {
    setLeagueContext(leagueObject.name);
    navigate("league/");
  };

  return (
    <div className="col-12 lg:col-6" onClick={handleClick}>
      <CardItem {...leagueObject} />
    </div>
  );
};

export default LeagueItems;
