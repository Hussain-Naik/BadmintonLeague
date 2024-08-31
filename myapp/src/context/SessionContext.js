import { createContext, useContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider = ({ children }) => {
  const [sessionContext, setSessionContext] = useState(null);
  
  const handleMount = () => {
    try {
      const data = localStorage.getItem('leagueSessionToken')
      setSessionContext(data);
    } catch (err) {
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <SessionContext.Provider value={{ sessionContext, setSessionContext }}>
      {children}
    </SessionContext.Provider>
  );
};
