import React from "react";
import { useSessionContext } from "../../context/SessionContext";

const Session = () => {
  const { sessionContext, setSessionContext } = useSessionContext();
  return (
    <div>
      <p>Session details {sessionContext}</p>
      <div className="flex flex-row justify-content-between py-2">
        <p>new match</p>
      </div>
      <div className="grid">
        <p>match lists</p>
      </div>
    </div>
  );
};

export default Session;
