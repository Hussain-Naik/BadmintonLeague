import React, { useEffect, useState } from "react";
import { useSessionContext } from "../../context/SessionContext";
import { Calendar } from "primereact/calendar";
import { MultiSelect } from "primereact/multiselect";
import { ListBox } from "primereact/listbox";
import { Chips } from "primereact/chips";
import { Button } from "primereact/button";

const SessionSettings = (props) => {
  const [players, setPlayers] = useState([]);
  const [value, setValue] = useState([]);
  const { sessionContext, setSessionContext } = useSessionContext();
  const [date, setDate] = useState(sessionContext?.date);
  const [selectedCities, setSelectedCities] = useState(null);
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

  const handleMount = () => {
    console.log(sessionContext?.date);
    setDate(sessionContext?.date);
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="flex-auto">
      <label htmlFor="buttondisplay" className="font-bold block mb-2">
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
      <ListBox
        multiple
        value={selectedCities}
        onChange={(e) => setSelectedCities(e.value)}
        options={selectedCities}
        optionLabel="name"
        itemTemplate={itemTemplate}
        className="w-full"
      />

      <MultiSelect
        value={selectedCities}
        onChange={(e) => setSelectedCities(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select Cities"
        maxSelectedLabels={3}
        className="w-full"
      />
      <Chips
        value={value}
        onChange={(e) => setValue(e.value)}
        separator=","
        className="w-full"
        pt={{container: {className:"w-full"}}}
      />
      {/* <div className="p-inputgroup flex-1">
        <InputText
          value={input}
          onChange={(e) => setInput(e.value)}
          label="Name"
          name="name"
          placeholder="New Player"
          className="w-full"
        />
        setSelectedCities([...selectedCities, {name: input, code: 1}])
        <Button icon="pi pi-user-plus" onClick={(e) => {console.log(input);}} />
      </div> */}
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
