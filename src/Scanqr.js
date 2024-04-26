import React from "react";
import QrReader from "react-weblineindia-qrcode-scanner";

const Scanqr = () => {
  const handleScan = (data) => {
    if (data) {
      console.log("QR code data:", data);
    }
  };
  
  const handleError = err => {
    console.error(err);
  }

  return (
    <div>
      <h1>Scan QR</h1>
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
    </div>
  );
};

export default Scanqr;
