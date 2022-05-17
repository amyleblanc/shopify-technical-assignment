import React, { useState, useContext, createContext } from "react";

const HistoryContext = createContext();

export const useHistoryContext = () => useContext(HistoryContext);

export const HistoryProvider = props => {
  const [history, setHistory] = useState([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {props.children}
    </HistoryContext.Provider>
  );
};