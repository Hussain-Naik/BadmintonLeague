import React from "react";
import { useSessionContext } from "../../context/SessionContext";

const Session = () => {
  const { sessionContext, setSessionContext } = useSessionContext();
  return (
    <div>
      <p>Session details {sessionContext}</p>
    </div>
  );
};

export default Session;
