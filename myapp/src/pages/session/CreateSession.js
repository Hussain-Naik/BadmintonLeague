import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { useSessionContext } from "../../context/SessionContext";
import { setSessionToken } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const CreateSession = ({ visible, setVisible }) => {
  const [date, setDate] = useState(null);
  const { sessionContext, setSessionContext } = useSessionContext();
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.value.toLocaleDateString())
    setDate(e.value);
    setSessionToken(e.value);
    setSessionContext(date);
  };

  return (
    <div>
      <Dialog
        visible={visible}
        modal
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        content={({ hide }) => (
          <div
            className="flex flex-column px-8 py-5 gap-4"
            style={{
              borderRadius: "12px",
              backgroundImage:
                "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
            }}
          >
            <div className="card flex justify-content-center">
              <Calendar
                value={date}
                onChange={(e) => handleClick(e)}
                inline
                showTime
                hourFormat="24"
                locale="en"
                pt={{ panel: { className: "w-10" } }}
              />
            </div>
            <div className="flex align-items-center gap-2">
              <Button
                label="Submit"
                onClick={() => {
                  setSessionContext(date)
                  setVisible(!visible);
                  navigate("/session/create/");
                }}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
              <Button
                label="Cancel"
                onClick={(e) => hide(e)}
                text
                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
            </div>
          </div>
        )}
      ></Dialog>
    </div>
  );
};

export default CreateSession;
