import React, { useEffect, useState } from "react";
import { Toolbar } from "primereact/toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { reloadLeague, reloadSession } from "../utils/utils";
import CreateSession from "../pages/session/CreateSession";
import CreateLeague from "../pages/league/CreateLeague";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const reload = async () => {
      if (reloadLeague()) {
        if (reloadSession()) {
          setUrl("/session/");
        } else {
          setUrl("/league/");
        }
      } else {
        setUrl(null);
      }
    };
    reload();
  }, []);
  const buttons = (
    <>
      <button
        onClick={() => setVisible(true)}
        className="p-link inline-flex justify-content-center align-items-center text-white h-2rem w-2rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"
      >
        <i className="pi pi-plus text-2xl"></i>
      </button>
      {url ? (
        <button
          onClick={() => navigate(url)}
          className="p-link inline-flex justify-content-center align-items-center text-white h-2rem w-2rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"
        >
          <i className="pi pi-cloud-download text-2xl"></i>
        </button>
      ) : null}
    </>
  );

  const centerContent = (
    <div className="flex flex-wrap align-items-center gap-3">
      <button
        onClick={() => navigate("/")}
        className="p-link inline-flex justify-content-center align-items-center text-white h-2rem w-2rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200"
      >
        <i className="pi pi-home text-2xl"></i>
      </button>
      {location.pathname.includes("/session/") ? null : buttons}
    </div>
  );

  const addBUtton =
    location.pathname === "/" ? (
      <CreateLeague visible={visible} setVisible={setVisible} />
    ) : (
      <CreateSession visible={visible} setVisible={setVisible} />
    );

  return (
    <div className="card sticky bottom-0">
      <Toolbar
        center={centerContent}
        className="bg-gray-900 shadow-2 p-2 my-1"
        style={{
          borderRadius: "3rem",
          backgroundImage:
            "linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))",
        }}
      />
      {addBUtton}
    </div>
  );
};

export default Footer;
