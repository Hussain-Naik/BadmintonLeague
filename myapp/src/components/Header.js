import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumb } from "primereact/breadcrumb";
import { reloadLeague } from "../utils/utils";

const Header = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const path = async () => {
      if (location.pathname.startsWith("/league/")) {
        setItems([{ label: "League" }]);
        setVisible(true);
      } else if (location.pathname.startsWith("/session/")) {
        setItems([
          { label: "League", url: "/BadmintonLeague/league/" },
          { label: "Session" },
        ]);
        setVisible(true);
      } else {
        setItems([]);
      }
    };
    path();
  }, [location]);
  const home = { icon: "pi pi-home", url: "/BadmintonLeague/" };
  return (
    <header className="col-12 md:col-6 m-auto p-0">
      <h1 className="text-center">Badminton League</h1>
      {visible ? (
        <BreadCrumb model={items} home={home} className="border-none px-1" />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
