import React, { useEffect, useState } from "react";
import { useSessionContext } from "../../context/SessionContext";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { ListBox } from "primereact/listbox";
import { Chips } from "primereact/chips";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";
import { FloatLabel } from "primereact/floatlabel";

const SessionSettings = (props) => {
  const [players, setPlayers] = useState([]);
  const [value, setValue] = useState([]);
  const [minReq, setMinReq] = useState(4);
  const [playerType, setPlayerType] = useState("DOUBLES");
  const [playerTypeChecked, setPlayerTypeChecked] = useState(false);
  const [gameType, setGameType] = useState("ROUND ROBIN");
  const [gameTypeChecked, setGameTypeChecked] = useState(false);
  const { sessionContext, setSessionContext } = useSessionContext();
  const [date, setDate] = useState(sessionContext?.date);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [reqMet, setReqMet] = useState(selectedPlayers.length >= minReq);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const itemTemplate = (option) => {
    return (
      <div className="flex justify-content-between align-items-center">
        <div>{option.name}</div>
        <div className="flex justify-content-between align-items-center gap-3">
          <div>{option.code}</div>
          <i className="pi pi-user-minus"></i>
        </div>
      </div>
    );
  };

  const addNewPlayer = (e) => {
    setSelectedPlayers([...selectedPlayers, { name: e.value, code: 0 }]);
  };

  const removeNewPlayer = (e) => {
    const newPeople = selectedPlayers.filter(
      (person) => person.name !== e.value
    );
    setSelectedPlayers(newPeople);
  };

  const updateNewPlayer = (e) => {
    setSelectedPlayers(e.value);
    const newPeople = e.value.filter((person) => person.code === 0);
    const chipArray = newPeople.map((item) => item.name);
    setValue(chipArray);
  };

  const handleMount = () => {
    setDate(sessionContext?.date);
  };

  useEffect(() => {
    handleMount();
  }, []);

  useEffect(() => {
    setReqMet(selectedPlayers.length >= minReq);
  }, [selectedPlayers]);

  useEffect(() => {
    if (gameTypeChecked) {
      if (playerTypeChecked) {
        setMinReq(8);
      } else {
        setMinReq(16);
      }
    } else {
      if (playerTypeChecked) {
        setMinReq(2);
      } else {
        setMinReq(4);
      }
    }
  }, [gameTypeChecked, playerTypeChecked]);

  return (
    <div className="flex-auto">
      <label htmlFor="calendar" className="font-bold block mb-2">
        Session Date/Time
      </label>

      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        dateFormat="dd/mm/yy"
        showIcon
        showTime
        hourFormat="24"
        locale="en"
        icon={() => <i className="pi pi-pencil" />}
        pt={{ panel: { className: "w-12" } }}
        className="w-12 mb-2"
      />
      <ToggleButton
        onLabel="Singles"
        offLabel="Doubles"
        onIcon="pi pi-user"
        offIcon="pi pi-users"
        checked={playerTypeChecked}
        onChange={(e) => setPlayerTypeChecked(e.value)}
        className="w-6"
      />
      <ToggleButton
        onLabel="Tournament"
        offLabel="Round Robin"
        onIcon="pi pi-trophy"
        offIcon="pi pi-bars"
        checked={gameTypeChecked}
        onChange={(e) => setGameTypeChecked(e.value)}
        className="w-6"
      />
      <label htmlFor="playerList" className="text-xs block mb-2">
        Player List
      </label>
      <ListBox
        multiple
        value={selectedPlayers}
        onChange={(e) => updateNewPlayer(e)}
        options={selectedPlayers}
        optionLabel="name"
        itemTemplate={itemTemplate}
        className="w-full"
        pt={{ list: { className: "p-0" } }}
      />
      <FloatLabel className="mt-4 w-full">
        <MultiSelect
          value={selectedPlayers}
          onChange={(e) => setSelectedPlayers(e.value)}
          options={cities}
          optionLabel="name"
          maxSelectedLabels={3}
          className="w-full"
        />
        <label htmlFor="ms-players">Existing Players</label>
      </FloatLabel>
      <FloatLabel className="mt-4 w-full">
        <Chips
          value={value}
          onChange={(e) => setValue(e.value)}
          onAdd={(e) => addNewPlayer(e)}
          onRemove={(e) => removeNewPlayer(e)}
          className="w-full"
          pt={{ container: { className: "w-full" } }}
        />
        <label htmlFor="new-players">Enter New Players</label>
      </FloatLabel>
      <div className="mt-2 w-12 flex justify-content-center">
        {reqMet ? (
          <Button
            label="Start Session"
            severity="secondary"
            text
            raised
            className="hover:bg-gray-600"
          />
        ) : (
          <Button
            label={`${selectedPlayers.length} / ${minReq}`}
            severity="secondary"
            disabled
            text
            raised
            className="hover:bg-gray-600"
          />
        )}
      </div>
    </div>
  );
};

export default SessionSettings;
