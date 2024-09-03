import { createContext, useContext, useEffect, useState } from "react";

export const LeagueContext = createContext();

export const useLeagueContext = () => useContext(LeagueContext);

export const LeagueContextProvider = ({ children }) => {
  const [leagueContext, setLeagueContext] = useState(null);

  const handleMount = () => {
    try {
      const data = JSON.parse(localStorage.getItem('leagueToken'))
      setLeagueContext(data);
    } catch (err) {
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <LeagueContext.Provider value={{ leagueContext, setLeagueContext }}>
      {children}
    </LeagueContext.Provider>
  );
};
