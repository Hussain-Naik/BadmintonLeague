import React, { useEffect, useState } from "react";
import { useSessionContext } from "../../context/SessionContext";
import { Calendar } from "primereact/calendar";

const SessionSettings = (props) => {
  const [players, setPlayers] = useState([]);
  const { sessionContext, setSessionContext } = useSessionContext();
  const [date, setDate] = useState(sessionContext?.date);

  const handleMount = () => {
    console.log(sessionContext?.date)
    setDate(sessionContext?.date)
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="flex-auto">
      <label htmlFor="buttondisplay" className="font-bold block mb-2">
        Icon Template
      </label>

      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        showIcon
        showTime
        hourFormat="24"
        locale="en"
        icon={() => <i className="pi pi-pencil" />}
        pt={{ panel: { className: "w-12" } }}
        className="w-12"
      />
    </div>
  );
};

export default SessionSettings;
