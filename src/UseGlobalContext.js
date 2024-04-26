import { useState, createContext } from "react";

export const globalContext = createContext();

const UseGlobalContext = ({ children }) => {
  const [qr, setQr] = useState("álkhdkshdkasjh");

  const val = { qr };
  return <globalContext.Provider value={val}>{children}</globalContext.Provider>;
};

export default UseGlobalContext;
