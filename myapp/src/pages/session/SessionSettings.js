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
  const [seedArray, setSeedArray] = useState([]);
  const [ready, setReady] = useState(false);
  const [reqMet, setReqMet] = useState(selectedPlayers.length >= minReq);
  const emptyList = [{ name: "No Players Selected", code: "NY" }];

  const itemTemplate = (option) => {
    return (
      <div className="flex justify-content-between align-items-center">
        <div className="flex justify-content-between align-items-center gap-3">
          <div onClick={() => updateSeed(option)}>{option.seed}</div>
          <div>{option.name}</div>
        </div>
        <div>
          <i
            className="pi pi-user-minus"
            onClick={() => updatePlayerList(option)}
          ></i>
        </div>
      </div>
    );
  };

  const addNewPlayer = (e) => {
    setSelectedPlayers([
      ...selectedPlayers,
      { name: e.value, code: null, seed: selectedPlayers.length + 1 },
    ]);
  };

  const addPlayer = (e) => {
    const addedPlayer = e.value.filter((person) => person.seed === 0);
    const updatedList = players.map((person) => {
      if (person.name !== addedPlayer[0].name) {
        return person;
      } else {
        return {
          ...person,
          seed: selectedPlayers.length + 1,
        };
      }
    });
    setPlayers(updatedList);
    setSelectedPlayers([
      ...selectedPlayers,
      { ...addedPlayer[0], seed: selectedPlayers.length + 1 },
    ]);
  };

  const updateSeed = (option) => {
    const updatedList = selectedPlayers.map((person) => {
      if (person.name !== option.name) {
        return person;
      } else {
        if (person.seed + 1 > selectedPlayers.length) {
          return {
            ...person,
            seed: 1,
          };
        } else {
          return {
            ...person,
            seed: person.seed + 1,
          };
        }
      }
    });
    setSelectedPlayers(updatedList);
  };

  const updatePlayerList = (option) => {
    const updatedList = selectedPlayers.filter(
      (person) => person.name !== option.name
    );
    setSelectedPlayers(updatedList);
    const newPeople = updatedList.filter((person) => person.code === null);
    const chipArray = newPeople.map((item) => item.name);
    setValue(chipArray);
  };

  const removeNewPlayer = (e) => {
    const newPeople = selectedPlayers.filter(
      (person) => person.name !== e.value
    );
    setSelectedPlayers(newPeople);
  };

  const autoSeed = () => {
    const autoAssign = selectedPlayers.map((el, index) => {
      return { ...el, seed: index + 1 };
    });
    setSelectedPlayers(autoAssign);
  };

  const handleMount = () => {
    setDate(sessionContext?.date);
    setPlayers([
      { name: "New York", code: "NY", seed: 0 },
      { name: "Rome", code: "RM", seed: 0 },
      { name: "London", code: "LDN", seed: 0 },
      { name: "Istanbul", code: "IST", seed: 0 },
      { name: "Paris", code: "PRS", seed: 0 },
    ]);
  };

  useEffect(() => {
    handleMount();
  }, []);

  useEffect(() => {
    setReqMet(selectedPlayers.length >= minReq);
    setReady(false);
    const array = selectedPlayers.map((item) => item.seed);
    setSeedArray(array);
  }, [selectedPlayers]);

  useEffect(() => {
    if (new Set(seedArray).size !== seedArray.length) {
      setReady(false);
    } else {
      if (seedArray.includes(0)) {
        setReady(false);
      } else {
        setReady(true);
      }
    }
  }, [seedArray]);

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
      <FloatLabel className="mt-4 w-full">
        <MultiSelect
          value={selectedPlayers}
          onChange={(e) => addPlayer(e)}
          options={players}
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
      {selectedPlayers.length > 0 ? (
        <ListBox
          multiple
          value={selectedPlayers}
          onChange={() => null}
          options={selectedPlayers}
          optionLabel="name"
          itemTemplate={itemTemplate}
          className="w-full mt-2"
          pt={{ list: { className: "p-0" } }}
        />
      ) : (
        <ListBox
          disabled
          options={emptyList}
          optionLabel="name"
          className="w-full mt-2"
          pt={{ list: { className: "p-0" } }}
        />
      )}
      <div className="mt-2 w-12 flex flex-column justify-content-center">
        {selectedPlayers.length > 0 ? (
          <Button
            label="Assign Player Numbers"
            severity="secondary"
            text
            raised
            className="hover:bg-gray-600"
            onClick={autoSeed}
          />
        ) : null}

        {reqMet && ready ? (
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
