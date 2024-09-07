import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { axiosReq } from "../../api/axiosDefaults";

const CreateLeague = ({ visible, setVisible }) => {
  const [iName, setIName] = useState("");

  const handleSubmit = async () => {
    const postObject = {
      1: { sheetname: "LEAGUE", name: iName }
    };
    const jObj = JSON.stringify(postObject);
    try {
      const post = await axiosReq.post(`/exec?post=${jObj}`);
      setVisible(!visible);
      console.log(post.data.data)
      // add naviagte to league and setleaguecontent for newly created leagues
    } catch (error) {}
  };

  const handleChange = (event) => {
    setIName(event.target.value);
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
            <div className="inline-flex flex-column gap-2">
              <FloatLabel>
                <InputText
                  value={iName}
                  onChange={handleChange}
                  label="Name"
                  name="name"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50"
                ></InputText>
                <label
                  htmlFor="name"
                  className="text-primary-50 font-semibold capitalize"
                >
                  League Name
                </label>
              </FloatLabel>
            </div>
            <div className="flex align-items-center gap-2">
              <Button
                label="Submit"
                onClick={() => handleSubmit()}
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

export default CreateLeague;
