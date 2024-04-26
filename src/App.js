import React, { useContext } from "react";
import { globalContext } from "./UseGlobalContext";
import Scanqr from "./components/Scanqr";
import ReactBarcodeScanner from "./components/ReactBarcodeScanner";

function App() {
  return (
    <div className="App">
      <Scanqr />
    </div>
  );
}

export default App;
