import React from "react";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import { useLeagueContext } from "../../context/LeagueContext";
import { setLeagueToken } from "../../utils/utils";
import { axiosAPI, axiosReq } from "../../api/axiosDefaults";

const LeagueItems = (props) => {
  const { id, name } = props;
  const navigate = useNavigate();
  const leagueObject = { title: "League", name: name, count: 4, id: id };
  const { leagueContext, setLeagueContext } = useLeagueContext();

  const handleClick = async () => {
    try {
      const { post } = await axiosAPI.post(`/exec?e=SESSIONS&q=${id}&f=league`);
      setLeagueContext(leagueObject);
      setLeagueToken(leagueObject);
      navigate("league/");
    } catch (error) {}
  };

  return (
    <div className="col-12 lg:col-6" onClick={handleClick}>
      <CardItem {...leagueObject} />
    </div>
  );
};

export default LeagueItems;
