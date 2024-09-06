import React from "react";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "../../context/SessionContext";
import { setSessionToken } from "../../utils/utils";

const SessionItems = (props) => {
  const { id, date, player_count, game_type, player_type } = props;
  const sessionObject = { title: `${player_type} ${game_type}`, name: date, count: player_count, id: id };
  const { sessionContext, setSessionContext } = useSessionContext();
  const navigate = useNavigate();


  const handleClick = () => {
    setSessionContext(sessionObject.name);
    setSessionToken(sessionObject.name)
    navigate("/session/");
  };

  return (
    <div className="col-12 lg:col-6" onClick={handleClick}>
      <CardItem {...sessionObject} />
    </div>
  );
};

export default SessionItems;
