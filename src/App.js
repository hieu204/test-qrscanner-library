import React, {useContext} from 'react';
import { globalContext } from './provider';
import Scanqr from './Scanqr';

function App() {
  const { qr, setQr } = useContext(globalContext);
  console.log(qr);
  return (
    <div className="App">
      <table></table>
      <Scanqr />      
    </div>
  );
}

export default App;
