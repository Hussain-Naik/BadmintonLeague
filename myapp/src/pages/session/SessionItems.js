import React from "react";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
import { useSessionContext } from "../../context/SessionContext";
import { setSessionToken } from "../../utils/utils";

const SessionItems = () => {
  // const { id, name, count } = props
  const navigate = useNavigate();
  const sessionObject = { title: "Session", name: "01/01/2024", count: 4 };
  const { sessionContext, setSessionContext } = useSessionContext();

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
