import React, { useEffect, useState } from "react";
import LeagueItems from "../league/LeagueItems";
import { axiosReq } from "../../api/axiosDefaults";

const Home = () => {

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get();
      console.log(data.data)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <div className="grid">
      <LeagueItems />
    </div>
  );
};

export default Home;
