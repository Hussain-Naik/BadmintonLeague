import React, { useEffect, useState } from "react";
import { useSessionContext } from "../../context/SessionContext";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { ListBox } from "primereact/listbox";
import { Chips } from "primereact/chips";
import { Button } from "primereact/button";
import { ToggleButton } from "primereact/togglebutton";

const SessionSettings = (props) => {
  const [players, setPlayers] = useState([]);
  const [value, setValue] = useState([]);
  const [minReq, setMinReq] = useState(2);
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
        <i className="pi pi-user-minus"></i>
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
        className="w-12"
      />
      <label htmlFor="playerList" className="font-bold block mb-2">
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
      />
      <ToggleButton
        onLabel="Singles"
        offLabel="Doubles"
        onIcon="pi pi-user"
        offIcon="pi pi-users"
        checked={playerTypeChecked}
        onChange={(e) => setPlayerTypeChecked(e.value)}
        className="w-9rem"
      />
      <ToggleButton
        onLabel="Tournament"
        offLabel="Round Robin"
        onIcon="pi pi-trophy"
        offIcon="pi pi-bars"
        checked={gameTypeChecked}
        onChange={(e) => setGameTypeChecked(e.value)}
        className="w-9rem"
      />
      <label htmlFor="playerSelection" className="font-bold block mb-2">
        Existing Players
      </label>
      <MultiSelect
        value={selectedPlayers}
        onChange={(e) => setSelectedPlayers(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select Cities"
        maxSelectedLabels={3}
        className="w-full"
      />
      <label htmlFor="newPlayers" className="font-bold block mb-2">
        Add New Player
      </label>
      <Chips
        value={value}
        onChange={(e) => setValue(e.value)}
        onAdd={(e) => addNewPlayer(e)}
        onRemove={(e) => removeNewPlayer(e)}
        className="w-full"
        pt={{ container: { className: "w-full" } }}
      />
      <Button
        label="Cancel"
        onClick={(e) => console.log(value)}
        text
        className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
      ></Button>
    </div>
  );
};

export default SessionSettings;
