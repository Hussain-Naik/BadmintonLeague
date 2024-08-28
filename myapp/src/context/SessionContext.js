import { createContext, useContext, useState } from "react";

export const SessionContext = createContext();

export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider = ({ children }) => {
  const [sessionContext, setSessionContext] = useState(null);

  return (
    <SessionContext.Provider value={{sessionContext, setSessionContext}}>
        {children}
    </SessionContext.Provider>
  );
};