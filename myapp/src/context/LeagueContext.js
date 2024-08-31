import { createContext, useContext, useState } from "react";

export const LeagueContext = createContext();

export const useLeagueContext = () => useContext(LeagueContext);

export const LeagueContextProvider = ({ children }) => {
  const [leagueContext, setLeagueContext] = useState(null);

  return (
    <LeagueContext.Provider value={{ leagueContext, setLeagueContext }}>
      {children}
    </LeagueContext.Provider>
  );
};
