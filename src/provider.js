import { useState, createContext } from "react";

export const globalContext = createContext();

const useGlobalContext = () => {
  const [qr, setQr] = useState("álkhdkshdkasjh");
  
  return <globalContext.Provider value={{ qr, setQr }}></globalContext.Provider>;
};

export default useGlobalContext;
