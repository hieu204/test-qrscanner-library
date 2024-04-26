import React, {useContext} from 'react';
import { globalContext } from './UseGlobalContext';
import Scanqr from './Scanqr';

function App() {
  const { qr, setQr } = useContext(globalContext);
  return (
    <div className="App">
      <Scanqr />
      {qr} 
    </div>
  );
}

export default App;
